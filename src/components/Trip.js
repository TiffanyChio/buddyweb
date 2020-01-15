import React, { Component } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import BuddyMarker from './BuddyMarker'
import './Trip.css';

const BASE_URL = 'https://buddy-api-ada.herokuapp.com';

class Trip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      destinationAddress: null,
      destinationLat: null,
      destinationLng: null,
      currentLat: null,
      currentLng: null,
      centerLat: null,
      centerLng: null,
      status: "ONGOING"
    };
  }

  intervalID;

  componentDidMount() {
    const {id} = this.props;

    axios.get(`${BASE_URL}/trips/${ id }`)
      .then((response) => {
        const centerLat = (response.data["destination_latitude"] + response.data["current_latitude"])/2;
        const centerLng = (response.data["destination_longitude"] + response.data["current_longitude"])/2
        let convertedStatus = "ONGOING";

        if (response.data["status"] === "COMPLETE") {
          convertedStatus = "ARRIVED";
        } else if (response.data["status"] === "CANCEL") {
          convertedStatus = "CANCELLED";
        } else if (response.data["status"] === "PANIC") {
          convertedStatus = "DANGER";
        }

        this.setState({
          id: id,
          destinationAddress: response.data["destination_address"],
          destinationLat: response.data["destination_latitude"],
          destinationLng: response.data["destination_longitude"],
          currentLat: response.data["current_latitude"],
          currentLng: response.data["current_longitude"],
          centerLat: centerLat,
          centerLng: centerLng,
          status: convertedStatus
        });

        // Time interval specified in ms
        // This is currently every 15s
        this.intervalID = setInterval(this.getData, 15000);
      })
      .catch((error) => {
        console.log("Error. Could not get API data at component mount: ", error.data);
      });
  }

  getData = () => {
    if (this.state.status !== "ONGOING") {
      clearInterval(this.intervalID);
      return;
    }

    axios.get(`${BASE_URL}/trips/${ this.state.id }`)
      .then((response) => {
        let convertedStatus = "ONGOING";

        if (response.data["status"] === "COMPLETE") {
          convertedStatus = "ARRIVED";
        } else if (response.data["status"] === "CANCEL") {
          convertedStatus = "CANCELLED";
        } else if (response.data["status"] === "PANIC") {
          convertedStatus = "DANGER";
        }

        this.setState({
          currentLat: response.data["current_latitude"],
          currentLng: response.data["current_longitude"],
          status: convertedStatus
        });
        console.log('Updated successfully ',  new Date().toLocaleString());
      })
      .catch((error) => {
        console.log("Error. Could not get API data to update at interval: ", error.data);
      });
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="main-container">
        <div className="heading-container">
          <div className="plug-container">
            <p className="plug-text"><span className="app-title">Buddy.</span> Never travel alone.</p>
          </div>
          <div className="status-container">
            <p className="heading-text status">Status:
              { this.state.status === "DANGER" ?
                <span className="heading-text danger-status"> { this.state.status }</span>
                :
                <span className="heading-text"> { this.state.status }</span>
              }
            </p>
          </div>
        </div>
        <div className="map-container loading-container">
          { this.state.id === null ?
            <p className="center-text">Loading...</p>
            :
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
              defaultCenter={[this.state.centerLat, this.state.centerLng]}
              defaultZoom={14}
            >
              <BuddyMarker
                lat={this.state.destinationLat}
                lng={this.state.destinationLng}
                text="D"
              />
              <BuddyMarker
                lat={this.state.currentLat}
                lng={this.state.currentLng}
                text="C"
              />
            </GoogleMapReact>
          }
        </div>
        <div className="body-container">
          <p className={"body-text center-text"}>Current Location: { this.state.currentLat + ", " + this.state.currentLng }</p>
          <p className={"body-text center-text"}>Destination: { this.state.destinationAddress }</p>
        </div>
      </div>
    );
  }

}

export default Trip;

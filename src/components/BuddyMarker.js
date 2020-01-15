import React, { Component } from 'react';

class BuddyMarker extends Component {
  render() {
    return (
       <div style={markerStyles}>
          {this.props.text === "D" ?
            <img src={require("../assets/pin.png")} alt="destination" />
            :
            <img src={require("../assets/user24px.png")} alt="user" />
          }
       </div>
    );
  }
}

const K_WIDTH = 40;
const K_HEIGHT = 40;

const markerStyles = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
};

export default BuddyMarker;

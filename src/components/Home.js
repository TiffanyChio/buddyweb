import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Home = () => {
  return(
    <div className="home">
      <div className="header">
        <div className="title">
          <h1>Buddy</h1>
          <h2>Inform your loved ones if you're in mortal peril.</h2>
        </div>
        <div className="enroll-container">
          <h2>Get Started</h2>
          <div className="form-container">
            <label for="exampleInputEmail1">Name</label>
            <input type="name" class="form-control" id="exampleInputName1" />
          </div>
          <div className="form-container">
            <label for="exampleInputEmail1">Email Address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" />
          </div>
          <div className="form-container">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button className="btn btn-primary join-button">Sign Up</button>
          <div className="download-container">
            <div className="download-buttons">
              <IconContext.Provider value={{ color: "black", size: "2.5em" }}>
                <FaApple />
              </IconContext.Provider>
              <p>Download on the App Store</p>
            </div>
            <div className="download-buttons">
              <IconContext.Provider value={{ color: "black", size: "2.5em" }}>
                <FaGooglePlay />
              </IconContext.Provider>
              <p>Download on Google Play</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card card-width">
          <div div className="img-container">
            <div className="fixed-img">
              <img className="card-img-top crop-img" src={require("../assets/PersonSMS.jpg")} alt="icon chat with friend" />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Invite friends to follow your trips.</h5>
            <p className="card-text">Send a link out to your contacts so that they can monitor your location in real time.</p>
          </div>
        </div>
        <div className="card card-width">
        <div div className="img-container">
            <div className="fixed-img">
              <img className="card-img-top crop-img" src={require("../assets/Danger.jpg")} alt="icon danger" />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Let contacts know that you're in danger with the press of a button.</h5>
            <p className="card-text">When you activate the panic button, an alert will be sent to your emergency contacts with your lcoation information. Unsaved contacts invited to monitor your trip will also see a change in your trip status from ONGOING to DANGER.</p>
          </div>
        </div>
        <div className="card card-width">
        <div div className="img-container">
            <div className="fixed-img">
              <img className="card-img-top crop-img" src={require("../assets/homepin.png")} alt="icon house with map pin" />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Send out alerts when you haven't checked-in to a saved location.</h5>
            <p className="card-text">You can designate check-in locations such as home, work, or school, and check-in time intervals. An alert will be sent to you emergency contacts if you haven't returned to a check-in location within your saved check-in time interval.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

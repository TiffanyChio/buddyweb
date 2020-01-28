# Buddy - Front-End Web Component
Buddy is a personal safety iOS app with three main features:
1. Users can invite friends to follow along on their trips using a web browser. Friends do not need to download the app! A URL link is sent out via a text message.
2. At the press of a button, the trip page will be updated with a danger status. Additionally emergency contacts saved to the app will get a text alert. 
3. The Check-In feature sends a text alert to emergency contacts if the user has not returned to a saved location (home, work, or school) within a designated time period. 

Users send a pre-drafted SMS within the app that contains the URL to a web page that allows friends to monitor the progress of the trip. This repository contains the code for the web component built with React. The [front-end mobile component](https://github.com/TiffanyChio/buddyapp) and [back-end API](https://github.com/TiffanyChio/buddyapi) will need to be installed and deployed for the App to work as intended.

![Image of Webpage](https://github.com/TiffanyChio/buddyweb/blob/master/src/assets/Example.png)

## Prerequisites
Buddy's trip-tracking webpages utilize Google Maps Javascript API. Obtain an API key [here](https://developers.google.com/maps/documentation/javascript/tutorial).

## Installation
Clone this repository and install project dependencies by running:

```sh
npm install
```

The Google Maps API key should be saved to a .env file at root directory of the cloned repository. Please verify that .env is included in the .gitignore file also located within the root directory. If the .gitignore file is missing .env then your API key may be compromised in the future. 

Change the BASE_URL found within src > components > trip.js. The URL should be the deployed URL of the back-end API.

```sh
const BASE_URL = 'YOUR BACK-END API URL HERE'
```

Upload to a web hosting platform of your choice. Buddy was hosted on Heroku. Verify that the Google Maps API key is a part of the deployed website's environment variables. If not, include it manually.

## Usage
The webpage URL are dynamically routed using [React Router](https://reacttraining.com/react-router/core/guides/philosophy), in which the number following the root URL is the trip ID.

The mobile app user's current location data is pulled from the back-end API every 10 seconds, until the trip status is either ARRIVED or CANCELLED. The frquency can be adjusted in the Trip.js component:

```sh
this.intervalID = setInterval(this.getData, 10000); //Time interval specified in ms, here it is 10s
```

The Home Component (root URL) is just a dummy visual. It is not intended to be functional in any capacity. 

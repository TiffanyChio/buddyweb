# Buddy - Front-End Web Component
Buddy is a personal safety iOS app with three main features:
1. Users can invite friends to follow along on their trips using a web browser. Friends do not need to download the app!
2. At the press of a button, the trip page will be updated with a danger status. Additionally emergency contacts saved to the app will get a text alert. 
3. The Check-In feature sends a text alert to emergency contacts if the user has not returned to a saved location (home, work, or school) within a designated time period. 

Users send a pre-drafted SMS within the app that contains the URL to a web page that allows friends to monitor the progress of the trip. This repository contains the code for the web component.

![Image of Webpage](https://github.com/TiffanyChio/buddyweb/blob/master/src/assets/Example.png)

## Installation
Clone this repository and run

```sh
npm install
```

Obtain a Google Maps Javascript API key [here](https://developers.google.com/maps/documentation/javascript/tutorial).

Install and deploy the corresponding back-end and mobile front-end component of the app. Change the BASE_URL found within src > components > trip.js

```sh
const BASE_URL = 'https://buddy-api-ada.herokuapp.com'
```

Upload to a web hosting platform of your choice. Buddy was hosted on Heroku.



const fetch = require("node-fetch");

//const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence"
const url = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400"

const getLocation = async url => {

  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.log(error);
  }
};



getLocation(url);

console.log('\n\n after get url')

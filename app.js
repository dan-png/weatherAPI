// Init Storage
const storage = new Storage();

const weatherLocation = storage.getLocationData();

// Init Weather Object
const weather = new Weather(weatherLocation.city);

// Init UI
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  // Change location
  weather.changeLocation(city);

  // Set location in ls
  storage.setLocationData(city);

  // Get and display weather
  getWeather();





  e.preventDefault();

});

// 

function getWeather() {
  weather.getWeather()
    .then(data => { ui.paint(data) })
    .catch(err => console.log(err))
}


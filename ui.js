class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humdity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.visibility = document.getElementById('w-visibility');
  }

  paint(weather) {
    console.log(weather)

    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} °C`;
    this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    this.humdity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} °C`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
    this.visibility.textContent = `Visibility: ${weather.visibility}`;
  }
}
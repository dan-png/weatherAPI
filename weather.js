class Weather {
  constructor(city) {
    this.apikey = config.SECRET_API_KEY;
    this.city = city;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apikey}`)
    const responseData = await response.json()

    return responseData;
  }

  // Change Weather Location
  changeLocation(city) {
    this.city = city;
  }

}
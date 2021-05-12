export const properties = {
  URL:
    "http://api.openweathermap.org/data/2.5/weather?q=Rome&appid=f320e4bbaa5a18a40061a6d07a60d25e",
  KEY: "f320e4bbaa5a18a40061a6d07a60d25e",
  urlBuilder: (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=f320e4bbaa5a18a40061a6d07a60d25e`;
  },
};

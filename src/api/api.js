import axios from "axios";

export const fetchCity = (cityName, setCityData) => {
  const apiKey = "4d8fb5b93d4af21d66a2948710284366";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios
    .get(url)
    .then((res) => {
      const { main, name, sys, weather } = res.data;
      const cityInfo = { main, name, sys, weather };
      setCityData(cityInfo);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

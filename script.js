function GetInfo() {
  const newName = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  const API_KEY = "Your_API_KEY";
  cityName.innerHTML = "--" + newName.value + "--";

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${newName.value}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
          "Min:" + Number(data.list[i].main.temp_min - 273.36).toFixed(1) + "°";
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML =
          "Max:" + Number(data.list[i].main.temp_max - 273.36).toFixed(1) + "°";
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
    })
    .catch((err) => alert("Something went wrong"));
}

function DefaultScreen() {
  document.getElementById("cityInput").defaultValue = "London";
  GetInfo();
}

const d = new Date();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursdsay",
  "Friday",
  "Saturday",
];

function checkDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = dayNames[checkDay(i)];
}

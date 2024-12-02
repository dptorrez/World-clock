function updateTime() {
//houston
let houstonElement = document.querySelector("#houston");
if (houstonElement) {
let houstonday = document.querySelector(".day");
let houstontime = houstonElement.querySelector(".time");
let houstonCurrentTime = moment();

houstonday.innerHTML = houstonCurrentTime.format("MMMM Do YYYY");
houstontime.innerHTML = `${houstonCurrentTime.format("h:mm:ss")}<small>${houstonCurrentTime.format("A")}</small>`;
}

//sydney
let sydneyElement = document.querySelector("#sydney");
if (sydneyElement) {
let sydneyday = sydneyElement.querySelector(".day");
let sydneytime = sydneyElement.querySelector(".time");
let sydneyCurrentTime = moment().tz("Australia/Sydney");

sydneyday.innerHTML = sydneyCurrentTime.format("MMMM Do YYYY");
sydneytime.innerHTML = `${sydneyCurrentTime.format("h:mm:ss")}<small>${sydneyCurrentTime.format("A")}</small>`;
}

};

setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#city-container");
    citiesElement.innerHTML = `
    <div class="cities">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>`;
  }




let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);


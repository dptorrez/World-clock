function updateTime() {
//houston
let houstonElement = document.querySelector("#houston");
let houstonday = document.querySelector(".day");
let houstontime = houstonElement.querySelector(".time");
let houstonCurrentTime = moment();

houstonday.innerHTML = houstonCurrentTime.format("MMMM Do YYYY");
houstontime.innerHTML = `${houstonCurrentTime.format("h:mm:ss")}<small>${houstonCurrentTime.format("A")}</small>`;

//sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyday = sydneyElement.querySelector(".day");
let sydneytime = sydneyElement.querySelector(".time");
let sydneyCurrentTime = moment().tz("Australia/Sydney");

sydneyday.innerHTML = sydneyCurrentTime.format("MMMM Do YYYY");
sydneytime.innerHTML = `${sydneyCurrentTime.format("h:mm:ss")}<small>${sydneyCurrentTime.format("A")}</small>`;

};

setInterval(updateTime, 1000);


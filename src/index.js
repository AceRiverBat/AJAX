// let monnaie = document.querySelector(".monnaie");

// const url = "https://www.blockchain.com/ticker";

// let ajax = new XMLHttpRequest();

// ajax.responseType = "json";

// function ajaxfunction() {
//   ajax.addEventListener("readystatechange", function () {
//     if (ajax.readyState === ajax.DONE) {
//       monnaie.innerHTML = ajax.response.EUR.last;
//       console.log(ajax.response.EUR); // Par défault une DOMString
//     }
//   })
//   ajax.open("GET", url);
//   ajax.send();
// };
// ajaxfunction();

// setInterval(ajaxfunction, 10000);

let meteo = document.querySelector(".meteo");
let temperature = document.querySelector(".temperature");
let choix = document.querySelector(".ville");
let ville = "Lyon";

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

let ajax = new XMLHttpRequest();

ajax.responseType = "json";

function ajaxfunction() {
  ajax.addEventListener("readystatechange", function () {
    if (ajax.readyState === ajax.DONE) {
      choix.innerHTML = ville;
      temperature.innerHTML = ajax.response.main.temp + " °C";
      meteo.innerHTML = ajax.response.weather[0].description;
    }
  });
  ajax.open("GET", url);
  ajax.send();
};
ajaxfunction();

setInterval(ajaxfunction, 10000);





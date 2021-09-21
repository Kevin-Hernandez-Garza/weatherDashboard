// current example for the city of Austin
// API : http://api.openweathermap.org/data/2.5/weather?q=austin&appid=cd996b1bf4e8105324a410b704c9079d&units=imperial

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&appid=cd996b1bf4e8105324a410b704c9079d

//http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial

var userFormEl = document.querySelector('#user-form');
var userInput = document.querySelector('#city-search');
var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&units=imperial&appid=cd996b1bf4e8105324a410b704c9079d";
// var apiURL2 = ;

// var apiURL2 = *** GRAB SECOND URL, EXCLUDE MINUTE, HOURLY, ALERTS ***
// *** FROM 1ST API GRAB THE LONGITUDE AND LATITUDE TO GET THE URL AS WELL ***

// city parameter added to the function
var getWeatherData = function (city) {
    // format the api url 
    var apiFetch = apiURL + city + apiKey;

    // make the request to the URL
    fetch(apiFetch).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

var submitHandler = function (event) {
    event.preventDefault();

    var cityName = userInput.value.trim();

    if (cityName) {
        getWeatherData(cityName);
        userInput.value = '';
    } else {
        alert('Please enter a valid city!');
    }

    console.log(event);
}


var displayData = function () {
    
}

userFormEl.addEventListener('submit', submitHandler);
// getWeatherData ("salem");
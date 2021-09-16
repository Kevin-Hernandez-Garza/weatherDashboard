// current example for the city of Austin
// API : http://api.openweathermap.org/data/2.5/weather?q=austin&appid=cd996b1bf4e8105324a410b704c9079d&units=imperial

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&appid=cd996b1bf4e8105324a410b704c9079d

//http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial

var cityName;


// city parameter added to the function
var getWeatherData = function (city) {
    // format the api url 
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=cd996b1bf4e8105324a410b704c9079d";

    // make the request to the URL
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getWeatherData ("");
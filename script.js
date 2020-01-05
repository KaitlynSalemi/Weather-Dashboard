$(document).ready(function(){
    var userInput = $("#search-field");

    function displayWeather(){
        var city = userInput.val(); 
        console.log(city)
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=c87290682d457051080f9f293666d377"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        });
    }


    $("#search-btn").on("click", function(event){
        event.preventDefault();
        userInput.val().trim();
        displayWeather();
    });

    userInput.keypress(function (event) {
        if (event.which === 13) {
            displayWeather();
        }
    });


});
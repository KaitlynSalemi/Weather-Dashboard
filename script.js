$(document).ready(function(){
    var userInput = $("#search-field");

    function displayWeather(){
        var city = userInput.val(); 
        console.log(city)
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
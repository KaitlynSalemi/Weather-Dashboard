$(document).ready(function(){
    var userInput = $("#search-field");
    var currentTitle = $(".current-title");
    var currentTemp = $("#current-temp");
    var currentHumidity = $("#current-humidity");
    var currentWindSpeed = $("#current-wind-speed");
    var currentUVI = $("#current-UVI");

    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var currentDate = (month < 10 ? '0' : '') + month + '/' +(day < 10 ? '0' : '') + day + '/' + d.getFullYear();

    var date1 = $(".date1");
    var date2 = $(".date2");
    var date3 = $(".date3");
    var date4 = $(".date4");
    var date5 = $(".date5");

    var icon1 = $("#icon1");
    var icon2 = $("#icon2");
    var icon3 = $("#icon3");
    var icon4 = $("#icon4");
    var icon5 = $("#icon5");

    var temp1 = $("#temp1");
    var temp2 = $("#temp2");
    var temp3 = $("#temp3");
    var temp4 = $("#temp4");
    var temp5 = $("#temp5");

    var humidity1 = $("#humidity1");
    var humidity2 = $("#humidity2");
    var humidity3 = $("#humidity3");
    var humidity4 = $("#humidity4");
    var humidity5 = $("#humidity5");

    var collection = $('.collection')

    // var storageItems = [];
    
    
    function currentConditions(){
        var city = userInput.val(); 
        // console.log(city)
        var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=c87290682d457051080f9f293666d377"
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var iconCode = response.weather[0].icon
            var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
            var iconImg = $("<img>").attr("src", iconURL);
            currentTitle.text((response.name)+" "+(currentDate));
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            var rounded = tempF.toFixed(1);
            currentTemp.text("Temperature: "+(rounded)+"°F");
            currentHumidity.text("Humidity: "+(response.main.humidity)+"%");
            currentWindSpeed.text("Wind Speed: "+(response.wind.speed)+" mph");
            currentTitle.append(iconImg);
        });

    }
    
    function fiveDayForecast(){
        var city = userInput.val(); 
        var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q="+ city +"&APPID=c87290682d457051080f9f293666d377"
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            date1.text((month < 10 ? '0' : '') + month + '/' +(day < 10 ? '0' : '') + (day+1) + '/' + d.getFullYear());
            date2.text((month < 10 ? '0' : '') + month + '/' +(day < 10 ? '0' : '') + (day+2) + '/' + d.getFullYear());
            date3.text((month < 10 ? '0' : '') + month + '/' +(day < 10 ? '0' : '') + (day+3) + '/' + d.getFullYear());
            date4.text((month < 10 ? '0' : '') + month + '/' +(day < 10 ? '0' : '') + (day+4) + '/' + d.getFullYear());
            date5.text((month < 10 ? '0' : '') + month + '/' +(day < 10 ? '0' : '') + (day+5) + '/' + d.getFullYear());
            
            var iconCode1 = response.list[0].weather[0].icon
            icon1.attr("src", "http://openweathermap.org/img/wn/"+iconCode1+"@2x.png");
            
            var iconCode2 = response.list[1].weather[0].icon
            icon2.attr("src", "http://openweathermap.org/img/wn/"+iconCode2+"@2x.png");
            
            var iconCode3 = response.list[2].weather[0].icon
            icon3.attr("src", "http://openweathermap.org/img/wn/"+iconCode3+"@2x.png");
            
            var iconCode4 = response.list[3].weather[0].icon
            icon4.attr("src", "http://openweathermap.org/img/wn/"+iconCode4+"@2x.png");
            
            var iconCode5 = response.list[4].weather[0].icon
            icon5.attr("src", "http://openweathermap.org/img/wn/"+iconCode5+"@2x.png");
            
            var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
            var rounded = tempF.toFixed(1);
            temp1.text("Temperature: "+(rounded)+"°F");
            
            var tempF = (response.list[1].main.temp - 273.15) * 1.80 + 32;
            var rounded = tempF.toFixed(1);
            temp2.text("Temperature: "+(rounded)+"°F");
            
            var tempF = (response.list[2].main.temp - 273.15) * 1.80 + 32;
            var rounded = tempF.toFixed(1);
            temp3.text("Temperature: "+(rounded)+"°F");
            
            var tempF = (response.list[3].main.temp - 273.15) * 1.80 + 32;
            var rounded = tempF.toFixed(1);
            temp4.text("Temperature: "+(rounded)+"°F");
            
            var tempF = (response.list[4].main.temp - 273.15) * 1.80 + 32;
            var rounded = tempF.toFixed(1);
            temp5.text("Temperature: "+(rounded)+"°F");
            
            humidity1.text("Humidity: "+(response.list[0].main.humidity)+"%");
            humidity2.text("Humidity: "+(response.list[1].main.humidity)+"%");
            humidity3.text("Humidity: "+(response.list[2].main.humidity)+"%");
            humidity4.text("Humidity: "+(response.list[3].main.humidity)+"%");
            humidity5.text("Humidity: "+(response.list[4].main.humidity)+"%");
            
        });
    }

    function searchHistory(){
        // const userSearches = JSON.parse(localStorage.getItem('items'))
        // for (let i = 0; i < storageItems.length; i++) {
        //     var item = $("<a>").text(userSearches);
        //     item.attr("class", "collection-item");
        //     collection.append(item)
        // }
        var city = userInput.val(); 
        var searches = $("<a>").text(city);
        searches.attr("class", "collection-item");
        collection.append(searches)
    }
    
    // function uvIndex(){
    //     var city = userInput.val();
    //     // var lon = 
    //     // var lat =
    //     var uviURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/uvi/weather?lat=" + lat + "&lon=" + lon
        
    //     $.ajax({
    //         url: uviURL,
    //         method: "GET"
    //     }).then(function(response) {
    //         console.log(response);
    //         currentUVI.text("UV Index: "+ (""));
    //     });
    // }
    
    $("#search-btn").on("click", function(event){
        event.preventDefault();
        userInput.val().trim();
        userInput.empty();
        currentConditions();
        fiveDayForecast();
        searchHistory();
        // uvIndex();
        
        // storageItems.push(userInput)
        // console.log(storageItems);
        
        // localStorage.setItem('items', JSON.stringify(storageItems))
    });

    userInput.keypress(function (event) {
        if (event.which === 13) {
            userInput.empty();
            currentConditions();
            fiveDayForecast();
            searchHistory()
            // uvIndex();

            // storageItems.push(userInput)
            // console.log(storageItems);
        
            // localStorage.setItem('items', JSON.stringify(storageItems))

        }
    });

    $(document).on("click", ".collection-item", function(event) {
        event.preventDefault();
        var city = $(this).val();
        console.log(city);

    });


});
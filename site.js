window.addEventListener('load', (geolocation) => {
    console.log('page is fully loaded');
  });

alert("Is it ok to get your current location?")

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }
  
  function displayLocationInfo(position) {
    var lng = position.coords.longitude;
    var lat = position.coords.latitude;
  
    weatherCall( lat,lng );
  }

    
   function weatherCall( lat,lng ) {
    
    var key = '576fa705731156cc8f55e39c9191c4d1';
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=' + key + '&units=imperial')  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function() {
        
    });
    }
    function drawWeather( data ) {
       
var y = data.weather[0].icon;
var iconSrc = 'http://openweathermap.org/img/wn/' + y + '@2x.png';
var wpic = 'url(' + y + '.jpeg';

document.getElementById('description').innerHTML = data.weather[0].description;
document.getElementById('temp').innerHTML = Math.round(data.main.temp) + '&deg;' + 'F';
document.getElementById('location').innerHTML = data.name;
document.getElementById('weatherid').innerHTML = '<img src=' + iconSrc + '>';
document.getElementById("weather").style.backgroundImage = wpic;
    }

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  
    weatherCallzip( x );

  }
    
   function weatherCallzip( x ) {
    
    var key = '576fa705731156cc8f55e39c9191c4d1';
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + x + '&appid=' + key + '&units=imperial')  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {
        drawWeatherzip(data);
    })
    .catch(function() {
        
    });
    }
    function drawWeatherzip( data ) {

        var y = data.weather[0].icon;
        var iconSrc = 'http://openweathermap.org/img/wn/' + y + '@2x.png';
        var wpic = 'url(' + y + '.jpeg';

        document.getElementById('description').innerHTML = data.weather[0].description;
        document.getElementById('temp').innerHTML = Math.round(data.main.temp) + '&deg;' + 'F';
        document.getElementById('location').innerHTML = data.name;
        document.getElementById('weatherid').innerHTML = '<img src=' + iconSrc + '>';
        document.getElementById("weather").style.backgroundImage = wpic;

}

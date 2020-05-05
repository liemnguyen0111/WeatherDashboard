// fetch("https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca", {
//   method: "GET",
//   headers: { 
//     Host: "weather-ydn-yql.media.yahoo.com",
//     "X-Yahoo-App-Id" : "WeatherDashboard",
//     Authorization : "OAuth",
//     oauth_consumer_key : "dj0yJmk9bUxVM1I3c0VRMTlRJmQ9WVdrOVRVMUZOVEZOTlRBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTQw",
//     oauth_signature_method : "HMAC-SHA1",
//     oauth_timestamp : "YOUR_TIMESTAMP",
//     oauth_nonce : "YOUR_NONCE",
//     oauth_version : "1.0",
//     oauth_signature : "YOUR_GENERATED_SIGNATURE",
//     "cache-control" : "no-cache"
// }
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
// 	console.log(err);
// });

// "oauth_consumer_key" : "dj0yJmk9bUxVM1I3c0VRMTlRJmQ9WVdrOVRVMUZOVEZOTlRBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTQw",
// "oauth_consumer_secret" : "187eb309226641edc46b46b46e159f58da29956a",

// var OAuth = require('oauth')
// var header = {
//     "X-Yahoo-App-Id": "WeatherDashboard"
// };
// var request = new OAuth.OAuth(
//     null,
//     null,
//     'dj0yJmk9bUxVM1I3c0VRMTlRJmQ9WVdrOVRVMUZOVEZOTlRBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTQw',
//     '187eb309226641edc46b46b46e159f58da29956a',
//     '1.0',
//     null,
//     'HMAC-SHA1',
//     null,
//     header
// );
// request.get(
//     'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
//     null,
//     null,
//     function (err, data, result) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data)
//         }
//     }
// );

let key = "482a4e3afc3eec8d25d4a69a32e36417"

$(this).on(`click`,event =>
	{
		if(event.target.innerHTML === `search`)
		{
			console.log("isclick")
			processEvent($("#autocomplete-input").val().replace(" ", "+") )
			$("#autocomplete-input").val(``) 
		}
	}
	)

$("#autocomplete-input").keyup(event =>
{
	// console.log(event.originalEvent.key)
	if(event.originalEvent.key === "Enter")
	{
		processEvent($("#autocomplete-input").val().replace(" ", "+") )
		$("#autocomplete-input").val(``) 
	}
}
)

let processEvent = (keySearch) =>
{
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${keySearch}&appid=${key}`)
.then(res=>res.json())
.then(data =>{
console.log(data)
if(data.cod === "404")
{
	console.log("Here")
	$("#weatherInfo").empty()
	$("#weatherInfo").append(`<p>${data.message}</p>`)
}
else
{
	
	let weatherInfo = document.createElement(`p`)
	weatherInfo.innerHTML = `
	<p>Location: ${data.name}, ${data.sys.country}</p>
	<p>Latitude: ${data.coord.lat}</p>
	<p>Longtitude: ${data.coord.lon}</p>
	</br>
	<p>Sky: ${data.weather[0].description}</p>
	<p>Wind speed: ${data.wind.speed}</p>
	<p>Feels like: ${data.main.feels_like}</p>
	<p>Humidity: ${data.main.humidity}</p>
	<p>Pressure: ${data.main.pressure}</p>
	<p>Temperature: ${Math.floor(data.main.temp - 273.15)}°C</p>
	<p>Temperature Min: ${Math.floor(data.main.temp_max - 273.15)}°C</p>
	<p>Temeprature Max: ${Math.floor(data.main.temp_min - 273.15)}°C</p>
	`
	$("#weatherInfo").empty()
	$("#weatherInfo").append(weatherInfo)

}
}).catch(err=>console.log(error))
}


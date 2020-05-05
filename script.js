let key = "482a4e3afc3eec8d25d4a69a32e36417"
let a

$(this).on(`click`,event =>
	{
		
		
		if(event.target.attributes.alt != undefined && 
			event.target.attributes.alt.value === "searchBtn" && 
			$("#autocomplete-input").val().length > 0 )
			{
				processCurrentWeather($("#autocomplete-input").val().replace(" ", "+") )
				$("#autocomplete-input").val(``) 
			}
		
	}
	)

$("#autocomplete-input").keyup(event =>
{
	// console.log(event.originalEvent.key)
	if(event.originalEvent.key === "Enter" && $("#autocomplete-input").val().length > 0)
	{
		processCurrentWeather($("#autocomplete-input").val().replace(" ", "+"))
		$("#autocomplete-input").val(``) 
	}
}
)

let processCurrentWeather = (keySearch) =>
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
	<p>Temperature Min: ${Math.floor(data.main.temp_min - 273.15)}°C</p>
	<p>Temeprature Max: ${Math.floor(data.main.temp_max - 273.15)}°C</p>
	`
	$("#weatherInfo").empty()
	$("#weatherInfo").append(weatherInfo)

}
processHourlyForecast(data,keySearch)
}).catch(err=>console.log(error))
}

let processHourlyForecast = (data,keyWord) =>
{
	fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&
	exclude=hourly,daily&appid=${key}`)
	.then(res=>res.json())
	.then(data =>{
	console.log(data)
	
	}).catch(err=>console.log(error))
}


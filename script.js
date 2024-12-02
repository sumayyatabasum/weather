const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
	// Default weather data for Gujarat on page load
	weatherFn('gujarat');
});

async function weatherFn(cName) {
	// Corrected string interpolation for the API URL
	const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data); // Show weather if request is successful
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	// Update the city name
	$('#city-name').text(data.name);

	// Update the date using Moment.js
	$('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

	// Update the temperature with °C symbol
	$('#temperature').html(`${data.main.temp}°C`);

	// Update the weather description
	$('#description').text(data.weather[0].description);

	// Update the wind speed
	$('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);

	// Update the weather icon using OpenWeatherMap icon API
	$('#weather-icon').attr(
		'src',
		`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
	);

	// Fade in the weather info section
	$('#weather-info').fadeIn();
}

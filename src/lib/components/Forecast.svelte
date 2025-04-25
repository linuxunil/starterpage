<script>
	import { PUBLIC_WEATHER_API_KEY } from '$env/static/public';
	import { onMount } from 'svelte';
	const { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed } = $props();
	// const part = $state(''); // Exclude parts of forecast with comma seperated list
	// values [current,minutely,hourly,daily, alerts]
	let forecast = $state();
	// let alerts = $state();
	// const state_abr = 'IN';
	// const zoneId = 'INZ081';
	// TODO: add URLSearchParams to build string.
	function weather_icon(id) {
		return `https://openweathermap.org/img/wn/${id}@2x.png`;
	}
	function weather_url(lat, long, units = 'Imperial') {
		return `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(3)}&lon=${long.toFixed(3)}&units=${units}&appid=${PUBLIC_WEATHER_API_KEY}`;
	}
	onMount(async () => {
		const response = await fetch(weather_url(latitude, longitude));
		forecast = await response.json();
	});
</script>

<div class="weather">
	{#if forecast}
		<p>{forecast.name}</p>
		<img
			src={weather_icon(forecast.weather[0].icon)}
			alt={`Weather icon for ${forecast.weather[0].description}`}
		/>
		<p>Temp: {forecast.main.temp}</p>
		<p>Weather: {forecast.weather[0].description}</p>
		<!-- <p>Forecast: {forecast.properties.periods[0].shortForecast}</p> -->
	{/if}
</div>

<style>
	.weather {
		background-color: rgb(189, 190, 191);
		width: 33%;
		min-width: 200px;
		color: black;
		padding: 5px;
		margin: 0.5rem;
		border-radius: var(--border-radius);
		display: flex;
		flex-flow: column wrap;
		align-content: space-around;
	}
</style>

<script>
	import { onMount } from 'svelte';
	let { position } = $props();
	let forecast = $state();

	onMount(async () => {
		const apiURL = `https://api.weather.gov/points/${position.latitude},${position.longitude}`;
		try {
			let response = await fetch(apiURL);
			let response_json = await response.json();
			response = await fetch(response_json.properties.forecast);
			forecast = await response.json();
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}
		} catch (error) {
			console.error(error.message);
		}
	});
</script>

<div class="weather">
	<!-- <p>Latitude: {position.latitude}</p> -->
	<!-- <p>Longitude: {position.longitude}</p> -->
	{#if forecast}
		<p>Forecast: {forecast.properties.periods[0].shortForecast}</p>
	{/if}
</div>

<style>
	.weather {
		background-color: rgb(189, 190, 191);
		width: 33%;
		color: black;
		padding: 5px;
		margin: 0.5rem;
		border-radius: var(--border-radius);
		display: flex;
		justify-content: flex-start;
	}
</style>

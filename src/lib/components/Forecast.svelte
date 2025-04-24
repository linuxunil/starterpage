<script>
	import { onMount } from 'svelte';
	let { position } = $props();
	let forecast = $state();
	let alerts = $state();
	const state_abr = 'IN';
	const zoneId = 'INZ081';

	onMount(async () => {
		const apiURL = `https://api.weather.gov/points/${position.latitude},${position.longitude}`;
		try {
			let response = await fetch(apiURL);
			let response_json = await response.json();
			let forecast_response = await fetch(response_json.properties.forecast);
			forecast = await forecast_response.json();
			let alerts_response = await fetch(`https://api.weather.gov/alerts/active/zone${zoneId}`);
			alerts = await alerts_response.josn();
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}
		} catch (error) {
			console.error(error.message);
		}
	});
</script>

<div class="weather">
	{#if forecast}
		<p>{forecast.properties.periods[0].name} {forecast.properties.periods[0].temperature}°</p>
		<p>
			Chance of rain {forecast.properties.periods[0].probabilityOfPrecipitation.value}%
		</p>
		{#if forecast.properties.periods[0].shortForecast.includes('Thunderstorm')}
			<p>
				<span class="material-symbols-outlined">thunderstorm</span>
			</p>
		{/if}

		{#if alerts}
			<h1>Alerts</h1>
			{#each alerts.features as alert (alert.id)}
				<p>{alert.headline}</p>
			{/each}
		{/if}
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

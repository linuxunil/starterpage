<script>
	// FIXME: This needs to have a +layout.svelte and be redesigned for mobile first.
	import { onMount } from 'svelte';
	import Bookmarks from '$lib/components/Bookmarks.svelte';
	import Search from '$lib/components/Search.svelte';
	import Forecast from '$lib/components/Forecast.svelte';

	// TODO: Add additional images that can produce, or associated with color schemes
	let src = 'https://prettycoffee.github.io/fluidity/assets/pic_2-ae471b04.jpg';
	//NOTE: Could add more search engines in the future.
	let search_term = $state('Duck Duck Go');
	let bookmarks = $state();
	let position = $state();

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}
	function success(pos) {
		position = pos.coords;
	}
	onMount(async () => {
		const resposne = await fetch('bookmarks.json');
		bookmarks = await resposne.json();
		navigator.geolocation.getCurrentPosition(success, error);
	});
</script>

<div class="container">
	<div class="showcase">
		<div class="right-column">
			{#if position}
				<Forecast {...position} />
			{/if}

			<!-- TODO: Add news or forcast weather under current conditions. Calendar or schedule? -->
			<div class="placeholder"></div>
		</div>
		<img {src} alt="I'm Fine" />

		<Bookmarks {bookmarks} />
	</div>
	<Search {search_term} />
</div>

<style>
	.right-column {
		display: flex;
		flex-direction: column;
	}
	.placeholder {
		height: 50%;
	}
	img {
		height: 400px;
		width: 400px;
		border: 2px solid var(--default-color);
		padding: 10px;
		margin: 10px;
		object-fit: cover;
		animation-name: circling-shadow;
		animation-duration: 4s;
		animation-iteration-count: infinite;
	}
	.showcase {
		display: flex;
		justify-content: center;
		background-color: var(--mocha-mousse);
		border-radius: var(--border-radius);
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
</style>

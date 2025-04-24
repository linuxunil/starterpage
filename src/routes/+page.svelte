<script>
	import { onMount } from 'svelte';
	import Bookmarks from '$lib/components/Bookmarks.svelte';
	import Search from '$lib/components/Search.svelte';
	import Forecast from '$lib/components/Forecast.svelte';
	let src = 'https://prettycoffee.github.io/fluidity/assets/pic_2-ae471b04.jpg';
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
		{#if position}
			<Forecast {position} />
		{/if}
		<img {src} alt="I'm Fine" />

		<Bookmarks {bookmarks} />
	</div>
	I really<i class="nf nf-fa-heart"></i> <i class="nf nf-custom-vim"></i>
	<Search {search_term} />
</div>

<style>
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
		border-radius: var(--border-radius);
		background-color: rgb(112, 81, 66);
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
</style>

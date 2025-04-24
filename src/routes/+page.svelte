<script>
	import { onMount } from 'svelte';
	import Bookmarks from '$lib/components/Bookmarks.svelte';
	import Search from '$lib/components/Search.svelte';
	let src = 'https://prettycoffee.github.io/fluidity/assets/pic_2-ae471b04.jpg';
	let search_term = $state('Search');
	let bookmarks = $state();

	onMount(async () => {
		const resposne = await fetch('bookmarks.json');
		bookmarks = await resposne.json();
	});
</script>

<div class="container">
	<div class="showcase">
		<img {src} alt="Test" />
	</div>
	<Search {search_term} />
	<Bookmarks {bookmarks} />
</div>

<style>
	img {
		height: 400px;
		width: 400px;
		border: 2px solid var(--default-color);
		padding: 10px;
		object-fit: cover;
		animation-name: circling-shadow;
		animation-duration: 4s;
		animation-iteration-count: infinite;
	}
	.showcase {
		display: flex;
		justify-content: center;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
</style>

<script>
	let src = 'https://prettycoffee.github.io/fluidity/assets/pic_2-ae471b04.jpg';
	let search_term = $state('Search');

	function onclick() {
		return;
	}
</script>

<div class="container">
	<div class="showcase">
		<img {src} alt="Test" />
	</div>
	<div class="search">
		<input bind:value={search_term} />
		<button {onclick}>Search</button>
	</div>
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
	.search {
		display: flex;
		padding: 5rem;
		width: 30rem;
		flex-direction: inherit;
		align-items: center;
		gap: 0.5rem;
	}
	.search > input,
	button {
		height: 2rem;
		background-color: var(--default-color);
		border-radius: var(--border-radius);
	}
	.search > input {
		width: 100%;
	}
	.search > button {
		width: 33%;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
</style>

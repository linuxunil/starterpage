<script>
	let { search_term } = $props();
	function onclick() {
		window.open(`https://duckduckgo.com/?q=${search_term}`);
	}
</script>

<div class="search">
	<input bind:value={search_term} />
	<button {onclick}>Search</button>
</div>

<style>
	.search {
		display: flex;
		padding: 1rem;
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
</style>

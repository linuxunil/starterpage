<script>
	import Bookmark from '$lib/components/Bookmark.svelte';
	let { bookmarks } = $props();
</script>

<div class="bookmarks">
	{#each bookmarks as link (link.guid)}
		{#if link.uri}
			<Bookmark {link} />
		{/if}
	{/each}
</div>

<style>
	.bookmarks {
		display: flex;
		flex-flow: column wrap;
		justify-content: space-around;
		height: 9rem;
		padding: 1rem;
		gap: 0.5rem;
	}
</style>

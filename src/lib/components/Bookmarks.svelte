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
		width: 100%;
		padding: 1rem;
		margin: 0.5rem;
		gap: 0.5rem;
		background-color: var(--bg-color);
		border-radius: var(--border-radius);
	}
</style>

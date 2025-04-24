<script>
	let { link } = $props();
	const urlObject = new URL(link.uri);
	let src = $state();
	if (urlObject.hostname.includes('knewton')) {
		src = 'https://consumer-cdn.knewton.com/jsx/img/favicon-512x512.983ab00a7673c759f90f.png';
	} else {
		src = `https://icons.duckduckgo.com/ip3/${urlObject.hostname}.ico`;
	}
</script>

<div class="bookmark">
	<img height="16" width="16" {src} alt={link.title} />
	<a href={link.uri}>{link.title.split(' ')[0]}</a>
</div>

<style>
	.bookmark {
		align-content: space-around;
	}
</style>

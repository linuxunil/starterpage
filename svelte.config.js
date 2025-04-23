import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
			appDir: 'app'
		})
	}
};

export default config;

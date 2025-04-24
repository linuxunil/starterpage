import adapter from '@sveltejs/adapter-static';
import path from 'path';

const config = {
	kit: {
		alias: {
			'$data': path.resolve('./src/data'),
		},
		adapter: adapter({
			fallback: '404.html',
			appDir: 'app'
		})
	}
};

export default config;

import adapter from '@sveltejs/adapter-auto';
import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer()]
			}
		})
	],

	kit: {
		alias: {
			$component: 'src/component'
		},
		adapter: adapter()
	}
};

export default config;

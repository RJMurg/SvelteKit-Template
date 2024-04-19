<script lang="ts">
	import type { PageData } from './$types';
	import 'carbon-components-svelte/css/all.css';

	export let data: PageData;
</script>

<svelte:head>
	<title>SvelteKit Template</title>
</svelte:head>

<div>
	<h1 class="title">
		{hello}
	</h1>
</div>
	
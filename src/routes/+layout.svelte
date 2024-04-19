<script lang="ts">
	import { Theme } from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/all.css';
	import '$lib/css/carbon-colours.css';
	import '$lib/css/style.css';
</script>

<Theme theme="g100">
	<slot />
</Theme>

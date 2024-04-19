<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import 'carbon-components-svelte/css/all.css';

	export let data: PageData;
</script>

<svelte:head>
	<title>SvelteKit Template</title>
</svelte:head>

<div>
	<div class="horizontal">
		<a href="/login">Login!</a>
		<form method="POST" action="?/logout" use:enhance>
			<button>Sign out</button>
		</form>
	</div>

	<hr />

	<h1>
		Data from serverside component: {data.hello}
		<br />
		{data.username}
	</h1>

	<hr />

	<h1 class="title">I am a title!</h1>

	<h2 class="subtitle">I am a subtitle!</h2>

	<p class="xlarge">X-Large!</p>

	<p class="large">Large!</p>

	<p class="medium">Medium!</p>

	<p>Normal Text</p>

	<p class="small">Small!</p>

	<p class="xsmall">X-Small!</p>

	<hr />

	<p class="left">Holy Left!</p>

	<p class="right">On your Right!</p>

	<p class="italic">Falling over</p>

	<p class="bold">Very thicc</p>

	<p class="bold italic">Doing both!</p>
</div>

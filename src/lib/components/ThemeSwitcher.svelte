<script lang="ts">
	const themes = [
		'default',
		'light',
		'dark',
		'bumblebee',
		'emerald',
		'corporate',
		'retro',
		'cyberpunk'
	];
</script>

<div class="dropdown">
	<!-- Dropdown Button -->
	<div tabindex="0" role="button" class="btn">
		Theme
		<svg
			width="12px"
			height="12px"
			class="inline-block h-2 w-2 fill-current opacity-60"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
		>
			<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
		</svg>
	</div>

	<!-- Dropdown Content -->
	<ul
		class="dropdown-content z-[1] flex w-52 flex-col gap-y-2 rounded-box bg-base-300 p-2 shadow-2xl"
	>
		<!-- Theme Options -->
		{#each themes as theme}
			<li>
				<!-- Radio Button for Each Theme -->
				<input
					type="radio"
					name="theme-dropdown"
					class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
					aria-label={theme}
					value={theme}
				/>
			</li>
		{/each}
	</ul>
</div>

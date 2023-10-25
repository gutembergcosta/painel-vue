<template>
	<div id="app">
		<NavbarDefault/>
		<router-view />
	</div>
</template>

<script>
	import NavbarDefault from '@/paginas/blocos/NavbarDefault.vue'

	export default {
		name: 'App',
		components: {
			NavbarDefault
		}
	}
</script>

<style lang="scss">

	

</style>

<template>
	<div id="app">	
		<NavbarDefault/>

		<div class="pagina">		

			<Button label="Submit" />

			<i class="fa-solid fa-gear"></i>
		</div>
	</div>
</template>

<script>

	import NavbarDefault from '@/paginas/blocos/NavbarDefault.vue'


	export default {
		name: 'Home',
		components: {
			NavbarDefault
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
</style>

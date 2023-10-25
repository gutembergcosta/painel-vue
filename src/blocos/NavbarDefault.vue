<template>

	<div>
		<nav class="navbar navbar-expand navbar-dark bg-dark">
			<router-link to="/" class="navbar-brand">bezKoder</router-link>
			<div class="navbar-nav mr-auto">
				<li class="nav-item">
					<router-link to="/documentacao/sintaxe" class="nav-link">Sintaxex</router-link>
				</li>
				
			</div>
		</nav>
	</div>
    
</template>

<script>
	export default {
		name: 'NavbarDefault',
		props: {
			msg: String
		},
		data: function () {
			return {
				name:'Nome',
			}
		},
		methods:{
			greet: function metodo01(params) {
				return `Frase ${params} .`; 
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
</style>

<template>

	<div class="container pb-5" style="width: 1000px">

		<div class='row'>

			<div class="col-md-12 my-3"  >

				<div class="area-card p-4">

					<div class="row my-5" >
						<div class="col-md-6 py-4">
							<h3 class="text-center">Player 1</h3>
							<div class="progress">
								<div class="progress-bar py-3" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" :style="{width: playerHealth + '%'}">{{ playerHealth }}</div>
							</div>
						</div>
						<div class="col-md-6 py-4">
							<h3 class="text-center">Monster</h3>
							<div class="progress">
								<div class="progress-bar py-3" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" :style="{width: monsterHealth + '%'}">{{ monsterHealth }}</div>
							</div>
						</div>
						<hr>
					</div>
					
					<div class="row my-5" v-if="!gameIsRunning" >
						<div class="col-md-12 d-flex justify-content-center">
							<button class="btn btn-secondary btn-lg" @click="startNewGame">Start new game</button>
						</div>
						<hr>
					</div>
					
					<div class="row my-5" v-if="gameIsRunning" >
						<div class="col-md-12 d-flex justify-content-center">
							<button class="btn btn-primary btn-lg mx-2" @click="atack">Atack</button>
							<button class="btn btn-danger btn-lg mx-2" @click="specialAtack">Special atack</button>
							<button class="btn btn-success btn-lg mx-2" @click="heal">Heal</button>
							<button class="btn btn-info btn-lg mx-2" @click="giveUp">Give Up</button>
						</div>
						<hr>
					</div>

					<div class="row my-5">
						<div class="col-md-12 columns">
							<ul class="lista">
								<li></li>
							</ul>
						</div>
					</div>
					<hr>						
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	export default {
		name: 'Max01',
		
		data: function () {
			return {
				playerHealth: 100,
				monsterHealth: 100,
				gameIsRunning: false,
			}
		},
		methods:{
			startNewGame: function(){
				this.gameIsRunning = true;
				this.monsterHealth = 100;
				this.playerHealth = 100;
			},

			atack: function(){
				let max = 10;
				let min = 3;
				let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
				this.monsterHealth -= damage;

				max = 12;
				min = 5;
				damage = Math.max(Math.floor(Math.random() * max) + 1, min);
				this.playerHealth -= damage;
				
				
				alert('atack')
			},

			specialAtack: function(){
				alert('specialAtack')
			},

			heal: function(){
				alert('heal')
			},

			giveUp: function(){
				alert('giveUp')
			},

		},
		computed: {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.area-card {
		background: white;
		border:5px solid #1f83ed!important;
		border-radius: 12px!important;

		h3{
			color:#000 ;
			font-weight: 600;
		}

		h5{
			color:#000 ;
			font-weight: 600;
		}
	}

	.area{
		height: 100px;
		background: #eee;
		border: 1px #ccc;
	}
	.bloco{
		height: 50px;
		background: #eee;
		border: 1px #ccc;
	}

	.progress {
		height: 2rem;
	}

	.lista{
		list-style: none;
		margin: 0;
		padding: 0;
	}

</style>

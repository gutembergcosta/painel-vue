<template>

	<div class="container pb-5" style="width: 500px">

		<div class='row'>



			<!-- Inverter-->
			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">Interpolações</h3>

					<h5>Texto</h5>
					<p>Mensagem: {{ msg }}</p>
					<p v-once>Esse valor nunca será modificado: {{ msg }}</p>
					
					<h5>Raw HTML</h5>
					<p>Interpolação textual: {{ rawHtml }}</p>
					<p>Diretiva v-html: <span v-html="rawHtml"></span></p>
					
					<h5>Atributos</h5>
					<p :id="dynamicId">dynamicId</p>

						
				</div>
			</div>
			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">Expressões javascript</h3>
					<p>{{ number + 1 }}</p>
					<p>{{ ok ? 'YES' : 'NO' }}</p>
					<p>{{ msg.split('').reverse().join('') }}</p>
					<p :id="'list-' + id">'list-' + id</p>	
						
				</div>
			</div>
			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">Diretivas</h3>
					<p v-if="seen">Now you see me</p>							
					<h5>Arguments</h5>
					<a :href="url"> {{ url }} </a>
					<h3 class="card-title">Data Binding</h3>
					<div :html="urlHtml"></div>
						
				</div>
			</div>
			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">Events</h3>
					<div class="d-flex">
						<button class="btn btn-success btn-sm" @click="add(3)"> + </button>

							<span class="py-1 px-3">numero = {{ number }}</span>
						<button class="btn btn-success btn-sm" @click="minus"> -</button>
					</div>
					
					<div class="area w-100" @mousemove="updateXY" >
						<span>{{x}} , {{y}}</span>
					</div>
				</div>
			</div>

			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">Modificadores de eventos</h3>
					<h5>.prevent</h5>
					<a @click.prevent="textoLink" :href="url"> {{ url }} </a>					
				</div>
			</div>

			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">Two way data bind</h3>
					<input v-model="info" type="text">
					<br>
					{{ info }}
					
					
				</div>
			</div>
			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">Computed properties</h3>
					{{ ab }}
				</div>
			</div>
			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">Dynamic CSS</h3>	
					<div class="mb-3">
						<div class="bloco" :class="{'bg-info': alternar}"></div>
					</div>				
					<div class="mb-3">
						<div class="bloco" :class="alternaClasse">
							nome
						</div>
					</div>				
					<a @click="alternar = !alternar" class="btn btn-primary mt-3">alterar</a>
					<a @click="alternar01 = !alternar01" class="btn btn-primary mt-3">alternar01</a>
					
				</div>
			</div>

			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">If Eslse</h3>	
									
					<div class="mb-3">
						<p v-if="alternarIf">true</p>
						<p v-else >false</p>
					</div>			
					<a @click="alternarIf = !alternarIf" class="btn btn-primary mt-3">alterar</a>
					
				</div>
			</div>

			<div class="col-md-12 my-3"  >
				<div class="area-card p-4">
					<h3 class="card-title">Loop com v-for</h3>	
									
					<div class="mb-3">
						<h4>Lista simples</h4>
						<ul>
							<li v-for="(item, index) in nomes" :key="item.id">{{index}}. {{item}}</li>
						</ul>
						<h4>Matrins</h4>
						<ul>
							<li v-for="(item, index) in uf" :key="item.id">{{index + 1 }}. {{item.nome}}</li>
						</ul>
					</div>			
					
				</div>
			</div>

			
		</div>		
		
	</div>
</template>

<script>
	export default {
		name: 'Sintaxe',
		
		data: function () {
			return {
				msg:'Texto',
				rawHtml:'<a>link</a>',
				dynamicId:'dynamic-id',
				number: 3,
				ok: true,
				id: 101,
				seen: true,
				url: 'http://localhost:8080/',
				urlHtml: '<a v-bind:href="http://localhost:8080/"> v-bind:html </a>',
				x: 0,
				y: 0,
				info: 'info',
				a: 2,
				b: 3,
				dynamicCss: 'bg-info',
				alternar: true,
				alternar01: false,
				alternarIf: false,
				nomes:['Mario','Luigi','Yoshi'],
				uf:[
					{nome: 'Minas Gerais', capital: 'Belo Horizonte'},
					{nome: 'Amapá', capital: 'Macapá'},
					{nome: 'Acre', capital: 'Rio Branco'},
				]
			}
		},
		methods:{
			greet: function metodo01(params) {
				return `Frase ${params} .`; 
			},
			add: function(numero){
				this.number = numero + this.number;
			
			},
			minus: function(){
				this.number--;
			},
			updateXY(e){
				console.log(e);
				this.x = e.offsetX;
				this.y = e.offsetY;
			},
			textoLink: function(){
				alert(this.url)
			}
		},
		computed: {
			ab: function(){
				return this.a+'-'+this.b;
			},
			alternaClasse: function(){
				return {
					'bg-info': this.alternar,
					'text-success': this.alternar01
				}
			}
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
			color:#1f83ed ;
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
</style>

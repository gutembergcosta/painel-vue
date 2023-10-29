<template>

	<div>
		<Menubar class="area-menu" :model="items" />
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
				items: [
					{
						label:'Events',
						icon:'pi pi-fw pi-calendar',
						items:[
							{
								label:'Edit',
								icon:'pi pi-fw pi-pencil',
								items:[
									{
									label:'Save',
									icon:'pi pi-fw pi-calendar-plus'
									},
									{
									label:'Delete',
									icon:'pi pi-fw pi-calendar-minus'
									},

								]
							},
							{
								label:'Archieve',
								icon:'pi pi-fw pi-calendar-times',
								items:[
									{
										label:'Remove',
										icon:'pi pi-fw pi-calendar-minus'
									}
								]
							}
						]
					},
					{
						label:'Quit',
						icon:'fa-solid fa-gear',
						to: '/documentacao/sintaxe'
					}
				]
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
<style lang="scss">

	.area-menu{
		
		background: #353535;	

		.p-menuitem-link {
			background: white;
		}

		.p-menuitem-link .p-menuitem-text{
			background: blue;
		}
	}
	
	
</style>

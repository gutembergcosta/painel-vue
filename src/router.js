import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("./paginas/Home")
		},
		{
			path: "/documentacao/sintaxe",
			name: "sintaxe",
			component: () => import("./documentacao/Sintaxe")
		},
		{
			path: "/documentacao/max-1st-project",
			name: "sintaxe",
			component: () => import("./documentacao/Max01")
		},
	]
});

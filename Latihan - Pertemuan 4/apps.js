Vue.component('ilyas', {
	data(){
		return {
			message: 'Ooo gini toh!'
		}		
	},
	template: '<h1>{{message}}</h1>'	
})	

var vm = new Vue({
	el: '#app',	
})	
	
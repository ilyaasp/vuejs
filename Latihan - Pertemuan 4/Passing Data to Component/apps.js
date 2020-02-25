var BookComponent = {
	data(){
		return {
			classCard: 'card'
		}	
	},
	props: ['title', 'description', 'image'],
	template:`
		<div :class="classCard">
			<h3>{{title}}</h3>
			<img :src="image" style="width:100%">
			<p v-html="description"></p>
		</div>`
}	

new Vue({
	el: '#app',
	components: {
		'book': BookComponent,		
	}	
})	
	
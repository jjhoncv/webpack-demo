import '../css/estilos.css';

import Vue from 'vue';

import School from './components-vue/School.vue';
new Vue({
	el: '#app',
	render() {
		return (
			<div>
				<School />
			</div>
		);
	},
	components: {
		School
	}
});

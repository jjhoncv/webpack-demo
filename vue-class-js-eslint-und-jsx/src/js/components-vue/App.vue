<script>
import Component from 'vue-class-component';
import Schools from './Schools.vue'
import Menu from "./Menu.vue"
import Vue from "vue"

@Component({
  components: {
    Schools,
    Menu
  }
})
export default class App extends Vue{  
  render (h) {
    return (
      <div>        
        <Menu />
        <Schools />
      </div>
    ) 
  }
}
</script>

<style>
ul {
  padding: 0;
  margin: 0;
}
</style>

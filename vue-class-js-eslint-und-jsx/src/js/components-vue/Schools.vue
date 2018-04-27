<script>
import Component from 'vue-class-component';
import schools from "./../schools.json";
import Search from "./Search.vue"
import Vue from "vue"

@Component
export default class Schools extends Vue {
    schools = []

    mounted () {
        this.schools = schools
    }
    render (h) {
        return (
            <div>
                <h1>Schools</h1>
                <Search level={this.schools} /> 
            </div>
        ) 
    }
}
</script>
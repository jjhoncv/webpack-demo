<script>
import Component from 'vue-class-component';
import Vue from "vue"

@Component
export default class Search extends Vue {
    q = ""
    items = []
    item = {}    
    
    constructor () {
        super()
        console.log("this.props",this.props)
    }

    submitSearch () {            
        this.items = this.props.data.filter(item => item.name.search(this.q) >= 0)            
    }
    
    render (h, level) {
        console.log("this.props",this.props)
        console.log("level",level)
        return <p>ddd</p>
    //     console.log("h", h)
    //     console.log("this", this.props)
    //     console.log("this.data", this.data)
    //     console.log(arguments)
    //     console.log("props", props)
        
        // return (
        //     <div>
        //         <form onSubmit={this.submitSearch} >
        //             <input type="text" v-model={this.q} />
        //             <input type="submit" />
        //         </form>        
        //         if (this.items.length > 0) {
        //             <ul class="search">
        //                 { this.items.map( item => <li><span>{item.name}</span></li>) }
        //             </ul>  
        //         }                
        //     </div>
        // )
    }
}
</script>

<style>
.search {
    list-style-type:circle;
}
.search li{
    margin: 2px 0;
}
</style>


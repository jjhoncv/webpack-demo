<template>
    <div>
        <School />
    </div>
</template>

<script>
import Component from 'vue-class-component';
import School from "./School.vue"

@Component({
  components: {
    School
  }
})
export default class App {

}
</script>


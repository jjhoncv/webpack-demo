<template>
    <div class="list-teachers">
        <Teachers :teachers="teachers"/>
    </div>
</template>

<script>

import Component from 'vue-class-component';
import Teachers from "./Teachers.vue"
import Vue from 'vue'

import data from '../teachers.json'

@Component({
  components: {
    Teachers
  }
})
export default class School extends Vue {
    teachers = []
    mounted () {
        this.teachers = data.teachers
    }
}
</script>

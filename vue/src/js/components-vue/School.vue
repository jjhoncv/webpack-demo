<template>
    <div class="list-teachers">
        <Teachers :teachers="teachers"/>
    </div>
</template>

<script>
import Teachers from './Teachers.vue'
import data from '../teachers.json'

export default {
    data  () {
       return {
           teachers: []
       }
    },
    mounted () {
        this.teachers = data.teachers
    },
    components: {
        Teachers
    }
}
</script>

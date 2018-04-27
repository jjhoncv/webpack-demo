<template>
    <ul>
        <li class="teacher" v-for="(teacher, index) in teachers" :key="index">
            <span> {{ teacher.name }} </span>
            <a :href="`http://twitter.com/${teacher.twitter}`">twitter</a>
        </li>
    </ul>
</template>

<script>

import Component from 'vue-class-component'

@Component({
  props: {
    teachers: {}
  }
})

export default class Teachers {

}
</script>

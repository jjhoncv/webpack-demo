<template>
    <ul>
        <li class="teacher" v-for="(teacher, index) in teachers" :key="index">
            <span> {{ teacher.name }} </span>
            <a :href="`http://twitter.com/${teacher.twitter}`">twitter</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['teachers']
}
</script>

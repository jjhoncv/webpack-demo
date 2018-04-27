<template>
    <div>
        <ul class="menu">
            <li><a href="">Shools</a></li> | 
            <li><a href="">Teachers</a></li> | 
            <li><a href="">Curses</a></li>          
        </ul>
        <hr/>  
    </div>
</template>

<script>
import Component from 'vue-class-component';
import Vue from "vue"

@Component
export default class Menu extends Vue {}
</script>

<style scopped>
.menu li {
    display: inline-block
}
</style>

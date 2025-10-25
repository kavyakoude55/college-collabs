<template>
  <!-- <Navbar/> -->
   <Login/>
  <router-view></router-view>
</template>

<script setup>
import Login from './views/Login.vue';
import Navbar from './views/Navbar.vue';
</script>
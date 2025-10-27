<template>
  <div>
  <Navbar/>
   <Signup/>
   <RouterView></RouterView>
  </div>
  
</template>

<script setup>
import Login from './views/Login.vue';
import Navbar from './views/Navbar.vue';

</script>
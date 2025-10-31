<template>
<<<<<<< HEAD
  <div>
  <Navbar/>
   <Signup/>
   <RouterView></RouterView>
  </div>
  
=======
  <Navbar/>
   <!-- <Login/> -->
  <router-view></router-view>
>>>>>>> ce0c2e3 (frontend fully developed)
</template>

<script setup>
import Login from './views/Login.vue';
import Navbar from './views/Navbar.vue';

</script>
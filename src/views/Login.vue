<template>
    <div class="bg-[url('https://i.pinimg.com/1200x/81/a5/ac/81a5acc0c27fe29a0a7515e839caa851.jpg')] bg-no-repeat bg-cover bg-center h-screen w-screen flex items-center justify-center">
       <div class="flex justify-center items-center min-h-90 bg-white rounded-lg">
    <div class="rounded-xl p-6 w-full h-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center text-blue-950">Login</h1>
      <input v-model="email" type="email" placeholder="Email"
             class="border p-2 w-full rounded mb-3 text-blue-900" />
      <input v-model="password" type="password" placeholder="Password"
             class="border p-2 w-full rounded mb-3 text-blue-900" />
      <p v-if="errorMessage" class="text-red-500 text-sm mb-3">{{ errorMessage }}</p>
      <button @click="handleLogin"
              class="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded w-full">
        Login
      </button>
      <p class="text-black text-sm mt-4 text-center">
        Don't have an account?
        <router-link to="/Signup" class="text-blue-500 hover:underline">Register here</router-link>
      </p>
    </div>
  </div>          
        </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { useAuth } from "@/composables/useAuth";


// const email = ref("");
// const password = ref("");
// const errorMessage = ref("");
// const router = useRouter();
// const { login, error } = useAuth();

// async function handleLogin() {
//   try {
//     await login(email.value, password.value);
//     email.value = "";
//     password.value = "";
    
//     router.push("/"); 
//   } catch (err) {
//     console.error(err);
//     errorMessage.value = error.value || "Login Failed, please try again.";
//   }
// }
</script>
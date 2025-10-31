<template>
    <div class="bg-cover h-screen flex flex-col  justify-center items-center bg-blue-950 " >
        
        <div class="flex flex-col  bg-gray-300 justify-center items-center w-2/6 h-120 border-2 border-gray-300  rounded-xl ">
            <h1 class="text-3xl mt-5 mb-5 w-full text-center">Create Your Own Project</h1>
            <h1 class="text-2xl mb-3">Project Name</h1>
            <input class="border-2 h-8 border-black rounded w-5/9 mb-5" type="text">
            <h1 class="text-2xl mb-3">Required Stacks</h1>
            <input class="border-2  h-8 border-black rounded  w-5/9 mb-5" type="text">
            <h1 class="text-2xl mb-3">Project Description </h1>
            <input  class="border-2  h-8 border-black rounded w-5/9 mb-5" type="text">
            <router-link to="/YourProjects">
                <button  class="mt-4 bg-green-500 flex items-center justify-center hover:bg-green-700 text-center text-white font-bold h-8 py-2 px-4 rounded">Create</button>
            </router-link>
        </div>
    </div>
</template>
<script setup>
</script>
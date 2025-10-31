<template>
    <div>
        <div class="bg-gray-300 ">
            <div class="h-16 bg-gray-300 flex items-center justify-center gap-100 pr-5 pl-3">
                <h1 class=" text-3xl ">Create Your Own Project</h1>
                <div class="flex gap-20">
                    <router-link to="/CreateProject">
                        <button
                            class="bg-blue-500 flex items-center justify-center hover:bg-blue-700 text-center text-white font-bold h-8 py-2 px-4 rounded">Create</button>
                    </router-link>
                    <router-link to="YourProjects">
                        <button
                            class="bg-red-500 flex items-center justify-center hover:bg-red-700 text-center text-white font-bold h-8 py-2 px-4 rounded">Your
                            Projects</button>
                    </router-link>
                </div>
            </div>
            <div class="bg-gray-300 ">
                <hr class="mb-5">
                <div class="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row md:items-center gap-4">
                    <input v-model="searchQuery" type="text" placeholder="Search projects..."
                        class="flex-1 border-2 mb-5 border-black rounded-lg bg-white  px-4 py-2 focus:ring-2 focus:ring-black outline-none" />

                    <select v-model="selectedCategory" 
                        class="border-2 bg-white mb-5 border-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none">
                        <option value="">All Categories</option>
                        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="bg-white ">
            <hr class="text-gray-500">
            <div class="flex items-center pl-5 h-14">
                <h1 class="w-1/4 text-2xl">Project </h1>
                <h1 class="w-1/4 text-2xl">Teamlead </h1>
                <h1 class="w-1/4 text-2xl">Team Members </h1>
                <h1 class="w-1/4 text-2xl">Request </h1>
            </div>
            <hr class="text-gray-500">
            <div class="flex items-center pl-5 pt-3 pb-3 ">
                <h1 class="w-1/4 text-xl">Project Name </h1>
                <h1 class="w-1/4 text-xl">Leader Name </h1>
                <h1 class="w-1/4 text-xl">Team Members </h1>
                <button
                    class="bg-green-500 flex items-center justify-center hover:bg-green-700 text-center text-white font-bold h-8 py-2 px-4 rounded">Request</button>
            </div>
            <hr class="text-gray-500">
            <div class="flex items-center pl-5 pt-3 pb-3 ">
                <h1 class="w-1/4 text-xl">Project Name </h1>
                <h1 class="w-1/4 text-xl">Leader Name </h1>
                <h1 class="w-1/4 text-xl">Team Members </h1>
                <button
                    class="bg-green-500 flex items-center justify-center hover:bg-green-700 text-center text-white font-bold h-8 py-2 px-4 rounded">Request</button>
            </div>
        </div>
    </div>

</template>
<script setup>
const categories = [
    "cat 1", "cat 2", "cat 3"
]
</script>
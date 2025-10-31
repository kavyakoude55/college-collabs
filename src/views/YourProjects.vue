<!-- <template>
    <div class="bg-gray-300 h-full w-full p-10">
        <h1 class="text-2xl text-center mt-2 mb-5">Your Projects</h1>

        <div class="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row md:items-center gap-4">
            <input v-model="searchQuery" type="text" placeholder="Search projects..."
                class="flex-1 border-2 mb-5 border-black rounded-lg bg-white  px-4 py-2 focus:ring-2 focus:ring-black outline-none" />

            <select v-model="selectedCategory"
                class="border-2 bg-white mb-5 border-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none">
                <option value="">All Categories</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
        </div>

        <div v-for="(project, index) in projects" :key="index"
            :class="['rounded-2xl flex justify-between h-10 mb-10 items-center p-4', background_color[index % background_color.length]]">
            <h1 class="ml-10">Project Name : {{ project.name }}</h1>
            <h1 class="mr-10">Deadline : {{ project.dedline }}</h1>
            <h1>Status : {{ project.status }}</h1>
        </div>

    </div>
</template>
<script setup>

const projects = [
    { name: "Project A", status: "completed", dedline: "2025-11-01" },
    { name: "Project B", status: "completed", dedline: "2025-11-10" },
    { name: "Project C", status: "Incomplete", dedline: "2025-11-15" },
    { name: "Project D", status: "Incomplete", dedline: "2025-11-20" },
    { name: "Project A", status: "Incomplete", dedline: "2025-11-01" },
    { name: "Project B", status: "completed", dedline: "2025-11-10" },
    { name: "Project C", status: "completed", dedline: "2025-11-15" },
    { name: "Project D", status: "Incomplete", dedline: "2025-11-20" },
    { name: "Project A", status: "Incomplete", dedline: "2025-11-01" },
    { name: "Project B", status: "completed", dedline: "2025-11-10" },
    { name: "Project C", status: "completed", dedline: "2025-11-15" },
    { name: "Project D", status: "Incomplete", dedline: "2025-11-20" },
]

const background_color = [
    "bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-orange-200", "bg-pink-200", "bg-white",
]

const categories = [
    "Incomplete", "Completed"
]

</script> -->

<template>
  <div class="bg-gray-300 min-h-screen w-full p-10">
    <h1 class="text-2xl text-center mt-2 mb-5">Your Projects</h1>

    <div
      v-for="(project, index) in projects"
      :key="index"
      :class="[
        'rounded-2xl flex justify-between h-10 mb-10 items-center p-4 cursor-pointer hover:scale-105 transition-transform',
        background_color[index % background_color.length]
      ]"
      @click="goToDetails(project)"
    >
      <h1 class="ml-10">Project Name : {{ project.name }}</h1>
      <h1 class="mr-10">Deadline : {{ project.dedline }}</h1>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const projects = [
  { name: "Project A", dedline: "2025-11-01", description: "This is project A." },
  { name: "Project B", dedline: "2025-11-10", description: "This is project B." },
  { name: "Project C", dedline: "2025-11-15", description: "This is project C." },
  { name: "Project D", dedline: "2025-11-20", description: "This is project D." }
]

const background_color = [
  "bg-red-300", "bg-blue-300", "bg-green-300", "bg-yellow-300",
  "bg-orange-300", "bg-pink-300", "bg-white"
]

// 🧭 Navigate to details page
function goToDetails(project) {
  router.push({ name: 'ProjectDetails', params: { name: project.name } })
}
</script>


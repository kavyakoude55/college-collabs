<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-4/9">
      <div class="flex flex-col justify-center items-center  ">
        <h1 class="text-3xl font-bold mb-4">Project Details</h1>
        <p class="mb-3"><strong>Project Name:</strong> {{ project.name }}</p>
        <p class="mb-3"><strong>Deadline:</strong> {{ project.dedline }}</p>
        <p class=""><strong>Description:</strong> {{ project.description }}</p>
      </div>
     
      <div class="mt-10 flex items-center justify-between gap-5">
        <div class="ml-10 flex flex-col">
          <h1 class="text-2xl text-center">Teammembers</h1>
          <div class="text-xl flex gap-4 items-center justify-center"
              v-for="(member, index) in Teammembers" :key="index">
            
            <h1 class="text-xl mt-4">{{ member.name }}</h1>
            <button class="mt-6 bg-green-500 text-white px-2 py-2 rounded-lg hover:bg-green-600 transition">Assign Task</button>
          </div>
          
        </div>
        <div class="mr-10">
          <h1 class="text-2xl text-center">Requests</h1>
          <div class="flex items-center justify-center gap-4 " >
            <h1 class="mt-4">Name</h1>
            <button class="mt-6 bg-green-500 text-white px-2 py-2 rounded-lg hover:bg-green-600 transition">Accept</button>
            <button class="mt-6 bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-600 transition">Denay</button>
          </div>
        </div>
      </div>

      <button
        @click="$router.push('/YourProjects')"
        class="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        ← Back to Projects
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// sample projects (you can later fetch from backend or global store)
const projects = [
  { name: "Project A", dedline: "2025-11-01", description: "This is project A." },
  { name: "Project B", dedline: "2025-11-10", description: "This is project B." },
  { name: "Project C", dedline: "2025-11-15", description: "This is project C." },
  { name: "Project D", dedline: "2025-11-20", description: "This is project D." }
]

const Teammembers = [
  {name:" member A"},
  {name:" member B"},
  {name:" member C"},
  {name:" member D"}
]

const route = useRoute()

// find project by name from route param
const project = computed(() => {
  return projects.find(p => p.name === route.params.name)
})
</script>

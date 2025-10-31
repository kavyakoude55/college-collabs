<template>
    <div class="[width:calc(100%)] rounded-lg border-2 border-gray-300 mb-4  hover:scale-105 ">
        <div :class="gradients[random]" class="h-10 rounded-tr-xl rounded-tl-xl ">
             <h1 class="text-center">Project Name</h1>
        </div>
        <div class="bg-white flex justify-between items-center rounded-b-xl p-4 pl-10 pr-10 ">
            <h1 class="items-start">Assined Task </h1>
            <h1 >Dedline: 10/20/30</h1>
        </div>
    </div>
</template>
<script setup>
const gradients = [
  "bg-gradient-to-r from-pink-400 via-red-300 to-yellow-300",
  "bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400",
  "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400",
  "bg-gradient-to-r from-amber-300 via-yellow-400 to-lime-300",
  "bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-300",
  "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500",
  "bg-gradient-to-r from-rose-300 via-orange-300 to-amber-300",
  "bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300",
  "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400",
  "bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400",
];

const random = Math.floor(Math.random()*gradients.length)
</script>
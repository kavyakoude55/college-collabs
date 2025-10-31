<template>
    <div class="flex flex-col mt-4 ">
        <div class="flex w-screen">
            <div class="w-1/2 flex align-center justify-center border-r-2 border-gray-400">
                <div class="w-8/9 ">
                    <h1 class="h-15 rounded-2xl flex align-center justify-center bg-green-200 text-xl text-center pt-3">Completed </h1>
                </div>
            </div>
        
            <div class="w-1/2 flex align-center justify-center">
                <div class="w-8/9 ">
                    <h1 class="h-15 rounded-2xl flex align-center justify-center bg-red-200 text-xl text-center pt-3">Incomplete </h1>
                </div>
            </div>
        </div>
        <div class="flex w-screen">
            <div  class="w-1/2 flex items-center justify-center border-r-2 border-gray-400">
                <div @click="task_view" class="w-8/9 flex items-center justify-center mt-4">
                    <div
                        class="flex items-center justify-between h-15 w-full border-4 border-gray-400 rounded-xl">
                        <h1 class="ml-4">Project Name </h1>
                        <h1>Assigned Task </h1>
                        <h1 class="mr-4">Date of submission : 10/12/30</h1> 
                    </div>
                </div>
            </div>
        
            <div class="w-1/2 flex items-center justify-center ">
                <div class="w-8/9 flex items-center  mt-4">
                    <div class="flex items-center justify-between h-15 w-full border-4 border-gray-400 rounded-xl">
                        <h1 class="ml-4">Project Name </h1>
                        <h1>Assigned Task </h1>
                        <h1 class="mr-4">Dedline : 10/12/30</h1> 
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

function task_view(){
    router.push({name:'TaskView'})
}
</script>

<!-- <template>
  <div class="flex flex-col mt-4">
    <div class="flex w-screen">
      <div class="w-1/2 flex align-center justify-center border-r-2 border-gray-400">
        <div class="w-8/9">
          <h1 class="h-15 rounded-2xl flex align-center justify-center bg-green-200 text-xl text-center pt-3">
            Completed
          </h1>
        </div>
      </div>

      <div class="w-1/2 flex align-center justify-center">
        <div class="w-8/9">
          <h1 class="h-15 rounded-2xl flex align-center justify-center bg-red-200 text-xl text-center pt-3">
            Incomplete
          </h1>
        </div>
      </div>
    </div>

    <div class="flex w-screen">
      <div class="w-1/2 flex items-center justify-center border-r-2 border-gray-400">
        <div class="w-8/9 flex items-center justify-center mt-4">
          <div class="flex items-center justify-between h-15 w-full border-4 border-gray-400 rounded-xl">
            <h1 class="ml-4">Project Name</h1>
            <h1>Assigned Task</h1>
            <h1 class="mr-4">Date of submission : 10/12/30</h1>
          </div>
          <button @click="task_view">ASDFGH</button>
        </div>
      </div>

      <div class="w-1/2 flex items-center justify-center">
        <div class="w-8/9 flex items-center mt-4">
          <div class="flex items-center justify-between h-15 w-full border-4 border-gray-400 rounded-xl">
            <h1 class="ml-4">Project Name</h1>
            <h1>Assigned Task</h1>
            <h1 class="mr-4">Deadline : 10/12/30</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router' 

const router = useRouter()

function task_view() {
  router.push({ name: 'TaskView' }) 
}
</script>  -->

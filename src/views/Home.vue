<template>
    <div class="flex">

        <div class="w-1/2 flex justify-center items-center">
            <div class="[width:calc(100%-20px)] mt-4 bg-gray-100 rounded-lg border border-gray-500  pt-6 p-4">
                <div>
                    <h1 class="text-center text-2xl mb-3">Assigned Tasks</h1>
                    <AssignedTask @click="task_view"/>
                    <AssignedTask/>
                    <AssignedTask/>
                    <AssignedTask/>
                </div>
            </div>
        </div>
        
        <div class="w-1/2 flex justify-center items-center">
            <div class="[width:calc(100%-20px)] mt-4 bg-gray-100 rounded-lg border border-gray-500  pt-6 p-4 ">
                <h1 class="text-center text-2xl mb-3">Avelable Tasks </h1>
                <AssignedTask/>
                <AssignedTask/>
                <AssignedTask/>
                <AssignedTask/>
            </div>
        </div>
        
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import AssignedTask from './Assigned-Task.vue';

const data = [
    { project:"project A",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"completed" },
    { project:"project B",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"Incomplete" },
    { project:"project C",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"completed" },
    { project:"project D",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"Incomplete" },
]
const router = useRoute() ;

function task_view(data){
    router.push({name:'TaskView', param:{name:data.project}})
}

</script>
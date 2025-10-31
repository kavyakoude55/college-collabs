<template>
    <div class="flex flex-wrap p-20 justify-center gap-5" >
        <div class="flex flex-col text-xl w-1/4 h-50  rounded-xl bg-gray-300 border-3 border-black justify-center items-center"
            v-for="data in dumdata" kay="data.project" 
            >
            <h1 class="text-center mb-5"> Assigned Task </h1>
            <h1 class="mb-4">Project Name : {{ data.project }} </h1>
            <h1 class="mb-4">Task : {{ data.task }}</h1>
            <h1 class="mb-4">Task Status : {{ data.taskstatus }}  </h1>www
        </div>
    </div>
</template>
<script setup>


const dumdata = [
    { project:"project A",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"completed" },
    { project:"project B",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"Incomplete" },
    { project:"project C",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"completed" },
    { project:"project D",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"Incomplete" },
    { project:"project A",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"completed" },
    { project:"project B",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"Incomplete" },
    { project:"project C",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"completed" },
    { project:"project D",task:"asdfghjklk fghj kjh ghjk jhg ", taskstatus:"Incomplete" },
]
</script>
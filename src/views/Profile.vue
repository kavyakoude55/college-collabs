<template>
    <div>
        <h1>Personal Details</h1>
        <div class="flex flex-col space-y-4 p-6 bg-gray-100 min-h-screen`">
        
            <div class="border p-4 rounded-lg shadow-md bg-white">
                <img :src="studentDetails.linkedIn" alt="Profile Picture" class="w-24 h-24 rounded-full mb-4"/>
            </div>
            <div class="space-y-2 p-4">
                <h2 class="text-xl font-semibold mb-2">{{ fetchStudentDetails.name }}</h2>
                <p class="mb-1"><strong>ID Number:</strong> {{ fetchStudentDetails.idNo }}</p>
                <p class="mb-1"><strong>Email:</strong> {{ fetchStudentDetails.email }}</p>
                <p class="mb-1"><strong>year: </strong> {{ fetchStudentDetails.year }}</p> 
            </div>
            <div class="h-8 w-8">
                <a :href="studentDetails.linkedIn" target="_blank" class="text-blue-500 hover:underline"><span icon="fa-brands:linkedIn" >LinkedIn</span></a>   
                <a :href="studentDetails.linkedIn" target="_blank" class="text-blue-500 hover:underline"><span icon="fa-brands:linkedIn" ></span></a>   
                <a :href="studentDetails.linkedIn" target="_blank" class="text-blue-500 hover:underline"><span icon="fa-brands:linkedIn" ></span></a>   
            </div>
            <div class="flex flex-col space-y-2 mt-4">
                <a :href="studentDetails.resume" target="_blank" class="hover:underline">Resume</a>
                <a :href="studentDetails.portfolio" target="_blank" class="hover:underline">Portfolio</a>
            </div>
        </div>
    </div>
</template>
<script setup>

import fetchStudentDetails from '../Database/studentDetails';

</script>
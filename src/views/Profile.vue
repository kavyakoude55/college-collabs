<template>
<<<<<<< HEAD
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
=======
    <div class="flex bg-blue-100">
        <div class="w-1/3 h-200 flex justify-center mt-16">
            <div class="flex bg-red-200 items-center justify-center h-100 w-100 border-2 border-gray-200 rounded rounded-xl  ">
                <div class="w-1/2 h-full flex flex-col items-center justify-center">
                    <img class="rounded-full h-30 w-30 mt-10" src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="">
                    <h1>Name:  </h1>
                    <div class="flex gap-5 items-center justify-center">
                        <div>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                            <a href="https://www.linkedin.com" target="_blank" 
                            class="text-blue-600 hover:text-blue-800 text-3xl">
                            <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                        <div>
                            <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.8 1.09.8 2.2v3.26c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
                            </svg>
                        </div>
                        
                    </div>
                </div>
                <div class="w-1/2  ">
                    <h1>No of Projects: 10</h1>
                    <h1>Rating :  </h1>
                    <h1>current year: </h1>
                </div>
            </div>
        </div>
        <div class="w-2/3 mt-16">
            <h1 class="text-3xl mb-10">About : Name </h1>
            <h1 class="text-xl mb-4" >Currently working in a project : Yes/No</h1>
            <h1 class="text-xl mb-4" >Speakes Telugu, Hindi and English </h1>
            <h1 class="text-xl mb-4" >Lives in Hyderabad, Telangana</h1>
            <h1 class="text-xl mb-4" >Discreption .................................................................................................................</h1>
            <h1 class="text-xl mb-4" >Previous Projects </h1>
        </div>
>>>>>>> ce0c2e3 (frontend fully developed)
    </div>
</template>
<script setup>

import fetchStudentDetails from '../Database/studentDetails';

</script>
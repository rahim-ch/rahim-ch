<template>
    <div class="bg-gray-100 py-12 text-center">
      <h2 class="text-4xl font-semibold mb-8">My Skills</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <div v-for="skill in skills" :key="skill" class="p-4 bg-white rounded-lg shadow">
          <p class="text-xl font-medium">{{ skill }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Node.js'],
      };
    },
  };
  </script>
  
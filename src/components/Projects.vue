<template>
  <div class="min-h-screen bg-gray-100 p-10">
    <h2 class="text-3xl font-semibold text-center mb-6">My Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white shadow-lg rounded-lg p-6" v-for="project in projects" :key="project.id">
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        <p class="text-gray-600">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="text-blue-500 mt-4 block">View Project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        { id: 1, title: 'Project One', description: 'A cool project.', link: '#' },
        { id: 2, title: 'Project Two', description: 'Another cool project.', link: '#' },
        // Add your projects here as you complete them
      ]
    };
  }
};
</script>

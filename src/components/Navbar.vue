<template>
  <header class="bg-white text-black p-4 shadow-lg">
    <nav class="container mx-auto flex justify-between items-center">
      <!-- Logo or Title with more customization -->
      <h1 class="text-3xl font-bold">AE-CH</h1>

      <!-- Navigation links -->
      <ul class="hidden sm:flex space-x-8 tracking-wide text-lg">
        <li>
          <router-link to="/" class="hover:text-gray-700" exact-active-class="text-black">
            About Me
          </router-link>
        </li>
        <li>
          <router-link to="/skills" class="hover:text-gray-700" exact-active-class="text-black">
            Skills
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="hover:text-gray-700" exact-active-class="text-black">
            Project
          </router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:text-gray-700" exact-active-class="text-black">
            Contact Me
          </router-link>
        </li>
      </ul>

      <!-- Resume Button -->
      <router-link to="/resume" class="hidden sm:block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
        Resume
        <span class="ml-2">⬇</span> <!-- Download icon (could be replaced by an actual icon library) -->
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* Customize any additional styles */
h1 {
  font-family: 'Fredoka', sans-serif;
}

nav ul li a {
  transition: color 0.3s ease;
}
</style>

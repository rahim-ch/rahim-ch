<template>
  <div id="app" class="">
    <!-- Navbar Component -->
    <Navbar />
    <!-- Main Content -->
    <main class="container mx-auto  ">
      <section id="hero" class="relative  bg-neutral-100 border-b-2 border-black overflow-hidden z-0" >
        <router-view />

      </section>
    </main>
    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';  // Make sure the path is correct
import Footer from './components/Footer.vue';  // Make sure the path is correct

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>

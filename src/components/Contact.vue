<template>
    <div class="bg-gray-900 text-white py-12 text-center">
      <h2 class="text-4xl font-semibold mb-8">Contact Me</h2>
      <form @submit.prevent="submitForm" class="max-w-lg mx-auto">
        <div class="mb-4">
          <input type="text" v-model="name" placeholder="Your Name" class="w-full px-4 py-2 bg-gray-800 rounded text-white" />
        </div>
        <div class="mb-4">
          <input type="email" v-model="email" placeholder="Your Email" class="w-full px-4 py-2 bg-gray-800 rounded text-white" />
        </div>
        <div class="mb-4">
          <textarea v-model="message" rows="4" placeholder="Your Message" class="w-full px-4 py-2 bg-gray-800 rounded text-white"></textarea>
        </div>
        <button type="submit" class="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        alert(`Thanks, ${this.name}! I'll get back to you soon.`);
        this.name = '';
        this.email = '';
        this.message = '';
      },
    },
  };
  </script>
  
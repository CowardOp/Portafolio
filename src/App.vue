<template>
  <div class="app">
    <!-- <PostContainer /> -->
    <Sidebar />

    <router-view />
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PostContainer from './components/PostContainer.vue';
import Sidebar from './components/Sidebar.vue';

</script>


<style scoped></style>

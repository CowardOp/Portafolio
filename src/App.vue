<template>

  <!-- <PostContainer /> -->
  <Sidebar />
  <!-- <PostContainer /> -->
  <RouterView />

</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';

</script>


<style scoped></style>

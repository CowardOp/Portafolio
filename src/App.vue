<template>
  <div class="overflow">
    <!-- <PostContainer /> -->
    <Sidebar />
    <!-- <PostContainer /> -->
    <RouterView />
  </div>
  <cintaFooter />
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '../src/components/Sidebar.vue';
import cintaFooter from '../src/components/cintaFooter.vue';
</script>

<style></style>

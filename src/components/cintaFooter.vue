<template>
    <footer class="cinta w-full absolute buttom-[-50px] h-[5vh] p-2">
        <img :src="imgUrl" alt="Dino-logo" class="w-[40px] absolute right-0" />
    </footer>
</template>

<script lang="ts" setup>
import imgUrl from '../assets/dino.png'
</script>

<style scoped>
.cinta {
    background-color: var(--dark);
}
</style>
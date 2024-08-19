<template>
    <footer class="cinta w-full absolute buttom-[-50px] p-7">
        <img :src="imgUrl" alt="Dino-logo" class="w-[40px] absolute right-2" />
    </footer>
</template>

<script lang="ts" setup>
import imgUrl from '../assets/dino.png'
</script>

<style scoped>
.cinta {
    display: flex;
    align-items: center;
    background-color: var(--dark);
}
</style>
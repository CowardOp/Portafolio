<template>
    <footer class="cinta w-full absolute buttom-[-50px] p-7">
        <img :src="imgUrl" alt="Dino-logo" class="w-[50px] absolute right-2" />
    </footer>
</template>

<script lang="ts" setup>
import imgUrl from '../img/logo-blanco.png'
</script>

<style scoped>
.cinta {
    display: flex;
    align-items: center;
    background-color: var(--dark);
}

img {
    transform: rotateY(180deg);
}
</style>
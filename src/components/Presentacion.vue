<template>
    <div class="services h-[95vh] flex flex-col py-5 pe-6 ms:ps-[100px] gap-8 justify-center ps-[80px]">
        <div>
            <h1 class="saludo xl:text-7xl md:text-6xl text-5xl text-white">Hola, Soy Brayan Casallas</h1>
            <h2 class="oficio xl:text-4xl md:text-4xl text-3xl text-white">
                Desarrollado Web - FrontEnd
            </h2>
        </div>
        <PostButton label="Ver CV" class="boton text-center w-32 text-2xl py-3" @click="downloadPdf"></PostButton>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import PostButton from './postButton.vue'

const downloadPdf = () => {
    const link = document.createElement('a')
    link.href = './src/My-CV.pdf'
    link.download = 'CV.pdf'
    link.click()
}
</script>

<style scoped>
.saludo,
.oficio {
    font-family: var(--playtone);
    font-weight: 400;
    animation: glow 1s linear infinite alternate;
}

.boton {
    font-family: var(--righteous);
    font-weight: 400;
}

@keyframes glow {
    from {
        text-shadow:
            0 0 2px #fff,
            0 0 4px #fff;
    }

    to {
        text-shadow:
            0 0 4px #fff,
            0 0 8px #fff;
    }
}
</style>
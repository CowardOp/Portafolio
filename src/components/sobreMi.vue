<template>
    <div class="services h-[95vh] flex justify-center items-center overflow-hidden ps-10 ">
        <div class="flip-container perspective relative bg-white w-[85%] xl:w-1/2 xl:h-3/4 h-[90%]" @click="flipCard">
            <div :class="['card', flipped ? 'flipped' : '']" class="w-full h-full">
                <div
                    class="card-front skeleton w-full h-full absolute flex flex-col gap-5 justify-center items-center rounded-xl shadow-xl degrade p-2">
                    <h1 class="text-6xl md:text-8xl text-white text-center">Quien soy?</h1>
                    <h2 class="text-white text-2xl hidden md:block">Click!</h2>
                    <h2 class="text-white text-2xl md:hidden block">Tap!</h2>
                </div>
                <div
                    class="card-back skeleton w-full h-full flex flex-col gap-2 md:gap-4 absolute justify-center items-center rounded-xl shadow-xl px-2 degrade overflow-auto">
                    <h2 class="md:text-4xl text-white text-center">Quien soy?</h2>
                    <p class="text-center md:text-2xl text-white">
                        Soy Desarrollador Web Frontend apasionado por transformar ideas en experiencias
                        digitales intuitivas y atractivas. Con experiencia en tecnologías como Vue.js,
                        Bootstrap, TypeScript, Tailwind CSS, HTML5, CSS3 y JavaScript, me especializo en crear
                        aplicaciones web dinámicas y responsivas que no solo cumplen con los requisitos
                        técnicos, sino que también ofrecen una excelente experiencia de usuario. Mi enfoque se
                        centra en la colaboración y el aprendizaje continuo, buscando siempre nuevas formas de
                        resolver problemas y mejorar la calidad del software. Me encanta ver cómo las ideas
                        cobran vida y cómo el diseño y la funcionalidad se fusionan para impactar positivamente
                        a los usuarios.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const flipped = ref(false)

function flipCard() {
    flipped.value = !flipped.value
}
</script>
<style scoped>
h2,
h1,
h4 {
    font-family: var(--playtone);
    font-weight: 400;
    animation: glow 0.6s infinite linear alternate;
}

p {
    font-family: var(--righteous);
    font-weight: 400;
}

.perspective {
    perspective: 1000px;
}

.flip-container {
    background-color: transparent;
}

.card {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card.flipped {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
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
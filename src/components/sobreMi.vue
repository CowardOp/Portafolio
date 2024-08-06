<template>
    <div
        class="about flex justify-center items-center h-[100vh] w-full pt-8 pe-2 ps-[70px] md:ps-[85px] md:p-4 md:flex justify-center items-center">
        <div class="relative w-full lg:w-4/5 xl:w-1/2 h-1/2 md:h-3/4 perspective bg-gray-800 rounded-2xl drop-shadow-2xl overflow-y-auto md:overflow-hidden "
            @click="flipCard">
            <div :class="['card', flipped ? 'flipped' : '']">
                <div
                    class="card-front p-8 absolute w-full md:h-[622px] backface-hidden flex items-center justify-center text-white flex-col gap-12 rounded-2xl">
                    <h1 class="text-4xl md:text-8xl">Quien Soy?</h1>
                    <h4 class="text-2xl md:text-4xl">Click!</h4>
                </div>
                <div
                    class="card-back absolute w-full  backface-hidden  flex flex-col gap-5 py-5 px-4 md:p-8 xl:gap-11 rounded-2xl">
                    <h2 class="text-white text-3xl md:text-5xl xl:text-6xl ">Quien soy?</h2>
                    <p class="md:text-3xl md:text-center text-white text-center">
                        Soy Desarrollador Web Frontend apasionado por transformar ideas en experiencias digitales
                        intuitivas y
                        atractivas. Con experiencia en tecnologías como Vue.js, Bootstrap, TypeScript, Tailwind CSS,
                        HTML5, CSS3
                        y JavaScript, me especializo en crear aplicaciones web dinámicas y responsivas que no solo
                        cumplen con los
                        requisitos técnicos, sino que también ofrecen una excelente experiencia de usuario. Mi enfoque
                        se centra en
                        la colaboración y el aprendizaje continuo, buscando siempre nuevas formas de resolver problemas
                        y mejorar la
                        calidad del software. Me encanta ver cómo las ideas cobran vida y cómo el diseño y la
                        funcionalidad se
                        fusionan para impactar positivamente a los usuarios.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const flipped = ref(false);

function flipCard() {
    flipped.value = !flipped.value;
}
</script>
<style scoped>
.about {
    background: rgb(2, 0, 36);
    background: linear-gradient(135deg, rgba(2, 0, 36, 1) 0%, rgba(8, 97, 73, 1) 66%, rgba(5, 150, 105, 1) 100%);

}

h2,
h1,
h4 {
    font-family: var(--playtone);
    font-weight: 400;
    animation: glow 1s infinite linear alternate;
}

p {
    font-family: var(--righteous);
    font-weight: 400;
}


.perspective {
    perspective: 1000px;
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
        text-shadow: 0 0 2px #fff, 0 0 4px #fff;
    }

    to {
        text-shadow: 0 0 4px #fff, 0 0 8px #fff;
    }
}
</style>

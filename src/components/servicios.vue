<template>
    <div
        class="services w-full flex flex-col h-[95vh] items-center pe-2 pb-2 ps-[70px] gap-5 md:gap-12 overflow-y-auto">
        <h1 class="text-white text-3xl md:text-6xl md:pt-8">Servicios</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-5 md:h-2/3 md:w-4/5">
            <div
                class="show flex flex-col gap-4 justify-center items-center col bg-gray-100 py-2 px-4 border border-gray-300 rounded-xl shadow-xl p-3 shadow-2xl md:relative">
                <div class="flex flex-col justify-center items-center text-black">
                    <h3 class="text-2xl font-bold mb-2 md:absolute md:top-3">Desarrollo FrontEnd</h3>
                    <p class="show-text md:w-4/3 text-center md:opacity-0 text-black top-[30%]">
                        Ofrezco la creación de interfaces atractivas y responsivas utilizando Vue.js, Bootstrap,
                        TypeScript y Tailwind CSS. Mi enfoque se centra en proporcionar una excelente
                        experiencia de usuario y escribir código eficiente y mantenible.
                    </p>
                </div>
                <img :src="dinofrontURL" alt="dino-front" class="show-img w-[150px] rounded-[50%] md:absolute" />
            </div>
            <div
                class="show flex flex-col gap-4 justify-center items-center col bg-gray-100 py-2 px-4 border border-gray-300 rounded-xl shadow-xl shadow-2xl md:relative">
                <img :src="dinoequipoURL" alt="dinoequipo" class="show-img w-[150px] rounded-[50%] md:absolute" />
                <div class="flex flex-col justify-center items-center text-black">
                    <h3 class="text-2xl font-bold mb-2 md:absolute md:top-3">Trabajo en equipo</h3>
                    <p class="show-text md:w-4/3 text-center md:opacity-0 top-[20%]">
                        Trabajo de manera colaborativa en equipos multidisciplinarios, asegurando una
                        comunicación fluida y efectiva para integrar el frontend con backend y otros componentes
                        del proyecto. Mi objetivo es contribuir al éxito del equipo, aportando soluciones
                        innovadoras y cumpliendo con las expectativas y necesidades de nuestros clientes.
                    </p>
                </div>
            </div>
            <div
                class="show flex flex-col gap-4 justify-center items-center col bg-gray-100 py-2 px-4 border border-gray-300 rounded-xl shadow-xl p-3 shadow-2xl md:relative">
                <img :src="responsive" alt="responsive" class="show-img w-[150px] rounded-[50%] md:absolute" />
                <div class="flex flex-col justify-center items-center text-black">
                    <h3 class="text-2xl font-bold mb-2 md:absolute md:top-3">Diseño responsive</h3>
                    <p class="show-text md:w-4/3 text-center md:opacity-0 top-[20%]">
                        Mi enfoque se centra en proporcionar soluciones que mejoren la accesibilidad y el
                        rendimiento, garantizando una experiencia de usuario coherente y fluida en cualquier
                        entorno. Trabajando de manera colaborativa en equipos multidisciplinarios, busco siempre
                        integrar el frontend con el backend y otros componentes del proyecto de manera
                        eficiente.
                    </p>
                </div>
            </div>
            <div
                class="show flex flex-col gap-4 justify-center items-center col bg-gray-100 py-2 px-4 border border-gray-300 rounded-xl shadow-xl p-3 shadow-2xl md:relative">
                <div class="flex flex-col justify-center items-center text-black">
                    <h3 class="text-2xl font-bold mb-2 md:absolute md:top-3">Marcos de trabajo ágiles</h3>
                    <p class="show-text md:w-4/3 text-center md:opacity-0 top-[20%]">
                        adaptabilidad y entrega continua de valor. Mi objetivo es contribuir al éxito del
                        equipo, aportando soluciones innovadoras y cumpliendo con las expectativas y necesidades
                        de nuestros clientes en un entorno de desarrollo ágil y dinámico.
                    </p>
                </div>
                <img :src="agil" alt="metodologias-agiles" class="show-img w-[150px] rounded-[50%] absolute" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import dinofrontURL from '../img/dinofront.jpg'
import dinoequipoURL from '../img/dinoequipo.jpg'
import responsive from '../img/responsive.jpg'
import agil from '../img/agil.jpg'
</script>

<style scoped>
h3,
h1 {
    font-family: var(--playtone);
    font-weight: 400;
    transition: all 0.8s ease;
}

p {
    font-family: var(--righteous);
    font-weight: 400;
    transition: all 0.8s ease;
}

img {
    transition: all 0.5s ease;
}

@media screen and (min-width : 1000px) {
    .show {
        height: 100%;
    }


    .show-text {
        text-align: center;
        position: absolute;
        min-height: 100%;
        width: 50%;
    }

    .show:hover .show-img {
        transform: translateX(-200px) rotateY(360deg);
    }

    .show:hover .show-text {
        opacity: 1;
        transform: translateX(140px);
    }

    .show:hover h3 {
        transform: translateX(140px);
    }

}

.overflow-y-auto::-webkit-scrollbar {
    background-color: transparent;
    width: 15px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    filter: blur(10px);
    background-color: #fafafa10;
    width: 15px;
}
</style>
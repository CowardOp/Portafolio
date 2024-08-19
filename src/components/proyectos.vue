<template>
    <div
        class="flex flex-wrap md:grid-cols-2 gap-y-8 gap-x-24 services w-full h-[95vh] ps-[90px] py-5 text-white overflow-y-auto">
        <!-- Pokeapi -->
        <div class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px]">
            <div class="card_landing relative w-full h-full shadow-xl z-[1] bg-white rounded">
                <img :src="imgPokemon" alt="pokeapi" class="w-full h-full rounded object-cover">
                <div class="card-title">
                    <h6 class="text-2xl text-white">API Buscar Pokémon</h6>
                </div>
            </div>
            <div
                class="card_info absolute w-[90%] h-[90%] left-0 bottom-0 right-0 top-0 m-auto p-4 z-[0] shadow-xl rounded-xl">
                <div class="p-1.5 border-b border-white">
                    <p class="text-xl ">API Buscar Pokemon</p>
                    <div class="flex gap-2.5">
                        <div class="flex gap-1.5">
                            <i class="fa-solid fa-cards-blank"></i>
                        </div>
                    </div>
                </div>


                <div class="mt-4">
                    <p class="title">Instrucciones:</p>
                    <ul class="py-2.5 px-4">
                        <li class="mb-1.5 text-sm">1.Indica Pokémon o Numero en la pokedex</li>
                        <li class="mb-1.5 text-sm">2.Clickea el icono de busqueda</li>
                        <li class="mb-1.5 text-sm">3.Lee y aprende sobre tu pokémon</li>

                    </ul>
                </div>

                <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                    <botonServicios link="https://github.com/CowardOp/pokeapi.git" buttonText="GitHub"
                        buttonClass="git-hub" />
                    <botonServicios link="https://cowardop.github.io/pokeapi/" buttonText="Ir a" buttonClass="page" />
                </div>
            </div>
        </div>
        <!-- Encriptador -->
        <div class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px]">
            <div class="card_landing relative w-full h-full shadow-xl z-[1] bg-white rounded">
                <img :src="encriptador" alt="pokeapi" class="w-full h-full rounded object-cover">
                <div class="card-title">
                    <h6 class="text-2xl text-black">Encriptador</h6>
                </div>
            </div>
            <div
                class="card_info uno absolute w-[90%] h-[90%] left-0 bottom-0 right-0 top-0 m-auto p-4 z-[0] shadow-xl rounded-xl">
                <div class="p-1.5 border-b border-white">
                    <p class="text-xl ">Encriptador</p>
                    <div class="flex gap-2.5">
                        <div class="flex gap-1.5">
                            <i class="fa-solid fa-cards-blank"></i>
                        </div>
                    </div>
                </div>


                <div class="mt-4">
                    <p class="title">Instrucciones:</p>
                    <ul class="py-2.5 px-4">
                        <li class="mb-1.5 text-sm">1.Ingresa un texto y das click en encriptar</li>
                        <li class="mb-1.5 text-sm">2.clickeas copiar</li>
                        <li class="mb-1.5 text-sm">3.pegas el texto</li>
                        <li class="mb-1.5 text-sm">4.clickeas desencriptar y listo</li>

                    </ul>
                </div>

                <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                    <botonServicios link="https://github.com/CowardOp/Encriptador.git" buttonText="GitHub"
                        buttonClass="git-hub" />
                    <botonServicios link="https://cowardop.github.io/Encriptador/" buttonText="Ir a"
                        buttonClass="page" />
                </div>
            </div>
        </div>
        <!-- Curriculum -->
        <div class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px] ">
            <div class="card_landing relative w-full h-full shadow-xl z-[1] bg-white rounded">
                <img :src="curriculum" alt="pokeapi" class="w-full h-full rounded object-cover">
                <div class="card-title">
                    <h6 class="text-2xl text-white">Curriculum</h6>
                </div>
            </div>
            <div
                class="card_info absolute w-[90%] h-[90%] left-0 bottom-0 right-0 top-0 m-auto p-4 z-[0] shadow-xl rounded-xl">
                <div class="p-1.5 border-b border-white">
                    <p class="text-xl ">Curriculum</p>
                    <div class="flex gap-2.5">
                        <div class="flex gap-1.5">
                            <i class="fa-solid fa-cards-blank"></i>
                        </div>
                    </div>
                </div>


                <div class="mt-4">
                    <p class="title">Instrucciones:</p>

                    <p class="py-2.5 px-4">
                        Creo tu propio curriculum basado en la infomacion que suministres
                    </p>
                </div>

                <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                    <botonServicios link="https://github.com/CowardOp/Curriculum.git" buttonText="GitHub"
                        buttonClass="git-hub" />
                    <botonServicios link="https://cowardop.github.io/Curriculum/" buttonText="Ir a" ññ
                        buttonClass="page" />
                </div>
            </div>
        </div>
        <!-- Juego Adivina el numero -->
        <div class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px] ">
            <div class="card_landing relative w-full h-full shadow-xl z-[1] bg-white rounded">
                <img :src="adivina" alt="pokeapi" class="w-full h-full rounded object-cover">
                <div class="card-title">
                    <h6 class="text-2xl text-white">Adivina el número</h6>
                </div>
            </div>
            <div
                class="card_info absolute w-[90%] h-[90%] left-0 bottom-0 right-0 top-0 m-auto p-4 z-[0] shadow-xl rounded-xl">
                <div class="p-1.5 border-b border-white">
                    <p class="text-xl ">Adivina el número</p>
                    <div class="flex gap-2.5">
                        <div class="flex gap-1.5">
                            <i class="fa-solid fa-cards-blank"></i>
                        </div>
                    </div>
                </div>


                <div class="mt-4">
                    <p class="title">Instrucciones:</p>

                    <p class="py-2.5 px-4">
                        Creo tu propio curriculum basado en la infomacion que suministres
                    </p>
                </div>

                <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                    <botonServicios link="https://github.com/CowardOp/Adivina-el-numero.git" buttonText="GitHub"
                        buttonClass="git-hub" />
                    <botonServicios link="https://cowardop.github.io/Adivina-el-numero/" buttonText="Ir a" ññ
                        buttonClass="page" />
                </div>
            </div>
        </div>
    </div>



</template>

<script lang="ts" setup>
import botonServicios from './botonServicios.vue'
import imgPokemon from '../assets/bucarPokemon.png'
import encriptador from '../assets/encriptador.png'
import curriculum from '../assets/curriculum.png'
import adivina from '../assets/adivina-el-numero.png'
</script>

<style scoped>
.services {
    font-family: var(--viga);
    font-weight: 400;
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

.card:hover .card_info {
    transform: scale(1.1);
    left: 100%;
}

.card:hover .card_info {
    left: 0;
    z-index: 2;
}

.card:hover .card-title {
    transform: scale(0);
}

.card_info {
    background: #05050550;
    backdrop-filter: blur(0.4rem);
    transform: scale(0);
    transition: all 0.5s ease;
}

.card_landing {
    background: linear-gradient(transparent 80%, #000), var(--i);
    background-position: center;
    background-size: cover;
}

.card-title {
    right: 0;
    padding: 15px 10px;
    align-items: center;
    display: flex;
    position: absolute;
    width: 95%;
    bottom: 10px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1rem);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 5px;

    transition: all 0.3s linear;
}

.git-hub {
    width: 80px;
    border: 1px solid #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.page {
    width: 80px;
    border: 1px solid #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

}

.git-hub:hover {
    transform: scale(1.2);
    background-color: #f34f29;
}

.page:hover {
    transform: scale(1.2);
    background-color: #179BAE;
}
</style>
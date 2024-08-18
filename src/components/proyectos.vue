<template>
    <div class="services w-full h-[95vh] p-[100px] text-white">
        <div class="card relative w-[350px] h-[400px] ">
            <div class="card_landing relative w-full h-full shadow-xl z-[100] bg-white">
                <img :src="imgPokemon" alt="pokeapi" class="absoluto w-full h-full">
                <h6 class="card-title absolute bottom-[10px] left-[10px] text-2xl text-black">Buscar Pokemon</h6>
            </div>
            <div
                class="card_info absolute w-[90%] h-[90%] left-0 bottom-0 right-0 top-0 m-auto p-4 bg-black z-[90] shadow-xl">
                <div class="p-1.5 border-b border-white">
                    <p class="text-xl ">Ceviche</p>
                    <div class="flex gap-2.5">
                        <div class="flex gap-1.5">
                            <i class="fa-regular fa-clock text-base"></i>
                            <p class="text-base">40 min</p>
                        </div>
                        <div class="flex gap-1.5">
                            <i class="fa-regular fa-user text-base"></i>
                            <p class="text-base">4</p>
                        </div>
                    </div>
                </div>


                <div class="mt-4">
                    <p class="title">Ingredientes:</p>
                    <ul class="py-2.5 px-4">
                        <li class="mb-1.5 text-sm">1 kilogramo de pescado</li>
                        <li class="mb-1.5 text-sm">1 cebolla cortada en julianas</li>
                        <li class="mb-1.5 text-sm">1 taza de caldo de pescado</li>
                        <li class="mb-1.5 text-sm">1 pizca de sal y pimienta</li>
                        <li class="mb-1.5 text-sm">10 limones</li>
                        <li class="mb-1.5 text-sm">1 ají amarillo picado</li>
                    </ul>
                </div>

                <div class="w-full flex gap-4">
                    <botonServicios link="https://github.com/CowardOp/pokeapi.git" buttonText="GitHub"
                        buttonClass="git-hub" />
                    <botonServicios link="https://cowardop.github.io/pokeapi/" buttonText="Ir a" buttonClass="page" />
                </div>
            </div>
        </div>
    </div>



</template>

<script lang="ts" setup>
import botonServicios from './botonServicios.vue'
import imgPokemon from '../assets/bucarPokemon.png'
</script>

<style scoped>
.card-title {
    background-color: transparent;
}

.card:hover .card_info {
    left: 100%;
}

.card_info {
    transition: all 0.5s ease;
}

.git-hub {
    width: 80px;
    border: 1px solid #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
}

.page {
    width: 80px;
    border: 1px solid #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
}
</style>
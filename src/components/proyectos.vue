<template>
    <div class="h-[95vh] services  ps-[70px] py-4 text-white overflow-y-auto">
        <div class="filter-buttons w-full flex flex-wrap gap-4 justify-center mb-4">
            <button @click="filterTech('all')" :class="{ active: selectedTech === 'all' }">Todo</button>
            <button @click="filterTech('css')" :class="{ active: selectedTech === 'css' }">CSS</button>
            <button @click="filterTech('html')" :class="{ active: selectedTech === 'html' }">HTML</button>
            <button @click="filterTech('js')" :class="{ active: selectedTech === 'js' }">JavaScript</button>
            <button @click="filterTech('react')" :class="{ active: selectedTech === 'react' }">React</button>
            <button @click="filterTech('api')" :class="{ active: selectedTech === 'api' }">API</button>
            <button @click="filterTech('tailwind')" :class="{ active: selectedTech === 'tailwind' }">Tailwind
                CSS</button>
        </div>
        <div class="flex flex-wrap gap-y-8 gap-x-24 w-full ">

            <!-- Pokeapi -->
            <div v-if="shouldShowCard('html', 'js', 'css', 'tailwind', 'api')"
                class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px]">
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
                            <li class="mb-1.5 mt-5 text-sm flex justify-center gap-3"><i
                                    class="fa-brands fa-js text-[2rem] text-yellow-400"></i><i
                                    class="fa-brands fa-html5 text-[2rem] text-orange-400"></i>
                                <i class="fa-brands fa-css3-alt text-[2rem] text-blue-500"></i><img :src="tailwind"
                                    alt="tailwind" class="w-[2rem]">
                            </li>

                        </ul>
                    </div>

                    <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                        <botonServicios link="https://github.com/CowardOp/pokeapi.git" buttonText="GitHub"
                            buttonClass="git-hub" />
                        <botonServicios link="https://cowardop.github.io/pokeapi/" buttonText="Ir a"
                            buttonClass="page" />
                    </div>
                </div>
            </div>
            <!-- Encriptador -->
            <div v-if="shouldShowCard('html', 'js', 'css')"
                class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px]">
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
                            <li class="mb-1.5 mt-3 text-sm flex justify-center gap-3"><i
                                    class="fa-brands fa-js text-[2rem] text-yellow-400"></i><i
                                    class="fa-brands fa-html5 text-[2rem] text-orange-400"></i>
                                <i class="fa-brands fa-css3-alt text-[2rem] text-blue-500"></i>
                            </li>

                        </ul>
                    </div>

                    <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                        <botonServicios link="https://github.com/CowardOp/Encriptador.git" buttonText="GitHub"
                            buttonClass="git-hub" />
                        <botonServicios link="https://el-encriptador.netlify.app/" buttonText="Ir a"
                            buttonClass="page" />
                    </div>
                </div>
            </div>
            <!-- Curriculum -->
            <div v-if="shouldShowCard()" class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px] ">
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
                        <div class="mb-1.5 mt-5 text-sm flex justify-center gap-3"><i
                                class="fa-brands fa-js text-[2rem] text-yellow-400"></i><i
                                class="fa-brands fa-html5 text-[2rem] text-orange-400"></i>
                            <i class="fa-brands fa-css3-alt text-[2rem] text-blue-500"></i>
                        </div>
                    </div>

                    <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                        <botonServicios link="https://github.com/CowardOp/Curriculum.git" buttonText="GitHub"
                            buttonClass="git-hub" />
                        <botonServicios link="https://cowardop.github.io/Curriculum/" buttonText="Ir a"
                            buttonClass="page" />
                    </div>
                </div>
            </div>
            <!-- Juego Adivina el numero -->
            <div v-if="shouldShowCard('html', 'js', 'css')"
                class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px] ">
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
                        <li class="mb-1.5 text-sm">1.Seleciona el numero maximo para adivinar</li>
                        <li class="mb-1.5 text-sm">2.Digita un numero</li>
                        <li class="mb-1.5 text-sm">3.Ve si es mayon o menor</li>
                        <li class="mb-1.5 text-sm">4.Click nuevo juego para reiniciar</li>
                        <li class="mb-1.5 mt-3 text-sm flex justify-center gap-3"><i
                                class="fa-brands fa-js text-[2rem] text-yellow-400"></i><i
                                class="fa-brands fa-html5 text-[2rem] text-orange-400"></i>
                            <i class="fa-brands fa-css3-alt text-[2rem] text-blue-500"></i>
                        </li>
                    </div>

                    <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                        <botonServicios link="https://github.com/CowardOp/Adivina-el-numero.git" buttonText="GitHub"
                            buttonClass="git-hub" />
                        <botonServicios link="https://cowardop.github.io/Adivina-el-numero/" buttonText="Ir a"
                            buttonClass="page" />
                    </div>
                </div>
            </div>
            <!-- Busca el clima -->
            <div v-if="shouldShowCard('js', 'css', 'tailwind', 'html', 'api')"
                class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px] ">
                <div class="card_landing relative w-full h-full shadow-xl z-[1] bg-white rounded">
                    <img :src="weather" alt="pokeapi" class="w-full h-full rounded object-cover">
                    <div class="card-title">
                        <h6 class="text-2xl text-white">Weather API</h6>
                    </div>
                </div>
                <div
                    class="card_info absolute w-[90%] h-[90%] left-0 bottom-0 right-0 top-0 m-auto p-4 z-[0] shadow-xl rounded-xl">
                    <div class="p-1.5 border-b border-white">
                        <p class="text-xl ">Weather API</p>
                        <div class="flex gap-2.5">
                            <div class="flex gap-1.5">
                                <i class="fa-solid fa-cards-blank"></i>
                            </div>
                        </div>
                    </div>


                    <div class="mt-4">
                        <li class="mb-1.5 text-sm">1.Seleciona una ciudad</li>
                        <li class="mb-1.5 text-sm">2.Selecciona un país</li>
                        <li class="mb-1.5 text-sm">3.Click al boton de busqueda</li>
                        <li class="mb-1.5 text-sm">4.Ve el clima de esa ciudad</li>
                        <li class="mb-1.5 mt-3 text-sm flex justify-center gap-3"><i
                                class="fa-brands fa-js text-[2rem] text-yellow-400"></i><i
                                class="fa-brands fa-html5 text-[2rem] text-orange-400"></i>
                            <i class="fa-brands fa-css3-alt text-[2rem] text-blue-500"></i>
                            <img :src="tailwind" alt="tailwind" class="w-[2rem]">
                        </li>
                    </div>

                    <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                        <botonServicios link="https://github.com/CowardOp/weather.git" buttonText="GitHub"
                            buttonClass="git-hub" />
                        <botonServicios link="https://weather-clima-api.netlify.app/" buttonText="Ir a"
                            buttonClass="page" />
                    </div>
                </div>
            </div>
            <!-- pokeapi 2.0 -->
            <div v-if="shouldShowCard('react', 'tailwind', 'api')"
                class="card relative md:w-[350px] md:h-[400px] w-[300px] h-[400px] ">
                <div class="card_landing relative w-full h-full shadow-xl z-[1] bg-white rounded">
                    <img :src="pokeApi2" alt="pokeapi" class="w-full h-full rounded object-cover">
                    <div class="card-title">
                        <h6 class="text-2xl text-white">Pokeapi 2.0</h6>
                    </div>
                </div>
                <div
                    class="card_info absolute w-[90%] h-[90%] left-0 bottom-0 right-0 top-0 m-auto p-4 z-[0] shadow-xl rounded-xl">
                    <div class="p-1.5 border-b border-white">
                        <p class="text-xl ">Pokeapi 2.0</p>
                        <div class="flex gap-2.5">
                            <div class="flex gap-1.5">
                                <i class="fa-solid fa-cards-blank"></i>
                            </div>
                        </div>
                    </div>


                    <div class="mt-4">
                        <li class="mb-1.5 text-sm">1.Clickea las flechas para pasar el pokemon</li>
                        <li class="mb-1.5 text-sm">2.Encuentra tu pokemon</li>
                        <li class="mb-1.5 text-sm">3.Click click en <i className="fa-solid fa-rotate-right"></i> para
                            ver estadisticas</li>
                        <li class="mb-1.5 text-sm">4.Clickea shiny para ver su version especial</li>
                        <li class="mb-1.5 mt-3 text-sm flex justify-center gap-3"><i
                                class="fa-brands fa-js text-[2rem] text-yellow-400"></i><i
                                class="fa-brands fa-html5 text-[2rem] text-orange-400"></i>
                            <i class="fa-brands fa-css3-alt text-[2rem] text-blue-500"></i>
                            <img :src="tailwind" alt="tailwind" class="w-[2rem]">
                            <img :src="viteJs" alt="viteJs" class="w-[2rem]">
                            <i class="anim text-[#61dbfb] fa-brands fa-react text-[2rem]"></i>
                        </li>
                    </div>

                    <div class="absolute bottom-8 w-[90%] flex gap-4 justify-center">
                        <botonServicios link="https://github.com/CowardOp/pokeapi-2.0.git" buttonText="GitHub"
                            buttonClass="git-hub" />
                        <botonServicios link="https://pokeapi-2-0.netlify.app/" buttonText="Ir a" buttonClass="page" />
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
import botonServicios from './botonServicios.vue'
import tailwind from '../img/tailwind.png'
import viteJs from '../img/Vite.js.png'
import weather from '../img/weather.png'
import imgPokemon from '../img/bucarPokemon.png'
import encriptador from '../img/encriptador.png'
import curriculum from '../img/curriculum.png'
import adivina from '../img/adivina-el-numero.png'
import pokeApi2 from '../img/pokeapi20.png'

// Propiedades de imagen y tecnología
const selectedTech = ref('all')


// Definición de la función filterTech
function filterTech(tech: string) {
    selectedTech.value = tech
}

// Definición de la función shouldShowCard
function shouldShowCard(...techs: string[]) {
    if (selectedTech.value === 'all') return true
    return techs.includes(selectedTech.value)
}
</script>

<style scoped>
.filter-buttons button {
    margin: 0 5px;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.filter-buttons button.active {
    background-color: #555;
    transform: scale(1.1);
}

.filter-buttons button:hover {
    background-color: #444;
}

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

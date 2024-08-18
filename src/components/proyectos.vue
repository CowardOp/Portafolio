<template>
    <div class="services flex w-full h-[95vh] pt-5 md:ps-[100px]">
        <section class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-5 md:h-2/3 md:w-2/3">
            <div class="col text-white">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere numquam voluptas iste
                    libero cupiditate officiis ab perspiciatis officia expedita ex, consectetur impedit eum
                    ratione obcaecati nam aut temporibus quasi ullam!
                </p>
                <div class="flex gap-3">
                    <botonServicios link="https://github.com/CowardOp/pokeapi.git" buttonText="GitHub"
                        buttonClass="git-hub" />
                    <botonServicios link="https://cowardop.github.io/pokeapi/" buttonText="Ir a" buttonClass="page" />
                </div>
                <h1>Buscar Pokemon</h1>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    </div>
    <cintaFooter />
</template>

<script lang="ts" setup>
import botonServicios from './botonServicios.vue'
</script>

<style scoped>
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
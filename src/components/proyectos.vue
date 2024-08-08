<template>
    <div class="services flex w-full h-[100vh] pt-5 md:ps-[100px]">
        <section class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-5 md:h-2/3 md:w-2/3">

            <div class="col">
                <h1>Buenas Tardes</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere numquam voluptas iste libero
                    cupiditate
                    officiis ab perspiciatis officia expedita ex, consectetur impedit eum ratione obcaecati nam aut
                    temporibus quasi ullam!</p>
                <div>
                    <botonServicios link="https://www.example.com" buttonText="Ir a Example"
                        buttonClass="my-custom-class" />
                    <botonServicios link="https://www.example.com" buttonText="Ir a Example" buttonClass="github" />
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </section>

    </div>
</template>

<script lang="ts" setup>
import botonServicios from './botonServicios.vue';
</script>


<style scoped>
.github {
    background-color: red;
}
</style>
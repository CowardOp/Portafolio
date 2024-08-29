<template>
    <aside :class="`${isExpanded ? 'is-expanded' : ''}`"
        class="h-full absolute flex flex-col overflow-hidden p-4 min-h-screen z-10">
        <div class="gap-3 mb-4 w-full">
            <img :src="logoURL" alt="Dino" class="w-[80px]" />
        </div>

        <div class="flex flex-end mb-4 relative">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3>Brayan Casallas <br> Desarrollador FrontEnd</h3>
        <div class="menu">
            <RouterLink to="/" class="button">
                <span class="material-icons">home</span>
                <span class="text">Inicio</span>
            </RouterLink>
            <RouterLink to="/about" class="button">
                <span class="material-icons">description</span>
                <span class="text">Sobre Mí</span>
            </RouterLink>
            <RouterLink to="/services" class="button">
                <span class="material-icons">lan</span>
                <span class="text">Servicios</span>
            </RouterLink>
            <RouterLink to="/proyects" class="button">
                <span class="material-icons">auto_stories</span>
                <span class="text">Proyectos</span>
            </RouterLink>
            <button class="button w-full" @click="toggleContact">
                <span class="material-icons">contacts</span>
                <span class="text">Contactos</span>
            </button>
            <div :class="{ 'contacts': true, 'visible': isContact }"
                class="contactos w-full flex flex-col pt-5 text-[2.5rem] gap-3 items-center absolute">
                <a href="https://wa.link/29knsg" target="_blank" class="whatsapp"><i
                        class="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.linkedin.com/in/brayan-alberto-casallas-rondon-3a84a21b4/" target="_blank"
                    class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/CowardOp" target="_blank" class="github"><i
                        class="fa-brands fa-github"></i></a>
            </div>
        </div>

        <div class="grow basis-0 shrink"></div>
    </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import logoURL from '../img/logo-blanco.png';

const isExpanded = ref<boolean>(localStorage.getItem('is_expanded') === 'true');
const isContact = ref<boolean>(localStorage.getItem('contacts') === 'true');

const toggleMenu = (): void => {
    isExpanded.value = !isExpanded.value;
    localStorage.setItem('is_expanded', isExpanded.value.toString());
};

const toggleContact = (): void => {
    isContact.value = !isContact.value;
    localStorage.setItem('contacts', isContact.value.toString());
};
</script>

<style scoped>
aside {
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    transition: 0.3s ease-in-out;
}

.menu-toggle {
    transition: 0.3s ease-in-out;
}

.menu-toggle .material-icons {
    font-size: 2rem;
    color: var(--light);
    transition: 0.2s ease-out;
}

.menu-toggle:hover .material-icons {
    color: var(--primary);
    transform: translateX(0.5rem);
    left: 0;
}

h3,
.button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.menu {
    margin: 0 -1rem;
}

.button {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    padding: 0.5rem 1rem;
}

.button .material-icons {
    font-size: 2rem;
    color: var(--light);
    transition: 0.2s ease-in-out;
}

.button .text {
    color: var(--light);
    transition: 0.2s ease-in-out;
}

.button:hover {
    background-color: var(--dark-alt);
}

.button:hover .material-icons,
.button:hover .text {
    color: var(--primary);
}

.button.RouterLink-exact-active {
    background-color: var(--dark-alt);
    border-right: 5px solid var(--primary);
}

.button.RouterLink-exact-active .material-icons,
.button.RouterLink-exact-active .text {
    color: var(--primary);
}

.footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.footer p {
    font-size: 0.875rem;
    color: var(--grey);
}

aside.is-expanded {
    width: var(--sidebar-width);
}

aside.is-expanded .menu-toggle {
    transform: rotate(-180deg);
}

aside.is-expanded h3,
aside.is-expanded .button .text {
    opacity: 1;
}

aside.is-expanded .button .material-icons {
    margin-right: 1rem;
}

.contactos {
    opacity: 0;
    position: absolute;
    /* Asegúrate de que el elemento esté posicionado de forma absoluta */
    left: 200px;
    transition: left 0.5s ease-in, opacity 0.5s ease-in;
}

.contactos.visible {
    opacity: 1;
    left: 0;
}

.whatsapp:hover {
    transform: scale(1.2);
    color: #25d366;
}

.linkedin:hover {
    transform: scale(1.2);
    color: #0077b5;
}

.github:hover {
    transform: scale(1.2);
    color: #f34f29;
}
</style>
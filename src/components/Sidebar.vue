<template>
    <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="logoURL" alt="Vue" />
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link to="/" class="button">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link to="/about" class="button">
                <span class="material-icons">description</span>
                <span class="text">About</span>
            </router-link>
            <router-link to="/team" class="button">
                <span class="material-icons">group</span>
                <span class="text">Team</span>
            </router-link>
            <router-link to="/contact" class="button">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/settings" class="button">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.png'

const isExpanded = ref<boolean>(localStorage.getItem("is_expanded") === "true")

const toggleMenu = (): void => {
    isExpanded.value = !isExpanded.value
    localStorage.setItem("is_expanded", isExpanded.value.toString())
}
</script>
<style scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: 0.2s ease-in-out;
}

.flex {
    flex: 1 1 0%;
}

.logo {
    margin-bottom: 1rem;
}

.logo img {
    width: 2rem;
}

.menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;
}

.menu-toggle {
    transition: 0.2s ease-in-out;
}

.menu-toggle .material-icons {
    font-size: 2rem;
    color: var(--light);
    transition: 0.2s ease-out;
}

.menu-toggle:hover .material-icons {
    color: var(--primary);
    transform: translateX(0.5rem);
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

aside.is-expanded .menu-toggle-wrap {
    top: -3rem;
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

aside.is-expanded .footer {
    opacity: 0;
}

@media (max-width: 1024px) {
    aside {
        position: absolute;
        z-index: 99;
    }
}
</style>

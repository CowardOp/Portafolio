<template>
    <a class="boton rounded-1" @click="$emit('click')">{{ buttonLabel }}</a>
</template>
<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
    name: 'PostButton',
    props: {
        label: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const { label } = toRefs(props)
        return {
            buttonLabel: label
        }
    }
})
</script>
<style scoped>
.boton {
    background: #1aab8a;
    color: #fff;
    border: none;
    position: relative;
    height: 60px;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
}

.boton:hover {
    background: #fff;
    color: #1aab8a;
}

.boton:before,
.boton:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
}

.boton:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
}

.boton:hover:before,
.boton:hover:after {
    width: 100%;
    transition: 800ms ease all;
}
</style>
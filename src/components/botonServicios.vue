<template>
    <a @click="navigateToLink" :class="buttonClass"> {{ buttonText }}</a>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

interface Props {
    link: string
    buttonText: string
    buttonClass?: string
}

const props = defineProps<Props>()

function navigateToLink() {
    window.open(props.link, '_blank')
}
</script>
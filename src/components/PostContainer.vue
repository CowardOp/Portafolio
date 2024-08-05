<template>
    <div class="w-full postcontenedor">

        <Presentacion />

        <separador />

        <sobreMi />

        <separador />

        <servicios />

    </div>




</template>
<script lang="ts" setup>
import servicios from './servicios.vue';
import separador from './separador.vue';
import sobreMi from './sobreMi.vue';
import Presentacion from './Presentacion.vue';
</script>

<style scoped>
.postcontenedor {
    background: rgb(2, 0, 36);
    background: linear-gradient(135deg, rgba(2, 0, 36, 1) 0%, rgba(8, 97, 73, 1) 66%, rgba(5, 150, 105, 1) 100%);
}
</style>
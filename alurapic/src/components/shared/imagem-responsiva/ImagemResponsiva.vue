<template>
    <img  class="imagem-responsiva" v-bind:src="url" v-bind:alt="titulo"/>
</template>



<script>
export default {
    props:['url','titulo']
}
</script>

<style scoped>
.imagem-responsiva{

    width: 100%;
  }
</style>
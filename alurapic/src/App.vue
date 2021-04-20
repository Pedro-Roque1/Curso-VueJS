<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto in fotos">
        <img v-bind:src="foto.url" v-bind:alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "AluraPic",
      fotos: [
        {
          url:
            "https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg",
          titulo: "cachorro",
        },
        {
          url:
            "https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg",
          titulo: "cão",
        },
      ],
    };
  },
}
</script>

<style>
</style>

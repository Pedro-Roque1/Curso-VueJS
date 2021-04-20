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
      fotos: []
    }
  },
  created() { // função chamada assim que o objeto for criado => lifecyclehooks
    let promisse = this.$http.get('http://localhost:3000/v1/fotos');//promessa de que vai buscar no determinado server
    promisse
      .then(resposta => resposta.json()) // para obter o resultado de uma prommisse uso o then()
      .then(fotos=> this.fotos = fotos, err => console.log(err + "não achei o endereço")); // o retorno da função acima vai ser armazenado no objeto fotos
  }
}
</script>

<style>
</style>

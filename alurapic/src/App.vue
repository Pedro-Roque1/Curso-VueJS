

<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotos">

            <meu-painel v-bind:titulo="foto.titulo">
              <img  class="imagem-responsiva" v-bind:src="foto.url" v-bind:alt="foto.titulo" />
            </meu-painel>
        
      </li>
    </ul>
  </div>
</template>


<script>
import Painel from './components/shared/painel/Painel.vue';
export default {
  components:{
    'meu-painel':Painel
  },
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
 .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
  .imagem-responsiva{

    width: 100%;
  }

</style>



<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" v-on:input="filtro=$event.target.value" placeholder="filtre por título">
    {{ filtro }}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro">

            <meu-painel v-bind:titulo="foto.titulo">
              <imagem-responsiva v-bind:url="foto.url" v-bind:titulo="foto.titulo"/>
              <botao 
              tipo="button" 
              rotulo='Remover' 
              @botaoAtivado="remove(foto)" 
              :confirmacao="true"
              estilo="perigo"/>
            </meu-painel>
        
      </li>
    </ul>
  </div>
</template>


<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
export default {
  components:{
    'meu-painel':Painel,
    'imagem-responsiva':ImagemResponsiva,
    'botao': Botao

  },
  data() {
    return {
      titulo: "AluraPic",
      fotos: [],
      filtro: '' 
    }
  },

  computed:{
    fotosComFiltro() {
      if(this.filtro) {
        /*filtrar*/
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto=>exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },
  methods: {
    remove(foto) {
        alert('Remover a foto!' + foto.titulo);
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
  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
  .filtro{
    width: 100%;
	  height: 35px;
	  margin-bottom: 10px;
  }

</style>

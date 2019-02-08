<template>
  <div class="container">
    <div class="row">
      <div v-for="(pokemon, index) in pokeList" class="col-md-3" :key="index">
        <div class="card" @click="irParaPokemon(pokemon.name)">
          <div class="card-body">
            <PokeImage :name="pokemon.name"/>
            <h5 class="card-title">{{ pokemon.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .card {
   margin-bottom: 20px;
 }
</style>

<script>
import PokeImage from '@/components/PokeImage'

export default {
  name: 'PokeList',
  components: {
    PokeImage
  },
  props: {
    pokeList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    irParaPokemon: function (name) {
      this.$router.push({
        name: 'pokemon',
        params: {
          name: name
        }
      })
    }
  }
}
</script>

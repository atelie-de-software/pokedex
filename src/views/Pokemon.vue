<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1><img :src="pokeImage" :alt="name"> {{name | capitalize}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div>
          <h3>Type:</h3>
          <span
            v-for="(type, index) in types" :class="`badge badge-${type.type.name}`"
            :key="index"
          >
            {{type.type.name}}
          </span>
        </div>
      </div>

      <div class="col-md-6">
        <h3>Golpes:</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="(pokemonMove, index) in moves" :key="index">
            {{ pokemonMove.move.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    text-align: left;
  }
  ul {
    li {
      text-align: left
    }
  }
  .badge {
    background-color: #eee;
    margin: 5px;
    &-poison {
      background-color: purple;
      color: white;
    }
    &-grass {
      background-color: green;
      color: white;
    }
  }
</style>

<script>
import axios from 'axios'

export default {
  name: 'PokemonInfo',
  data () {
    return {
      moves: [],
      name: '',
      pokeImage: '',
      types: ''
    }
  },
  methods: {
    getPokemon: function () {
      const name = this.$route.params.name
      const self = this
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(function (res) {
        const data = res.data
        console.log(data)
        self.types = data.types
        self.pokeImage = data.sprites.front_default
        self.name = data.name
        self.moves = data.moves
      })
    }
  },
  filters: {
    capitalize: function (value) {
      return value.replace(/\b\w/g, l => l.toUpperCase())
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getPokemon()
    })
  }
}
</script>

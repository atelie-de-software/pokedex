<template>
  <img :src="pokeImage" alt="">
</template>

<script>
import axios from 'axios'

export default {
  name: 'PokeImage',
  data () {
    return {
      pokeImage: ''
    }
  },
  props: {
    name: String
  },
  watch: {
    name: function (val, oldVal) {
      const self = this
      if (val !== oldVal) {
        self.pokeImage = val
        self.getImage()
      }
    }
  },
  methods: {
    getImage: function () {
      const self = this
      axios.get(`https://pokeapi.co/api/v2/pokemon/${this.name}`).then(function (res) {
        const data = res.data
        self.pokeImage = data.sprites.front_default
      })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getImage()
    })
  }
}
</script>

<style>

</style>

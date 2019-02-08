<template>
  <div class="home">
    <List :pokeList="pokeList"/>
    <div class="center-flex">
      <Paginate :count="count" :currentPage="parseInt(currentPage)"/>
    </div>
  </div>
</template>

<style scoped>
  .center-flex {
    display: flex;
    justify-content: center;
  }
</style>

<script>
// @ is an alias to /src
import axios from 'axios'
import List from '@/components/List'
import Paginate from '@/components/Paginate'

export default {
  name: 'home',
  computed: {
    count: function () {
      return this.$store.state.count
    },
    pokeList: function () {
      return this.$store.state.pokeList
    },
    currentPage: function () {
      return this.$store.state.currentPage
    }
  },
  components: {
    List,
    Paginate
  },
  mounted: function () {
    this.$nextTick(function () {
      if (this.$route.query.page) {
        this.$store.dispatch('loadPage', this.$route.query.page)
      } else {
        this.$store.dispatch('loadPage', 1)
      }
    })
  }
}
</script>

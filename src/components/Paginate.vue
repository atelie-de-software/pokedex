<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#" v-show="currentPage > 1" @click="previousPage()">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#" v-show="currentPage > 2" @click="goToPage(1)">1</a></li>
      <li class="page-item"><a class="page-link" href="#" v-show="currentPage > 2">...</a></li>
      <li class="page-item"><a class="page-link" href="#" v-show="currentPage > 1" @click="goToPage(currentPage - 1)">{{currentPage - 1}}</a></li>
      <li class="page-item"><a class="page-link" href="#">{{currentPage}}</a></li>
      <li class="page-item"><a class="page-link" href="#" v-if="currentPage < pages"  @click="goToPage(currentPage + 1)">{{currentPage + 1}}</a></li>
      <li class="page-item"><a class="page-link" href="#" v-if="currentPage < pages">...</a></li>
      <li class="page-item"><a class="page-link" href="#" v-if="currentPage < pages"   @click="goToPage(pages)">{{pages}}</a></li>
      <li class="page-item"><a class="page-link" href="#" v-if="currentPage < pages" @click="nextPage()">Next</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'paginate',
  props: {
    count: Number,
    currentPage: Number
  },
  computed: {
    pages: function () {
      return Math.ceil(this.count / 20)
    }
  },
  methods: {
    nextPage: function () {
      this.$store.dispatch('loadPage', this.currentPage + 1)
    },
    previousPage: function () {
      this.$store.dispatch('loadPage', this.currentPage - 1)
    },
    goToPage: function (pageNumber) {
      this.$store.dispatch('loadPage', pageNumber)
    }
  }
}
</script>

<style>

</style>

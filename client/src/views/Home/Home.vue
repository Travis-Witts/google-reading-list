<template>
  <div class="home">
    <h2 class="mt-5">Welcome to your Reading List, Search for popular books below!:</h2>
    <search-bar @search="search" :method="search" />
        <search-card
      v-for="book in searchBooks"
      :key="book.id"
      :authors="book.volumeInfo.authors"
      :description="book.volumeInfo.description"
      :img="book.volumeInfo.imageLinks.thumbnail"
      :title="book.volumeInfo.title"
      :link="book.volumeInfo.infoLink"
    />
  </div>
</template>

<script>
import SearchBar from '../../components/SearchBar/SearchBar.vue';
import SearchCard from '../../components/SearchCard/SearchCard.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    SearchBar,
    SearchCard
  },
  data() {
    return {
    searchBooks: [],
    }
  },
  methods: {
    search: async function(query) {
      console.log(query)
      const books = await axios.get('https://www.googleapis.com/books/v1/volumes',
      {
        params: {
          q: query,
          startIndex: 0,
          maxSize: 40,
          printType: 'books'
        }
      });
      console.log(books)
      this.searchBooks = books.data.items;
      console.log(this.searchBooks.target)
    }
  }
}
</script>

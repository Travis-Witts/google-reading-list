<template>
  <div class="home">
    <search-bar @search="search" :method="search" />
        <search-card
      v-for="book in searchBooks"
      :method="save"
      :key="book.id"
      :pkey="book.id"
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

document.title = "Google Books";

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
      
      const books = await axios.get('https://www.googleapis.com/books/v1/volumes',
      {
        params: {
          q: query,
          startIndex: 0,
          maxSize: 40,
          printType: 'books'
        }
      });
      console.log(books.data)
      this.searchBooks = books.data.items;
    },
    save: async function(body) {
      const {authors, description, img, title, link, pkey} = body;
      const bookBody = { authors, description, image: img, title, link, id: pkey };
      const newBook = await axios.post('/api/books', bookBody);
      console.log(newBook);
    }
  }
}
</script>

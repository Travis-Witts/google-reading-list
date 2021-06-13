<template>
  <div class="">
    <card
      v-for="book in savedBooks"
      :method="remove"
      :key="book._id"
      :pkey="book._id"
      :authors="book.authors"
      :description="book.description"
      :img="book.image"
      :title="book.title"
      :link="book.link"
    />
  </div>
</template>

<script>
import axios from "axios";
import Card from "../../components/SavedCard/SavedCard.vue";
export default {
  components: { Card },
  data() {
    return {
      savedBooks: [],
    };
  },
  async mounted() {
    const result = await axios.get("/api/books/");
    this.savedBooks = result.data;
  },
  methods: {
    remove: async function(id) {
      console.log(id);
      const deletedBook = await axios.delete(`/api/books/${id}`);
      console.log(deletedBook);
    },
  },
};
</script>

<template>
<div class="">
    <card
      v-for="book in savedBooks"
      :key="book._id"
      :authors="book.authors"
      :description="book.description"
      :img="book.img"
      :title="book.title"
      :link="book.link"
    />
  </div>
</template>

<script>
import axios from "axios";
import Card from "../../components/SavedCard/SavedCard.vue"
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
};
</script>
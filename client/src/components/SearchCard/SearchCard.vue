<template>
  <div class="card">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <h5 class="card-title">By{{ authors }}</h5>
      <img :src="img" />
      <p class="card-text">
        {{ description }}
      </p>
      <a v-bind:href="link" class="btn btn-warning">View On Google Books</a>
      <button class="btn btn-info">+ Save To Reading List</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    authors: Array,
    description: String,
    img: String,
    title: String,
    link: String,
  },
  methods: {
    search() {
      this.$emit("search");
    },
  },
};
</script>

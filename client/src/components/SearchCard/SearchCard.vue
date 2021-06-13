<template>
  <div :id="pkey" class="card">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <h5 class="card-title">
        By
        <p v-for="author in authors" :key="author">{{ author }}</p>
      </h5>
      <img :src="img" />
      <p class="card-text">
        {{ description }}
      </p>
      <div class="row">
        <button v-bind:href="link" class="btn btn-warning">
          View On Google Books
        </button>
        <button @click="save" class="btn btn-info">
          + Save To Reading List
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pkey: String,
    authors: Array,
    description: String,
    img: String,
    title: String,
    link: String,
    method: { type: Function },
  },
  methods: {
    save() {
      this.method(this);
    },
  },
};
</script>

<template>

  <div class="card mt-5">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <h5 class="card-title">By<p v-for="author in authors" :key="author">{{ author }}</p></h5>
      <img class="mb-4" :src="img" />
      <p class="card-text">
        {{ description }}
      </p>
      <div class="row">
                <button v-bind:href="link" class="btn btn-info">
          View On Google Books
        </button>
        <button @click="remove" class="btn btn-danger">Remove</button>
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
    remove() {
      this.method(this.pkey)
    }
  }
};
</script>

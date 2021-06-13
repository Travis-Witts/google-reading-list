<template>

  <div class="card">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <h5 class="card-title">By{{ authors }}</h5>
      <img :src="img" />
      <p class="card-text">
        {{ description }}
      </p>
      <button class="btn btn-danger">Remove</button>
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
};
</script>

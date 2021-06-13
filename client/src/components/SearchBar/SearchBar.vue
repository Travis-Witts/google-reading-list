<template>
  <div class="input-group mt-5 mb-3">
    <input
      type="text"
      class="form-control"
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon1"
      ref="input"
    />

    <button @click="search" class="btn btn-outline-secondary" type="button">Search</button>
  </div>
</template>

<script>
export default {
  props: {
    method: { type: Function },
  },
  methods: {
      search() {
          this.method(this.$refs.input.value)
      }
  }
};
</script>
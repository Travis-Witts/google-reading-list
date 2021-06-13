<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <div class="mx-auto order-0">
      <a class="navbar-brand" href="/"><i class="fab fa-google"></i>oogle <i class="fas fa-book"></i> Search</a>
</div>
      <ul class="nav justify-content-end">

        <router-link class="nav-link" to="/save"
          ><button class="btn btn-outline-info">Saved</button></router-link
        >
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
  body {
    background-color: rgb(180, 180, 180);
  }
</style>

<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="/">Google BookSearch</a>

      <ul class="nav justify-content-end">
        <router-link class="nav-link" to="/"
          ><button class="btn btn-outline-success">Home</button></router-link
        >

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

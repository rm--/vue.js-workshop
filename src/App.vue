<template>
  <v-app id="app">
    <div>
      <v-btn to="Search">Search</v-btn>
      <v-btn :to="{name: 'details', params: {id: '42'}}">Details</v-btn>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import drawingSearch from "@/views/drawingSearch";

export default {
  name: "app",
  components: {
    drawingSearch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

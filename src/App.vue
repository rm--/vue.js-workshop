<template>
  <div id="app">
    <drawing :value="drawingData"></drawing>
  </div>
</template>

<script>
import drawing from "./components/drawing";

export default {
  name: "app",
  components: {
    drawing
  },
  data () {
    return {
      drawingData: {
      date: "2018-01-05",
      extranumbers: [10, 7],
      numbers: [40, 2, 38, 45, 7]
    }
  }
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

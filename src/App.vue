<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
    margin: 0;
    padding: 0;
    outline: 0;
}
body {
    font-family: Hiragino Sans GB,Arial,Helvetica,\\5B8B\4F53,sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    display: block;
}

.bord,body {
    background-color: #f0f0f0
}
</style>

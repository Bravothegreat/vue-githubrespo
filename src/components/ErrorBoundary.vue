<script setup>
const handleRefresh = () => {
  window.location.reload()
}
</script>

<template>
  <div>
    <img src="../Images/went-wrong.jpg" alt="" />
    <h1>Something went wrong</h1>
    <button @click="handleRefresh">Refresh page</button>
  </div>
</template>

<style scoped>
img {
  display: flex;
  margin: 0 auto;
}
h1 {
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-block-start: 15px;
  padding: 10px;
}
</style>

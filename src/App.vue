<script setup >
import { RouterView} from 'vue-router'
import MyHeader from "./components/MyHeader.vue"
   
  
</script>

<template>

  <header>
    <div>
      <MyHeader />
    </div>
  </header>

<RouterView />
</template>

<style scoped>

</style>

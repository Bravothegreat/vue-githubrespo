<script >
import { RouterView} from 'vue-router'
import MyHeader from "./components/MyHeader.vue"

export default {
  components: {
    
    RouterView,
    MyHeader,
  }
}
</script>

<template>
  <MyHeader />
<RouterView />
</template>

<style scoped>

</style>

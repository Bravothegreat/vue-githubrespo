<script setup>
import gitHubIcon from './icons/gitHubIcon.vue';
</script>

<template>

  <nav>
    <div class="navbar">
      <gitHubIcon class="github" />
      <h1>Bravo's Github</h1>

    </div>

  </nav>

</template>

<style scoped>


.navbar {
  display: flex;
    align-items: center;
   gap: 10px;
    justify-content: center;
    background-color: #0a1828;
    text-align: center;
    padding: 20px;
     position: fixed;
     /* z-index: 99; */
     width: 105%;
     top: 0;
     text-align: center;


}

.navbar h1 {
  transition: transform 0.1s ease;
 
}

.navbar h1:hover {

  color: #dadede;
}



.github {
  font-size: 3rem;
}
</style>

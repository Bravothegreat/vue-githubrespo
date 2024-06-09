<script setup>
import gitHubIcon from './githubicons/gitHubIcon.vue';
import  {ref, onMounted} from 'vue'
import axios from 'axios'

const github = ref(null)

onMounted(async () => {
  const response = await axios.get('https://api.github.com/users/bravothegreat')
  github.value = response.data

})

</script>

<template>

  <header>
   
  <div v-if="github" class="header">
 
    
   <div>
    <h1>
      {{ github.name }}
      <gitHubIcon />
       
    </h1>
    <p>{{ github.bio }}</p>

   </div>

 <div class="users-details">
  <p>Number of Followers: {{ github.followers }}</p>
    <p>Public Respositories: {{ github.public_repos }}</p>
 </div>

  </div>

  </header>

</template>

<style scoped>


.header {
  display: flex;
  flex-direction: column;
    align-items: center;
   gap: 10px;
    justify-content: center;
    background-color: #0a1828;
    text-align: center;
    padding: 20px;
   
     width: 100%;
      border: 2px solid rgb(44, 43, 43);
   
      box-shadow: 10px 10px 20px 9px rgba(0, 0, 0, 0.4); 
     color: #bfa181; 
     border-radius: 15px;
    
}

.header h1 {
  transition: transform 0.1s ease;
  display: flex;
  gap: 12px;
  justify-content: center;
  /* margin: 0 auto; */
}

.users-details {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

@media screen and (max-width: 786px) {

  .header{
    display: flex;
    justify-content: center;
    align-items: center;
 
    width: 96%;

   
    position: fixed;
    top: 0;
  }
}




</style> 



 <script>

import BranchIcon from './icons/branchIcon.vue';
import ForkIcon from './icons/forkIcon.vue';
import StarIcon from './icons/starIcon.vue';
import WatchIcon from './icons/watchIcon.vue';

export default {
  data() {
    return {
      details: [],
      branches: [],
      deployments: [],
      loading: false,
    };
  },
  methods: {
    fetchData: function () {
      this.loading = true;
      fetch(`https://api.github.com/repos/Bravothegreat/${this.$route.params.id}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((details) => (this.details = details));

      fetch(`https://api.github.com/repos/Bravothegreat/${this.$route.params.id}/branches`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((branches) => (this.branches = branches));

        fetch(`https://api.github.com/repos/Bravothegreat/${this.$route.params.id}/deployments`, {
        headers: {
          Accept: 'application/json',
        },
      })

        .then((res) => res.json())
        .then((deployments) => {
          this.deployments = deployments;
          this.loading = false;
        });
    },
    homepage() {
      this.$router.push('/');
    },

    // erropage() {
    //   this.$router.push('/notfound');
    // },

  },
  mounted() {
    this.fetchData();
  },
   
  components: { StarIcon, WatchIcon, ForkIcon, BranchIcon },

};
</script>


<template>
  <div class="respo-details">
  
   
    <div>
      <h2>PROJECT NAME:</h2>
      <h2 >{{ details.name }}</h2>
      <div class="respo-list">
        <p><StarIcon class="staricon" /> Stars: {{ details.stargazers_count }}</p>
        <p><WatchIcon /> Watch: {{ details.watchers }}</p>
        <p><ForkIcon /> Forks: {{ details.forks }}</p>
        <p><BranchIcon /> Branches: {{ branches.length }}</p>
      </div>
      <p v-if="details.language === null">Main Language: none</p>
      <p v-else>Main Language: {{ details.language }}</p>
      <p v-if="deployments.length === 0">Live site: none </p>
      <p v-else>Live site: <a :href="`https://Bravothegreat.github.io/${details.name}`">Bravothegreat.io/{{ details.name }}</a></p>
      <p><a :href="`https://github.com/${details.full_name}`" target="_blank">View on Github</a></p>
    
    </div>

    <button class="home-button" @click="homepage">Back To Respository List</button>

    <!-- <button @click="erropage">Test Error</button> -->

  </div>
</template>


<style scoped>

*, 
 *::before, 
 *::after {
  box-sizing: border-box;
 }
 
 
  a{
    color: #bfa181;
  }
 
 button{
    margin: 10px;
    padding: 10px;
    background-color: #178582;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #bfa181;
 }

 h2{
  color: #178582;
  white-space: none;
  text-align: center;
 }

 .respo-details{
  margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 20px 9px rgba(0, 0, 0, 0.4);
    border: 2px solid rgb(65, 62, 62);
    width: 350px;
    padding: 7px 10px;
    border-radius: 5px;
    margin-top: 110px;
 } 

 .respo-details p{
  border: 2px solid grey;
  border-radius: 5px;
  padding: 6px;
  color: #bfa181;
 }

 .respo-list{
  color: #bfa181;
  display: flex;
  flex-direction: column;
  margin :0 auto;
  justify-content: center;
  align-items: center;
 }

</style>

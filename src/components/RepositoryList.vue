<script setup>



</script>

<script>
export default {
  data() {
    return {
      repoData: [],
      currentPage: 1,
      loading: false ,
      perPage: 4,
     
      selectedLanguage: '', 
      searchTerm: '', 
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      fetch(`https://api.github.com/users/Bravothegreat/repos`, {
        headers: {
          Accept: "application/json"
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.repoData = data;
          this.loading = false;
        });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
      }
    },
    handleLanguageFilter(language) {
      this.selectedLanguage = language;
      this.currentPage = 1; 
    },

    // errorboundary() {
    //   this.$router.push('/errorboundary');
    // }

  },
  mounted() {
    this.fetchData();
  },
  computed: {
    showMore() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      this.loading = false;
      return this.repoData.filter(repo => {
      
        if (this.selectedLanguage && repo.language !== this.selectedLanguage) {
          return false; 
        }
        

        if (this.searchTerm && !repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
          return false; // 
        }
        return true; 
      }).slice(start, end);
    },
    lastPage() {
      return Math.ceil(this.repoData.length / this.perPage);
    }
  }
}
</script>

<template>
   
   <!-- <div class="loading" v-if="loading">
       <p>loading..</p>
    
    </div> -->

    <div class="lds-hourglass" v-if="loading"></div>
 
  <div class="main">

    

 
  <div class="search-filter">
    
      <input class="input" type="text" placeholder="Search repository by name " v-model="searchTerm">


     
      <select  v-model="selectedLanguage" @change="handleLanguageFilter(selectedLanguage)">
        <option value="">Filter</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Typescript">Typescript</option>
        <option value="Nextjs">Next Js</option>
      </select>

    </div>

      
   
   
    <div class="respo-list">
   
      <div  v-for="repo in showMore" class="showrepo-details" :key="repo.id">
        <router-link :to="`/details/${repo.name}`">
          <h2 class="repo-name">{{ repo.name }}</h2>
        </router-link>
        <p >Language: {{ repo.language }}</p>
        <p>Start date & time: {{ repo.created_at }}</p>
        <p >Visibility: {{ repo.visibility }}</p>
      </div>

    </div >

    <div  class="pagination">
      <button class="page" :class="currentPage === 1 ? 'disabled' : ''" @click="prevPage">
       
        <span><</span> Previous 
      </button>

      <p class="current-page">{{ currentPage }}</p>

      <button class="page" :class="currentPage === lastPage ? 'disabled' : ''" @click="nextPage">
      
      Next <span>></span>
      </button>
    </div>
  </div>
   
 <!-- <button class="error-btn" @click="errorboundary">Test Error Boundary</button> -->

</template>


<style scoped>

 
 *, 
 *::before, 
 *::after {
  box-sizing: border-box;
 }

 .main{
  margin-top: 150px;
  /* z-index: 4; */
 }


 .loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  color: #178582;
  margin: auto 0;
 }



  
.lds-hourglass,
.lds-hourglass:after {
  box-sizing: border-box;
}
.lds-hourglass {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 100px;

  
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid currentColor;
  border-color: currentColor transparent currentColor transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}


 


 .respo-list{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  width: 90%;
  margin: 0 auto;
  
  
 }

 .page{
  width: 7rem;
  line-height: 40px;
  display: flex;
  gap: 10px;
   border-radius: 10px;
   outline: none;
   border: none;
   font-size: 0.9rem;
    justify-content: center;
    align-items: center;
   height: 30px;
   background-color: #178582;
    color: #bfa181;
  
 }

 .page span{
   font-size: 1.2rem;
     
 }

 .repo-name {
  text-decoration: none;
    font-size: 1rem;
    word-break: break-word;
    white-space: nowrap;
    color: #178582;
    
}

 .search-filter{
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
  gap: 10px;
  padding-block-start: 20px;
  margin-bottom: 20px;
  margin-top: -30px;
 
  
 }

 .search-filter input, select{
  padding: 10px 20px;
  border-radius: 10px;
   outline: none;
   border: 2px solid rgb(54, 53, 53);
 }

  .input:focus{
    border: 2px solid rgb(110, 108, 108);
  }



 .showrepo-details{
  border: 2px solid rgb(54, 52, 52);
    padding: 10px;
    border-radius: 15px;
    box-shadow: #7c8db5;
   justify-content: center;
  
   margin: 0 auto;
   box-shadow: 8px 9px 25px rgba(0, 0, 0, 0.5);
 }

 .showrepo-details p{
  color: #bfa181;
 }

 

 .pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.error-btn{
  display: flex;
 margin: 0 auto;
}

@media screen and (max-width: 786px) {
  .main{
    border: 2px solid rgb(53, 51, 51);
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 0 auto;
     height: 1009px;
     border-radius: 5px;
     padding-top: 30px;
     margin-top: 120px;
   
  }
}

</style>
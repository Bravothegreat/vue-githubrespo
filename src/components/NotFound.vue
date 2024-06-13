<script setup></script>

<template>
  <div class="Error">
    <div>
      <img class="reduced-img" src="../Images/404-error.avif" alt="" />
    </div>
    <h1>Oops! Page Not Found</h1>
    <p class="error-text">The page you are looking for doesn't exist</p>
  </div>

  <p><router-link :to="`/`">Go Back</router-link></p>
</template>

<style scoped>
.Error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-text {
  color: red;
}

.reduced-img {
  width: 400px;
  height: 400px;
}

h1 {
  color: red;
}

p {
  font-size: 1.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 10px;
  color: #bfa181;
  margin-block-start: 10px;
}

p a {
  color: #178582;
  font-size: 1.2rem;
  background-color: #bfa181;
  padding: 10px 15px;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 10px;
}
</style>

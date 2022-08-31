<template>
  <nav>
    <router-link to="/users">iShare</router-link>
  </nav>
  <div class="container">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

body, html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: #424C66;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 15px 0;
  color: #fff;
  background-color: #7DC999;
  font-weight: normal;
  font-size: 1.2rem;
}

button:hover,
button:active {
  background-color: #7D4441;
}

p {
  color: #424C66;
}

nav {
  background-color: #417D57;
  padding: 15px;
  text-align: center;
}

.router-link-active {
  text-decoration: none;
  color: #83FCB0;
  font-size: 4rem;
  font-weight: 500;
}

.container {
  margin: 25px auto;
  max-width: 1200px;
}
</style>

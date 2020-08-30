<template>
  <div id="app">
    <header class="header">
      <h1 class="logo">Diet Calculator</h1>
      <div class="nav">
        <ul>
          <li><router-link :to="paths.home">Home</router-link></li>
          <li><router-link :to="paths.products">Products</router-link></li>
          <li><router-link :to="paths.settings">Settings</router-link></li>
        </ul>
      </div>
    </header>
    <section class="content">
      <router-view />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { paths } from '@/router';
import { read } from '@/controllers/storage';

export default {
  name: 'App',
  created() {
    const {
      firstName,
      lastName,
      sex,
      age,
      weight,
      height,
      activity,
    } = read();

    this.saveUserParams({
      firstName,
      lastName,
      sex,
      age,
      weight,
      height,
      activity,
    });
  },
  data() {
    return {
      paths,
    };
  },
  methods: {
    ...mapActions(['saveUserParams']),
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  padding: 1rem;
  background-color: #7FAF7F;
  color: #fff;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header .logo {
  font-family: 'Courgette', cursive;
  font-size: 2rem;
}

.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.nav li {
  margin: 0 0.5rem;
}

.nav a {
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
}

.nav a.router-link-exact-active {
  color: #397939;
}

.content {
  height: calc(100vh - 100px);
  overflow: auto;
}
</style>

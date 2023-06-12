<script setup>
import { RouterView } from 'vue-router'
import SideMenu from './components/SideMenu.vue';
import oHeader from './components/Oheader.vue';
</script>

<template>
  <div class="container">
    <!-- <oHeader /> -->
    <SideMenu />

    <RouterView></RouterView>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
}

.container {
  height: 100%;
  margin-left: 15%;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
}

.text {
  height: 100%;
  text-align: center;
  gap: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.descarte-btn {
  width: 80%;
  padding: 0.6em;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  color: white;
  background-color: #23DE45;
  font-weight: bold;
}

h1 {
  width: 70%;
}
</style>

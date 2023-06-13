<script setup>
import { RouterView } from 'vue-router'
import SideMenu from './components/SideMenu.vue';
import oHeader from './components/Oheader.vue';
</script>

<template>
  <div class="container">
    <!-- <oHeader /> -->
    <SideMenu />
    <div class="content">
      <RouterView></RouterView>
    </div>
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
  background-color: #dddddd;
}
.content{
  width: 100%;
  height: 100%;
  padding: 1em;
}

h1 {
  width: 70%;
}
</style>

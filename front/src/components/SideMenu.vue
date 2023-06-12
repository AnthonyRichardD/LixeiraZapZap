<script setup>
  import {TrashIcon, HomeIcon,QuestionMarkCircleIcon} from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="sidebar">
    <div class="title">
      <abbr title="Nome BY chatGPT"><h2>LixeiraZapZap</h2></abbr>
      
    </div>
    <ul>
      <li><HomeIcon class="nav-icon"/>Home</li>
      <li><TrashIcon class="nav-icon" />Lixeiras</li>
      <li><QuestionMarkCircleIcon class="nav-icon" />Sla</li>
      <li><QuestionMarkCircleIcon class="nav-icon" />Sla</li>
    </ul>
  </div>
</template>

<style scoped>
abbr{
  text-decoration: none;

}
.title{
  cursor: default;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1em;
}
.sidebar {
  background-color: #1a262b;
  width: 15%;
  color: #a4a9ab;
  height: 100%;
  position: fixed;
  left: 0;
}
.nav-icon{
  margin-left: 0.5em;
  width: 2em;
}

ul{
  width: 100%;
  height: 100%;
}

li{
  display: flex;
  border-top: #0a171c 2px solid;
  align-items: flex-end;
  width: 100%;
  height: 5%;
  gap: 0.5em;
  cursor: pointer;
  margin-bottom: 1em;
}
li:hover{
  color: #ffffff;
}
</style>
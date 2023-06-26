<script setup>
  import {TrashIcon, HomeIcon,QuestionMarkCircleIcon} from '@heroicons/vue/24/outline'
  import {RouterLink} from 'vue-router'
  import {setCurrentNav, currentNav} from '../assets/stores'
  import router from '../router'


</script>

<template>
  <div class="sidebar">
    <div class="title">
      <abbr title="Nome BY chatGPT"><h2>LixeiraZapZap</h2></abbr>
    </div>
    <nav>
      <RouterLink  to="/" @click="setCurrentNav('/')" :class="[currentNav == '/' ? 'selected' : '']">
        <HomeIcon class="nav-icon"/>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/lixeiras" @click="setCurrentNav('/lixeiras')" :class="[currentNav == '/lixeiras' ? 'selected' : '']">
        <TrashIcon class="nav-icon" />
        <span>Lixeiras</span>
      </RouterLink>
      <RouterLink to="?">
        <QuestionMarkCircleIcon class="nav-icon" />
        <span>Sei la</span>
      </RouterLink>
      <RouterLink to="?">
        <QuestionMarkCircleIcon class="nav-icon" />
        <span>Sei la</span>
      </RouterLink>
      <RouterLink to="?">
        <QuestionMarkCircleIcon class="nav-icon" />
        <span>Sei la</span>
      </RouterLink>
    </nav>
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
  border-bottom: #0a171cbd 1px solid;
  padding: 1em 0;
  background: linear-gradient(-70deg, #9B5DE5, #FF847C);
}
.sidebar {
  box-shadow: #1a262b -1px -2px 10px;
  background-color: #1a262b;
  width: 15%;
  height: 100%;
  position: fixed;
  left: 0;
}
.nav-icon{
  margin-left: 1em;
  width: 2em;
}

nav{
  width: 100%;
  height: 100%;
}

a{
  height: 8%;
  text-decoration: none;
  display: flex;
  gap: 0.5em;
  border-top: #0a171c 1px solid;
  border-bottom: #0a171cbd 1px solid;
  align-items: center;
  width: 100%;
  cursor: pointer;
  color: #a4a9ab;
}
a:hover{
  color: #ffffff;
}

.selected{
  color: #ffffff;
}
</style>
<script setup>
import { DevicePhoneMobileIcon } from '@heroicons/vue/24/outline'
import router from '../router/index'
import {setCurrentNav, currentNav} from '../assets/stores'


</script>

<template>
  <div class="content">
    <div class="mobile">
      <img src="../assets/phone2.png" alt="telefone kkk" class="icon">
    </div>
    <div class="text">
      <div class="title">
        <div class="title-column">
          <h1 class="gradient-text">LixeiraZapZap</h1>
        </div>
      </div>
      <p style="font-weight: 500; font-size: 1.2em;">A lixeira que pensa por você. Eficiência e consciência ambiental unidas pela tecnologia da Internet das Coisas, revolucionando o descarte de resíduos.</p>
      <div class="btn" @click="[router.push('/lixeiras'), setCurrentNav('/lixeiras')]" >Acompanhar Lixeiras</div>
    </div>
  </div>
</template>

<style scoped>
div.btn{
  margin-top: 1em;
  text-align: center;
  padding: 0.5em;
  width: 100%;
  color: white;
  cursor: pointer;
  font-weight: 700;
  border-radius: 0.3em;
  background: linear-gradient(80deg, #9B5DE5, #FF847C);
  box-shadow: 1px 2px 5px #8a8888;
}

.gradient-text {
  background: linear-gradient(to right, #9B5DE5, #FF847C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title{
  display: flex;
  height: fit-content;
}
.title-column{
  height: 100%;
}

div.content{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

div.mobile{
  display: flex;
  justify-content: center;
  align-items: center ;
  width: 50%;
  height: 100%;
}
div.text{
  cursor: default;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

h1 {
  font-size: 3em;
}

.icon {
  height: 80%;
  
}
</style>
<script setup>
import router from '../router'
import { ClockIcon, MapPinIcon, TrashIcon, Battery100Icon } from '@heroicons/vue/24/outline'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
import { computed, ref } from 'vue';


const firebaseConfig = {
  apiKey: "AIzaSyAzgf2lG84oqYkh2oqhuqn7s-M9YB1chiE",
  authDomain: "my-first-project-29ac4.firebaseapp.com",
  projectId: "my-first-project-29ac4",
  storageBucket: "my-first-project-29ac4.appspot.com",
  messagingSenderId: "695842208309",
  appId: "1:695842208309:web:850204c3342342c6f3cf7c",
  measurementId: "G-TM4RBE2DBD"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const device = ref({volume:0});

const unsub = onSnapshot(doc(db, "Devices", `${router.currentRoute.value.params.id}`), (doc) => {
  console.log("Current data: ", doc.data());
  device.value = doc.data()
  device.value.volume = 100 - doc.data().volume
});

function getTrashColor (device) {
  if (device) {
    const volume = device.volume;
    const color = ref("");
    if (volume < 25) {
      color.value = 'green';
    }else if (volume > 50 && volume != 90){
      color.value = 'orange';
    }else{
      color.value = 'red';
    }
    return color.value
  }
}

</script>

<template>
  <div class="content">

    <div class="data-wrapper">
      <div class="device-data">
        <div class="icon-wrapper">
          <MapPinIcon class="device-icon" />
        </div>
        <div class="info-wrapper">
          <span class="title">Local da Lixeira</span>
          <p>{{ device.local }}</p>
        </div>
      </div>
      <div class="device-data">
        <div class="icon-wrapper">
          <ClockIcon class="device-icon" />
        </div>
        <div class="info-wrapper">
          <span class="title">Ultima Atualização</span>
          <p>{{ device.horario }}</p>
        </div>
      </div>
      <div class="device-data">
        <div class="icon-wrapper">
          <Battery100Icon class="device-icon" />
        </div>
        <div class="info-wrapper">
          <span class="title">Bateria</span>
          <p>100%</p>
        </div>
      </div>
    </div>
    <div class="vol">
      <h1>Capacidade {{ device.volume }}%</h1>
      <TrashIcon :style="{color: getTrashColor(device)}"/>
      <div v-if="device.volume >= 90" class="warn">
        <span class="warn-text">Limite Atingido. Solicitando Coleta.</span>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" :style="{ height: device.volume + '%' }"></div>
    </div>
  </div>
</template>

<style scoped>
div.vol {
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: tomato; */
}

div.vol h1 {
  color: #1a262b;
}

.progress {
  display: flex;
  position: relative;
  width: 10%;
  background-color: #ccc;
  box-shadow: 2px 4px 5px #0000007c;
}

.progress-bar {
  transition: ease-in-out 400ms;
  align-self: flex-end;
  width: 100%;
  background: linear-gradient(to top, #9B5DE5, #FF847C);
}


div.icon-wrapper {
  text-align: center;
  width: 100%;
  height: 50%;
}

.title {
  font-size: 1.2em;
}

div.content {
  display: flex;
  width: 100%;
  height: 100%;
}

div.info-wrapper {
  text-align: center;
}

div.data-wrapper {
  /* background-color: red; */
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

div.device-data {
  width: 100%;
  height: 33%;
  color: white;
  background: #1a262b;
  border-radius: 0.1em;
}
.device-icon {
  height: 100%;
}
.warn{
  text-align: center;
  color: #1a262b;
  font-weight: 700;
  width: 100%;
  padding: 0.3em;
  border-radius: 0.2em;
  font-size: 1em;
}

.warn-text{
  width: 100%;
  font-size: 2em;
}
</style>
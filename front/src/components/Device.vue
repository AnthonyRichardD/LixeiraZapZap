<script setup>
import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot, collection, doc } from "firebase/firestore";
import { ref} from 'vue';
import { TrashIcon } from '@heroicons/vue/24/outline';

const firebaseConfig = {
  apiKey: "AIzaSyAzgf2lG84oqYkh2oqhuqn7s-M9YB1chiE",
  authDomain: "my-first-project-29ac4.firebaseapp.com",
  projectId: "my-first-project-29ac4",
  storageBucket: "my-first-project-29ac4.appspot.com",
  messagingSenderId: "695842208309",
  appId: "1:695842208309:web:850204c3342342c6f3cf7c",
  measurementId: "G-TM4RBE2DBD"
}

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const deviceCollection = collection(db, 'Devices');

let devices = ref([]);
onSnapshot(deviceCollection, (deviceSnapshot) => {
  devices.value = deviceSnapshot.docs.map(doc => doc.data());

});

const getTrashColor = (device) => {
  if (device) {
    const volume = device.volume;
    const color = ref("");
    if (volume > 75) {
      color.value = 'green';
    }else if (volume > 50){
      color.value = 'yellow';
    }else if (volume > 25){
      color.value = 'orange';
    }else{
      color.value = 'red';
    }
    return color.value
  }
}
</script>

<template>
  <div class="device-wrapper" v-for="device in devices" @click="$router.push(`lixeira/${device.topic}`)">
    <div>
      <TrashIcon :style="{color: getTrashColor(device)}" class="icon" />
    </div>
    <div>
      <h1>Local: {{ device.local }}</h1>
      <h2>Capacidade: {{ device.volume }}</h2>
    </div>
  </div>
</template>


<style scoped>
div.device-wrapper {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 30%;
  border-radius: 0.5em;
  box-shadow: #1a262b 0px 0px 8px;
  background: #e0e0e0;
}

.icon {
  width: 10em;
}

</style>
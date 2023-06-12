<script setup>
import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot, collection, doc } from "firebase/firestore";
import { reactive, ref } from 'vue';
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


</script>

<template>
  <div class="device-wrapper" v-for="device in devices">
    <div>
      <TrashIcon class="icon" />
    </div>
    <div>
      <h3>Device: {{ device.MAC }}</h3>
      <p>Volume: {{ device.volume }}</p>
    </div>
  </div>
</template>


<style scoped>
div.device-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border: 1px solid;
  height: 25%;
}

.icon {
  width: 10em;
}
</style>
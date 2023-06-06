<script setup>
import {initializeApp} from 'firebase/app';
import { getFirestore, onSnapshot, collection, doc } from "firebase/firestore";
import { reactive, ref } from 'vue';


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
    devices.value = []
    deviceSnapshot.docs.forEach(device => devices.value.push(device.data()));
});


</script>

<template>
    <div class="content-wrapper">
        <h1>Device</h1>
        <div class="device-wrapper">
            <div v-for="device in devices">
                <h3>Device: {{device.MAC}}</h3>
                <p>Volume: {{ device.volume }}</p>
            </div>
        </div>
    </div>

</template>


<style scoped>
    div.content-wrapper{
        width: 100%;
        height: 100%;
    }


</style>
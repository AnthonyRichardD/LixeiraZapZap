<script setup>
import { RouterView } from 'vue-router'
/* 
export default {
  data() {
    return {
      deviceList: null,
      loading: false,
    };
  },
  methods: {
    updateDevice() {
      const deviceCollection = collection(db, 'Devices');
      onSnapshot(deviceCollection, (deviceSnapshot) => {        
        this.deviceList = deviceSnapshot.docs.map(doc => doc.data());
        console.log(this.deviceList);
      });
    },
  },
}; */
</script>

<template>
  <div class="container">
<!--     <div class="text">
    <h1>Acompanhe o progresso da sua lixeira</h1>
    <button @click="updateDevice()" class="descarte-btn">Acompanhar</button>
    <div>
      <p v-if="deviceList">
        <ul>
          <li v-for="device in deviceList" :key="device.topic">
            <span>{{ device.topic }}:</span> {{ device.volume }}
          </li>
        </ul>
      </p>
      <p v-else></p>
    </div>
    </div> -->
  <DeviceView /> 
  <RouterView></RouterView> 
  </div> 
</template>

<style scoped>
html, body {
  height: 100%;
}

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

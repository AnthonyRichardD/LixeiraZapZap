<script setup>
  import Device from '../components/Device.vue';
</script>

<template>
  <div class="content">
    <h1>Lixeiras Ativadas</h1>
      <div class="devices-wrapper">
        <Device />
      </div>
  </div>
</template>

<style scoped>
  div.content{
    color:#1a262b;
    width: 100%;
    height: 100%;
  }
  div.devices-wrapper{
    display: flex;
    gap: 1em;
    margin-top: 2em;
  }

</style>
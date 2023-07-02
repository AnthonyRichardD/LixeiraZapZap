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
  h1{
    color: #1a262b;
    font-size: 3em;
    margin-bottom: 2%;
    text-align: center;
  }
  div.content{
    width: 100%;
    height: 100%;
  }
  div.devices-wrapper{
    display: grid;
    place-items: center;
    gap: 2em;
    grid-template-columns: repeat(2,auto);
  }

</style>
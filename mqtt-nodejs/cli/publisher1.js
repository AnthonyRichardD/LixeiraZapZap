import mqtt from 'mqtt'
import { devices } from './device.js';

const client = mqtt.connect('mqtt://localhost'); // Conectando ao broker MQTT


client.on('connect', () => {
  console.log('Conectado ao broker MQTT');
  // Publicando uma mensagem a cada 10 segundo

  const interval = setInterval(() => {
    let lixeiraDisponivel = true
    devices.forEach((device)=>{
      const lixo = Math.floor(Math.random() * 5) + 1;
      
      device.volume -= lixo;

      if (device.volume < 10) {
        device.volume = 10;
      }

      const message = JSON.stringify(device);
      client.publish(`Devices/${device.topic}`,message);
      console.log(`\n Device MAC: ${device.MAC} \n Mensagem enviada: ${message}`)

      if (device.volume !== 10) {
        lixeiraDisponivel = false;
      }

    });

    if (lixeiraDisponivel) {
      console.log("lixeiras Bloqueadas")
      clearInterval(interval);
    }

  }, 5000);
});

// Lidando com a desconexão
client.on('close', () => {
  console.log('Desconectado do broker MQTT');
});
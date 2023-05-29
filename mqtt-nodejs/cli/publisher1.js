const mqtt = require('mqtt');

// Conectando ao broker MQTT
const client = mqtt.connect('mqtt://localhost');

// Lidando com a conexão estabelecida
client.on('connect', () => {
  console.log('Conectado ao broker MQTT');
  let lastMassage = 0
  // Publicando uma mensagem a cada 10 segundo
  setInterval(() => {
    lastMassage++
    const message = lastMassage.toString();
    
    client.publish('sensor1/message', message);
    client.publish('sensor2/message', message);
    console.log('Mensagem publicada:', message);
  }, 10000);
});

// Lidando com a desconexão
client.on('close', () => {
  console.log('Desconectado do broker MQTT');
});
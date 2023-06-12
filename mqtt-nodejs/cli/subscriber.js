import mqtt from 'mqtt';
import { setDeviceData, getDevice } from './dataBase.js';
const client = mqtt.connect('https://broker.hivemq.com:1883'); // Substitua 'localhost' pelo endereço do seu broker MQTT, se necessário
const topics = ['Devices/Device1','Devices/Device2']

client.on('connect', () => {
  console.log('Conectado ao broker MQTT');
  client.subscribe(topics, (err) => {
    if (err) {
      console.error('Erro ao se inscrever no tópico:', err);
    } else {
      console.log('Inscrito no tópico');
    }
  });
});

// chegada de mensagens
client.on('message', (topic, message) => {
  //console.log(`Mensagem no topico [${topic}]: ${message}`);
  console.log(JSON.parse(message))
  setDeviceData(JSON.parse(message))
});

// Lidando com a desconexão
client.on('close', () => {
  console.log('Desconectado do broker MQTT');
});
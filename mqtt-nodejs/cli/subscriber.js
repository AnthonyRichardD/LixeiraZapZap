import mqtt from 'mqtt';
import { setDeviceData, getDevice } from './dataBase.js';
import { sendMessage } from './telegram.js';
const client = mqtt.connect('https://broker.hivemq.com:1883'); // Substitua 'localhost' pelo endereço do seu broker MQTT, se necessário
const topics = ['Devices/Device1','Devices/Device2']

client.on('connect', () => {
  console.log('Conectado ao broker MQTT');
  client.subscribe(topics, (err) => {
    if (err) {
      console.error('Erro ao se inscrever no tópico:', err);
    } else {
      console.log('Inscrito nos tópicos: ', topics);
    }
  });
});

// chegada de mensagens
client.on('message', (topic, message) => {
  //console.log(`Mensagem no topico [${topic}]: ${message}`);
  let device = JSON.parse(message)
  console.log(device.volume);
  if(device.volume <= 10){
    sendMessage(`A lixeira localizada no ${device.local} atingiu sua capacidade máxima por volta de ${device.horario} e precisa ser esvaziada o mais rápido possível.`);
  } 
  setDeviceData(JSON.parse(message))
});

// Lidando com a desconexão
client.on('close', () => {
  console.log('Desconectado do broker MQTT');
});
import mqtt from 'mqtt';
import { setDeviceData, getDevice } from './dataBase.js';
import { sendMessage } from './telegram.js';
const client = mqtt.connect('https://broker.hivemq.com:1883'); // Substitua 'localhost' pelo endereço do seu broker MQTT, se necessário
const topics = ['Devices/Device1','Devices/Device2','Devices/Device3']

function getTime(){
  let data = new Date();  
  let hora = data.getHours();
  let min = data.getMinutes();
  let sec = data.getSeconds();
  
  return  `${hora}:${min}:${sec}`
}

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
  let device = JSON.parse(message);
  device.horario = getTime();
  console.log(device.volume);
  if(device.volume <= 10){
    sendMessage(`A lixeira localizada no ${device.local} atingiu sua capacidade máxima por volta de ${device.horario} e precisa ser esvaziada o mais rápido possível.`);
  } 
  setDeviceData(device)
  console.log(device);
});

// Lidando com a desconexão
client.on('close', () => {
  console.log('Desconectado do broker MQTT');
});

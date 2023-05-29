const mqtt = require('mqtt');

// Conectando ao broker MQTT
const client = mqtt.connect('mqtt://localhost'); // Substitua 'localhost' pelo endereço do seu broker MQTT, se necessário
    const topics = ['sensor1/message','sensor2/message']
// Lidando com a conexão estabelecida
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

// Lidando com a chegada de mensagens
client.on('message', (topic, message) => {
  console.log(`Nova mensagem recebida no topico ${topic}`);
  console.log('Mensagem:', message.toString());
});

// Lidando com a desconexão
client.on('close', () => {
  console.log('Desconectado do broker MQTT');
});
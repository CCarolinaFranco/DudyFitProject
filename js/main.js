"use strict";

console.log("holis");

const trainers = [
  { name: "A", reputation: 4.5, slots: 1 },
  { name: "B", reputation: 3.2, slots: 4 },
  { name: "C", reputation: 1.2, slots: 3 },
  { name: "D", reputation: 3.4, slots: 2 },
];

const clients = [
  { name: "q", importance: 2.6 },
  { name: "r", importance: 3.7 },
  { name: "s", importance: 8.5 },
  { name: "t", importance: 9.7 },
  { name: "u", importance: 2.6 },
  { name: "v", importance: 4.7 },
  { name: "w", importance: 5.6 },
  { name: "x", importance: 3.7 },
  { name: "y", importance: 8.1 },
  { name: "z", importance: 2.5 },
];

const trainerInformation = [];

function assignClients(trainers, clients) {
  clients.sort((a, b) => b.importance - a.importance);

  for (const client of clients) {
      trainers.sort((a, b) => b.reputation - a.reputation);

      const availableTrainer = trainers.find(trainer => trainer.slots > 0);

      if (availableTrainer) {
          availableTrainer.clients = availableTrainer.clients || [];
          availableTrainer.clients.push(client.name);
          availableTrainer.slots = availableTrainer.slots - 1;
      }
  }
}
assignClients(trainers, clients);

trainers.forEach(trainer => {
  const info = `Trainer ${trainer.name} has clients: ${trainer.clients ? trainer.clients.join(', ') : 'None'}`;
  trainerInformation.push(info);
});
console.log(trainerInformation)

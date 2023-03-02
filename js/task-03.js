const clients = ["Pyton", "C++", "C#", "PHP"];
const client = "Java Script";
const clientToFind = clients.includes(client);

if (clientToFind) {
  console.log(`Значення "${client}" в списку є.`);
} else {
  console.log(`Значення "${client}" в списку немає, додаємо в масив.`);
  clients.push(client);
}
console.table(clients);

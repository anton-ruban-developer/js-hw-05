const clients = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];
console.table(clients);

for (let client of clients) {
  client = client.slice(2);
  console.table(client);
}
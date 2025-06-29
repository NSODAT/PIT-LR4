const http = require('http');

const port = process.env.PORT || 3000;
const responseText = process.env.RESPONSE || "Default Pong";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${responseText}\n`);
});

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
  console.log(`Ответ сервера: "${responseText}"`);
});

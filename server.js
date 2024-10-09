const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Menggunakan db.json sebagai database
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // Railway akan menentukan port

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

import { webSocketServer } from "ws";
import { client } from "repo/db/client";

const server = new webSocketServer({
  port: 3001,
});

server.on("connection", (socket) => {
  client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.send("Hi there you are cn=onnected to the server");
});

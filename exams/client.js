var ws = new WebSocket("ws://localhost:591/");
ws.onmessage = function(message) {
  console.log(message.data);
};
ws.onopen = function() {
  ws.send("Hello, Websocket!");
};

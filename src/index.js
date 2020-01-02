window.addEventListener("load", init, false);

function init() {
  websocket = new WebSocket("wss://echo.websocket.org/");

  websocket.addEventListener("open", function(evt) {
    writeToScreen("CONNECTED");

    websocket.send("WebSocket rocks");

    writeToScreen("SENT: " + "WebSocket rocks");
  });

  websocket.addEventListener("message", function(evt) {
    writeToScreen("RESPONSE: " + evt.data);

    websocket.close();
  });

  websocket.addEventListener("close", function(evt) {
    writeToScreen("DISCONNECTED");
  });

  websocket.addEventListener("error", function(evt) {
    writeToScreen("ERROR:" + evt.data);
  });
}

function writeToScreen(message) {
  var output = document.getElementById("output");
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

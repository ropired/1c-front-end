var express = require("express");
var app = express();

app.get("/", function(request, response) {
  var str = request.query.str;
  response.send("" + str.length);
});

app.listen(591);

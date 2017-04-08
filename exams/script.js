var express = require("express");
var app = express();

app.get("/getlength", function(request, response) {
  var string = request.query.string;
  response.send(" " + string.length);
});

app.listen(591);

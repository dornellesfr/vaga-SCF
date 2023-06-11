const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { getUser, getUsers } = require("./teste1");
const { insertNewUser } = require("./teste2");
const teste3 = require("./teste3");
const teste4 = require("./teste4");
const teste5 = require("./teste5");

const { validateCreateUser } = require("./middlewares/validateCreateUser");

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", getUser);
app.get("/users", getUsers);
app.post("/users", validateCreateUser, insertNewUser)
app.delete("/users", teste3)
app.put("/users", teste4)
app.get("/users/access", teste5);


const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
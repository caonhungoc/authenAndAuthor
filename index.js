const express = require('express');
const app = express();

const db = require("./utils");

const routeUser = require("./routes/user");

db.connectDB();

//app.use(morgan("combined"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/user', routeUser);

app.listen(3333);
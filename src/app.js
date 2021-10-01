const express = require('express')
const app = express()
var cookieParser = require('cookie-parser')
var cors = require('cors')
app.use(express.json());

const routes = require('./routes/index');

app.use(cors());
app.use(cookieParser())
app.use(routes);

app.listen(process.env.PORT || 8888);
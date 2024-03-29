const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors')
const app = express();
var cookieParser = require('cookie-parser')

dotenv.config({ path: './config.env' });

require('./db/conn');
// const Registration = require('./modal/registrationSchema');

app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin : 'http://localhost:3000',
    credentials  : true
}))


//we link the router file to make our route easy
app.use(require('./router/auth'))



const PORT = process.env.PORT;






app.get('/team', (req,res) => {
    res.send(`hello team page`)
})

app.get('/signup', (req, res) => {
    res.send(`hello registration world, this is signup page`);
})

app.get('/signin', (req, res) => {
    res.send(`hello login world, this is sign page`);
})



app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`)
})
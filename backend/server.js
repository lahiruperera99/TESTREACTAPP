const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());



const uri = 'mongodb+srv://lahiru:12345@cluster0.iqexspc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
   try {
    await mongoose.connect(uri);
    console.log('connected to mongo')
   } catch (error) {
    console.log('not connected to mongo')
   } 
};

connect();

const server = app.listen(port, host, () =>{
console.log('node server is working')
});


app.use('/api', router);
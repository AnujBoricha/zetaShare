const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
const cors = require('cors');
app.use(express.json());
const path = require('path');
const connectDB = require('./config/db');
connectDB();
//cors
const corsOption = {
    origin: process.env.ALLLOWED_CLIENTS.split(',')
}
app.use(cors (corsOption) );
//Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});
require('dotenv').config({path : "./config/.env"});
const mongoose = require('mongoose');

function connectDB() {
    //Database connection
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    mongoose.connect("mongodb+srv://AnujBoricha:Anuj9824@cluster0.qrsed.mongodb.net/zetashare?retryWrites=true&w=majority", {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

})
    // const connection = mongoose.connection;
    mongoose.connection.on("error", err => {

        console.log("database not connected", err)
      
      })
      mongoose.connection.on("connected", (err, res) => {
      
        console.log("Database is connected")
      
      })
};

module.exports = connectDB;
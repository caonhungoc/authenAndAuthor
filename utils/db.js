const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://ngoccao:Pass1234__@cluster0.lanpk.mongodb.net/testDB?retryWrites=true&w=majority';

function connectDB() {
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true}).then(() => {
        console.log("connect database sucesss");
    });
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
    connectDB,
}
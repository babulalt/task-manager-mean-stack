// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var dbstr = process.env.DBSTRING || 'mongodb://localhost:27017/TaskManager'
mongoose.connect(dbstr, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};
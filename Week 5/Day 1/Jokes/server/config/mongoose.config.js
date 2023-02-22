const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connect to DB with succ'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
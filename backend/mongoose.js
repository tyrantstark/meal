const mongoose = require('mongoose')
require('dotenv').config({ path: '../.env'});
//mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex : true
}).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log(err);
    console.log("Unsuccessful");
    
})

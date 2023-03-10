const path = require('path')
require('dotenv').config({ path: '../.env'});
const express=require('express');
const app=express();
const port=process.env.PORT;
require('./mongoose');
const history = require('connect-history-api-fallback')
const cors = require('cors')

//const NODE_ENV='production';
if (process.env.NODE_ENV === "production") {
  // static folder
  app.use(express.static("../dist"));
  app.get("*", (req, res) => {
    res.sendFile(__dirname + '../dist/index.html');
  });
}
app.use(express.static(path.join(__dirname, '../public/index.html')))
app.use(cors())
app.options('*', cors())
app.use(express.json())

app.listen(port,()=>{
  console.log(`server running on ${port}`);
})
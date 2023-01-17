const path = require('path')
require('dotenv').config({ path: '../.env'});
const express=require('express');
const app=express();
const port=process.env.PORT;
require('./mongoose');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/./dist'))



  app.get('/.*/', (req, res) => {
      res.sendFile(__dirname + '/./dist/index.html');
  });

}else {
  app.use(express.static(path.join(__dirname, '../public')))
  app.get('/.*/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
  });


}


app.listen(port,()=>{
  console.log(`server running on ${port}`);
})
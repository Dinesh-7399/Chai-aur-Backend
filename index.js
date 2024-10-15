const express = require('express');
require('dotenv').config();
const app = express();

const port = 3000;//so it's not necessary that the given port is free in another machine so we need dotenv for 

app.get('/' , (req,res) => {
  res.send('Hello world');
})

app.get('/login' , (req,res) => {
  res.json({
    "name":"Dinesh",
    "age":19,
    "dob":"29/06/2005"
  });
});
app.get('/login/login2' , (req,res) => {
  res.send('<h1>Hii dinesh hope you are doing great</h1>')
});
app.listen(process.env.PORT , () => console.log(`App is listening in ${port}`));
// congrats you have created a server which can response(kidding it's small but yeah i'm happy)

// what's the problem with rebuilding the app if you change the code :- 
  // 
// Deplying the application :- 
  // 


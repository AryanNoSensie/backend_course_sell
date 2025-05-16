const express = require('express');// expreess requiring 
const app = express();

const jwt = require('jsonwebtoken'); // json web token requiring
const JWT_SECRET = "aryanisokdarling";

//express router
const { Router } = require('express'); 





//routes

app.post('/user/signup' , (req, res) => {

})


app.post('/user/signup' , (req, res) => {
    
})

app.get('/user/purchased' , (req, res) => {
    
})

app.post('/course/purchasing' , (req, res) => {
    
})

app.get('/courses/preview' , (req, res) => {
    
})











app.listen(3000, () => {
    console.log("server started on port 3000");

}); 
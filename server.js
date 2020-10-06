const express = require("express");
const axios = require("axios");
const ejs = require("ejs");
const app = express();
app.set("view engine", ejs);

app.get("/", (req,res)=>{
    const url ="https://api.chucknorris.io/jokes/random";
    axios.get(url)
    .then((response)=>{
        console.log(response.data);
        res.render("index.ejs", {chuckData: response.data});
    })
    .catch((error)=>{
        	console.log(error);
    });
    
    
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");

});
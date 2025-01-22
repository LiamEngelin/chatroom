const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

let messages = [];
let currentID = 1;

app.get("/api/messages",(req, res) => {
    console.log("Getting all message");
    res.json(messages);
});

app.post("/api/",(req, res) => {
    
}); 

app.listen(PORT, (req, res) => {
    console.log(`listening to ${PORT}`)
});
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let messages = [];
let currentID = 1;

app.get("/api/messages",(req, res) => {
    console.log("Getting all message");
    res.json(messages);
});

app.post("/api/message",(req, res) => {
    const { text } = req.body;
    if(!text){
        return res.status(400)
    }

    const newMessage = {
        id: currentID++,
        text, 
        createdAt: new Date()
    }

    messages.push(newMessage);
    res.status(200).json({newMessage})
}); 

app.listen(PORT, (req, res) => {
    console.log(`listening to ${PORT}`)
});
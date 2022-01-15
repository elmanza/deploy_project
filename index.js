const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res)=>{
    res.send("Hoooola Clase!!");
})

app.listen(PORT, ()=>{
    console.log("Server on!, you know");
})
const arg = process.argv
const express = require("express");
const app = express();
const pokedex = require('./routes/pokedex.json');
const fs = require('fs');
const bodyParser = require('body-parser');


//app.use("/", function(){});

app.get("/", (req, res) => {
  return res.json("Start with /users");
});

app.get("/api/pokedex/", (req, res) => {
  return res.json(pokedex);
});

app.get("/api/pokedex/:id", (req, res) => {
  const pokemon = pokedex.find(c => c.id == parseInt(req.params.id))
    if(!pokemon) return res.status(404).send('Pokemon not found')

    res.send(pokemon)
});

app.post("/items", (req,res) => {
  
        const pokemon = {
            id: file.length + 1,
            name: req.body.name,
            type: req.body.type,
            base: req.body.base
        }
        res.send(pokemon)

});


app.delete("/api/items/:id", (req,res) => {
  const pokemon = pokedex.find(c => c.id == parseInt(req.params.id))
    if(!pokemon) return res.status(404).send('Pokemon not found')
  
  const index = pokedex.indexOf(pokemon)
    
    pokedex.splice(index, 1)
          
      res.send("Pokemon delete")

})


app.listen(arg[2], function() {
    console.log(
      "Server is listening on http://localhost:"+arg[2]
    );
  });
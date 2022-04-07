const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
 * tell Express.js that when it receives a GET request at the URL /newShip/, to do this code.
 */
router.patch("/updateShip", function(req, res){
  // look up documents in MongoDB by name and then update the launched field with the given new field
  Ship.findOneAndUpdate({name: req.body.name}, {launched: req.body.launched}, {new: true}, function(error,doc){
    // if there was an error
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    // if no document was found
    else if(!doc){
      res.status(404).send(error);
    }
    // a document was found
    else{
      res.send(doc);
    }
  });
});

module.exports = router;
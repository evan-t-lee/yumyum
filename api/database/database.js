var mongo = require('mongodb');

var mongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:3000/mydb";

mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Created new database"); 
  db.close(); 
})
const express = require('express');
const config = require('./config');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const { videoToken } = require('./comms'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

const sendTokenResponse = (token, res) => {
    res.set('Content-Type', 'application/json');
    res.send(
      JSON.stringify({
        token: token.toJwt()
      })
    );
};

app.get('/video/token', (req, res) => {
    const identity = req.query.identity;
    const room = req.query.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
  
});

app.post('/video/token', (req, res) => {
    const identity = req.body.identity;
    const room = req.body.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

// const PORT = process.env.PORT || 3001; 

// app.listen(PORT, function(){ 
//     console.log(`listening on port ${PORT}`); 
// });

const { MongoClient } = require('mongodb');

async function main(){

    const uri = "mongodb+srv://test:2N92BDSYyVuJkpqf@cluster0.s5r4k.mongodb.net/Database?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    const dbName = 'Database'; 
    const object = {"name:": "Bill", "Password:": "Test", "email:": "test@email.com"};  

    await client.connect();
    const db = client.db('Database'); 
    const collection = db.collection('Logins')

    const insertResult = await collection.insertOne(object); 
    console.log('Inserted =>', insertResult); 

    try {
        await  listDatabases(client); 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

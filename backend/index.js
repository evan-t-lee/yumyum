const express = require('express');
const http = require('http');
const path = require('path');
const { videoToken } = require('./comms'); 

const app = express();

const server = http.createServer(function (req, res) {
    if (err) throw err;
}); 

const PORT = process.env.PORT || 3000; 

server.listen(PORT, function(){ 
    console.log(`listening on port ${PORT}`); 
});

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

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'genericomedy';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if(err) {

      console.log("FQIIIIIIIIIIIIILLLLLLLLLLL");
  } else {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
  }
  try{
    client.close();
  }catch(e){}
});

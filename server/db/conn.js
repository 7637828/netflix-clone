const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose")
const uri = process.env.DATABASE;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// async function run() {
//   try {
   
//     await client.connect()
    
//     await client.db("mernnetflix").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
   
//     await client.close();
//   }
// }
// run().catch(console.dir);


mongoose.connect(uri).then(()=>{
  console.log("connection successfully")
}).catch((err)=>{
  console.log("connection not successfully")
})
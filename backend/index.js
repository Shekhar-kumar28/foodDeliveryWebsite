  const express = require('express')
  const app = express()
  const port =5000;

const mongoDB = require("./db");
mongoDB();

  app.get('/',(req,res) => {
    res.send('Hello World!')
  })

  app.use(express.json())
  app.use('/api',require("./Routes/CreateUser"));

  app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
  })




















// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://Shekhar29k:Shekhar2908@cluster0.71ksaqg.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// async function run() {
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true, // Add this to avoid deprecation warnings
//     useUnifiedTopology: true, // Add this for the new Server Discover and Monitoring engine
//     serverApi: {
//       version: '1', // Use a string instead of ServerApiVersion.v1
//     },
//   });

//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     const db = client.db("gofoodmern"); // Access the database
//     const collection = db.collection("food_items"); // Access the collection
//     const fetchedData = await collection.find({}).toArray();
//     console.log(fetchedData);
//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     await client.close();
//   }
// }

// run();
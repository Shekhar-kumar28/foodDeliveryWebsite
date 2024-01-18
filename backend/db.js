// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://Shekhar29k:@cluster0.71ksaqg.mongodb.net/?retryWrites=true&w=majority'

// const mongoDB = async () => {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
//         if (err) console.log("---", err)
//         else {
//             console.log("connected")
//         }
//     })
// }

// module.exports = mongoDB;

// Replace your current connection code with the following:

// const mongoose = require('mongoose');

// async function mongoDB() {
//   try {
//     await mongoose.connect('mongodb+srv://Shekhar29k:Shekhar2908@cluster0.71ksaqg.mongodb.net/GOFOOD?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   }
// }

// module.exports = mongoDB;


// const mongoose = require('mongoose');

// async function mongoDB() {
//   try {
//     await mongoose.connect('mongodb+srv://Shekhar29k:Shekhar2908@cluster0.71ksaqg.mongodb.net/GOFOOD?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('Connected to MongoDB');

//     // Fetching collections
//     const collections = await mongoose.connection.db.listCollections().toArray();

//     if (collections.length === 0) {
//       console.log('No collections found in the database.');
//     } else {
//       console.log('Collections in the database:');
//       collections.forEach((collection) => {
//         console.log(collection.food_items);
//       });
//     }
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   }
// }

// module.exports = mongoDB;

// const mongoose = require('mongoose');

// async function mongoDB() {
//   try {
//     await mongoose.connect('mongodb+srv://Shekhar29k:Shekhar2908@cluster0.71ksaqg.mongodb.net/GOFOOD?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('Connected to MongoDB');

//     // Fetching the 'food_items' collection
//     const foodItemsCollection = mongoose.connection.collection('food_items');

//     // You can perform operations on the 'food_items' collection here
//     // For example, you can find documents in the collection:
//     const foodItems = await foodItemsCollection.find({}).toArray();

//     if (foodItems.length === 0) {
//       console.log('No documents found in the "food_items" collection.');
//     } else {
//       console.log('Documents in the "food_items" collection:');
//       foodItems.forEach((item) => {
//         console.log(item);
//       });
//     }

//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   }
// }

// module.exports = mongoDB;

const mongoose = require('mongoose');

async function mongoDB() {
  try {
    await mongoose.connect('mongodb+srv://Shekhar29k:Shekhar2908@cluster0.71ksaqg.mongodb.net/gofoodmern?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Fetching the 'food_items' collection
    const foodItemsCollection = mongoose.connection.collection('food_items');

    // You can perform operations on the 'food_items' collection here
    // For example, you can find documents in the collection:
    const foodItems = await foodItemsCollection.find({}).toArray();

    if (foodItems.length === 0) {
      console.log('No documents found in the "food_items" collection.');
    } else {
      console.log('Documents in the "food_items" collection:');
      foodItems.forEach((item) => {
        console.log(item);
      });
    }

  } catch (error) {
    console.error('Error connecting to MongoDB or fetching collection:', error.message);
  }
}

module.exports = mongoDB;



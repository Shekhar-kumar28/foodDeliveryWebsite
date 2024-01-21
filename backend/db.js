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



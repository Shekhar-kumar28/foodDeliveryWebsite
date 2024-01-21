const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const createUserRoute = require('./Routes/CreateUser');
const loginRoute = require('./Routes/LoginUser')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use('/api', createUserRoute);
app.use('/api', loginRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect('mongodb+srv://Shekhar29k:Shekhar2908@cluster0.71ksaqg.mongodb.net/gofoodmern?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });



























  // const express = require('express')
// const app = express()
// const port = 5000;
// const mongoDB = require("./db");


// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// app.use(express.json());
// app.use('/api', require("./Routes/CreateUser"));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

// app.js
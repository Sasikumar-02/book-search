const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
const booksRouter = require('./Routes/books.route'); 
app.use('/api/books', booksRouter); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const msgRoutes = require("./routes/msg.js")
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.use('/api/msg', msgRoutes)


mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("Connected to MongoDB");
     app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((error)=>{
    console.log(error);
  })
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require ("./routes/order")
const cartRoute = require("./routes/cart")
const stripeRoute = require("./routes/stripe")

dotenv.config();

//middileware

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


//Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkouts",stripeRoute);



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((err) => {
    console.log("Error connecting to Monngo db");
  });

app.listen(process.env.PORT, () => {
  console.log(`Backend server is running in ${process.env.PORT}!`);
});

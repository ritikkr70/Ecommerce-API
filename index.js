const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/Users");
const authRoute = require("./routes/Auth");
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/users",userRoute);

app.use("/api/auth",authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Successfully started on port 5000!");
});

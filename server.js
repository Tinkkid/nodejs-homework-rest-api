const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Tinkkid:mDqbXyXNzfsEVcPo@cluster0.lz1m311.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.env(1);
  });

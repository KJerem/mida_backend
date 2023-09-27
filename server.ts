import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

//create server
app.listen(process.env.PORT, () => {
  console.log(`Server is connected to http://localhost:${process.env.PORT}`);
  connectDB();
});



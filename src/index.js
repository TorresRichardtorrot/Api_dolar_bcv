import app from "./app.js"
import { mongoose } from "mongoose";
import { config } from "dotenv";
config()

const PORT = process.env.PORT


mongoose
  .connect(process.env.MONGODB_URI_KEY)
  .then(()=> console.log("** Conexion con mongoldb **"))
  .catch((error) => console.error(error));


app.listen(PORT)
console.log(' ** servidor activo  **')
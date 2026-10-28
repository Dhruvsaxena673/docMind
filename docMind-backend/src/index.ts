import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });

    server.on("error", (error) => {
      console.error("Server error: ", error);
    });
  })
  .catch((error) => {
    console.error("MONGO db connection failed !!! ", error);
  });
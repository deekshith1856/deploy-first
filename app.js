import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Define your routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Export the app and server for testing
let server = null;
const PORT = process.env.PORT || 8000;
console.log(PORT);
if (process.env.NODE_ENV !== "test") {
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export { app, server };

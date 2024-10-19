import express from "express";

const app = express();

// Define your routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Export the app and server for testing
let server = null;

if (process.env.NODE_ENV !== "test") {
  server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

export { app, server };

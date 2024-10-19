import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;

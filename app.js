const express = require("express");
const indexRouter = require("./routes/index");
const path = require("node:path");

const app = express();

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Telling Express that we are using EJS
app.set("view engine", "ejs");

// Mounting routes
app.use("/", indexRouter);

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const router = require('./router/route');

const app = express();

// Initialize dotenv to access environment variable
dotenv.config();
const port = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());// req.body
app.use(express.urlencoded({ extended: true }));

//Route Middleware
app.use("/api/user", router);


// Handle unknown routes
app.all("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// General Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(5000, () =>{
  console.log(`Server is running on port 5000`);
});

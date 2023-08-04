// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create Express app
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// In-memory database (for demo purposes, replace this with SQLite or other databases)
const recipes = [
  {
    id: 1,
    name: "Smoothie Proteico",
    description: "Rápido, gostoso e com 32g de proteína.",
    ingredients: ["banana", "leite", "whey protein", "gelo"],
    instructions: "Misture todos os ingredientes no liquidificador...",
    userId: "user1"
  },
  // Add more recipe objects as needed
];

// API endpoint to fetch all recipes
app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

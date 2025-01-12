// Import express
const express = require('express');
const app = express();

// Set the port for the API server
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the API!');
});

// A sample GET route with a parameter
app.get('/api/greet/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

// POST route to handle user data
app.post('/api/users', (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: 'User created successfully!',
    user: user,
  });
});

// PUT route to update user data
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = req.body;
  res.json({
    message: `User with ID ${id} updated successfully!`,
    user: user,
  });
});

// DELETE route to delete a user
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `User with ID ${id} deleted successfully!` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



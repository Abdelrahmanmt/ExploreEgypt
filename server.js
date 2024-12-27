const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authenticate = require('./middleware/authMiddleware');

// Initialize Express App
const app = express(); // Moved here to ensure it's declared first
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Protected Route
app.use('/chatbot', authenticate, (req, res) => {
  res.send('Welcome to the Chatbot Page!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./src/routes/userRoutes'));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

// Connect DB & start server
connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on port ${process.env.PORT}`)
  );
});

const express = require('express');
const logger = require('./src/middleware/logger');

const app = express();
app.use(express.json());

// Logging middleware
app.use(logger);

// Routes
app.use('/', require('./src/routes/userRoutes'));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

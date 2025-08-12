// Middleware to validate incoming user data for POST and PUT requests
module.exports = (req, res, next) => {
    const { firstName, lastName, hobby } = req.body;
    
    // Check if required fields are present
    if (!firstName || !lastName || !hobby) {
      return res.status(400).json({ message: "Missing required fields: firstName, lastName, hobby" });
    }
    next();
  };
  
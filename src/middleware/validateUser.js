module.exports = (req, res, next) => {
    const { firstName, lastName, hobby } = req.body;
    if (!firstName || !lastName || !hobby) {
      return res.status(400).json({ message: "Missing required fields: firstName, lastName, hobby" });
    }
    next();
  };
  
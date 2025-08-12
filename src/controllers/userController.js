// In-memory array to store users
let users = [
  { id: "1", firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" }
];

// GET all users
exports.getUsers = (req, res) => {
  res.status(200).json(users);
};

// GET user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
};

// POST new user
exports.createUser = (req, res) => {
  const { firstName, lastName, hobby } = req.body;
  const newUser = { id: (users.length + 1).toString(), firstName, lastName, hobby };
  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT update user
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  const { firstName, lastName, hobby } = req.body;
  user.firstName = firstName;
  user.lastName = lastName;
  user.hobby = hobby;
  
  res.status(200).json(user);
};

// DELETE user
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users.splice(index, 1);
  res.status(200).json({ message: "User deleted successfully" });
};

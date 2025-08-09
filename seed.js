require('dotenv').config();
const connectDB = require('./src/config/db');
const User = require('./src/models/User');

async function seed() {
  try {
    await connectDB();
    await User.deleteMany({});
    await User.insertMany([
      { name: 'Alice', email: 'alice@example.com', password: 'password1', age: 25 },
      { name: 'Bob', email: 'bob@example.com', password: 'password2', age: 30 }
    ]);
    console.log('✅ Seeded users');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => {
  console.error("❌ MongoDB Atlas connection error:", err.message);
  process.exit(1);
});

module.exports = mongoose;

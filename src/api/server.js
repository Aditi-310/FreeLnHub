const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const proposalRoutes = require('./routes/proposals');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo Error:", err));

app.use('/api/proposals', proposalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

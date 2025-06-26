const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  projectTitle: String,
  budget: String,
  description: String,
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Proposal', proposalSchema);

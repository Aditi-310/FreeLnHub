const express = require('express');
const router = express.Router();
const Proposal = require('../models/Proposal');

// Get all proposals
router.get('/', async (req, res) => {
  const proposals = await Proposal.find().sort({ submittedAt: -1 });
  res.json(proposals);
});

// Get a single proposal by ID
router.get('/:id', async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    if (!proposal) throw new Error("Not found");
    res.json(proposal);
  } catch {
    res.status(404).json({ message: 'Proposal not found' });
  }
});

// Submit a new proposal
router.post('/', async (req, res) => {
  try {
    const proposal = new Proposal(req.body);
    await proposal.save();
    res.status(201).json(proposal);
  } catch (err) {
    res.status(400).json({ message: 'Failed to submit proposal', error: err });
  }
});

// Delete a proposal
router.delete('/:id', async (req, res) => {
  try {
    await Proposal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Proposal deleted' });
  } catch {
    res.status(404).json({ message: 'Proposal not found' });
  }
});

module.exports = router;

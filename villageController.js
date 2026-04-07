const model = require('../models/villageModel');

exports.getVillages = (req, res) => {
  model.getAllVillages((err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};
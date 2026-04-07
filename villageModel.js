const db = require('../config/db');

exports.getAllVillages = (callback) => {
  db.query("SELECT * FROM villages", callback);
};
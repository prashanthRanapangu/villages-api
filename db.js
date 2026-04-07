const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Prashanth@25',
  database: 'villages_db'
});

db.connect(err => {
  if (err) throw err;
  console.log("Database Connected");
});

module.exports = db;
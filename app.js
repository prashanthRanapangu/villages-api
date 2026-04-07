const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const routes = require('./routes/villageRoutes');
app.use('/api', routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
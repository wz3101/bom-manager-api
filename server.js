const express = require('express');
const cors = require('cors');
const app = express();
const partRoutes = require('./routes/parts');

app.use(cors());
app.use(express.json());
app.use('/parts', partRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

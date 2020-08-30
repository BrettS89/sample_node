const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ status: 'success' });
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});

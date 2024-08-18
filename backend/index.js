const express = require('express');
const cors = require('cors');
const products = require('./products');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
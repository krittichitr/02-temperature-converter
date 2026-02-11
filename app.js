const express = require('express');
const app = express();
app.use(express.json());

app.get('/convert/c-to-f', (req, res) => {
    const f = (parseFloat(req.query.c) * 9/5) + 32; res.json({ f });
});

app.get('/convert/f-to-c', (req, res) => {
    const c = (parseFloat(req.query.f) - 32) * 5/9; res.json({ c });
});

app.get('/convert/c-to-k', (req, res) => {
    const k = parseFloat(req.query.c) + 273.15; res.json({ k });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

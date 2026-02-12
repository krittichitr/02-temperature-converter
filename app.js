const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello DecOps02')
});

app.get('/', (req, res) => {
    const c = (parseFloat(req.query.f) - 32) * 5/9; res.json({ c });
});

app.get('/', (req, res) => {
    const k = parseFloat(req.query.c) + 273.15; res.json({ k });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello DecOps02')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


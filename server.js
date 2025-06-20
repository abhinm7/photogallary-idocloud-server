const express = require('express');
const app = express();

require('dotenv').config()
const route = require('./routes/routes');

const cors = require('cors');
app.use(cors());

const connectDb = require('./configs/db');


app.use(express.json());

connectDb();

app.get('/', (req, res) => {
    res.send("Server is on");
})

app.use('/api/v1', route)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("started");

})
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json()); //parse body


// app.get('/api', (req, res) => {
//     res.send('welcome to api')
// })

app.use('/api/v1/user', userRouter )

module.exports = app;
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

// Dotenv
dotenv.config({ path: './config.env' });

// MongoDb database
const DB = 'mongodb+srv://nurainande:jEdLlZXall1Ym9gu@cluster0.ec2bo.mongodb.net/?retryWrites=true&w=majority&appName=Cypher'
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection sucessfull')).catch(err => console.log('cant connect to database'));

// App listen
const port = 3000;
app.listen(port, err => {
    if (err) {
        console.log(err)
    }
    console.log(`App is running on port ${port}`);
});



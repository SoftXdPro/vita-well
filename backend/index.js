const express = require('express');
const connectDB = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;
const userRouter = require('./routes/User');
app.use(express.json());
app.use('/users', userRouter);

connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to the VitaWell backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

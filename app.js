
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/user',userRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

    

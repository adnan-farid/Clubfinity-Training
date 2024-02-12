const express = require('express');
const path = require('path');
const { logger } = require('./middleware/logEvents');
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const errorHandler = require('./middleware/errorHandler');

app.use(logger)

app.use(cors(corsOptions));
// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/root'));
app.use('/employees', require('./routes/api/employees'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));


app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//app all for routing -- ACCEPTS REGEX
//app use for middleware -- DOES NOT ACCEPT REGEX
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a connection pool to MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Gautam@2001',
    database: 'testdb'
});

// Use body-parser middleware
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle POST request to save user data
app.post('/api/saveUserData', (req, res) => {
    const { name, email } = req.body;
    pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ success: true, id: results.insertId });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


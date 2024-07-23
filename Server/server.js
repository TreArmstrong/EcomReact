const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;
const router = express.Router()

// app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    PORT: 3306,
    user: 'sql5721723',
    password: 'xmWikf8eHf',
    database: 'sql5721723'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
// Serve static files
// app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use("/public", express.static("/Users/Tra/Desktop/ecomm2/src/"))
app.use("/api", router)
app.use(express.json());


// Route all requests to 'index.html' for client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});



// API endpoint to fetch products with images
router.get('/products', (req, res) => {
    const table = 'SELECT * FROM Products'
    db.query(table, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Error fetching products');
        } else {
            console.log(results)
            res.json(results);
        }
    });
});

router.get('/performance', (req, res) => {
    const table = 'SELECT * FROM Performance'
    db.query(table, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Error fetching products');
        } else {
            console.log(results)
            res.json(results);
        }
    });
});

// Contact form submission endpoint
app.post('/api/contacts', (req, res) => {
    const {
        firstName,
        lastName,
        phoneNumber,
        email,
        product,
        comment
    } = req.body;

    const query = 'INSERT INTO contacts (firstName, lastName, phoneNumber, email, product, comment) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [firstName, lastName, phoneNumber, email, product, comment];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Database error. Please try again.' });
        }
        res.status(201).json({ message: 'Contact saved successfully!' });
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

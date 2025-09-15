const express = require('express');
const router = express.Router();
const db = require('../database.js');

// Test route
router.get('/test', (req, res) => {
    res.send('User route is working');
});

// Get all users
router.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ "error": err.message });
        }
        res.status(200).json({ data: rows });
    });
});

// Gets user by id 
router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM users WHERE id = ?";
    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.status(500).json({ "error": err.message });
        }
        if (!row) {
            return res.status(404).json({ "error": "User not found" });
        }
        res.status(200).json({ data: row });
    });
});



module.exports = router;
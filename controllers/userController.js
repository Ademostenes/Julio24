const db = require('../db/db');

const getAllUsers = (req,res) => {
    const sql = 'SELECT * FROM usuario';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

module.exports = {
    getAllUsers
};

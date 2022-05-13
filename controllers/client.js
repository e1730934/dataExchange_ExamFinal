const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/db.sqlite3');

exports.clientInfo =  (req, res) => {
    const clientId = req.params.id;
    db.get(`SELECT * FROM clients WHERE id = ${clientId}`, (err, row) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        } else {
            console.log(row);
            return res.status(200).json({
                client: row
            })
        }
    })
}

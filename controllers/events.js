const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/db.sqlite3');

exports.deleteEvent = async (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM evenements WHERE id = ${id}`, (err) => {
        if (err) {
            res.status(500).json({
                error: err.message
            });
        } else {
            res.status(201).json({
                message: 'Évenement supprimé'
            });
        }
    });
}

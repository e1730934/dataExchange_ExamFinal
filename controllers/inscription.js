const fs = require("fs");
const csv = require('csv-parser')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/db.sqlite3');

exports.inscriptionCsv = async (req, res) => {
    let list = []
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (row) => {
            const eventClient = {
                evenement_id: row.evenement_id,
                client_id: row.client_id,
            }
            list.push(eventClient)
        })
        .on('end', () => {
            let countError = 0
            list.forEach(element => {
                let ifEvenementExist = false
                let ifClientExist = false
                // ifEvenementExist
                db.get(`SELECT *
                        FROM evenements
                        WHERE id = ${element.evenement_id}`, (err, row) => {
                    if (row === undefined)
                        countError++
                    else ifEvenementExist = true
                    console.log("ifEvenementExist" +ifEvenementExist)
                })
                // ifClientExist
                db.get(`SELECT *
                        FROM clients
                        WHERE id = ${element.client_id}`, (err, row) => {
                    if (row !== undefined)
                        countError++
                    else ifClientExist = true
                    console.log("ifClientExist"+ ifClientExist)
                })
                if (ifEvenementExist && ifClientExist) {
                    db.run(`INSERT INTO inscription (date, evenement_id, client_id)
                            VALUES (${new Date().toISOString().slice(0, 10)}, ${element.evenement_id},
                                    ${element.client_id})`, (err) => {
                        if (err) {
                            countError++
                        }
                    })
                } else {
                    countError++
                }
            })
            if(countError !==0){
                res.status(500).json({
                    message: "Erreur lors de l'inscription",
                    error: "Evenement ou client inexistant"
                })
            }
            else{
                res.status(200).json({
                    message: "Inscription réussie"
                })
            }
        })
}

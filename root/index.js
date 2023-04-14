const express = require('express');
var cors = require('cors')
const app = express();
const port = 4000 || process.env.PORT;
var sqlite3 = require('sqlite3');
const bcrypt = require("bcrypt")
const saltRounds = 10

app.use(express.json());
app.use(cors())

var db = new sqlite3.Database('example.db');
db.serialize(function () {
    // Create a table
    db.run("CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, otAssign TEXT,name TEXT, type TEXT, email TEXT, password TEXT)");
    // db.run("DROP TABLE Users")
    db.run("CREATE TABLE IF NOT EXISTS OT (id INTEGER PRIMARY KEY, Client TEXT,Date DATETIME, RazonSocial TEXT, Producto TEXT, Marca TEXT, Modelo TEXT, NormaAplicar TEXT, Cotizacion TEXT, FechaVencimiento DATETIME, FechaEstimada DATETIME, Type TEXT, Item1 TEXT, Description1 TEXT, Importe1 TEXT,Item2 TEXT, Description2 TEXT, Importe2 TEXT,Item3 TEXT, Description3 TEXT, Importe3 TEXT, Users TEXT)");
});
app.get('/getUsers', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Users", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.json(row)
        })
    });
});
app.get('/getOT', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM OT", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.json(row)
        })
    });
});
app.post('/postUsers', (req, res) => {
    let { name, type, email, password } = req.body;
    let hashedPassword;
    bcrypt
        .genSalt(saltRounds)
        .then(salt => {
            return bcrypt.hash(password, salt)
        })
        .then(hash => {
            hashedPassword = hash;
        })
        .then(data => {
            db.serialize(async function () {
                db.run("INSERT INTO Users (name, type, email, password) VALUES (?,?,?,?)", [name, type, email, hashedPassword]);
            })
        })
        .catch(err => console.error(err.message))

    res.json({ state: "ok" })
})
app.post('/editUsers', (req, res) => {
    let { state, idOt } = req.body;
    db.serialize(async function () {
        state.forEach(element => {
            let UsersJson = element.otAssign !== null ? JSON.parse(element.otAssign) : { data: [] };
            if (element.state) {
                let found = UsersJson.data.filter(data => data === idOt)
                if (Object.entries(found).length === 0) {
                    UsersJson.data.push(idOt)
                }
            } else {
                let found = UsersJson.data.findIndex(data => data === idOt)
                if (found > -1) {
                    UsersJson.data.splice(found, 1)
                }
            }
            let UsersString = JSON.stringify(UsersJson);
            db.run("UPDATE Users SET otAssign = ? WHERE id = ?", [UsersString, element.id]);
        });
    })
})
app.post('/editOt', (req, res) => {
    let { state, idOt } = req.body;
    db.serialize(async function () {
        db.all("SELECT * FROM OT WHERE id = ?", [idOt], function (err, row) {
            let Users = row[0].Users;
            let UsersJson = Users !== null ? JSON.parse(Users) : { data: [] };
            state.forEach(element => {
                let found = UsersJson.data.findIndex(data => data === element.name)
                if (found > -1) {
                    element.state === false && UsersJson.data.splice(found, 1)
                } else {
                    element.state === true && UsersJson.data.push(element.name)
                }
            })
            let UsersString = JSON.stringify(UsersJson);
            db.run("UPDATE OT SET Users = ? WHERE id = ? ", [UsersString, idOt]);
        })
    })
})
app.post('/createOT', (req, res) => {
    const { Client, Date, RazonSocial, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type } = req.body;
    const { Description: { Item1, Description1, Importe1, Item2, Description2, Importe2, Item3, Description3, Importe3 } } = req.body;
    db.serialize(async function () {
        db.run("INSERT INTO OT (Client, Date, RazonSocial, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Item1, Description1, Importe1,Item2, Description2, Importe2,Item3, Description3, Importe3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [Client, Date, RazonSocial, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Item1, Description1, Importe1, Item2, Description2, Importe2, Item3, Description3, Importe3]);
    })
    res.setHeader('Access-Control-Allow-Origin', '*').status(200).json({ result: "ok" })
})
app.post('/login', (req, res) => {
    let { email, password } = req.body;
    try {
        db.get("SELECT * FROM Users WHERE email = ?", [email], function (err, row) {
            console.log(row)
            row === undefined && res.status(400).json({ result: "error email" });
            row != undefined && bcrypt
                .compare(password, row.password)
                .then(state => {
                    state ? res.setHeader('Access-Control-Allow-Origin', '*').status(200).json({ result: "ok", hash: row.password, user: row }) :
                        res.setHeader('Access-Control-Allow-Origin', '*').status(400).json({ result: "error password" })
                })
                .catch(err => console.error(err.message))
        })
    } catch (error) {
        console.log(error)
    }
})
app.post('/authenticator', (req, res) => {
    let { email, password } = req.body;
    try {
        db.get("SELECT * FROM Users WHERE password = ? AND email = ?", [password, email], function (err, row) {
            row === undefined && res.status(200).json({ result: "error" });
            res.status(200).json(row)
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
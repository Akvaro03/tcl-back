const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors')



const port = 4000 || process.env.PORT;
var sqlite3 = require('sqlite3');
const bcrypt = require("bcrypt")
const app = express();
const saltRounds = 10
const fs = require('fs');

app.use(express.urlencoded({ limit: '2000mb', extended: true }));
app.use(express.json({ limit: '2000mb' }));

app.use(express.json());
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(fileUpload())
app.use(cors());


var db = new sqlite3.Database('example.db');
db.serialize(function () {
    // db.run("DROP TABLE Users")
    // db.run("DROP TABLE OT")
    // db.run("DROP TABLE Config")
    db.run("CREATE TABLE IF NOT EXISTS Config (id INTEGER PRIMARY KEY, nameCompany TEXT,browserLogo TEXT,companyLogo TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, otAssign TEXT,name TEXT, type TEXT, email TEXT, password TEXT, score NUMERIC)");
    db.run("CREATE TABLE IF NOT EXISTS Clients (id INTEGER PRIMARY KEY, Name TEXT,Document TEXT, KeyUnique TEXT, Contacts TEXT, businessName TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS OT (id INTEGER PRIMARY KEY, Client TEXT,Date NUMERIC, RazonSocial TEXT, Producto TEXT, Marca TEXT, Modelo TEXT, NormaAplicar TEXT, Cotizacion TEXT, FechaVencimiento DATETIME, FechaEstimada DATETIME, Type TEXT, Item1 TEXT, Description1 TEXT, Importe1 TEXT,Item2 TEXT, Description2 TEXT, Importe2 TEXT,Item3 TEXT, Description3 TEXT, Importe3 TEXT, Users TEXT, StateProcess TEXT, Observations TEXT, Contact TEXT, Changes TEXT)");
    // db.run("CREATE TABLE IF NOT EXISTS History (id INTEGER PRIMARY KEY, OtID NUMERIC, Changes TEXT)");
});
app.get('/getUsers', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Users", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
});
app.get('/getClients', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Clients", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
});
app.get('/getOT', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM OT", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
});
app.get('/getHistory', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM History", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
});
app.post('/getOneUser', (req, res) => {
    let { name } = req.body;
    db.serialize(async function () {
        db.all("SELECT * FROM Users WHERE name = ?", [name], function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
})
app.post('/getOneOt', (req, res) => {
    let { id } = req.body;
    db.serialize(async function () {
        db.all("SELECT * FROM Ot WHERE id = ?", [id], function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
})
app.post('/getOneHistory', (req, res) => {
    let { id } = req.body;
    db.serialize(async function () {
        db.all("SELECT * FROM History WHERE OtID = ?", [id], function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
})
app.get('/getBrowserLogo', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Config", function (err, row) {
            res.status(200).sendFile(row[0].browserLogo)
        })
    })
})
app.get('/getCompanyLogo', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Config", function (err, row) {
            res.status(200).sendFile(row[0].companyLogo)
        })
    })
})
app.get('/getConfig', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Config", function (err, row) {
            if (err) {
                res.json(err)
            }
            if (row[0]) {
                res.status(200).json(row[0].nameCompany)
            } else {

                res.status(200).json({ result: "no hay" })
            }
        })
    });
})

app.post('/postClients', (req, res) => {
    let { nameClient, Document, Key, ContactVerificate, BusinessName } = req.body;
    let DocumentFormat = JSON.stringify(Document)
    let ContactFormat = JSON.stringify(ContactVerificate)
    db.serialize(async function () {
        db.run("INSERT INTO Clients (Name, Document, KeyUnique, Contacts,businessName) VALUES (?,?,?,?,?)", [nameClient, DocumentFormat, Key, ContactFormat, BusinessName]);
        res.status(200).json({ result: "ok client" })
    })

})
app.post('/postUsers', (req, res) => {
    let { name, type, email, password } = req.body;
    let hashedPassword;
    const typeString = JSON.stringify(type)

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
                db.run("INSERT INTO Users (name, type, email, password,score) VALUES (?,?,?,?,?)", [name, typeString, email, hashedPassword, 0]);
                res.status(200).json({ result: "ok user" })
            })
        })
        .catch(err => res.status(200).json({ result: "false" }))
})
app.post('/postOT', (req, res) => {
    const { Client, Date, RazonSocial, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Observaciones, ContactSelect, Changes } = req.body;
    const { Description: { Item1, Description1, Importe1, Item2, Description2, Importe2, Item3, Description3, Importe3 } } = req.body;
    db.serialize(async function () {
        let ChangesString = JSON.stringify([Changes])
        let contact = JSON.stringify(ContactSelect)
        db.run("INSERT INTO Config (Client, Date, RazonSocial, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Item1, Description1, Importe1,Item2, Description2, Importe2,Item3, Description3, Importe3,StateProcess, Observations, Contact, Changes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [Client, Date, RazonSocial, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Item1, Description1, Importe1, Item2, Description2, Importe2, Item3, Description3, Importe3, "Created", Observaciones, contact, ChangesString]);
        res.status(200).json({ result: "ok ot" })
    })
})
app.post('/postConfig', (req, res) => {
    const { nameCompany } = req.body
    const file = req.files.file;
    const newPath = __dirname + '/files/';
    const pathBrowserLogo = `${newPath}${"browserLogo.jpg"}`
    const pathCompanyLogo = `${newPath}${"companyLogo.png"}`
    file[0].mv(pathBrowserLogo)
    file[1].mv(pathCompanyLogo)
    db.serialize(async function () {
        db.all("SELECT * FROM Config", function (err, row) {
            if (err) {
                console.log(err)
            }
            if (row[0]) {
                console.log(row)
                db.run("UPDATE Config SET nameCompany = ? WHERE id = 1", [nameCompany]);
            } else {
                db.run("INSERT INTO Config (nameCompany, browserLogo, companyLogo) VALUES (?,?,?)",
                    [nameCompany, pathBrowserLogo, pathCompanyLogo]);
            }
        })
        res.status(200).json({ result: "ok Config" })
    })
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
    res.status(200).json({ result: "ok" })
})
app.post('/editScoreUser', (req, res) => {
    let userEdit = req.body;
    db.serialize(async function () {
        db.run("UPDATE Users SET Score = ? WHERE id = ?", [userEdit.score, userEdit.id]);
        res.status(200).json({ result: "ok" })
    })
})
// app.post('/editOneOtChanges', (req, res) => {
//     const { Changes, idOt } = req.body;
//     db.serialize(async function () {
//         const changesString = JSON.stringify(Changes)
//         db.run("UPDATE OT SET Changes = ? WHERE id = ?", [changesString, idOt]);
//         res.status(200).json({ result: "ok update history" })
//     })
// })

app.post('/editOneOtChanges', async (req, res) => {
    const { Changes, idOt } = req.body;

    try {
        db.run("UPDATE OT SET Changes = ? WHERE id = ?", [JSON.stringify(Changes), idOt]);
        res.status(200).json({ result: "ok update history" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post('/editOtChanges', (req, res) => {
    let { Changes, idOt } = req.body;
    db.serialize(async function () {
        db.get("SELECT Changes FROM OT WHERE id = ?", [idOt], function (err, row) {
            let ChangesPrev = JSON.parse(row.Changes)
            ChangesPrev.push(Changes.Changes)
            let ChangesPrevString = JSON.stringify(ChangesPrev)
            db.run("UPDATE OT SET Changes = ? WHERE id = ?", [ChangesPrevString, idOt]);
            res.status(200).json({ result: "ok history" })
        })
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
            res.status(200).json({ result: "ok" })
        })
    })
})
app.post('/editOtState', (req, res) => {
    let { state, idOt } = req.body;
    db.serialize(async function () {
        db.run("UPDATE OT SET StateProcess = ? WHERE id = ? ", [state, idOt]);
        res.status(200).json({ result: "ok" })
    }
    )
})


app.post('/login', (req, res) => {
    let { email, password } = req.body;
    try {
        db.get("SELECT * FROM Users WHERE email = ?", [email], function (err, row) {
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
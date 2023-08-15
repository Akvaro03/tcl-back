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
    // db.run("DROP TABLE Activities")
    // db.run("DROP TABLE Factura")
    // db.run("DROP TABLE Config")
    // db.run("DROP TABLE TypeOt")
    // db.run("DROP TABLE Users")
    // db.run("DROP TABLE OT")
    db.run("CREATE TABLE IF NOT EXISTS Activities (id INTEGER PRIMARY KEY, name TEXT,score NUMERIC, emit BOOLEAN,time NUMERIC, users TEXT, state TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Factura    (id TEXT, dateCreated NUMERIC,dateExpiration NUMERIC, datePay NUMERIC, state TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Clients    (id INTEGER PRIMARY KEY, Name TEXT,Document TEXT, KeyUnique TEXT, Contacts TEXT, businessName TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS TypeOt     (id INTEGER PRIMARY KEY, nameType TEXT, activities TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Config     (id INTEGER PRIMARY KEY, nameCompany TEXT,browserLogo TEXT,companyLogo TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Users      (id INTEGER PRIMARY KEY, Team TEXT,name TEXT, type TEXT, email TEXT, password TEXT, state TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS OT         (id INTEGER PRIMARY KEY, Client TEXT,Date NUMERIC, RazonSocial TEXT, Producto TEXT, Marca TEXT, Modelo TEXT, NormaAplicar TEXT, Cotizacion TEXT, FechaVencimiento DATETIME, FechaEstimada DATETIME, Type TEXT, Item1 TEXT, Description1 TEXT, Importe1 TEXT,Item2 TEXT, Description2 TEXT, Importe2 TEXT,Item3 TEXT, Description3 TEXT, Importe3 TEXT, StateProcess TEXT, Observations TEXT, Contact TEXT, Changes TEXT, Auth TEXT, Activities TEXT, IdClient NUMERIC, Availability TEXT, Factura TEXT)");
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
            res.json(row)
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
app.get('/getActivities', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Activities", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
})
app.get('/getTypeOt', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM TypeOt", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
})
app.get('/getPay', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Factura", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
})


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
app.post('/getOneClient', (req, res) => {
    let { Name } = req.body;
    db.serialize(async function () {
        db.all("SELECT * FROM Clients WHERE Name = ?", [Name], function (err, row) {
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
            const path = __dirname + "/" + row[0].browserLogo
            res.status(200).sendFile(path)
        })
    })
})
app.get('/getCompanyLogo', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Config", function (err, row) {
            const path = __dirname + "/" + row[0].companyLogo
            res.status(200).sendFile(path)
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
        db.run("INSERT INTO Clients (Name, Document, KeyUnique, Contacts,businessName) VALUES (?,?,?,?,?)",
            [nameClient, DocumentFormat, Key, ContactFormat, BusinessName]);
        res.status(200).json({ result: "ok client" })
    })

})
app.post('/postUsers', (req, res) => {
    let { name, type, email, password } = req.body;
    const typeString = JSON.stringify(type)
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
                db.run("INSERT INTO Users (name, type, email, password,Team, state) VALUES (?,?,?,?,?,?)",
                    [name, typeString, email, hashedPassword, JSON.stringify([]), "active"]);
                res.status(200).json({ result: "ok user" })
            })
        })
        .catch(err => res.status(200).json({ result: "false" }))
})
app.post('/postOT', (req, res) => {
    let stringToSend = "ok ot "
    const { activities, IdClient, Client, Date, RazonSocial, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Observaciones, ContactSelect, Changes } = req.body;
    const { Description: { Item1, Description1, Importe1, Item2, Description2, Importe2, Item3, Description3, Importe3 } } = req.body;

    db.serialize(async function () {
        let ChangesString = JSON.stringify([Changes])
        let contact = JSON.stringify(ContactSelect)
        db.run("INSERT INTO OT (Client, Date, RazonSocial, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Item1, Description1, Importe1,Item2, Description2, Importe2,Item3, Description3, Importe3,StateProcess, Observations, Contact, Changes, Auth, Activities, IdClient) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [Client, Date, RazonSocial, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Item1, Description1, Importe1, Item2, Description2, Importe2, Item3, Description3, Importe3, "Created", Observaciones, contact, ChangesString, false, activities, IdClient]);
        db.all("SELECT * FROM OT ORDER BY id DESC LIMIT 1", function (err, row) {
            stringToSend += row[0].id
            res.status(200).json({ result: stringToSend })
        })
    })
})
app.post('/postConfig', (req, res) => {
    const { nameCompany } = req.body
    const file = req.files.file;
    const newPath = __dirname + '/files/';
    const pathBrowserLogo = `${newPath}${"browserLogo.png"}`
    const pathCompanyLogo = `${newPath}${"companyLogo.png"}`
    file[0].mv(pathBrowserLogo)
    file[1].mv(pathCompanyLogo)
    db.serialize(async function () {
        db.all("SELECT * FROM Config", function (err, row) {
            if (err) {
                console.log(err)
            }
            if (row[0]) {
                db.run("UPDATE Config SET nameCompany = ?, browserLogo = ?, companyLogo = ? WHERE id = 1",
                    [nameCompany, eliminarHastaRoot(pathBrowserLogo), eliminarHastaRoot(pathCompanyLogo)]);
            } else {
                db.run("INSERT INTO Config (nameCompany, browserLogo, companyLogo) VALUES (?,?,?)",
                    [nameCompany, eliminarHastaRoot(pathBrowserLogo), eliminarHastaRoot(pathCompanyLogo)]);
            }
        })
        res.status(200).json({ result: "ok Config" })
    })
})
app.post('/postTypeOt', (req, res) => {
    const { nameType, activities } = req.body
    db.serialize(async function () {
        db.run("INSERT INTO TypeOt (nameType, activities) VALUES (?,?)",
            [nameType, JSON.stringify(activities)]);
    })
    res.status(200).json({ result: "ok Type" })
})
app.post('/postActivity', (req, res) => {
    const { name, score, emit, time } = req.body
    db.serialize(async function () {
        db.run("INSERT INTO Activities (name, score, emit, time, users, state) VALUES (?,?,?,?,?,?)",
            [name, score, emit, time, "[]", "Created"]);
    })
    res.status(200).json({ result: "ok Activity" })

})
app.post('/postPay', (req, res) => {
    const { pay } = req.body
    db.serialize(async function () {
        db.run("INSERT INTO Factura (dateCreated ,dateExpiration ,id, state) VALUES (?,?,?,?)",
            [pay.dateCreated, pay.dateExpiration, pay.id, "created"]);
    })
    res.status(200).json({ result: "ok Activity" })

})



app.post('/editUser', (req, res) => {
    let { name, type, email, id, state } = req.body;
    const typeString = JSON.stringify(type)
    db.serialize(async function () {
        db.run("UPDATE Users SET name = ?, type = ?, email = ?, state = ? WHERE id = ?",
            [name, typeString, email, state, id]);
    })
    res.status(200).json({ result: "ok" })
})
app.post('/editActivity', (req, res) => {
    let { name, score, time, emit, id } = req.body;
    db.serialize(async function () {
        db.run("UPDATE Activities SET name = ?, score = ?, time = ?, emit = ? WHERE id = ?",
            [name, score, time, emit, id]);
    })
    res.status(200).json({ result: "ok" })
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
            ChangesPrev.push(Changes)
            let ChangesPrevString = JSON.stringify(ChangesPrev)
            db.run("UPDATE OT SET Changes = ? WHERE id = ?", [ChangesPrevString, idOt]);
            res.status(200).json({ result: "ok history" })
        })
    })
})
app.post('/editOt', (req, res) => {
    let { Producto, Marca, Modelo, Cotizacion, Client, id, Date } = req.body;
    db.serialize(async function () {
        db.run("UPDATE OT SET Producto = ?,Marca = ?,Modelo = ?,Cotizacion = ?,Client = ?,Date=? WHERE id = ? ", [Producto, Marca, Modelo, Cotizacion, Client, Date, id]);
        res.status(200).json({ result: "ok" })
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
app.post('/editOtActivities', (req, res) => {
    const { id, activity } = req.body;
    db.serialize(async function () {
        db.run("UPDATE OT SET Activities = ? WHERE id = ? ", [JSON.stringify(activity), id]);
        res.status(200).json({ result: "ok" })
    }
    )
})
app.post('/editOtAuth', (req, res) => {
    const { otId, newAuth } = req.body
    db.serialize(async function () {
        db.run("UPDATE OT SET Auth = ? WHERE id = ? ", [newAuth, otId]);
        res.status(200).json({ result: "ok" })
    }
    )
})
app.post('/editOtAvailability', (req, res) => {
    const { id, availability } = req.body
    db.serialize(async function () {
        db.run("UPDATE OT SET Availability = ? WHERE id = ? ", [availability ? JSON.stringify(availability) : availability, id]);
        res.status(200).json({ result: "ok" })
    })
})
app.post('/editUserTeam', (req, res) => {
    const { id, userTeam } = req.body
    db.serialize(async function () {
        db.run("UPDATE Users SET Team = ? WHERE id = ? ", [JSON.stringify(userTeam), id]);
        res.status(200).json({ result: "ok" })
    })
})
app.post('/editOtPay', (req, res) => {
    const { id, pay } = req.body
    db.serialize(async function () {
        db.run("UPDATE OT SET Factura = ? WHERE id = ? ", [JSON.stringify(pay.newList), id]);
        res.status(200).json({ result: "ok" })
    })
})
app.post('/delete', (req, res) => {
    db.serialize(async function () {
        db.run("DELETE FROM Users WHERE email = ?", ["dario@gmail.com"]);
    })
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
function eliminarHastaRoot(texto) {
    const indexRoot = texto.indexOf("root");
    if (indexRoot !== -1) {
        return texto.slice(indexRoot + 5);
    } else {
        return texto;
    }
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
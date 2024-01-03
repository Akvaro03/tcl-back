const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors')

const multer = require('multer');


const port = 4000 || process.env.PORT;
var sqlite3 = require('sqlite3');
const bcrypt = require("bcryptjs")
const app = express();
const saltRounds = 10
const fs = require('fs');
const { OType, Client } = require('./types');

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
    // db.run("DROP TABLE Clients")
    // db.run("DROP TABLE Config")
    // db.run("DROP TABLE TypeOt")
    // db.run("DROP TABLE Users")
    // db.run("DROP TABLE Factura")
    // db.run("DROP TABLE OT")
    db.run("CREATE TABLE IF NOT EXISTS Activities (id INTEGER PRIMARY KEY, name TEXT,score NUMERIC,time NUMERIC, users TEXT, state TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Factura    (id TEXT, dateCreated NUMERIC,dateExpiration NUMERIC, datePay NUMERIC, state TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Clients    (id INTEGER PRIMARY KEY, Name TEXT,Document TEXT, KeyUnique TEXT, Contacts TEXT, location TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS TypeOt     (id INTEGER PRIMARY KEY, abbreviation TEXT, nameType TEXT, activities TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Config     (id INTEGER PRIMARY KEY, nameCompany TEXT,browserLogo TEXT,companyLogo TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Users      (id INTEGER PRIMARY KEY, name TEXT, type TEXT, email TEXT, password TEXT, state TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS OT         (id INTEGER PRIMARY KEY, priority TEXT, OTKey TEXT, Client TEXT,Date NUMERIC, Producto TEXT, Marca TEXT, Modelo TEXT, NormaAplicar TEXT, Cotizacion TEXT, FechaVencimiento DATETIME, FechaEstimada DATETIME, Type TEXT, Description TEXT, StateProcess TEXT, Observations TEXT, Contact TEXT, Changes TEXT, Auth TEXT, Activities TEXT, IdClient NUMERIC, Availability TEXT, Factura TEXT)");
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

        // db.run("DELETE FROM Ot WHERE id = ?", [id]);
        // db.run("ALTER TABLE Ot ADD priority TEXT");
        // db.run("DELETE FROM Clients WHERE id = 505");

        db.all("SELECT * FROM Ot WHERE id = ?", [id], function (err, row) {
            if (err) {
                res.status(200).json({ result: "error" })
            }
            console.log(row)
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
app.post('/getOtKey', (req, res) => {
    const { date } = req.body
    const dateFormated = new Date(date).getTime();

    db.serialize(async function () {
        db.all(`SELECT * FROM OT WHERE Date = ${dateFormated}`, function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row.length)
        })
    });
})
app.post('/getOTFact', (req, res) => {
    const { id } = req.body
    db.serialize(async function () {
        db.all("SELECT * FROM OT", function (err, row) {
            const OTWithFact = row.filter(ot => {
                if (ot.Factura) {
                    return JSON.parse(ot.Factura).includes(id)
                }
                return false
            }).map(data => data.OTKey)
            return "JSON.stringify(OTWithFact)"
        })
    });
})

app.post('/postClients', (req, res) => {
    let { nameClient, Document, Key, ContactVerificate, location } = req.body;
    let DocumentFormat = JSON.stringify(Document)
    let ContactFormat = JSON.stringify(ContactVerificate)

    const callbackErrorPostData = new callbackError(res)


    db.serialize(async function () {
        db.run("INSERT INTO Clients (Name, Document, KeyUnique, Contacts, location) VALUES (?,?,?,?,?)",
            [nameClient, DocumentFormat, Key, ContactFormat, location], callbackErrorPostData.isError);
        res.status(200).json({ result: "ok client" })
    })
})
app.post('/postUsers', (req, res) => {
    let { name, type, email, password } = req.body;
    const typeString = JSON.stringify(type)

    const callbackErrorPostData = new callbackError(res)

    encryptPassword(password).then(data => {
        db.serialize(async function () {
            db.run("INSERT INTO Users (name, type, email, password, state) VALUES (?,?,?,?,?)",
                [name, typeString, email, data, "active"], callbackErrorPostData.isError);
            res.status(200).json({ result: "ok user" })
        })
    })
})
app.post('/postOT', (req, res) => {
    let stringToSend = "ok ot "
    const { Description, Identificación, activities, IdClient, Date, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Observaciones, Contact, Changes } = req.body;
    let { Client } = req.body;
    Client = Client.split("-")[1].slice("3")

    const callbackErrorPostData = new callbackError(res)
    db.serialize(async function () {
        let ChangesString = JSON.stringify([Changes])
        let DescriptionString = JSON.stringify(Description)
        let contact = JSON.stringify(Contact)
        db.run("INSERT INTO OT (OTKey, Client, Date, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Description,StateProcess, Observations, Contact, Changes, Auth, Activities, IdClient) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [Identificación, Client, Date, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type.nameType, DescriptionString, "Created", Observaciones, contact, ChangesString, false, activities, IdClient],
            callbackErrorPostData.isError);
        db.all("SELECT * FROM OT ORDER BY id DESC LIMIT 1", function (err, row) {
            stringToSend += row[0] ? row[0].id : 0;
            res.status(200).json({ result: stringToSend })
        })
    })
})
app.post('/postConfig', (req, res) => {
    const { nameCompany } = req.body
    const { browserLogo, companyLogo } = req.files;
    const newPath = __dirname + '/files/';
    const pathBrowserLogo = `${newPath}${"browserLogo.png"}`
    const pathCompanyLogo = `${newPath}${"companyLogo.png"}`

    const callbackErrorPostData = new callbackError(res)

    db.serialize(async function () {
        db.all("SELECT * FROM Config", function (err, row) {
            if (row[0]) {
                if (companyLogo) {
                    companyLogo.mv(pathCompanyLogo)
                    db.run("UPDATE Config SET companyLogo = ? WHERE id = 1",
                        [eliminarHastaRoot(pathCompanyLogo)], callbackErrorPostData.isError);
                }
                if (browserLogo) {
                    browserLogo.mv(pathBrowserLogo)
                    db.run("UPDATE Config SET browserLogo = ? WHERE id = 1",
                        [eliminarHastaRoot(pathBrowserLogo)], callbackErrorPostData.isError);
                }
                if (nameCompany) {
                    db.run("UPDATE Config SET nameCompany = ? WHERE id = 1",
                        [nameCompany])
                }
            } else {
                db.run("INSERT INTO Config (nameCompany, browserLogo, companyLogo) VALUES (?,?,?)",
                    [nameCompany, eliminarHastaRoot(pathBrowserLogo), eliminarHastaRoot(pathCompanyLogo)], callbackErrorPostData.isError);
            }
        })
        res.status(200).json({ result: "ok Config" })
    })
})

app.post('/postTypeOt', (req, res) => {
    const { nameType, activities, abbr } = req.body

    const callbackErrorPostData = new callbackError(res)

    db.serialize(async function () {
        db.run("INSERT INTO TypeOt (nameType, activities, abbreviation) VALUES (?,?,?)",
            [nameType, JSON.stringify(activities), abbr], callbackErrorPostData.isError);
    })
    res.status(200).json({ result: "ok Type" })
})
app.post('/postActivity', (req, res) => {
    const { name, score, time } = req.body

    const callbackErrorPostData = new callbackError(res)

    db.serialize(async function () {
        db.run("INSERT INTO Activities (name, score, time, users, state) VALUES (?,?,?,?,?)",
            [name, score, time, "[]", "Created"], callbackErrorPostData.isError)
    })

})
app.post('/postPay', (req, res) => {
    const { pay } = req.body

    const callbackErrorPostData = new callbackError(res)
    db.serialize(async function () {
        db.run("INSERT INTO Factura (dateCreated ,dateExpiration ,id, state, datePay) VALUES (?,?,?,?,?)",
            [pay.dateCreated, pay.dateExpiration, pay.id, "created", pay.datePay], callbackErrorPostData.isError);
    })
    res.status(200).json({ Result: "ok Fact" })
})
app.post('/postClientsJson', (req, res) => {
    const clientsData = req.body;
    db.serialize(async function () {
        for (const clientData of clientsData) {
            const newClient = new Client(clientData);
            db.run(
                "INSERT INTO Clients (Name, Document, KeyUnique, Contacts, location) VALUES (?,?,?,?,?)",
                [newClient.Name, newClient.Document, newClient.KeyUnique, newClient.Contacts, newClient.location]
            );
        }
    });
    res.status(200).json({ result: "ok Activity" })
})
app.post('/postOTJson', (req, res) => {
    const otsData = req.body;
    db.serialize(async function () {
        for (const otData of otsData) {
            const OT = new OType(otData);
            db.run("INSERT INTO OT (Factura, Client, Date,  Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Description,StateProcess, Observations, Contact, Changes, Auth, Activities, IdClient, OTKey) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [null, OT.Client, OT.Date, OT.Producto, OT.Marca, OT.Modelo, OT.NormaAplicar, OT.Cotizacion, OT.FechaVencimiento, OT.FechaEstimada, OT.Type, OT.Description, OT.StateProcess, OT.Observations, OT.Contact, OT.Changes, 1, OT.Activities, OT.IdClient, OT.OTKey]);
        }
    });
    res.status(200).json({ result: "ok Activity" })
})


app.post('/editUser', (req, res) => {
    let { name, type, email, id, state, password } = req.body;
    const typeString = JSON.stringify(type)
    db.serialize(async function () {
        if (!password[0]) {
            db.run("UPDATE Users SET name = ?, type = ?, email = ?, state = ? WHERE id = ?",
                [name, typeString, email, state, id]);
        } else {
            encryptPassword(password)
                .then(encrypted => {
                    db.run("UPDATE Users SET password = ?, name = ?, type = ?, email = ?, state = ? WHERE id = ?",
                        [encrypted, name, typeString, email, state, id]);
                })
        }
    })
    res.status(200).json({ result: "ok edit" })
})
app.post('/editActivity', (req, res) => {
    let { name, score, time, id } = req.body;
    db.serialize(async function () {
        db.run("UPDATE Activities SET name = ?, score = ?, time = ? WHERE id = ?",
            [name, score, time, id]);
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
app.post('/editOtState', (req, res) => {
    let { state, idOt } = req.body;
    db.serialize(async function () {
        db.run("UPDATE OT SET StateProcess = ? WHERE id = ? ", [state, idOt]);
        res.status(200).json({ result: "ok" })
    }
    )
})

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
    const { Producto, priority, Marca, Modelo, Cotizacion, Client, id, Date, Contacts, expiredDate } = req.body;
    db.serialize(async function () {
        db.run("UPDATE OT SET Contact = ?, priority = ?, FechaVencimiento = ?, Producto = ?,Marca = ?,Modelo = ?,Cotizacion = ?,Client = ?,Date=? WHERE id = ? ",
            [Contacts, priority, expiredDate, Producto, Marca, Modelo, Cotizacion, Client, Date, id]);
        res.status(200).json({ result: "ok" })
    })
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
app.post('/editOtPay', (req, res) => {
    const { id, pay } = req.body
    db.serialize(async function () {
        db.run("UPDATE OT SET Factura = ? WHERE id = ? ", [JSON.stringify(pay.newList), id]);
        res.status(200).json({ result: "ok" })
    })
})
app.post('/editTypeOt', (req, res) => {
    const { id, nameType, activities, abbr } = req.body;
    const stringSql = `UPDATE TypeOt SET ${nameType ? "nameType = ?," : ""} activities = ? ${abbr ? ", abbreviation = ?" : ""}WHERE id = ? `
    const dataToSend = [nameType, JSON.stringify(activities), abbr, id].filter(item => item !== null)
    db.serialize(async function () {
        db.run(stringSql, dataToSend);
    })
    res.status(200).json({ result: "ok edit" })
})
app.post('/editPay', (req, res) => {
    const { id, datePay = null, dateCreated, dateExpiration, prevId } = req.body
    db.serialize(async function () {
        if (!prevId) {
            db.run("UPDATE Factura SET datePay = ? WHERE id = ? ", [datePay, id]);
        } else {
            db.run("UPDATE Factura SET datePay = ?,dateCreated = ?,dateExpiration = ?, id = ? WHERE id = ? ",
                [datePay, dateCreated, dateExpiration, id, prevId]);
        }
        res.status(200).json({ result: "ok" })
    })
})
app.post('/editClient', (req, res) => {
    let { nameClient, Document, Key, ContactVerificate, id, location } = req.body;
    let DocumentFormat = JSON.stringify(Document)
    let ContactFormat = JSON.stringify(ContactVerificate)
    console.log(location)
    db.serialize(async function () {
        db.run("UPDATE Clients SET Name = ?,Document = ?,KeyUnique = ?,location = ?,Contacts = ? WHERE id = ? ",
            [nameClient, DocumentFormat, Key, location, ContactFormat, id]);
        res.status(200).json({ result: "ok" })
    })
})



app.post('/deleteActivity', (req, res) => {
    const { id } = req.body
    db.serialize(async function () {
        db.run("DELETE FROM Activities WHERE id = ?",
            [id]);
    })
    res.status(200).json({ result: "ok delete activity" })
})
app.post('/deleteTypeOt', (req, res) => {
    const { id } = req.body
    db.serialize(async function () {
        db.run("DELETE FROM TypeOt WHERE id = ?",
            [id]);
    })
    res.status(200).json({ result: "ok delete" })
})
app.post('/deleteUser', (req, res) => {
    const { id } = req.body
    db.serialize(async function () {
        db.run("DELETE FROM Users WHERE id = ?",
            [id]);
    })
    res.status(200).json({ result: "ok delete" })
})



app.post('/login', (req, res) => {
    let { email, password } = req.body;
    try {
        db.get("SELECT * FROM Users WHERE email = ?", [email], function (err, row) {
            row === undefined && res.status(200).json({ result: "error email" });
            row != undefined && bcrypt
                .compare(password, row.password)
                .then(state => {
                    state ? res.setHeader('Access-Control-Allow-Origin', '*').status(200).json({ result: "ok login", hash: row.password, user: row }) :
                        res.setHeader('Access-Control-Allow-Origin', '*').status(200).json({ result: "error password" })
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
function encryptPassword(password) {
    return bcrypt
        .genSalt(saltRounds)
        .then(salt => {
            return bcrypt.hash(password, salt)
        })
}
class callbackError {
    constructor(res) {
        this.res = res;
        this.isError = this.isError.bind(this);
    }


    isError(err) {
        if (err) {
            this.res.status(200).json({ Result: "error" })
        }
    }
}
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
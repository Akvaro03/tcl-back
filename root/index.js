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

// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO
// HAY QUE MODIFICAR EN LOS TIPOS EN LOS USUARIOS Y SACARLES LOS PARENTESIS, DEJANDO EL STRING SOLO

var db = new sqlite3.Database('example.db');
db.serialize(function () {
    // db.run("DROP TABLE Activities")
    // db.run("DROP TABLE Clients")
    // db.run("DROP TABLE Config")
    // db.run("DROP TABLE TypeOt")
    // db.run("DROP TABLE Users")
    // db.run("DROP TABLE Nueva_OT")
    // db.run("DROP TABLE OT")
    // db.run("DROP TABLE newClients")

    // const sql = `ALTER TABLE TypeOt ADD COLUMN contractName TEXT`;
    // const sql = `ALTER TABLE OT DROP COLUMN nLacre`;
    // const sql = `DELETE FROM Users WHERE id = 19`;
    // const sql = `UPDATE OT SET Description = NULL WHERE Description = 'undefined'`;
    // db.run(sql);

    // const sql = `DELETE FROM Factura`;
    db.run("CREATE TABLE IF NOT EXISTS Activities   (id INTEGER PRIMARY KEY, name TEXT,score NUMERIC,time NUMERIC, users TEXT, state TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Factura      (id TEXT, dateCreated NUMERIC,dateExpiration NUMERIC, datePay NUMERIC, state TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS TypeOt       (id INTEGER PRIMARY KEY, abbreviation TEXT, nameType TEXT, activities TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Config       (id INTEGER PRIMARY KEY, nameCompany TEXT,browserLogo TEXT,companyLogo TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Users        (id INTEGER PRIMARY KEY, name TEXT, type TEXT, email TEXT, password TEXT, state TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS OT           (id INTEGER PRIMARY KEY, priority TEXT, OTKey TEXT, Client TEXT,Date NUMERIC, Producto TEXT, Marca TEXT, Modelo TEXT, NormaAplicar TEXT, Cotizacion TEXT, FechaVencimiento DATETIME, FechaEstimada DATETIME, Type TEXT, Description TEXT, StateProcess TEXT, Observations TEXT, Contact TEXT, Changes TEXT, Auth TEXT, Activities TEXT, IdClient NUMERIC, Availability TEXT, Factura TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Contract     (id INTEGER PRIMARY KEY, name TEXT, url TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Suggestions  (Observations TEXT,NormaAplicar TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS Clients      (id INTEGER PRIMARY KEY, idEditable NUMERIC,Name TEXT,Document TEXT, KeyUnique TEXT, Contacts TEXT, location TEXT)");
    // db.run("INSERT INTO Clients (id, Name, Document, KeyUnique, Contacts, Location) SELECT * FROM newClients ORDER BY id")
    db.run("CREATE TABLE IF NOT EXISTS newClients   (id NUMERIC, Name TEXT,Document TEXT, KeyUnique TEXT, Contacts TEXT, location TEXT)");
    // db.run("INSERT INTO newClients (id, Name, Document, KeyUnique, Contacts, location) SELECT id, Name, Document, KeyUnique, Contacts, location FROM Clients");
});

app.get('/getContracts', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Contract", function (err, row) {
            if (err) {
                res.json(err)
            }
            res.status(200).json(row)
        })
    });
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
app.get('/getnewClients', (req, res) => {
    db.serialize(async function () {

        // for (const client of clientListCorrect) {
        //     db.run("INSERT INTO Clients (id, idEditable, Name, Document, KeyUnique, Contacts, location) VALUES (?,?,?,?,?,?,?)",
        //         [client.id, client.idEditable, client.Name, client.Document, client.KeyUnique, client.Contacts, client.location]);
        // }

        // for (const client of clientListCorrect) {
        //     // db.run("UPDATE Nueva_OT SET nuevo_id = 'Alta' WHERE id = 2")
        //     db.run(`UPDATE newClients SET id = ${client.N} WHERE Name LIKE "${client.CLIENTE.trim()}%"`)
        // }

        // async function actualizarIDs() {
        //     try {
        //         for (const client of clientList.slice(0, 10)) {
        //             // Verificar si el nuevo ID ya existe en la tabla espejo
        //             let existingClient = await db.get("SELECT * FROM newClients WHERE id = ?", client.N);

        //             if (existingClient) {
        //                 // Si el nuevo ID ya existe, encontrar un nuevo ID disponible
        //                 let newID = client.N;
        //                 while (existingClient) {
        //                     newID++; // Intenta con el siguiente ID
        //                     existingClient = await db.get("SELECT * FROM newClients WHERE id = ?", newID);
        //                 }
        //                 await db.run(`UPDATE newClients SET id = ? WHERE id = ?`, [newID, `${client.N}`]);
        //             }

        //             // Actualizar el ID del cliente en la tabla espejo
        //             await db.run(`UPDATE newClients SET id = ? WHERE Name LIKE ?`, [client.N, `${client.CLIENTE.replace(/\s+/g, '')}%`]);
        //         }

        //         console.log("IDs actualizados correctamente en la tabla espejo.");
        //     } catch (error) {
        //         console.error("Error al actualizar IDs:", error);
        //     }
        // }
        // await actualizarIDs()




        db.all("SELECT * FROM newClients ORDER BY id", function (err, row) {
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
app.get('/getSuggestions', (req, res) => {
    db.serialize(async function () {
        db.all("SELECT * FROM Suggestions", function (err, row) {
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
app.post('/getContract', (req, res) => {
    let { Name } = req.body;
    const path = __dirname + "/" + Name
    res.status(200).sendFile(path)

})
app.post('/getOneOt', (req, res) => {
    let { id } = req.body;
    db.serialize(async function () {
        db.all("SELECT * FROM Ot WHERE id = ?", [id], function (err, row) {
            if (err) {
                res.status(200).json({ result: "error" })
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
app.post('/getOneFact', (req, res) => {
    const { id } = req.body
    db.serialize(async function () {
        db.get("SELECT * FROM Factura WHERE id = ?", [id], function (err, row) {
            console.log(row)
            res.status(200).json(row ? row : { false: false })
        })
    });
})

app.post('/postClients', (req, res) => {
    let { Name, Document, KeyUnique, Contacts, idEditable, location } = req.body;
    const callbackErrorPostData = new callbackError(res)

    db.serialize(async function () {
        db.run("INSERT INTO Clients (idEditable, Name, Document, KeyUnique, Contacts, location) VALUES (?,?,?,?,?,?)",
            [idEditable, Name, Document, KeyUnique, Contacts, location], callbackErrorPostData.isError);
        res.status(200).json({ result: "ok client" })
    })
})
app.post('/postUsers', (req, res) => {
    let { name, type, email, password } = req.body;
    const callbackErrorPostData = new callbackError(res)

    encryptPassword(password).then(data => {
        db.serialize(async function () {
            db.run("INSERT INTO Users (name, type, email, password, state) VALUES (?,?,?,?,?)",
                [name.toUpperCase(), type, email, data, "active"], callbackErrorPostData.isError);
            res.status(200).json({ result: "ok user" })
        })
    })
})
app.post('/postOT', (req, res) => {
    const { Client, contractName, nLacre, Description, Identificación, Activities, IdClient, Date, Producto, Marca, Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type, Observations, Contact, Changes } = req.body;
    const callbackErrorPostData = new callbackError(res)

    async function createOT() {
        try {
            const insertQuery = `
                INSERT INTO OT (
                    OTKey, contractName, nLacre, Client, Date, Producto, Marca, Modelo,
                    NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type,
                    Description, StateProcess, Observations, Contact, Changes, Auth,
                    Activities, IdClient
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const selectQuery = "SELECT * FROM OT ORDER BY id DESC LIMIT 1";

            db.run(insertQuery, [
                Identificación, contractName, nLacre, Client, Date, Producto, Marca,
                Modelo, NormaAplicar, Cotizacion, FechaVencimiento, FechaEstimada, Type,
                Description, "Created", Observations, Contact, Changes, false, Activities, IdClient
            ], callbackErrorPostData.isError);

            db.all(selectQuery, function (err, row) {
                res.status(200).json({ result: row[0] ? row[0].id : 0 })
            });
        } catch (err) {
            console.error("Database error:", err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    db.serialize(createOT);
    // res.status(200).json({ result: 19})
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
app.post('/postContract', (req, res) => {
    const { name } = req.body
    const { contractFile } = req.files;
    const nameFormatted = name.replace(/\s/g, '')
    const newPath = __dirname + '/files/';
    const contractFilePath = `${newPath}${nameFormatted + ".png"}`
    contractFile.mv(contractFilePath)

    const callbackErrorPostData = new callbackError(res)

    db.serialize(async function () {
        db.run("INSERT INTO Contract (name, url) VALUES (?,?)",
            [name, eliminarHastaRoot(contractFilePath)], callbackErrorPostData.isError);
        res.status(200).json({ result: "ok Config" })
    })
})
app.post('/postPay', (req, res) => {
    const { pay } = req.body

    const callbackErrorPostData = new callbackError(res)
    db.serialize(async function () {
        db.run("INSERT INTO Factura (dateCreated ,dateExpiration ,id, state, datePay) VALUES (?,?,?,?,?)",
            [pay.dateCreated, pay.dateExpiration, pay.id, "Created", pay.datePay], callbackErrorPostData.isError);
        res.status(200).json({ result: "ok Fact" })
    })
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
    db.serialize(async function () {
        if (!password[0]) {
            db.run("UPDATE Users SET name = ?, type = ?, email = ?, state = ? WHERE id = ?",
                [name.toUpperCase(), type, email, state, id]);
        } else {
            encryptPassword(password)
                .then(encrypted => {
                    db.run("UPDATE Users SET password = ?, name = ?, type = ?, email = ?, state = ? WHERE id = ?",
                        [encrypted, name.toUpperCase(), type, email, state, id]);
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
    const { contractName, nLacre, Factura, Availability, IdClient, Activities, Auth, Contact, Observations,
        StateProcess, Description, Type, FechaEstimada, FechaVencimiento, Cotizacion, NormaAplicar,
        Modelo, Marca, Producto, Date, Client, OTKey, priority, id
    } = req.body;
    console.log(JSON.stringify(Availability))
    db.serialize(async function () {
        db.run("UPDATE OT SET contractName = ?, nLacre = ?, Factura = ?, Availability = ?, IdClient = ?, Activities = ?, Auth = ?,Contact = ?,Observations = ?,StateProcess = ?,Description = ?,Type=?, FechaEstimada = ?, FechaVencimiento = ?,Cotizacion = ?,NormaAplicar = ?,Modelo = ?,Marca = ?,Producto = ?,date=?, Client = ?, OTKey = ?, priority = ? WHERE id = ? ",
            [contractName, nLacre, Factura, Availability, IdClient, Activities, Auth, Contact, Observations,
                StateProcess, Description, Type, FechaEstimada, FechaVencimiento, Cotizacion, NormaAplicar,
                Modelo, Marca, Producto, Date, Client, OTKey, priority, id]);
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
app.post('/editOtDescription', (req, res) => {
    const { id, Description } = req.body
    db.serialize(async function () {
        db.run("UPDATE OT SET Description = ? WHERE id = ? ", [Description ? JSON.stringify(Description) : Description, id]);
        res.status(200).json({ result: "ok" })
    })
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
    let { Name, Document, KeyUnique, Contacts, id, location, idEditable } = req.body;
    db.serialize(async function () {
        db.run("UPDATE Clients SET Name = ?,Document = ?,KeyUnique = ?,location = ?,idEditable=?, Contacts = ? WHERE id = ? ",
            [Name, Document, KeyUnique, location, idEditable, Contacts, id]);
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

app.post('/delete_ot', (req, res) => {
    const { id } = req.body;
    db.run("DELETE FROM OT WHERE id = ?", [id], function (err) {
        if (err) {
            console.error("Error deleting OT:", err);
            return res.status(500).json({ result: "error", message: err.message });
        }
        res.status(200).json({ result: "ok", message: "OT deleted successfully" });
    });
});

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
function addSuggObservations(Observations) {
    db.serialize(async function () {
        db.run("INSERT INTO Suggestions (nameType, activities, abbreviation) VALUES (?,?,?)",
            [nameType, JSON.stringify(activities), abbr], callbackErrorPostData.isError);
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


const clientList = [
    {
        "N": 0,
        "CLIENTE": "LABORATORIO CONSULTAR S.R.L.",
        "CUIT": "30-70750447-8"
    },
    {
        "N": 2,
        "CLIENTE": "GRIDE ELECTRONICA S.R.L.",
        "CUIT": "30-62105411-9"
    },
    {
        "N": 4,
        "CLIENTE": "OM SRL",
        "CUIT": "30-62836560-8"
    },
    {
        "N": 5,
        "CLIENTE": "TOMAS FERMIN MENA ",
        "CUIT": "20-04637386-4"
    },
    {
        "N": 8,
        "CLIENTE": "GRUPO CONSULTAR S.R.L.",
        "CUIT": "30-62341561-5"
    },
    {
        "N": 10,
        "CLIENTE": "TALLERES METALURGICOS BAMBI S.A.",
        "CUIT": "30-53311922-7"
    },
    {
        "N": 25,
        "CLIENTE": "AXEL S.A.",
        "CUIT": "30-55590776-8"
    },
    {
        "N": 38,
        "CLIENTE": "NARDI & HERRERO S.R.L.",
        "CUIT": "30-56180127-0"
    },
    {
        "N": 39,
        "CLIENTE": "KRETZ S.A.",
        "CUIT": "30-54764718-8"
    },
    {
        "N": 50,
        "CLIENTE": "FRIMETAL S.A.",
        "CUIT": "30-59697015-6"
    },
    {
        "N": 51,
        "CLIENTE": "ARNEG ARGENTINA S.A.",
        "CUIT": "30-58642351-3"
    },
    {
        "N": 55,
        "CLIENTE": "EPTA ARGENTINA S.A.",
        "CUIT": "30-60217363-8"
    },
    {
        "N": 56,
        "CLIENTE": "BARBUY TEAM S.A.",
        "CUIT": "30-65716216-3"
    },
    {
        "N": 63,
        "CLIENTE": "METALBO S.R.L.",
        "CUIT": "30-68090337-5"
    },
    {
        "N": 64,
        "CLIENTE": "PLYRAP S.A.",
        "CUIT": "33-70860316-9"
    },
    {
        "N": 71,
        "CLIENTE": "SYLWAN S.A.",
        "CUIT": "30-50088106-9"
    },
    {
        "N": 72,
        "CLIENTE": "HECTOR CODINI S.A.",
        "CUIT": "30-50351035-5"
    },
    {
        "N": 74,
        "CLIENTE": "CAMIMPORT S.R.L.",
        "CUIT": "30-64086932-8"
    },
    {
        "N": 76,
        "CLIENTE": "BRIKET S.A.",
        "CUIT": "30-50377165-5"
    },
    {
        "N": 78,
        "CLIENTE": "BCD S.R.L.",
        "CUIT": "30-61520790-6"
    },
    {
        "N": 80,
        "CLIENTE": "RICOH ARGENTINA S.A.",
        "CUIT": "30-50423158-1"
    },
    {
        "N": 81,
        "CLIENTE": "MEDIX MEDICAL DEVICES SRL",
        "CUIT": "30-52320075-1"
    },
    {
        "N": 84,
        "CLIENTE": "MOTORES CZERWENY S.A.",
        "CUIT": "30-69725135-5"
    },
    {
        "N": 89,
        "CLIENTE": "IRAM FILIAL LITORAL",
        "CUIT": "30-52556278-2"
    },
    {
        "N": 91,
        "CLIENTE": "EL DORADO S.A.",
        "CUIT": "30-61790753-0"
    },
    {
        "N": 96,
        "CLIENTE": "CERTEC S.A.",
        "CUIT": "30-69642315-2"
    },
    {
        "N": 103,
        "CLIENTE": "BASCULAS GAMA SRL",
        "CUIT": "30-6805265-6"
    },
    {
        "N": 110,
        "CLIENTE": "VULCANO S.A.",
        "CUIT": "30-55536556-6"
    },
    {
        "N": 113,
        "CLIENTE": "PRETEC S.A.",
        "CUIT": "30-71093587-0"
    },
    {
        "N": 114,
        "CLIENTE": "CARRIER S.R.L.",
        "CUIT": "33-50392124-9"
    },
    {
        "N": 120,
        "CLIENTE": "DEMIQUELLI ANIBAL LUIS (ANION 68)",
        "CUIT": "20-04309841-2"
    },
    {
        "N": 123,
        "CLIENTE": "SNA-E ARGENTINA S.A.",
        "CUIT": "30-50203411-8"
    },
    {
        "N": 129,
        "CLIENTE": "ARGENTINO CIPOLATTI S.A. (PE\u00d3N)",
        "CUIT": "30-71028101-3"
    },
    {
        "N": 136,
        "CLIENTE": "DIBRA S.H.",
        "CUIT": "30-70881661-9"
    },
    {
        "N": 141,
        "CLIENTE": "ELECTROMEC\u00c1NICA VIC S.A.",
        "CUIT": "30-52208537-1"
    },
    {
        "N": 151,
        "CLIENTE": "MIG S.R.L.",
        "CUIT": "30-70965354-3"
    },
    {
        "N": 152,
        "CLIENTE": "KODAK ALARIS SAIC",
        "CUIT": "33-71423088-9"
    },
    {
        "N": 153,
        "CLIENTE": "GaCYF SRL",
        "CUIT": "30-71216563-0"
    },
    {
        "N": 163,
        "CLIENTE": "VERDEVIDA SA",
        "CUIT": "30-70765729-0"
    },
    {
        "N": 170,
        "CLIENTE": "INDELPLAS",
        "CUIT": "20-12143144-1"
    },
    {
        "N": 171,
        "CLIENTE": "MULTIREP S.A.",
        "CUIT": "30-69543649-8"
    },
    {
        "N": 172,
        "CLIENTE": "CIROCO S.R.L.",
        "CUIT": "30-61481655-0"
    },
    {
        "N": 179,
        "CLIENTE": "ELECTROLUX ARGENTINA S.A.",
        "CUIT": "30-66347145-3"
    },
    {
        "N": 182,
        "CLIENTE": "JOS\u00c9 CAPOBIANCO S.R.L.",
        "CUIT": "30-64647148-2"
    },
    {
        "N": 183,
        "CLIENTE": "TICAR S.R.L.",
        "CUIT": "30-69083341-3"
    },
    {
        "N": 186,
        "CLIENTE": "JARVIS ARGENTINA S.A.",
        "CUIT": "33-55543763-9"
    },
    {
        "N": 194,
        "CLIENTE": "PLUMITA S.R.L.",
        "CUIT": "30-56756919-1"
    },
    {
        "N": 201,
        "CLIENTE": "SOLEK S.R.L.",
        "CUIT": "30-68261942-9"
    },
    {
        "N": 203,
        "CLIENTE": "JUAN CARLOS PROLA Y CIA S.R.L.",
        "CUIT": "30-56998296-7"
    },
    {
        "N": 205,
        "CLIENTE": "ARGENTRADE S.R.L.",
        "CUIT": "30-66010157-4"
    },
    {
        "N": 206,
        "CLIENTE": "PLOTTERSERVICE S.R.L.",
        "CUIT": "30-71145923-1"
    },
    {
        "N": 217,
        "CLIENTE": "NEW CLOR S.R.L.",
        "CUIT": "30-57734-682-4"
    },
    {
        "N": 225,
        "CLIENTE": "SUREX ARGENTINA S.A.",
        "CUIT": "30-70802317-1"
    },
    {
        "N": 226,
        "CLIENTE": "ESKABE S.A.",
        "CUIT": "30-50333978-8"
    },
    {
        "N": 230,
        "CLIENTE": "ROS MATERIALES ELECTRICOS S.R.L.",
        "CUIT": "30-63320183-4"
    },
    {
        "N": 231,
        "CLIENTE": "USHUAIA - ERREQUET VICTOR",
        "CUIT": "20-04917310-6"
    },
    {
        "N": 233,
        "CLIENTE": "METALFRIO SOLUTIONS S.A.",
        "CUIT": "30-71581192-4"
    },
    {
        "N": 236,
        "CLIENTE": "WIMER - LOSA VER\u00d3NICA LAURA",
        "CUIT": "27-22285706-1"
    },
    {
        "N": 238,
        "CLIENTE": "INDULAR S.A.",
        "CUIT": "30-70145649-8"
    },
    {
        "N": 240,
        "CLIENTE": "GILBARCO LATIN AMERICA S.R.L.",
        "CUIT": "33-67992122-9"
    },
    {
        "N": 243,
        "CLIENTE": "BACOPE S.A.",
        "CUIT": "30-50497362-6"
    },
    {
        "N": 245,
        "CLIENTE": "ENKEM S.A.",
        "CUIT": "30-71119054-2"
    },
    {
        "N": 261,
        "CLIENTE": "TROBBIANI DANIEL RAMON (FRIGOFE)",
        "CUIT": "20-11710721-4"
    },
    {
        "N": 262,
        "CLIENTE": "SIGNIFY ARGENTINA S.A.",
        "CUIT": "33-71492461-9"
    },
    {
        "N": 278,
        "CLIENTE": "LIPARI JOS\u00c9 ENRIQUE",
        "CUIT": "20-12736104-6"
    },
    {
        "N": 283,
        "CLIENTE": "BICIMUNDO S.R.L.",
        "CUIT": "33-70855603-9"
    },
    {
        "N": 284,
        "CLIENTE": "MABE COLOMBIA",
        "CUIT": "23-8011908066-4"
    },
    {
        "N": 290,
        "CLIENTE": "SISTEMAS Y SOLUCIONES DIGITALES S.R.L.",
        "CUIT": "30-70780100-6"
    },
    {
        "N": 291,
        "CLIENTE": "DEEP S.A.",
        "CUIT": "30-70748996-7"
    },
    {
        "N": 292,
        "CLIENTE": "FENOGLIO Y CAPELLO S.R.L.",
        "CUIT": "30-59076179-2"
    },
    {
        "N": 302,
        "CLIENTE": "CAELBI S.A.",
        "CUIT": "30-71082200-6"
    },
    {
        "N": 312,
        "CLIENTE": "DANIEL MIGNANI S.R.L.",
        "CUIT": "30-64147136-0"
    },
    {
        "N": 325,
        "CLIENTE": "FACULTAD DE CIENCIAS AGRARIAS",
        "CUIT": "30-60232667-1"
    },
    {
        "N": 326,
        "CLIENTE": "SCHREDER ARGENTINA SA",
        "CUIT": "30-70969638-2"
    },
    {
        "N": 334,
        "CLIENTE": "CYM MATERIALES S.A.",
        "CUIT": "30-51787897-5"
    },
    {
        "N": 336,
        "CLIENTE": "KRONEN INTERNACIONAL S.A.",
        "CUIT": "30-60451400-9"
    },
    {
        "N": 337,
        "CLIENTE": "FORNAX S.R.L.",
        "CUIT": "30-57084367-9"
    },
    {
        "N": 341,
        "CLIENTE": "MULTIJACTO SA",
        "CUIT": "30-63208973-9"
    },
    {
        "N": 349,
        "CLIENTE": "CONDUCTORES ROSARIO SH",
        "CUIT": "30-70872581-8"
    },
    {
        "N": 350,
        "CLIENTE": "EST\u00c9TICA ESCORPION (JUAN GARBATE)",
        "CUIT": "20-07749345-0"
    },
    {
        "N": 380,
        "CLIENTE": "CEMLA S.R.L.",
        "CUIT": "30-64305574-7"
    },
    {
        "N": 385,
        "CLIENTE": "STEFANELLI JOSE ANTONIO",
        "CUIT": "20-10995982-1"
    },
    {
        "N": 386,
        "CLIENTE": "LASIDYS - UNCOR - FAC. DE CIENCIAS AGROPECUARIAS UNC",
        "CUIT": "30-54667062-3"
    },
    {
        "N": 405,
        "CLIENTE": "BIOTEX S.R.L.",
        "CUIT": "30-70846409-7"
    },
    {
        "N": 406,
        "CLIENTE": "ROWA S.A.",
        "CUIT": "30-54072172-2"
    },
    {
        "N": 413,
        "CLIENTE": "JAMES S.A.",
        "CUIT": "21-015911001-7"
    },
    {
        "N": 421,
        "CLIENTE": "CEM S.R.L.",
        "CUIT": "30-62869104-1"
    },
    {
        "N": 423,
        "CLIENTE": "BIENESTAR Y RELAX S.R.L.",
        "CUIT": "30-71127060-0"
    },
    {
        "N": 426,
        "CLIENTE": "RAYOVAC ARGENTINA S.R.L.",
        "CUIT": "30-70706168-1"
    },
    {
        "N": 428,
        "CLIENTE": "IMPRESOS VELOX S.R.L.",
        "CUIT": "30-52304778-3"
    },
    {
        "N": 429,
        "CLIENTE": "LUIS PABLO PANATTI",
        "CUIT": "20-22592440-7"
    },
    {
        "N": 433,
        "CLIENTE": "LIHUE INGENIERIA S.A.",
        "CUIT": "30-61217676-7"
    },
    {
        "N": 436,
        "CLIENTE": "SORRENTO MAQUINARIAS S.R.L.",
        "CUIT": "30-50606135-7"
    },
    {
        "N": 438,
        "CLIENTE": "ZOLODA S.A.",
        "CUIT": "30-54891771-5"
    },
    {
        "N": 440,
        "CLIENTE": "GOLDMUND S.A.",
        "CUIT": "30-70860387-9"
    },
    {
        "N": 442,
        "CLIENTE": "HYDRAL S.R.L.",
        "CUIT": "30-71048911-0"
    },
    {
        "N": 444,
        "CLIENTE": "ELWIC S.R.L.",
        "CUIT": "30-71053537-6"
    },
    {
        "N": 448,
        "CLIENTE": "LABORATORIO LITORAL S.A.",
        "CUIT": "30-67683390-7"
    },
    {
        "N": 453,
        "CLIENTE": "FAME S.A.",
        "CUIT": "30-70794342-0"
    },
    {
        "N": 455,
        "CLIENTE": "COOLBRAND S.R.L.",
        "CUIT": "30-71143440-9"
    },
    {
        "N": 460,
        "CLIENTE": "SOLUCIONES INTEGRALES DE INGENIERIA Y DESARROLLO S.R.L.",
        "CUIT": "30-70881374-1"
    },
    {
        "N": 491,
        "CLIENTE": "RHEEM S.A.",
        "CUIT": "30-61295852-8"
    },
    {
        "N": 497,
        "CLIENTE": "COPPENS S.A.",
        "CUIT": "30-51967820-5"
    },
    {
        "N": 507,
        "CLIENTE": "DUCATI ENERGIA SUD AMERICA SA",
        "CUIT": "30-71061827-1"
    },
    {
        "N": 512,
        "CLIENTE": "FULLMOON S.A.",
        "CUIT": "30-71235642-8"
    },
    {
        "N": 515,
        "CLIENTE": "ARCOR SAIC",
        "CUIT": "30-50279317-5"
    },
    {
        "N": 523,
        "CLIENTE": "IGNIS LIGHTING S.R.L.",
        "CUIT": "30-70935087-7"
    },
    {
        "N": 530,
        "CLIENTE": "INSTRUMENTAL DE CALIDAD",
        "CUIT": "30-71056577-1"
    },
    {
        "N": 532,
        "CLIENTE": "LABORATORIIO INDUSTRIAL MONTEVIDEO S.A.",
        "CUIT": "RUT 21 026 047 001 5"
    },
    {
        "N": 537,
        "CLIENTE": "BROGAS S.A",
        "CUIT": "30-51567617-8"
    },
    {
        "N": 540,
        "CLIENTE": "DEL VECCHIO S.R.L.",
        "CUIT": "30-71708984-3"
    },
    {
        "N": 542,
        "CLIENTE": "DAVICA SAICA",
        "CUIT": "30-50261824-1"
    },
    {
        "N": 553,
        "CLIENTE": "IGT ARGENTINA S.A.",
        "CUIT": "33-66193250-9"
    },
    {
        "N": 554,
        "CLIENTE": "INCOMPANY",
        "CUIT": "20-22774514-3"
    },
    {
        "N": 555,
        "CLIENTE": "WEG EQUIPAMIENTOS EL\u00c9CTRICOS S.A.",
        "CUIT": "30-66916066-2"
    },
    {
        "N": 558,
        "CLIENTE": "ONECLICK ARGENTINO SRL",
        "CUIT": "30-70880869-1"
    },
    {
        "N": 563,
        "CLIENTE": "ESTABLECIMIENTO METALURGICO RENANIA S.A.",
        "CUIT": "30-50275261-4"
    },
    {
        "N": 569,
        "CLIENTE": "SOUZA CRUZ S.A.",
        "CUIT": "33009911/0083-85"
    },
    {
        "N": 571,
        "CLIENTE": "DP ARGENTINA S.A.",
        "CUIT": "30-71095230-9"
    },
    {
        "N": 573,
        "CLIENTE": "ELECTRODOMESTICOS MAYVA DE NESTOR MARISCO",
        "CUIT": "23-04961031-9"
    },
    {
        "N": 581,
        "CLIENTE": "WIENER LABORATORIOS S.A.I.C.",
        "CUIT": "30-52222821-0"
    },
    {
        "N": 583,
        "CLIENTE": "LIME ROSARIO S.A.",
        "CUIT": "30-71470874-7"
    },
    {
        "N": 585,
        "CLIENTE": "YAMAHA MOTOR ARGENTINA S.A.",
        "CUIT": "30-68723475-4"
    },
    {
        "N": 593,
        "CLIENTE": "MILLTAB S.A.",
        "CUIT": "30-70987757-3"
    },
    {
        "N": 601,
        "CLIENTE": "TOTAL HOME S.A.",
        "CUIT": "30-71179042-6"
    },
    {
        "N": 604,
        "CLIENTE": "IFM ELECTRONIC S.R.L.",
        "CUIT": "30-71045716-2"
    },
    {
        "N": 611,
        "CLIENTE": "ELECTRONIC SYSTEM S.A.",
        "CUIT": "30-64358677-7"
    },
    {
        "N": 612,
        "CLIENTE": "RUBEN RICCHIONE SOLUCIONES EL\u00c9CTRICAS",
        "CUIT": "20-14354545-9"
    },
    {
        "N": 619,
        "CLIENTE": "ATOMLUX S.R.L.",
        "CUIT": "33-57385583-9"
    },
    {
        "N": 627,
        "CLIENTE": "VISUAR S.A.",
        "CUIT": "30-65553446-2"
    },
    {
        "N": 628,
        "CLIENTE": "GRUPO AYEX S.A.",
        "CUIT": "33-70813125-9"
    },
    {
        "N": 634,
        "CLIENTE": "INGEMAR S.A.",
        "CUIT": "33-71491374-9"
    },
    {
        "N": 636,
        "CLIENTE": "LONGVIE S.A.",
        "CUIT": "30-50083378-1"
    },
    {
        "N": 637,
        "CLIENTE": "SCHRAIBER GUSTAVO DANIEL",
        "CUIT": "20-22426171-4"
    },
    {
        "N": 638,
        "CLIENTE": "NEWTRONIC S.A.",
        "CUIT": "30-70729798-7"
    },
    {
        "N": 639,
        "CLIENTE": "BREMEN TOOLS ARGENTINA S.A.",
        "CUIT": "30-64671020-7"
    },
    {
        "N": 640,
        "CLIENTE": "ACUARIO DANIEL\u00b4S MAR S.A.",
        "CUIT": "30-59775618-2"
    },
    {
        "N": 641,
        "CLIENTE": "TRI-VIAL TECH S.A.",
        "CUIT": "30-71229715-4"
    },
    {
        "N": 642,
        "CLIENTE": "METROLAB S.A.",
        "CUIT": "33-68704162-9"
    },
    {
        "N": 646,
        "CLIENTE": "MERCADO VENTA NORTE S.A.",
        "CUIT": "30-71520778-4"
    },
    {
        "N": 649,
        "CLIENTE": "LADET S.A.",
        "CUIT": "30-70853383-8"
    },
    {
        "N": 652,
        "CLIENTE": "KOMPUSUR S.A.",
        "CUIT": "30-60933119-0"
    },
    {
        "N": 653,
        "CLIENTE": "TOTALNEO S.R.L.",
        "CUIT": "30-71512360-2"
    },
    {
        "N": 655,
        "CLIENTE": "INDUSTRIAS SUR S.R.L.",
        "CUIT": "30-70995799-2"
    },
    {
        "N": 657,
        "CLIENTE": "HONDA MOTOR DE ARGENTINA S.A.",
        "CUIT": "30-57754677-7"
    },
    {
        "N": 659,
        "CLIENTE": "LABORATORIO FARKIM S.R.L.",
        "CUIT": "30-58063903-4"
    },
    {
        "N": 660,
        "CLIENTE": "COOP. ELEC. Y DE OBRAS Y SERV. P\u00daBL. LTD DE JUSTINIANO POSSE",
        "CUIT": "30-54573491-1"
    },
    {
        "N": 663,
        "CLIENTE": "THALOS S.R.L.",
        "CUIT": "30-67833108-9"
    },
    {
        "N": 664,
        "CLIENTE": "INSTITUTO ARGENTINO DE NORMALIZACI\u00d3N Y CERTIFICACI\u00d3N",
        "CUIT": "30-52556278-2"
    },
    {
        "N": 665,
        "CLIENTE": "ALCABLE S.R.L.",
        "CUIT": "30-63774782-3"
    },
    {
        "N": 668,
        "CLIENTE": "DISTRIBUIDORA AIFANG S.R.L.",
        "CUIT": "30-71459011-8"
    },
    {
        "N": 669,
        "CLIENTE": "CANTERAS CERRO NEGRO S.A.",
        "CUIT": "30-50101005-3"
    },
    {
        "N": 671,
        "CLIENTE": "SITEPRA S.A.",
        "CUIT": "33-59299266-9"
    },
    {
        "N": 672,
        "CLIENTE": "GRISENTI HECTOR DANIEL",
        "CUIT": "20-08368766-6"
    },
    {
        "N": 675,
        "CLIENTE": "HALKOM MOTORS S.A.",
        "CUIT": "30-71531943-4"
    },
    {
        "N": 679,
        "CLIENTE": "PROYECTOS AGROINDUSTRIALES S.A.",
        "CUIT": "30-60765800-1"
    },
    {
        "N": 680,
        "CLIENTE": "AOSIACION DE COOPERATIVAS ARGENTINAS",
        "CUIT": "30-50012088-2"
    },
    {
        "N": 689,
        "CLIENTE": "GERM\u00c1N LISANDRO FARIAS",
        "CUIT": "23-23978621-9"
    },
    {
        "N": 693,
        "CLIENTE": "METALURGICA DEL SUR S.A.",
        "CUIT": "30-67750814-7"
    },
    {
        "N": 694,
        "CLIENTE": "TP SRL",
        "CUIT": "30-71526439-7"
    },
    {
        "N": 696,
        "CLIENTE": "CARDINAL SCALE S.A.S.",
        "CUIT": "30-71630188-1"
    },
    {
        "N": 698,
        "CLIENTE": "ELDEN S.A.",
        "CUIT": "30-54073298-8"
    },
    {
        "N": 700,
        "CLIENTE": "JOS\u00c9 AZAR",
        "CUIT": "20-13104046-7"
    },
    {
        "N": 702,
        "CLIENTE": "GARBARINO S.A.",
        "CUIT": "30-54008821-3"
    },
    {
        "N": 703,
        "CLIENTE": "DANGELO Y CABRERA S.R.L.",
        "CUIT": "30-71539774-5"
    },
    {
        "N": 704,
        "CLIENTE": "MARANSI S.A.",
        "CUIT": "33-70871199-9"
    },
    {
        "N": 705,
        "CLIENTE": "MARTIN OUBI\u00d1A",
        "CUIT": "20-28462995-8"
    },
    {
        "N": 706,
        "CLIENTE": "I-LED ARGENTINA S.A.",
        "CUIT": "30-71474138-8"
    },
    {
        "N": 707,
        "CLIENTE": "EDISUR S.R.L.",
        "CUIT": "30-70941894-3"
    },
    {
        "N": 709,
        "CLIENTE": "ELECTRO MOTORES ARGENTINOS S.A.",
        "CUIT": "30-70845897-6"
    },
    {
        "N": 710,
        "CLIENTE": "KAIBO S.A.",
        "CUIT": "30-71213567-7"
    },
    {
        "N": 712,
        "CLIENTE": "GATTI S.A.",
        "CUIT": "30-66922034-7"
    },
    {
        "N": 714,
        "CLIENTE": "RODEIRO CONSTRUCCIONES S.A.",
        "CUIT": "30-71414965-9"
    },
    {
        "N": 715,
        "CLIENTE": "ROSARIO TECH S.R.L.",
        "CUIT": "30-71501087-5"
    },
    {
        "N": 716,
        "CLIENTE": "CORADIR S.A.",
        "CUIT": "30-67338016-2"
    },
    {
        "N": 717,
        "CLIENTE": "DIMASHQ ARGENTINA S.A.",
        "CUIT": "33-71100577-9"
    },
    {
        "N": 718,
        "CLIENTE": "TECNOCASA S.A.",
        "CUIT": "30-71205066-3"
    },
    {
        "N": 720,
        "CLIENTE": "GRUPO MAYO COMEX S.R.L.",
        "CUIT": "30-71544156-6"
    },
    {
        "N": 721,
        "CLIENTE": "CARLOS PESCE S.A.",
        "CUIT": "30-71133043-3"
    },
    {
        "N": 722,
        "CLIENTE": "TRAMOTINA GARIBALDI S.A.",
        "CUIT": "30-71193338-3"
    },
    {
        "N": 723,
        "CLIENTE": "TECNOSUR S.A.",
        "CUIT": "30-71041830-2"
    },
    {
        "N": 724,
        "CLIENTE": "BANNER DIRECTOR S.A.",
        "CUIT": "30-71478755-8"
    },
    {
        "N": 725,
        "CLIENTE": "CA.EL.AR. S.A.",
        "CUIT": "33-70747112-9"
    },
    {
        "N": 726,
        "CLIENTE": "TERRAGENE S.A.",
        "CUIT": "30-70958593-9"
    },
    {
        "N": 728,
        "CLIENTE": "MAIDA VICTOR SEBASTIAN",
        "CUIT": "20-24350498-9"
    },
    {
        "N": 730,
        "CLIENTE": "CALPRO S.A.",
        "CUIT": "30-71206983-6"
    },
    {
        "N": 731,
        "CLIENTE": "RS BAHIA COMEX S.R.L.",
        "CUIT": "30-71561677-3"
    },
    {
        "N": 732,
        "CLIENTE": "C&S COMUNICACI\u00d3N Y SISTEMAS S.A.",
        "CUIT": "30-69545669-3"
    },
    {
        "N": 733,
        "CLIENTE": "INTEGRAL TRADING S.R.L.",
        "CUIT": "30-71255525-0"
    },
    {
        "N": 734,
        "CLIENTE": "VIRANDO S.R.L.",
        "CUIT": "30-71535770-0"
    },
    {
        "N": 735,
        "CLIENTE": "DYM TRADE S.A.",
        "CUIT": "30-71238198-8"
    },
    {
        "N": 736,
        "CLIENTE": "KARULIS S.R.L.",
        "CUIT": "30-70849920-6"
    },
    {
        "N": 737,
        "CLIENTE": "NIANI S.A.",
        "CUIT": "30-70775831-3"
    },
    {
        "N": 738,
        "CLIENTE": "SCHNEIDER ELECTRIC S.A.",
        "CUIT": "30-59219954-4"
    },
    {
        "N": 739,
        "CLIENTE": "TRENES ARGENTINOS",
        "CUIT": "30-71068177-1"
    },
    {
        "N": 740,
        "CLIENTE": "GOLDSONIC S.A.",
        "CUIT": "30-68830252-4"
    },
    {
        "N": 741,
        "CLIENTE": "COPALUS S.A.",
        "CUIT": "30-70844749-4"
    },
    {
        "N": 742,
        "CLIENTE": "ESMAJOBRAN S.R.L.",
        "CUIT": "30-71524214-8"
    },
    {
        "N": 743,
        "CLIENTE": "ECO RIDES S.R.L.",
        "CUIT": "30-71544156-6"
    },
    {
        "N": 744,
        "CLIENTE": "BERVILL S.A.",
        "CUIT": "30-71023898-3"
    },
    {
        "N": 745,
        "CLIENTE": "EXO S.A.",
        "CUIT": "30-57960755-2"
    },
    {
        "N": 746,
        "CLIENTE": "TZIPOR S.A.",
        "CUIT": "30-71145408-6"
    },
    {
        "N": 747,
        "CLIENTE": "EMICOL ELETRO ELETRONICA",
        "CUIT": "61-685723/0001-66"
    },
    {
        "N": 748,
        "CLIENTE": "FRICOM S.R.L.",
        "CUIT": "20-23279609-0"
    },
    {
        "N": 749,
        "CLIENTE": "ORBIS MERTIG SAIC",
        "CUIT": "30-50059755-7"
    },
    {
        "N": 750,
        "CLIENTE": "UPS INTEGRAL S.R.L.",
        "CUIT": "30-71106871-2"
    },
    {
        "N": 751,
        "CLIENTE": "MULBAR S.A.",
        "CUIT": "30-71123677-1"
    },
    {
        "N": 752,
        "CLIENTE": "FUTURE GRAPHICS LLC ARGENTINA S.A.",
        "CUIT": "30-70823800-3"
    },
    {
        "N": 753,
        "CLIENTE": "MEGA POLY TRADE S.A.",
        "CUIT": "30-70948856-9"
    },
    {
        "N": 754,
        "CLIENTE": "ATHAND S.R.L.",
        "CUIT": "30-71441662-2"
    },
    {
        "N": 755,
        "CLIENTE": "MEGA SHOW S.A.",
        "CUIT": "30-71343740-5"
    },
    {
        "N": 756,
        "CLIENTE": "ARIEL RUBEN CORDON",
        "CUIT": "20-07613647-6"
    },
    {
        "N": 757,
        "CLIENTE": "ADRIAN PETROCELLI",
        "CUIT": "20-14228033-8"
    },
    {
        "N": 758,
        "CLIENTE": "RAMOS ETCHEVERRY GONZALO MARTIN",
        "CUIT": "20-92848188-4"
    },
    {
        "N": 759,
        "CLIENTE": "SARCRIS SRL",
        "CUIT": "30-71432747-6"
    },
    {
        "N": 760,
        "CLIENTE": "REHAU S.A.",
        "CUIT": "30-67657566-5"
    },
    {
        "N": 761,
        "CLIENTE": "HERNAN ARIEL MAZZARELLA",
        "CUIT": "20-31293370-6"
    },
    {
        "N": 762,
        "CLIENTE": "MIMET",
        "CUIT": "30-71044349-8"
    },
    {
        "N": 763,
        "CLIENTE": "PRO ELECTRO S.A.",
        "CUIT": "30-71544156-6"
    },
    {
        "N": 764,
        "CLIENTE": "BLITZ MOTORS S.A.",
        "CUIT": "30-71522121-3"
    },
    {
        "N": 765,
        "CLIENTE": "CONSTRUCTORA E IMPORTADORA S.R.L.",
        "CUIT": "30-71149302-2"
    },
    {
        "N": 766,
        "CLIENTE": "STRADA S.A.",
        "CUIT": "30-69539233-4"
    },
    {
        "N": 767,
        "CLIENTE": "FINAMORE ALBERTO",
        "CUIT": "20-06029629-5"
    },
    {
        "N": 768,
        "CLIENTE": "STEM S.R.L.",
        "CUIT": "30-70929417-9"
    },
    {
        "N": 769,
        "CLIENTE": "TRANE DE ARGENTINA S.A.",
        "CUIT": "30-66210229-2"
    },
    {
        "N": 770,
        "CLIENTE": "HUILING MAI ",
        "CUIT": "27-93932278-2"
    },
    {
        "N": 771,
        "CLIENTE": "LAGUIA CLAUDIO MARCELO",
        "CUIT": "20-20495497-7"
    },
    {
        "N": 772,
        "CLIENTE": "BONO WALTER ARIEL",
        "CUIT": "20-24400675-3"
    },
    {
        "N": 773,
        "CLIENTE": "COL-VEN SA",
        "CUIT": "30-56031241-1"
    },
    {
        "N": 774,
        "CLIENTE": "ELIBET SA",
        "CUIT": "30-51735933-1"
    },
    {
        "N": 775,
        "CLIENTE": "ELMET S.A.",
        "CUIT": "30-70794996-8"
    },
    {
        "N": 776,
        "CLIENTE": "ORANFRESH S.A.S.",
        "CUIT": "30-71618017-0"
    },
    {
        "N": 777,
        "CLIENTE": "WANG MINGJIE",
        "CUIT": "20-94761547-6"
    },
    {
        "N": 778,
        "CLIENTE": "TECNO L.D. BERNAL S.R.L.",
        "CUIT": "33-71068682-9"
    },
    {
        "N": 779,
        "CLIENTE": "RACEDO ARAGON IGNACIO ANDRES",
        "CUIT": "20-23645400-3"
    },
    {
        "N": 780,
        "CLIENTE": "FRIGOTEC SRL",
        "CUIT": "30-70902575-5"
    },
    {
        "N": 781,
        "CLIENTE": "ENERTIK ",
        "CUIT": "30-70888560-2"
    },
    {
        "N": 782,
        "CLIENTE": "TUCAGRO S.R.L.",
        "CUIT": "30-68572176-3"
    },
    {
        "N": 783,
        "CLIENTE": "CUSILLOS S.R.L.",
        "CUIT": "30-70735537-5"
    },
    {
        "N": 784,
        "CLIENTE": "GARMAT S.A.",
        "CUIT": "30-68568869-3"
    },
    {
        "N": 786,
        "CLIENTE": "EURO-ELECTRIC S.R.L.",
        "CUIT": "30-64669443-0"
    },
    {
        "N": 787,
        "CLIENTE": "AGROTECNOLOG\u00cdA SALA S.A.",
        "CUIT": "30-54279078-0"
    },
    {
        "N": 788,
        "CLIENTE": "COOPERATIVA AGR\u00cdCOLA GANADERA DE MONTE BUEY LTDA",
        "CUIT": "30-53112211-5"
    },
    {
        "N": 789,
        "CLIENTE": "MULTI HOUSING LAUNDRY S.A.",
        "CUIT": "30-70707996-3"
    },
    {
        "N": 790,
        "CLIENTE": "PETROQU\u00cdMICA CUYO S.A.I.C.",
        "CUIT": "30-58342640-6"
    },
    {
        "N": 791,
        "CLIENTE": "WORLDWIDE SAS",
        "CUIT": "30-71669943-5"
    },
    {
        "N": 792,
        "CLIENTE": "INDUSTRIAS ESPERANZA S.R.L.",
        "CUIT": "30-71499076-0"
    },
    {
        "N": 793,
        "CLIENTE": "ALL STRAPPING S.R.L.",
        "CUIT": "30-70999562-2"
    },
    {
        "N": 794,
        "CLIENTE": "NEOINGENIERIA",
        "CUIT": "30-71476481-7"
    },
    {
        "N": 795,
        "CLIENTE": "DELYAR S.A.",
        "CUIT": "30-70812398-2"
    },
    {
        "N": 796,
        "CLIENTE": "DIAZ LORENA ANDREA",
        "CUIT": "27-27602045-0"
    },
    {
        "N": 797,
        "CLIENTE": "TECCAM SRL",
        "CUIT": "30-70889813-5"
    },
    {
        "N": 798,
        "CLIENTE": "LEON RABEY E HIJOS S.R.L.",
        "CUIT": "30-57113159-1"
    },
    {
        "N": 799,
        "CLIENTE": "INTEVA ENERG\u00cdA SOLAR",
        "CUIT": "20-17288432-7"
    },
    {
        "N": 800,
        "CLIENTE": "LABORATORIO PAMPA S.A.S.",
        "CUIT": "30-71619515-1"
    },
    {
        "N": 801,
        "CLIENTE": "IDEA ILUMINACI\u00d3N S.A.",
        "CUIT": "30-70810942-4"
    },
    {
        "N": 802,
        "CLIENTE": "LUJAN AGR\u00cdCOLA",
        "CUIT": "30-69582299-1"
    },
    {
        "N": 803,
        "CLIENTE": "E-COLOGICA S.R.L.",
        "CUIT": "30-71174915-9"
    },
    {
        "N": 804,
        "CLIENTE": "LEDLAR S.A.P.E.M.",
        "CUIT": "30-71183664-7"
    },
    {
        "N": 805,
        "CLIENTE": "HELIOS ENERGY S.R.L.",
        "CUIT": "30-71596551-4"
    },
    {
        "N": 806,
        "CLIENTE": "INGENIER\u00cdA EN CONTROL ELECTR\u00d3NICO Y MEC\u00c1NICO S.A. DE C.V.",
        "CUIT": "ICE020429672"
    },
    {
        "N": 807,
        "CLIENTE": "GESTI\u00d3N DE EMPRENDIMIENTOS DEPORTIVOS S.A.",
        "CUIT": "30-71028354-7"
    },
    {
        "N": 808,
        "CLIENTE": "AGROINTEGRAL",
        "CUIT": "20-14737395-4"
    },
    {
        "N": 809,
        "CLIENTE": "LABORATORIO DE AN\u00c1LISIS DE GRANOS SANTA ROSA",
        "CUIT": "20-06557190-1"
    },
    {
        "N": 810,
        "CLIENTE": "CASA FENK SACIFI",
        "CUIT": "30-52345669-1"
    },
    {
        "N": 811,
        "CLIENTE": "PRODEMAN SA",
        "CUIT": "33-66908849-9"
    },
    {
        "N": 812,
        "CLIENTE": "TECNOLOG\u00cdA Y SERVICIO S.A. DE C.V.",
        "CUIT": "TSE960126F20"
    },
    {
        "N": 813,
        "CLIENTE": "CALIOTTI LEONARDO JAVIER",
        "CUIT": "20-22896345-4"
    },
    {
        "N": 814,
        "CLIENTE": "APUM S.R.L.",
        "CUIT": "30-71642128-3"
    },
    {
        "N": 815,
        "CLIENTE": "ELECTROLUX DO BRASIL",
        "CUIT": "76.487.032/0001-25"
    },
    {
        "N": 816,
        "CLIENTE": "ENERGIZER ARGENTINA S.A.",
        "CUIT": "30-70733953-1"
    },
    {
        "N": 817,
        "CLIENTE": "BGH S.A.",
        "CUIT": "30-71129196-9"
    },
    {
        "N": 818,
        "CLIENTE": "INNARTEC S.A.",
        "CUIT": "30-71093286-3"
    },
    {
        "N": 819,
        "CLIENTE": "ALIMASC",
        "CUIT": "27-14293562-2"
    },
    {
        "N": 820,
        "CLIENTE": "NOSACH ANA MARTA",
        "CUIT": "27-11205140-1"
    },
    {
        "N": 821,
        "CLIENTE": "SANTA PLANTA S.R.L.",
        "CUIT": "30-71582721-9"
    },
    {
        "N": 822,
        "CLIENTE": "2 SOLVE S.R.L.",
        "CUIT": "30-71004054-7"
    },
    {
        "N": 823,
        "CLIENTE": "AGRO CONSTRUCCIONES ESTRELLA S.R.L.",
        "CUIT": "30-71301250-1"
    },
    {
        "N": 824,
        "CLIENTE": "SOMASI S.A. by BSD SUR S.A.",
        "CUIT": "30-71104052-4"
    },
    {
        "N": 825,
        "CLIENTE": "MARLEW S.A. by PATAGONIA TOOLS S.A.",
        "CUIT": "33-58551048-9"
    },
    {
        "N": 826,
        "CLIENTE": "QUALITY SYSTEMS GROUP S.R.L.",
        "CUIT": "30-70945880-5"
    },
    {
        "N": 827,
        "CLIENTE": "JS NORTE INGENIER\u00cdA",
        "CUIT": "30-71414105-4"
    },
    {
        "N": 828,
        "CLIENTE": "VILLA ZAPPA Y CIA S.A.",
        "CUIT": "30-50343115-3"
    },
    {
        "N": 829,
        "CLIENTE": "LABORATORIO JABA S.A. DE C.V.",
        "CUIT": "LJA1002049Q6"
    },
    {
        "N": 830,
        "CLIENTE": "AMPLIEQUIPOS S.A. DE C.V.",
        "CUIT": "AMP870824DM9"
    },
    {
        "N": 831,
        "CLIENTE": "LABORATORIO ATC MEXICO S.A. DE C.V.",
        "CUIT": "LAM080415JH9"
    },
    {
        "N": 832,
        "CLIENTE": "AKSI HERRAMIENTAS S.A. DE C.V.",
        "CUIT": "AHE070309N12"
    },
    {
        "N": 833,
        "CLIENTE": "RP HOGAR SRL",
        "CUIT": "30-71569486-3"
    },
    {
        "N": 834,
        "CLIENTE": "COMPA\u00d1IA ARGENTINA DE MERCHANDISING S.A.",
        "CUIT": "30-70913513-5"
    },
    {
        "N": 835,
        "CLIENTE": "ANTONIO MENDEZ",
        "CUIT": "20-20452654-1"
    },
    {
        "N": 836,
        "CLIENTE": "SERVICIOS DE ANALISIS TECNICOS, SA DE CV",
        "CUIT": "SAT 940824 J37"
    },
    {
        "N": 837,
        "CLIENTE": "ALETHEIAS BIOSEEDLAR ",
        "CUIT": "20-16747335-1"
    },
    {
        "N": 838,
        "CLIENTE": "METAL\u00daRGICA ELECTROSTYLE S.R.L.",
        "CUIT": "30-71511040-3"
    },
    {
        "N": 839,
        "CLIENTE": "BELQUIM S.R.L.",
        "CUIT": "30-69530250-5"
    },
    {
        "N": 840,
        "CLIENTE": "DEPIMIEL S.R.L.",
        "CUIT": "30-70901194-0"
    },
    {
        "N": 841,
        "CLIENTE": "RETEPLAST S.R.L.",
        "CUIT": "30-70853854-6"
    },
    {
        "N": 842,
        "CLIENTE": "INELECTO S.A.",
        "CUIT": "30-70902341-8"
    },
    {
        "N": 843,
        "CLIENTE": "COMERCIAL ALPACA S.A.",
        "CUIT": "30-70721269-8"
    },
    {
        "N": 844,
        "CLIENTE": "CIMET S.A.",
        "CUIT": "30-50282973-0"
    },
    {
        "N": 845,
        "CLIENTE": "ELECTROMETAL LATINA S.A.",
        "CUIT": "30-70842993-3"
    },
    {
        "N": 846,
        "CLIENTE": "CARTONALE INDUSTRIA MATERIALES PL\u00c1STICOS",
        "CUIT": "30-71538439-2"
    },
    {
        "N": 847,
        "CLIENTE": "NETOOLS S.A.S.",
        "CUIT": "30-71667014-3"
    },
    {
        "N": 848,
        "CLIENTE": "INDUXPORT S.R.L.",
        "CUIT": "30-69482391-9"
    },
    {
        "N": 849,
        "CLIENTE": "MONTAJES ROSARIO",
        "CUIT": "27-18378778-6 "
    },
    {
        "N": 850,
        "CLIENTE": "ITASOL S.A.",
        "CUIT": "30-70957201-2"
    },
    {
        "N": 851,
        "CLIENTE": "LA AGR\u00cdCOLA REGIONAL COOPERATIVA LIMITADA",
        "CUIT": "33-50404708-9"
    },
    {
        "N": 852,
        "CLIENTE": "PETROVINA",
        "CUIT": "287.640.990/91"
    },
    {
        "N": 853,
        "CLIENTE": "MAYCAR S.A.",
        "CUIT": "30-61286533-3 "
    },
    {
        "N": 855,
        "CLIENTE": "DAMFER S.R.L.",
        "CUIT": "30-62446716-3"
    },
    {
        "N": 856,
        "CLIENTE": "AUTOSAL S.A.",
        "CUIT": "30-60655239-0"
    },
    {
        "N": 857,
        "CLIENTE": "DROGUER\u00cdA COMARSA",
        "CUIT": "30-70708588-2"
    },
    {
        "N": 858,
        "CLIENTE": "INILAB S.L.",
        "CUIT": "B81620445"
    },
    {
        "N": 859,
        "CLIENTE": "DEPORTE TOTAL S.A.",
        "CUIT": "30-68727156-0"
    },
    {
        "N": 860,
        "CLIENTE": "HARDCORE FITNESS S.R.L.",
        "CUIT": "30-71527940-8"
    },
    {
        "N": 861,
        "CLIENTE": "MELEX ARGENTINA S.R.L.",
        "CUIT": "30-67875238-6"
    },
    {
        "N": 862,
        "CLIENTE": "JH BOURLOT S.R.L.",
        "CUIT": "30-64138893-5"
    },
    {
        "N": 863,
        "CLIENTE": "ENERGE S.A.",
        "CUIT": "33-71140917-9"
    },
    {
        "N": 864,
        "CLIENTE": "JOS\u00c9 TAMBURRINI",
        "CUIT": "20-10858921-4"
    },
    {
        "N": 865,
        "CLIENTE": "UVC SOLUCIONES S.R.L.",
        "CUIT": "33-71685953-9"
    },
    {
        "N": 866,
        "CLIENTE": "ECOZONO S.A.S.",
        "CUIT": "30-71662030-8"
    },
    {
        "N": 867,
        "CLIENTE": "I\u00d1IGUEZ ISABEL OFELIA",
        "CUIT": "27-06434958-4"
    },
    {
        "N": 868,
        "CLIENTE": "AMETEK SOLIDSTATE CONTROLS DE ARGENTINA",
        "CUIT": "30-58735561-9"
    },
    {
        "N": 869,
        "CLIENTE": "ALL KAISEN & LEAN S.A. DE C.V.",
        "CUIT": "AKA171116QB2"
    },
    {
        "N": 870,
        "CLIENTE": "PROYECCI\u00d3N ELECTROLUZ S.R.L.",
        "CUIT": "30-60127190-3"
    },
    {
        "N": 871,
        "CLIENTE": "SIEMENS S.A.",
        "CUIT": "30-50336489-8"
    },
    {
        "N": 872,
        "CLIENTE": "LUG ARGENTINA S.A.",
        "CUIT": "30-71574286-8"
    },
    {
        "N": 873,
        "CLIENTE": "AZIENDA SA",
        "CUIT": "30-71569742-0"
    },
    {
        "N": 874,
        "CLIENTE": "DROMEL SRL",
        "CUIT": "30-71690377-6"
    },
    {
        "N": 875,
        "CLIENTE": "SCARPIGNATO S.A.S.",
        "CUIT": "30-71616789-1"
    },
    {
        "N": 876,
        "CLIENTE": "MILICIC S.A.",
        "CUIT": "30-62231778-4"
    },
    {
        "N": 877,
        "CLIENTE": "LIBSON",
        "CUIT": "30-70913513-5"
    },
    {
        "N": 878,
        "CLIENTE": "LABORATORIO DOBLE NN ",
        "CUIT": "20-29711576-7 "
    },
    {
        "N": 879,
        "CLIENTE": "LABORATORIO AGR\u00cdCOLA VENADO TUERTO",
        "CUIT": "27-06705415-1"
    },
    {
        "N": 880,
        "CLIENTE": "LABORATORIO TECNOL\u00d3GICO DEL URUGUAY",
        "CUIT": "214110970015"
    },
    {
        "N": 881,
        "CLIENTE": "MINISTERIO DE EDUCACI\u00d3N DE LA PROVINCI ADE C\u00d3RDOBA",
        "CUIT": "33-99925244-9"
    },
    {
        "N": 882,
        "CLIENTE": "SPRINT ELECTRONICS",
        "CUIT": "30-71699467-4"
    },
    {
        "N": 883,
        "CLIENTE": "OFICINA T\u00c9CNICA VEGA",
        "CUIT": "20-24980386-4"
    },
    {
        "N": 884,
        "CLIENTE": "IMPORTACIONES NORCOMEX S.R.L.",
        "CUIT": "30-71544565-0"
    },
    {
        "N": 885,
        "CLIENTE": "MR CONEXIONES de Antonia H. Avolio",
        "CUIT": "27-13555986-0"
    },
    {
        "N": 886,
        "CLIENTE": "METALURGICA SAN PATRICIO S.H.",
        "CUIT": "33-62602806-9 "
    },
    {
        "N": 887,
        "CLIENTE": "SILKE ROGELIO FABI\u00c1N - AMBIENTAR",
        "CUIT": "20-21080445-6"
    },
    {
        "N": 888,
        "CLIENTE": "WHEEL S.A.",
        "CUIT": "30-69543335-9"
    },
    {
        "N": 889,
        "CLIENTE": "ARLUX S.R.L.",
        "CUIT": "30-71604352-1"
    },
    {
        "N": 890,
        "CLIENTE": "TROX ARGENTINA SA",
        "CUIT": "30-70820788-4"
    },
    {
        "N": 891,
        "CLIENTE": "LPA S.R.L.",
        "CUIT": "30-71425586-6"
    },
    {
        "N": 892,
        "CLIENTE": "SUMINISTROS S.A.",
        "CUIT": "33-71480309-9 "
    },
    {
        "N": 893,
        "CLIENTE": "SONIA CARINA GARC\u00cdA PAEZ",
        "CUIT": "27-28223472-1 "
    },
    {
        "N": 894,
        "CLIENTE": "HL CATAMARCA S.A.",
        "CUIT": "30-71678659-1"
    },
    {
        "N": 895,
        "CLIENTE": "IMEFF S.R.L.",
        "CUIT": "30-71624612-0"
    },
    {
        "N": 896,
        "CLIENTE": "MEDIO MEDICO S.R.L.",
        "CUIT": "33-57051358-9"
    },
    {
        "N": 897,
        "CLIENTE": "HECTOR SAPPIA",
        "CUIT": "20-16076645-0"
    },
    {
        "N": 898,
        "CLIENTE": "GOLAU S.A.",
        "CUIT": "30-71339280-0"
    },
    {
        "N": 899,
        "CLIENTE": "ROBERTO LUIS BAROFFI",
        "CUIT": "20-11445622-6"
    },
    {
        "N": 900,
        "CLIENTE": "MARTI\u00cdN MIGUEL SEERY ",
        "CUIT": "20-22163552-4"
    },
    {
        "N": 901,
        "CLIENTE": "HIDROCOR S.R.L. ",
        "CUIT": "30-70818643-7 "
    },
    {
        "N": 902,
        "CLIENTE": "FAG SISTEMS S.A.",
        "CUIT": "30-70975211-8"
    },
    {
        "N": 903,
        "CLIENTE": "INGENIER\u00cdA ELECTR\u00d3NICA ARGENTINA S.R.L.",
        "CUIT": "30-57314064-4"
    },
    {
        "N": 904,
        "CLIENTE": "CONSTRUCCIONES INDUSTRIALES Y PORTURIAS S.A.",
        "CUIT": "30-70957201-2"
    },
    {
        "N": 905,
        "CLIENTE": "GRUPO GRISENTI S.A.",
        "CUIT": "30-71563671-5"
    },
    {
        "N": 906,
        "CLIENTE": "CARBONERO ADRIAN CEFERINO",
        "CUIT": "20-33821102-4"
    },
    {
        "N": 907,
        "CLIENTE": "SPOTSLINE S.R.L",
        "CUIT": "30-70957243-8"
    },
    {
        "N": 908,
        "CLIENTE": "ADVANCE WIRE & WIRELESS LABORATORIOS S.C.",
        "CUIT": "AW&0501284U9"
    },
    {
        "N": 909,
        "CLIENTE": "NOTEBOOKS CORDOBA S.R.L.",
        "CUIT": "30-71494777-6"
    },
    {
        "N": 910,
        "CLIENTE": "FRIHEL SRL",
        "CUIT": "30-70856252-8"
    },
    {
        "N": 911,
        "CLIENTE": "JB INTERNATIONAL SERVICE S.R.L.",
        "CUIT": "30-71093722-9"
    },
    {
        "N": 912,
        "CLIENTE": "GEO S.R.L.",
        "CUIT": "30-70928771-7"
    },
    {
        "N": 913,
        "CLIENTE": "INNOVAR S.R.L.",
        "CUIT": "30-70787506-9"
    },
    {
        "N": 914,
        "CLIENTE": "BIOLEDARG S.R.L.",
        "CUIT": "30-71657648-1 "
    },
    {
        "N": 915,
        "CLIENTE": "NAUTICA RECONQUISTA",
        "CUIT": "33-71684737-9"
    },
    {
        "N": 916,
        "CLIENTE": "COOPERATIVA DE TRABAJOS PORTUARIOS LTDA. DE SAN MARTIN",
        "CUIT": "30-50693111-4"
    },
    {
        "N": 917,
        "CLIENTE": "DIS-DEN ODONTOLOG\u00cdA",
        "CUIT": "30-68469384-7"
    },
    {
        "N": 918,
        "CLIENTE": "TRIANGULAR S.A.",
        "CUIT": "30-60945338-5"
    },
    {
        "N": 919,
        "CLIENTE": "ACCESORIOS.COM S.R.L.",
        "CUIT": "30-71037004-0 "
    },
    {
        "N": 920,
        "CLIENTE": "SAN MIGUEL CENTER S.R.L.",
        "CUIT": "30-70818345-4"
    },
    {
        "N": 921,
        "CLIENTE": "POSTHAC S.A.",
        "CUIT": "30-70844708-7"
    },
    {
        "N": 922,
        "CLIENTE": "VAN HESSEN CASINGS SAU",
        "CUIT": "30-71659859-0"
    },
    {
        "N": 923,
        "CLIENTE": "Ingenieria IT - Nicol\u00e1s Trosce",
        "CUIT": "20-34091044-4 "
    },
    {
        "N": 924,
        "CLIENTE": "NYCE Laboratorios S.C. ",
        "CUIT": "NLA010913CD3"
    },
    {
        "N": 925,
        "CLIENTE": "DIAGNOSTICA TELEMEDICINA S.A.",
        "CUIT": "30-71711722-7"
    },
    {
        "N": 926,
        "CLIENTE": "ANA BEL\u00c9N CANALE",
        "CUIT": "27-36762043-4 "
    },
    {
        "N": 927,
        "CLIENTE": "IPANCO SRL",
        "CUIT": "30-70149887-5"
    },
    {
        "N": 928,
        "CLIENTE": "GRUPO K & B S.R.L.",
        "CUIT": "30-71492936-0"
    },
    {
        "N": 929,
        "CLIENTE": "INVENTU TRAIN S.R.L.",
        "CUIT": "30-71654879-8 "
    },
    {
        "N": 930,
        "CLIENTE": "LIGHTING Y LOGISTICA INTERNACIONAL S.A.",
        "CUIT": "30-71286180-7"
    },
    {
        "N": 931,
        "CLIENTE": "DIPROMAS S.R.L.",
        "CUIT": "30-62459525-0"
    },
    {
        "N": 932,
        "CLIENTE": "RAXION S.A.S",
        "CUIT": "30-71574065-2 "
    },
    {
        "N": 933,
        "CLIENTE": "Instrumentaci\u00f3n Metrix S.A de C.V",
        "CUIT": "IME-180323RT6"
    },
    {
        "N": 934,
        "CLIENTE": "CASHER EQUIPAMIENTOS de Godoy Jose Luis",
        "CUIT": "20-31232831-4"
    },
    {
        "N": 935,
        "CLIENTE": "HIFIMAN SRL",
        "CUIT": "30-71580268-2"
    },
    {
        "N": 936,
        "CLIENTE": "RUBIKIA S.A.S.",
        "CUIT": "30-71661637-8"
    },
    {
        "N": 937,
        "CLIENTE": "3D ARGENTINA S.A.",
        "CUIT": "30-71370180-3"
    },
    {
        "N": 938,
        "CLIENTE": "INGENIERIA Y CONSTRUCCIONES ALSINA S.A.",
        "CUIT": "30-71068141-0 "
    },
    {
        "N": 939,
        "CLIENTE": "AGRISEED S.A.",
        "CUIT": "30-62891059-2"
    },
    {
        "N": 940,
        "CLIENTE": "TST S.A.",
        "CUIT": "30-69909788-4"
    },
    {
        "N": 941,
        "CLIENTE": "ACORDES AROMATICOS S.R.L.",
        "CUIT": "30-71546659-3"
    },
    {
        "N": 942,
        "CLIENTE": "CONDUSUR S.R.L.",
        "CUIT": "30-71493311-2"
    },
    {
        "N": 943,
        "CLIENTE": "METAL\u00daRGICA VAZQUEZ S.A.",
        "CUIT": "30-71351270-9"
    },
    {
        "N": 944,
        "CLIENTE": "IBICO S.R.L.",
        "CUIT": "30-67734906-5"
    },
    {
        "N": 945,
        "CLIENTE": "MALAGA GROUP S.R.L.",
        "CUIT": "30-71571327-2"
    },
    {
        "N": 946,
        "CLIENTE": "MEELKO S.A.S",
        "CUIT": "30-71568631-3"
    },
    {
        "N": 947,
        "CLIENTE": "NAZER S.R.L.",
        "CUIT": "30-71159993-9"
    },
    {
        "N": 948,
        "CLIENTE": "EMPRESA DE SERVICIOS T\u00c9CNICOS S.R.L.",
        "CUIT": "30-70938001-6"
    },
    {
        "N": 949,
        "CLIENTE": "CONCI S.A.",
        "CUIT": "30-71079618-8"
    },
    {
        "N": 950,
        "CLIENTE": "INGENIERIA BOGGIO S.A.",
        "CUIT": "30-50261312-6"
    },
    {
        "N": 951,
        "CLIENTE": "INTEC INGENIER\u00cdA S.A.E.",
        "CUIT": "80004396-0"
    },
    {
        "N": 952,
        "CLIENTE": "FUNDACI\u00d3N DE LA UNR",
        "CUIT": "30-65219005-3"
    },
    {
        "N": 953,
        "CLIENTE": "METALLI S.R.L.",
        "CUIT": "30-71127384-7"
    },
    {
        "N": 954,
        "CLIENTE": "BLUMAREL S.A.",
        "CUIT": "218837210017"
    },
    {
        "N": 955,
        "CLIENTE": "ARREDOBAGNO S.A.",
        "CUIT": "30-64127448-4"
    },
    {
        "N": 956,
        "CLIENTE": "EQUIPEL S.R.L.",
        "CUIT": "30-68447614-5"
    },
    {
        "N": 957,
        "CLIENTE": "VOIP EXPERTS S.R.L. ",
        "CUIT": "30-71224933-8"
    },
    {
        "N": 958,
        "CLIENTE": "INVENTU CITY S.A.S.",
        "CUIT": "30\u201071687710\u20104"
    },
    {
        "N": 959,
        "CLIENTE": "PARQUE PAMPA S.A.",
        "CUIT": "30-57986601-9"
    },
    {
        "N": 960,
        "CLIENTE": "POWER SYSTEMS ARGENTINA S.A.",
        "CUIT": "30-70791053-0"
    },
    {
        "N": 961,
        "CLIENTE": "TECNO ESTAMPA S.R.L.",
        "CUIT": "30-70844809-1"
    },
    {
        "N": 962,
        "CLIENTE": "ESPACIO DE INNOVACI\u00d3N S.R.L.",
        "CUIT": "30-71528822-9"
    },
    {
        "N": 963,
        "CLIENTE": "BARREL AMERICA S.R.L.",
        "CUIT": "30-71550155-0"
    },
    {
        "N": 964,
        "CLIENTE": "ROSSFER IMPORT S.A.",
        "CUIT": "30-71702912-3"
    },
    {
        "N": 965,
        "CLIENTE": "RUBENJUVE S.R.L.",
        "CUIT": "30-71462864-6"
    },
    {
        "N": 966,
        "CLIENTE": "REALTEX S.A.",
        "CUIT": "30-70760754-4"
    },
    {
        "N": 967,
        "CLIENTE": "NATIONAL EXPRESS S.A.",
        "CUIT": "30-70722280-4"
    },
    {
        "N": 968,
        "CLIENTE": "EASING GROUP S.R.L.",
        "CUIT": "30-71455069-8"
    },
    {
        "N": 969,
        "CLIENTE": "ACORD GROUP S.R.L.",
        "CUIT": "30-71455513-4"
    },
    {
        "N": 970,
        "CLIENTE": "FIDECAL S.R.L.",
        "CUIT": "30-55294500-6"
    },
    {
        "N": 971,
        "CLIENTE": "BIDCOM S.R.L.",
        "CUIT": "30-71106936-0 "
    },
    {
        "N": 972,
        "CLIENTE": "SUSTENTATOR S.A.",
        "CUIT": "33-71117282-9"
    },
    {
        "N": 973,
        "CLIENTE": "LUDADEL S.R.L.",
        "CUIT": "30-71510645-7"
    },
    {
        "N": 974,
        "CLIENTE": "SSI Schaefer Ltda.",
        "CUIT": "30-71120254-0 "
    },
    {
        "N": 975,
        "CLIENTE": "GRAMON GROUP S.R.L.",
        "CUIT": "33-71416979-9"
    },
    {
        "N": 976,
        "CLIENTE": "FRANCO ADRI\u00c1N SARD\u00c1",
        "CUIT": "23-37177963-9"
    },
    {
        "N": 977,
        "CLIENTE": "LUMINATEC S.R.L.",
        "CUIT": "30-71622761-4"
    },
    {
        "N": 978,
        "CLIENTE": "PROTAN S.A.",
        "CUIT": " 30-68046927-6"
    },
    {
        "N": 979,
        "CLIENTE": "GMRA S.A.",
        "CUIT": "30-71562186-6."
    },
    {
        "N": 980,
        "CLIENTE": "PAULKIHN S.R.L.",
        "CUIT": "30-71082605-2"
    },
    {
        "N": 981,
        "CLIENTE": "IMPOMOTORS ARGENTINA S.A.",
        "CUIT": "30-70977213-5"
    },
    {
        "N": 982,
        "CLIENTE": "INDUSTRIAS PUGLIESE S.A.",
        "CUIT": "30-54784758-6"
    },
    {
        "N": 983,
        "CLIENTE": "RESET ARGENTINA S.R.L.",
        "CUIT": "30-70958994-2"
    },
    {
        "N": 984,
        "CLIENTE": "TERMOFUSORAS GASSMAN S.R.L.",
        "CUIT": "30-71490426-0"
    },
    {
        "N": 985,
        "CLIENTE": "CABRALES S.A.",
        "CUIT": "30-53774574-2"
    },
    {
        "N": 986,
        "CLIENTE": "INDUSTRIAS MAR S.A.S.",
        "CUIT": "30-71686122-4"
    },
    {
        "N": 987,
        "CLIENTE": "CET S.A.",
        "CUIT": "30-70816085-3"
    },
    {
        "N": 988,
        "CLIENTE": "DANIEL JORGE ESTEBAN",
        "CUIT": "20-16680549-0"
    },
    {
        "N": 989,
        "CLIENTE": "GO GLOBAL S.A.",
        "CUIT": "30-71556454-4"
    },
    {
        "N": 990,
        "CLIENTE": "KOVAR ARGENTINA S.A.",
        "CUIT": "30-71677163-2"
    },
    {
        "N": 991,
        "CLIENTE": "VALLS S.A.",
        "CUIT": "30-54207174-1"
    },
    {
        "N": 992,
        "CLIENTE": "CFL UOM",
        "CUIT": "-"
    },
    {
        "N": 993,
        "CLIENTE": "LIFE WILL S.A.",
        "CUIT": "30-71695175-4"
    },
    {
        "N": 994,
        "CLIENTE": "GRUPO DOMO S.A.S.",
        "CUIT": "30-71673145-2"
    },
    {
        "N": 995,
        "CLIENTE": "PLASTICOS DEL COMAHUE S.A.",
        "CUIT": "30-61138568-0"
    },
    {
        "N": 996,
        "CLIENTE": "CRIOLLO S.A.",
        "CUIT": "30-69039221-2"
    },
    {
        "N": 997,
        "CLIENTE": "RESISTENCIAS MAR DEL PLATA S.R..L",
        "CUIT": "30-70848486-1"
    },
    {
        "N": 998,
        "CLIENTE": "ACEGAME S.A.",
        "CUIT": "33-68851288-9"
    },
    {
        "N": 999,
        "CLIENTE": "ANTONINI NATALIA PAOLA",
        "CUIT": "27-26315633-7"
    },
    {
        "N": 1000,
        "CLIENTE": "FEMAT A.C.E.",
        "CUIT": "33-71007428-9"
    },
    {
        "N": 1001,
        "CLIENTE": "HUBELAM S.A.",
        "CUIT": "30-71176986-9"
    },
    {
        "N": 1002,
        "CLIENTE": "AUTOSERVICIO MAYORISTA DIARCO S.A.",
        "CUIT": "30-60737179-9"
    },
    {
        "N": 1003,
        "CLIENTE": "HIKVISION ARGENTINA S.R.L.",
        "CUIT": "30-71672322-0"
    },
    {
        "N": 1004,
        "CLIENTE": "INDUSTRIAS TAESCA S.R.L.",
        "CUIT": "30-70927472-0"
    }
]
const clientListBack = [
    {
        "id": 1,
        "Name": "DAVICA SAICA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50261824-1\"}",
        "KeyUnique": "DAVI",
        "Contacts": "",
        "location": "RICARDO BALBIN 232, Buenos Aires, VALENTIN ALSINA - LANUS"
    },
    {
        "id": 2,
        "Name": "BARBUY TEAM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65716216-3\"}",
        "KeyUnique": "BRBY",
        "Contacts": "",
        "location": "RUTA 9 KM 501, Córdoba, BELL VILLE"
    },
    {
        "id": 3,
        "Name": "SITEPRA SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-59299266-9\"}",
        "KeyUnique": "SITE",
        "Contacts": "",
        "location": "AV. CORRIENTES 4368, Buenos Aires, C.A.B.A."
    },
    {
        "id": 4,
        "Name": "ELECTROMECANICA VIC SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52208537-1\"}",
        "KeyUnique": "VIC ",
        "Contacts": "",
        "location": "ECUADOR 451 BIS, Santa Fe, Rosario"
    },
    {
        "id": 5,
        "Name": "INSTRUMENTAL DE CALIDAD S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71056577-1\"}",
        "KeyUnique": "INST",
        "Contacts": "",
        "location": "1º DE MAYO 1348, Santa Fe, Rosario"
    },
    {
        "id": 6,
        "Name": "LIHUE INGENIERIA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61217676-7\"}",
        "KeyUnique": "LIHU",
        "Contacts": "",
        "location": "DIAGONAL 78 (ex Santa Rosalia) 1348, Buenos Aires, VILLA ZAGALA"
    },
    {
        "id": 7,
        "Name": "AXEL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-55590776-8\"}",
        "KeyUnique": "AXEL",
        "Contacts": "",
        "location": "CALLE LIMITE DE MUNICIPIO 4515, Santa Fe, Rosario"
    },
    {
        "id": 8,
        "Name": "SCHRAIBER GUSTAVO DANIEL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22426171-1\"}",
        "KeyUnique": "SCHG",
        "Contacts": "",
        "location": "AV. ALMIRANTE G. BROWN Nº772, Buenos Aires, C.A.B.A."
    },
    {
        "id": 9,
        "Name": "ELECTROLUX ARGENTINA S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-66347145-3\"}",
        "KeyUnique": "ELUX",
        "Contacts": "",
        "location": "COSSETTINI OLGA 771 piso 1, Buenos Aires, C.A.B.A."
    },
    {
        "id": 10,
        "Name": "BCD S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61520790-6\"}",
        "KeyUnique": "BCD ",
        "Contacts": "",
        "location": "3 DE FEBRERO 312, Santa Fe, Rosario"
    },
    {
        "id": 11,
        "Name": "BICIMUNDO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70855603-9\"}",
        "KeyUnique": "BICI",
        "Contacts": "",
        "location": "CASTRO BARROS 375, Córdoba, CORDOBA"
    },
    {
        "id": 12,
        "Name": "NAGROZ SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70776334-1\"}",
        "KeyUnique": "NAGR",
        "Contacts": "",
        "location": "DR. DOMINGO CABREG 4701, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 13,
        "Name": "FRIMETAL SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59697015-6\"}",
        "KeyUnique": "FRIM",
        "Contacts": "",
        "location": "BATTLE Y ORDOÑEZ 3436, Santa Fe, Rosario"
    },
    {
        "id": 14,
        "Name": "EL DORADO SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61790753-0\"}",
        "KeyUnique": "ELDO",
        "Contacts": "",
        "location": "RUTA 34 KM44, Santa Fe, SALTO GRANDE"
    },
    {
        "id": 15,
        "Name": "PERCOMIN ICSA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54073298-8\"}",
        "KeyUnique": "PERC",
        "Contacts": "",
        "location": "AV. DEL LIBERTADOR 1298, Buenos Aires, VICENTE LOPEZ"
    },
    {
        "id": 16,
        "Name": "IGT ARGENTINA S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-66193250-9\"}",
        "KeyUnique": "IGT ",
        "Contacts": "",
        "location": "CUYO 2870, Buenos Aires, MARTINEZ"
    },
    {
        "id": 17,
        "Name": "BIENESTAR Y RELAX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71127060-0\"}",
        "KeyUnique": "BIEN",
        "Contacts": "",
        "location": "O´HIGGINS 1136, Salta, SALTA"
    },
    {
        "id": 18,
        "Name": "JAMES SA",
        "Document": "{\"type\":\"RUT\",\"value\":\"21-015 911 001 7\"}",
        "KeyUnique": "JAME",
        "Contacts": "",
        "location": "FRATERNIDAD 3948, URUGUAY, MONTEVIDEO"
    },
    {
        "id": 19,
        "Name": "IGNIS LIGHTING S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50371815-0\"}",
        "KeyUnique": "IGNI",
        "Contacts": "",
        "location": "RUTA PANAMERICANA KM 47.5 - PLANTA IND. Nº 2, Buenos Aires, RAMAL ESCOBAR"
    },
    {
        "id": 20,
        "Name": "KOMPUSUR SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60933119-0\"}",
        "KeyUnique": "KOMP",
        "Contacts": "",
        "location": "Chascomus 5602, Buenos Aires, C.A.B.A."
    },
    {
        "id": 21,
        "Name": "DEMIQUELLI ANIBAL LUIS (ANION_68)",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-04309841-2\"}",
        "KeyUnique": "DEMI",
        "Contacts": "",
        "location": "ITAQUI 2828, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 22,
        "Name": "MOTORES CZERWENY",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69725135-5\"}",
        "KeyUnique": "CZER",
        "Contacts": "",
        "location": "AV. JORGE NEWBERY 372, Santa Fe, GALVEZ"
    },
    {
        "id": 23,
        "Name": "JOSE CAPOBIANCO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64647148-2\"}",
        "KeyUnique": "CAPO",
        "Contacts": "",
        "location": "AV. 25 DE MAYO 911 BIS, Santa Fe, Rosario"
    },
    {
        "id": 24,
        "Name": "ARGENTINO CIPOLATTI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71028101-3\"}",
        "KeyUnique": "PEON",
        "Contacts": "",
        "location": "AV. HIPOLITO YRIGOYEN 1374, Santa Fe, SUNCHALES"
    },
    {
        "id": 25,
        "Name": "PLYRAP SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70860316-9\"}",
        "KeyUnique": "PLYR",
        "Contacts": "",
        "location": "ROBERTO IMPERIALE 1111 - PARQUE INDUSTRIAL, Santa Fe, VENADO TUERTO"
    },
    {
        "id": 26,
        "Name": "ATOMLUX SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-57385583-9\"}",
        "KeyUnique": "ATOM",
        "Contacts": "",
        "location": "RODRIGUEZ PEÑA 4069 (CALLE 22), Buenos Aires, SAN MARTIN"
    },
    {
        "id": 27,
        "Name": "KODAK ALARIS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71423088-9\"}",
        "KeyUnique": "KODA",
        "Contacts": "",
        "location": "SAN VLADIMIRO 3056 - PISO 1 OF. 5-6, Buenos Aires, SAN ISIDRO"
    },
    {
        "id": 28,
        "Name": "ROSARIO TECH SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71501087-5\"}",
        "KeyUnique": "ROST",
        "Contacts": "",
        "location": "SAN MARTIN 1231, Santa Fe, Rosario"
    },
    {
        "id": 29,
        "Name": "GRUPO CONSULTAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62341561-5\"}",
        "KeyUnique": "CONS",
        "Contacts": "",
        "location": "URUGUAY 960, Santa Fe, Rosario"
    },
    {
        "id": 30,
        "Name": "CORADIR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67338016-2\"}",
        "KeyUnique": "CORA",
        "Contacts": "",
        "location": "RUTA 3 KM 0600, San Luis, SAN LUIS"
    },
    {
        "id": 31,
        "Name": "HECTOR CODINI SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50351035-5\"}",
        "KeyUnique": "CODI",
        "Contacts": "",
        "location": "URQUIZA 55, Córdoba, SAN FRANCISCO"
    },
    {
        "id": 32,
        "Name": "PLOTTER SERVICE SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71145923-1\"}",
        "KeyUnique": "PLOT",
        "Contacts": "",
        "location": "SAN LORENZO 3617, Santa Fe, Rosario"
    },
    {
        "id": 33,
        "Name": "MILLTAB S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70987757-3\"}",
        "KeyUnique": "MILL",
        "Contacts": "",
        "location": "AV. INDEPENDENCIA 1832 PISO 1 DPTO. C, Buenos Aires, C.A.B.A."
    },
    {
        "id": 34,
        "Name": "RAYOVAC ARGENTINA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70706168-1\"}",
        "KeyUnique": "RAYO",
        "Contacts": "",
        "location": "HUMBOLDT 2495 PISO 3, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 35,
        "Name": "DIMASHQ ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71100577-9\"}",
        "KeyUnique": "DIMA",
        "Contacts": "",
        "location": "CATAMARCA 1950 1º PISO OF 1, Buenos Aires, MARTINEZ"
    },
    {
        "id": 36,
        "Name": "STEFANELLI JOSE ANTONIO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-10995982-1\"}",
        "KeyUnique": "STEF",
        "Contacts": "",
        "location": "HIPOLITO YRIGOYEN 5672, Buenos Aires, EZPELETA QUILMES"
    },
    {
        "id": 37,
        "Name": "EPTA ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60217363-8\"}",
        "KeyUnique": "EPTA",
        "Contacts": "",
        "location": "OVIDIO LAGOS 6753, Santa Fe, Rosario"
    },
    {
        "id": 38,
        "Name": "BACOPE SACIFA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50497362-6\"}",
        "KeyUnique": "BACO",
        "Contacts": "",
        "location": "LAPRIDA 2375, Buenos Aires, LOMAS DE ZAMORA"
    },
    {
        "id": 39,
        "Name": "GRUPO AYEX SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70813125-9\"}",
        "KeyUnique": "AYEX",
        "Contacts": "",
        "location": "PEDRO CALDERON DE LA BARCA 2579, Buenos Aires, C.A.B.A."
    },
    {
        "id": 40,
        "Name": "TALLERES METALURGICOS BAMBI S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-53311922-7\"}",
        "KeyUnique": "TAMB",
        "Contacts": "",
        "location": "520 Nº 6999, Santa Fe, Rosario"
    },
    {
        "id": 41,
        "Name": "COOLBRAND S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71143440-9\"}",
        "KeyUnique": "COOL",
        "Contacts": "",
        "location": "AV. TRIUNVIRATO 3332, Buenos Aires, C.A.B.A."
    },
    {
        "id": 42,
        "Name": "KRONEN INTERNACIONAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60451400-9\"}",
        "KeyUnique": "KRON",
        "Contacts": "",
        "location": "VALENTIN GOMEZ 151, Buenos Aires, HAEDO"
    },
    {
        "id": 43,
        "Name": "TECNOCASA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71205066-3\"}",
        "KeyUnique": "TECN",
        "Contacts": "",
        "location": "SAENS PEÑA 1143, Buenos Aires, SAN MARTIN"
    },
    {
        "id": 44,
        "Name": "KRETZ S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54764718-8\"}",
        "KeyUnique": "KRTZ",
        "Contacts": "",
        "location": "RUTA NAC. Nº9 KM.276, Santa Fe, Pueblo Esther"
    },
    {
        "id": 45,
        "Name": "YPF S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"/--/\"}",
        "KeyUnique": "YPF ",
        "Contacts": "",
        "location": "MACACHA GÜEMES 515, Buenos Aires, C.A.B.A."
    },
    {
        "id": 46,
        "Name": "SORRENTO MAQUINARIAS SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50606135-7\"}",
        "KeyUnique": "SORR",
        "Contacts": "",
        "location": "RUTA 21 KM 7 LOTE 53 - PARQUE IND. ALVEAR, Santa Fe, ALVEAR"
    },
    {
        "id": 47,
        "Name": "DISTRIBUIDORA AIFANG SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71459011-8\"}",
        "KeyUnique": "AIFA",
        "Contacts": "",
        "location": "PASTEUR 229, Buenos Aires, C.A.B.A."
    },
    {
        "id": 48,
        "Name": "TRI-VIAL TECH SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71229715-4\"}",
        "KeyUnique": "TRIV",
        "Contacts": "",
        "location": "Gral Manual N. Savio 2750, Buenos Aires, San Martin"
    },
    {
        "id": 49,
        "Name": "METALBO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68090337-5\"}",
        "KeyUnique": "MTLB",
        "Contacts": "",
        "location": "OVIDIO LAGOS 6858, Santa Fe, Rosario"
    },
    {
        "id": 50,
        "Name": "TOTALNEO SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71512360-2\"}",
        "KeyUnique": "TNEO",
        "Contacts": "",
        "location": "VIAMONTE 1453, Buenos Aires, C.A.B.A."
    },
    {
        "id": 51,
        "Name": "SYLWAN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50088106-9\"}",
        "KeyUnique": "SYLW",
        "Contacts": "",
        "location": "AVENIDA PTE PERON 7669, Santa Fe, Rosario"
    },
    {
        "id": 52,
        "Name": "YAMAHA MOTOR ARGENTINA S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68723475-4\"}",
        "KeyUnique": "YAMA",
        "Contacts": "",
        "location": "PTE. PERON 8370, Buenos Aires, ITUZAINGO"
    },
    {
        "id": 53,
        "Name": "VISUAR SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65553446-2\"}",
        "KeyUnique": "VISU",
        "Contacts": "",
        "location": "LA MARTONA, Buenos Aires, CAÑUELAS"
    },
    {
        "id": 54,
        "Name": "SCHREDER ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70969638-2\"}",
        "KeyUnique": "SCHR",
        "Contacts": "",
        "location": "AV. REGIMIENTO DE PATRICIOS 1052 OF.121, Buenos Aires, C.A.B.A."
    },
    {
        "id": 55,
        "Name": "INDUSTRIAS SUR SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70995799-2\"}",
        "KeyUnique": "INDS",
        "Contacts": "",
        "location": "PASAJE DIEGO CALA 565 - Bo. PUENTE BLANCO, Córdoba, CORDOBA"
    },
    {
        "id": 56,
        "Name": "ELWIC SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71053537-6\"}",
        "KeyUnique": "ELWI",
        "Contacts": "",
        "location": "MONTAÑESES 1879, Buenos Aires, C.A.B.A."
    },
    {
        "id": 57,
        "Name": "CANTERAS CERRO NEGRO SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50101005-3\"}",
        "KeyUnique": "CCN ",
        "Contacts": "",
        "location": "RECONQUISTA 1088 PISO 9, Buenos Aires, C.A.B.A."
    },
    {
        "id": 58,
        "Name": "TICAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69083341-3\"}",
        "KeyUnique": "TICA",
        "Contacts": "",
        "location": "AMENABAR 3555, Santa Fe, Rosario"
    },
    {
        "id": 59,
        "Name": "TP SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71526439-7\"}",
        "KeyUnique": "TP3D",
        "Contacts": "",
        "location": "ESTRADA 136 dto 1D, Córdoba, CORDOBA"
    },
    {
        "id": 60,
        "Name": "NEW CLOR SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57734682-4\"}",
        "KeyUnique": "CLOR",
        "Contacts": "",
        "location": "TINOGASTA 4636, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 61,
        "Name": "GRUPO MAYO COMEX SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71544156-6\"}",
        "KeyUnique": "MAYO",
        "Contacts": "",
        "location": "PASTEUR 39 PISO DPTO 19, Buenos Aires, C.A.B.A."
    },
    {
        "id": 62,
        "Name": "GRISENTI HECTOR DANIEL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-08368766-6\"}",
        "KeyUnique": "GHD ",
        "Contacts": "",
        "location": "BELGRANO 1651, Mendoza, GODOY CRUZ"
    },
    {
        "id": 63,
        "Name": "ACUARIO DANIEL´S  MAR S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59775618-2\"}",
        "KeyUnique": "ACUA",
        "Contacts": "",
        "location": "AV. CABILDO 3339, Buenos Aires, C.A.B.A."
    },
    {
        "id": 64,
        "Name": "BRIKET S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50377165-5\"}",
        "KeyUnique": "BRIK",
        "Contacts": "",
        "location": "OVIDIO LAGOS 7245, Santa Fe, Rosario"
    },
    {
        "id": 65,
        "Name": "PROYECTOS AGROINDUSTRIALES SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60765800-1\"}",
        "KeyUnique": "AGRO",
        "Contacts": "",
        "location": "AV. BELGRANO 1876 Piso 4 Dto A, Buenos Aires, C.A.B.A."
    },
    {
        "id": 66,
        "Name": "DP ARGENTINA SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71095230-9\"}",
        "KeyUnique": "DPAR",
        "Contacts": "",
        "location": "PTE DERQUI 147, Córdoba, BELL VILLE"
    },
    {
        "id": 67,
        "Name": "THALOS SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67833108-9\"}",
        "KeyUnique": "THAL",
        "Contacts": "",
        "location": "GREGORIO DE LAFERRERE 4780, Buenos Aires, C.A.B.A."
    },
    {
        "id": 68,
        "Name": "German Lisandro Farias",
        "Document": "{\"type\":\"CUIT\",\"value\":\"23-23978621-9\"}",
        "KeyUnique": "GELF",
        "Contacts": "",
        "location": "Maipu 890, Santa Fe, VENADO TUERTO"
    },
    {
        "id": 69,
        "Name": "DIBRA SH",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70881661-9\"}",
        "KeyUnique": "DIBR",
        "Contacts": "",
        "location": "ALBARIÑO 2870, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 70,
        "Name": "INGEMAR SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71491374-9\"}",
        "KeyUnique": "INGE",
        "Contacts": "",
        "location": "AV. EDUARDO BULNES NO. 2250, Córdoba, CORDOBA"
    },
    {
        "id": 71,
        "Name": "INDELPLAS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-12143144-1\"}",
        "KeyUnique": "INDL",
        "Contacts": "",
        "location": "MALVINAS ARGENTINAS 1260, Buenos Aires, JUNIN"
    },
    {
        "id": 72,
        "Name": "GILBARCO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-67992122-9\"}",
        "KeyUnique": "GILB",
        "Contacts": "",
        "location": "AV. CONGRESO 3450, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 73,
        "Name": "CARLOS PESCE SA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30711330433}",
        "KeyUnique": "PAMP",
        "Contacts": "",
        "location": "AV. URQUIZA 1539, CORDOBA, Agregar nueva Localidad"
    },
    {
        "id": 74,
        "Name": "CARRIER S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-50392124-9\"}",
        "KeyUnique": "CARR",
        "Contacts": "",
        "location": "VEDIA 3616 PISO 3, Buenos Aires, C.A.B.A."
    },
    {
        "id": 75,
        "Name": "TRAMONTINA GARIBALDI S.A. INDUSTRIA METALÚRGICA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71193338-3\"}",
        "KeyUnique": "TRAM",
        "Contacts": "",
        "location": "NOGOYÁ 4865, Buenos Aires, C.A.B.A."
    },
    {
        "id": 76,
        "Name": "NEWTRONIC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70729798-7\"}",
        "KeyUnique": "NEWT",
        "Contacts": "",
        "location": "NOGOYA 4839 - planta alta, Buenos Aires, C.A.B.A."
    },
    {
        "id": 77,
        "Name": "LABORATORIO FARKIM SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-58063903-4\"}",
        "KeyUnique": "FARK",
        "Contacts": "",
        "location": "PJE BEETHOVEN 772, Santa Fe, Rosario"
    },
    {
        "id": 78,
        "Name": "ARGENTRADE SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-66010157-4\"}",
        "KeyUnique": "ARTR",
        "Contacts": "",
        "location": "Calle 514 Nº 2050, Buenos Aires, La Plata"
    },
    {
        "id": 79,
        "Name": "SOLEK S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68261942-9\"}",
        "KeyUnique": "SOLE",
        "Contacts": "",
        "location": "AV. ROSALES 1742/44, Buenos Aires, HAEDO"
    },
    {
        "id": 80,
        "Name": "CEM SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62869104-1\"}",
        "KeyUnique": "CEM ",
        "Contacts": "",
        "location": "PASAJE DE LA FLOR 72, Córdoba, CORDOBA"
    },
    {
        "id": 81,
        "Name": "HONDA MOTOR DE ARGENTINA S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57754677-7\"}",
        "KeyUnique": "HOND",
        "Contacts": "",
        "location": "SUIPACHA 1111, Buenos Aires, C.A.B.A."
    },
    {
        "id": 82,
        "Name": "SISTEMAS Y SOLUCIONES DIGITALES SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70780100-6\"}",
        "KeyUnique": "SYSO",
        "Contacts": "",
        "location": "AV. BELGRANO 748 PISO 4 DTO 3, Buenos Aires, C.A.B.A."
    },
    {
        "id": 83,
        "Name": "ELECTRODOMESTICOS MAYVA DE NESTOR MARSICO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"23-04961031-9\"}",
        "KeyUnique": "MAYV",
        "Contacts": "",
        "location": "A. ALSINA Nº 980, Buenos Aires, JUNIN"
    },
    {
        "id": 84,
        "Name": "JUAN CARLOS PROLA Y CIA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-56998296-7\"}",
        "KeyUnique": "JCPR",
        "Contacts": "",
        "location": "AVENIDA CERDAN 900, Santa Fe, RAFAELA"
    },
    {
        "id": 85,
        "Name": "CYM MATERIALES S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51787897-5\"}",
        "KeyUnique": "CYM ",
        "Contacts": "",
        "location": "BRIG. ESTANISLAO LÓPEZ Nº6, Santa Fe, SOLDINI"
    },
    {
        "id": 86,
        "Name": "TECNOSUR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71041830-2\"}",
        "KeyUnique": "TSUR",
        "Contacts": "",
        "location": "COMBATE DE MONTEVIDEO 1139/1141 1139, Tierra del Fuego, RIO GRANDE"
    },
    {
        "id": 87,
        "Name": "HPM SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71121778-5\"}",
        "KeyUnique": "HPM ",
        "Contacts": "",
        "location": "SAAVEDRA 1733, Santa Fe, Rosario"
    },
    {
        "id": 88,
        "Name": "DAFA (CAGGEGI ANTONINO)",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-93985014-8\"}",
        "KeyUnique": "DAFA",
        "Contacts": "",
        "location": "GRAL MARTIN RODRIGUEZ 65, Buenos Aires, RAMOS MEJIA"
    },
    {
        "id": 89,
        "Name": "JARVIS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"01-1 4238 6-3\"}",
        "KeyUnique": "JARV",
        "Contacts": "",
        "location": "L.M.DRAGO 2685, Buenos Aires, BURZACO"
    },
    {
        "id": 90,
        "Name": "FENOGLIO Y CAPELLO SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59076179-2\"}",
        "KeyUnique": "FENO",
        "Contacts": "",
        "location": "ING. HUERGO 1378 (Pque Industrial), Córdoba, SAN FRANCISCO"
    },
    {
        "id": 91,
        "Name": "Enkem Sa",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71119054-2\"}",
        "KeyUnique": "ENKE",
        "Contacts": "",
        "location": "1º de Mayo 2245, Santa Fe, Rosario"
    },
    {
        "id": 92,
        "Name": "MULTIJACTO S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-63208973-9\"}",
        "KeyUnique": "JACT",
        "Contacts": "",
        "location": "RUTA 8 KM 176,, Buenos Aires, Arrecifes"
    },
    {
        "id": 93,
        "Name": "RHEEM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61295852-8\"}",
        "KeyUnique": "RHEE",
        "Contacts": "",
        "location": "AV. SANTOS ORTIZ (EX RUTA 7) KM 790, San Luis, PARQUE IND. SUR"
    },
    {
        "id": 94,
        "Name": "RICOH SOUTH AMERICA DCSA",
        "Document": "{\"type\":\"RUT\",\"value\":\"21-275 932 001 9\"}",
        "KeyUnique": "RICO",
        "Contacts": "",
        "location": "RUTA 8 KM 17500 - LOC 334, URUGUAY, MONTEVIDEO"
    },
    {
        "id": 95,
        "Name": "BANNER DIRECTOR S.A",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30714787558}",
        "KeyUnique": "BADI",
        "Contacts": "",
        "location": "CASEROS 980 piso1 - dto A, Rosario, Agregar nueva Localidad"
    },
    {
        "id": 96,
        "Name": "CA.EL.AR S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":33707471129}",
        "KeyUnique": "CAAR",
        "Contacts": "",
        "location": "CRESPO 3020/40, BUENOS AIRES, Agregar nueva Localidad"
    },
    {
        "id": 97,
        "Name": "INCOMPANY",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22774514-3\"}",
        "KeyUnique": "INCO",
        "Contacts": "",
        "location": "GOBERNADOR GREGORIO GAVIER 1812, Córdoba, CERRO DE LAS ROSAS"
    },
    {
        "id": 98,
        "Name": "ELECTRONIC SYSTEM SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64358677-7\"}",
        "KeyUnique": "ELSY",
        "Contacts": "",
        "location": "PEREZ ROQUE 3650, Buenos Aires, C.A.B.A."
    },
    {
        "id": 99,
        "Name": "TERRAGENE SA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30709585939}",
        "KeyUnique": "TERR",
        "Contacts": "",
        "location": "AUTOPISTA ROS-BS AS, SANTA FE, Alvear"
    },
    {
        "id": 100,
        "Name": "FARM TECH SA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"/\"}",
        "KeyUnique": "FARM",
        "Contacts": "",
        "location": "TUCUMAN 540, PISO 28 D, BUENOS AIRES, Agregar nueva Localidad"
    },
    {
        "id": 101,
        "Name": "HYDRAL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71048911-0\"}",
        "KeyUnique": "HYDR",
        "Contacts": "",
        "location": "VIRREY LORETO 1703, PISO 6 (24), Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 102,
        "Name": "MULTIREP S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69543649-8\"}",
        "KeyUnique": "MULT",
        "Contacts": "",
        "location": "AV. WARNES 1624, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 103,
        "Name": "BIOTEX SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70846409-7\"}",
        "KeyUnique": "BIOT",
        "Contacts": "",
        "location": "SOLIS 1505, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 104,
        "Name": "LONGVIE SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50083378-1\"}",
        "KeyUnique": "LONG",
        "Contacts": "",
        "location": "LAPRIDA 4851, Buenos Aires, VILLA MARTELLI"
    },
    {
        "id": 105,
        "Name": "IFM ELECTRONIC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71045716-2\"}",
        "KeyUnique": "IFM ",
        "Contacts": "",
        "location": "LOLA MORA 421 - piso 10 dto 3, Buenos Aires, C.A.B.A."
    },
    {
        "id": 106,
        "Name": "MAIDA VICTOR SEBASTIAN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-24350498-9\"}",
        "KeyUnique": "MAID",
        "Contacts": "",
        "location": "SAN JUAN 3853, Santa Fe, Rosario"
    },
    {
        "id": 107,
        "Name": "NARDI & HERRERO SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30--5618012-0\"}",
        "KeyUnique": "NAHE",
        "Contacts": "",
        "location": "COLON 2899, Santa Fe, Rosario"
    },
    {
        "id": 108,
        "Name": "HONEYWELL SAIC",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"/\"}",
        "KeyUnique": "HONE",
        "Contacts": "",
        "location": "CARLOS PELLEGRINI 179, BUENOS AIRES, Agregar nueva Localidad"
    },
    {
        "id": 109,
        "Name": "JOSE AZAR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-13104046-7\"}",
        "KeyUnique": "AZAR",
        "Contacts": "",
        "location": "MARIANO ACHA 290, Buenos Aires, HURLINGHAM"
    },
    {
        "id": 110,
        "Name": "BASCULAS GAMA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68050265-6\"}",
        "KeyUnique": "GAMA",
        "Contacts": "",
        "location": "ACC. NORTE DE AUTOPISTA Y RUTA 11, Santa Fe, SAN LORENZO"
    },
    {
        "id": 111,
        "Name": "FULLMOON S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71235642-8\"}",
        "KeyUnique": "FULL",
        "Contacts": "",
        "location": "PASO DE LA PATRIA 451, Buenos Aires, VALENTIN ALSINA"
    },
    {
        "id": 112,
        "Name": "LIME ROSARIO SA EN FORMACION",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71470874-7\"}",
        "KeyUnique": "LIME",
        "Contacts": "",
        "location": "PTE PERON 8490, Santa Fe, Rosario"
    },
    {
        "id": 113,
        "Name": "LOSA VERONICA LAURA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-22285706-1\"}",
        "KeyUnique": "LOSA",
        "Contacts": "",
        "location": "DEFENSA 2052, Buenos Aires, LA MATANZA"
    },
    {
        "id": 114,
        "Name": "LABORATORIO CONSULTAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70750447-8\"}",
        "KeyUnique": "LABO",
        "Contacts": "",
        "location": "LAPRIDA 3346, Santa Fe, Rosario"
    },
    {
        "id": 115,
        "Name": "CONDUCTORES ROSARIO SH",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70872581-8\"}",
        "KeyUnique": "COND",
        "Contacts": "",
        "location": "GUSTAVO COCHET 7557, Santa Fe, Rosario"
    },
    {
        "id": 116,
        "Name": "CALPRO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71206983-6\"}",
        "KeyUnique": "CALP",
        "Contacts": "",
        "location": "CHILE 537, PISO 4, DPTO 16, Buenos Aires, C.A.B.A."
    },
    {
        "id": 117,
        "Name": "USHUAIA SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70790964-8\"}",
        "KeyUnique": "USHU",
        "Contacts": "",
        "location": "CALLE 3 Nº 475, Buenos Aires, MERCEDES"
    },
    {
        "id": 118,
        "Name": "BERVILLE S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30710238983}",
        "KeyUnique": "BERV",
        "Contacts": "",
        "location": "RODRIGUEZ PEÑA 1736, MENDOZA, MAIPU"
    },
    {
        "id": 119,
        "Name": "ROS MATERIALES ELECTRICOS SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-63320183-4\"}",
        "KeyUnique": "ROMA",
        "Contacts": "",
        "location": "RN 3 KM 42.5, Buenos Aires, VIRREY DEL PINO"
    },
    {
        "id": 120,
        "Name": "RS BAHIA COMEX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71561677-3\"}",
        "KeyUnique": "RSBC",
        "Contacts": "",
        "location": "AV. MASSEY 1624, Buenos Aires, LINCOLN"
    },
    {
        "id": 121,
        "Name": "SOLUCIONES INTEGRALES DE INGENIERIA Y DESARROLLO SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70881374-1\"}",
        "KeyUnique": "SIID",
        "Contacts": "",
        "location": "Calle 2 Nro 53, Santa Fe, Avellaneda"
    },
    {
        "id": 122,
        "Name": "METALURGICA DEL SUR SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67750814-7\"}",
        "KeyUnique": "MDS ",
        "Contacts": "",
        "location": "VELEZ SARSFIELD 1121, Santa Fe, V. GDOR. GALVEZ"
    },
    {
        "id": 123,
        "Name": "INTEGRAL TRADING SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71255525-0\"}",
        "KeyUnique": "INTR",
        "Contacts": "",
        "location": "SUIPACHA 57, Buenos Aires, LINCOLN"
    },
    {
        "id": 124,
        "Name": "DYM TRADE SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71238198-8\"}",
        "KeyUnique": "DYMT",
        "Contacts": "",
        "location": "PASTEUR 39, PISO 3 OF. 24, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 125,
        "Name": "C&S COMUNICACIÓN Y SISTEMAS SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69545669-3\"}",
        "KeyUnique": "COMS",
        "Contacts": "",
        "location": "CARACAS 632, Buenos Aires, C.A.B.A."
    },
    {
        "id": 126,
        "Name": "GRIDE ELECTRONICA SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62105411-9\"}",
        "KeyUnique": "GRDE",
        "Contacts": "",
        "location": "AMENABAR 944, Santa Fe, Rosario"
    },
    {
        "id": 127,
        "Name": "IMPRESOS VELOX SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52304778-3\"}",
        "KeyUnique": "IMVE",
        "Contacts": "",
        "location": "LAVALLE 1450, Buenos Aires, C.A.B.A."
    },
    {
        "id": 128,
        "Name": "VIRANDO SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71535770-0\"}",
        "KeyUnique": "VIRA",
        "Contacts": "",
        "location": "AV. CORRIENTES 6041, PISO 9 DPTO. B, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 129,
        "Name": "KARULIS SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70849920-6\"}",
        "KeyUnique": "KARU",
        "Contacts": "",
        "location": "PASTEUR 334, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 130,
        "Name": "NIANI SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70775831-3\"}",
        "KeyUnique": "NIAN",
        "Contacts": "",
        "location": "AV. CORRIENTES 2312, PISO 3 OF. 31, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 131,
        "Name": "SCHNEIDER ELECTRIC SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59219954-4\"}",
        "KeyUnique": "SCHN",
        "Contacts": "",
        "location": "AV. GRAL. SAN MARTIN 5020, Buenos Aires, FLORIDA"
    },
    {
        "id": 132,
        "Name": "TRENES ARGENTINOS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71068177-1\"}",
        "KeyUnique": "TRAR",
        "Contacts": "",
        "location": "AVDA. DR. RAMOS MEJÍA 1302, Buenos Aires, C.A.B.A."
    },
    {
        "id": 133,
        "Name": "GARBARINO SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54008821-3\"}",
        "KeyUnique": "GARB",
        "Contacts": "",
        "location": "GUEVARA 533, Buenos Aires, C.A.B.A."
    },
    {
        "id": 134,
        "Name": "DANGELO Y CABRERA SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71539774-5\"}",
        "KeyUnique": "DACA",
        "Contacts": "",
        "location": "AV. MAIPU 51 - PISO 12 - DTO 7B, Córdoba, CORDOBA"
    },
    {
        "id": 135,
        "Name": "GOLDSONIC SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68830252-4\"}",
        "KeyUnique": "GOLN",
        "Contacts": "",
        "location": "Pasteur 359 2º A, Buenos Aires, C.A.B.A."
    },
    {
        "id": 136,
        "Name": "COPALUS SA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30708447494}",
        "KeyUnique": "COPA",
        "Contacts": "",
        "location": "PASTEUR 39 2º OF. 18, C.A.B.A, C.A.B.A."
    },
    {
        "id": 137,
        "Name": "ESMAJOBRAN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71524214-8\"}",
        "KeyUnique": "ESMA",
        "Contacts": "",
        "location": "AZCUENGA 709, C.A.B.A., C.A.B.A."
    },
    {
        "id": 138,
        "Name": "ECO RIDES S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71544156-6\"}",
        "KeyUnique": "ECRI",
        "Contacts": "",
        "location": "VIDT 1669 PISO 9 DPTO. B, C.A.B.A., C.A.B.A."
    },
    {
        "id": 139,
        "Name": "MEDIX",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52320075-1\"}",
        "KeyUnique": "MEDI",
        "Contacts": "",
        "location": "MERMOZ 1750, Buenos Aires, EL TALAR"
    },
    {
        "id": 140,
        "Name": "LUIS PABLO PANATTI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22592440-7\"}",
        "KeyUnique": "PANA",
        "Contacts": "",
        "location": "9 DE JULIO 2277, Córdoba, MONTE MAIZ"
    },
    {
        "id": 141,
        "Name": "SUREX ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70802317-1\"}",
        "KeyUnique": "SURX",
        "Contacts": "",
        "location": "AV.HIPOLITO YRIGOYEN 2175, Buenos Aires, AVELLANEDA"
    },
    {
        "id": 142,
        "Name": "PINTFRANCE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70772500-8\"}",
        "KeyUnique": "PINT",
        "Contacts": "",
        "location": "AV. RIVADAVIA 16102, Buenos Aires, HAEDO"
    },
    {
        "id": 143,
        "Name": "EXO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57960755-2\"}",
        "KeyUnique": "EXOS",
        "Contacts": "",
        "location": "AV. CHICLANA 3444, Buenos Aires, C.A.B.A."
    },
    {
        "id": 144,
        "Name": "FUTURE GRAPHICS LLC ARGENTINA SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70823800-3\"}",
        "KeyUnique": "LLC ",
        "Contacts": "",
        "location": "HERRERA 475, Buenos Aires, C.A.B.A."
    },
    {
        "id": 145,
        "Name": "TZIPOR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71145408-6\"}",
        "KeyUnique": "TZIP",
        "Contacts": "",
        "location": "BUENOS AIRES 114 PISO 1 DPTO. 9M, Mendoza, MENDOZA"
    },
    {
        "id": 146,
        "Name": "EMICOL ELETRO ELETRONICA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":61685723000166}",
        "KeyUnique": "EMIC",
        "Contacts": "",
        "location": "MARGINAL EMICOL S/N, SAO PAULO, ITU"
    },
    {
        "id": 147,
        "Name": "FRICOM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-23279609-0\"}",
        "KeyUnique": "FRIC",
        "Contacts": "",
        "location": "AV. JAURETCHE 7210, Misiones, POSADAS"
    },
    {
        "id": 148,
        "Name": "MARTIN OUBIÑA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-28462995-8\"}",
        "KeyUnique": "OUBI",
        "Contacts": "",
        "location": "SOLDADO DE LA INDEPENDENCIA 1341 PISO4A, Buenos Aires, C.A.B.A."
    },
    {
        "id": 149,
        "Name": "TOMAS FERMIN MENA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-04637386-4\"}",
        "KeyUnique": "MENA",
        "Contacts": "",
        "location": "PASAJE BOLONIA 5065, Santa Fe, Rosario"
    },
    {
        "id": 150,
        "Name": "EDISUR SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70941894-3\"}",
        "KeyUnique": "EDIS",
        "Contacts": "",
        "location": "AV. ROGELIO MARTINEZ 2649, Córdoba, CORDOBA"
    },
    {
        "id": 151,
        "Name": "ORBIS MERTIG S.A.I.C.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50059755-7\"}",
        "KeyUnique": "ORBI",
        "Contacts": "",
        "location": "YERBAL 1200, Buenos Aires, VILLA ADELINA"
    },
    {
        "id": 152,
        "Name": "ROWA SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54072172-2\"}",
        "KeyUnique": "ROWA",
        "Contacts": "",
        "location": "PUERTO RICO 1255, Buenos Aires, MARTINEZ"
    },
    {
        "id": 153,
        "Name": "UPS INTEGRAL SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71106871-2\"}",
        "KeyUnique": "UPSI",
        "Contacts": "",
        "location": "RIOBAMBA 2876, Santa Fe, Rosario"
    },
    {
        "id": 154,
        "Name": "ARNEG ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-58642351-3\"}",
        "KeyUnique": "ARNE",
        "Contacts": "",
        "location": "AV. 25 DE MAYO 2330, Santa Fe, Rosario"
    },
    {
        "id": 155,
        "Name": "MULBAR SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71123677-1\"}",
        "KeyUnique": "MULB",
        "Contacts": "",
        "location": "EVITA 1313, Buenos Aires, EL JAGÜEL"
    },
    {
        "id": 156,
        "Name": "MEGA SHOW S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71343740-5\"}",
        "KeyUnique": "SHOW",
        "Contacts": "",
        "location": "PRESIDENTE PERON 10298 DPTO. 119, Buenos Aires, ITUZAINGO"
    },
    {
        "id": 157,
        "Name": "ARIEL RUBEN CORDON",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-07613647-6\"}",
        "KeyUnique": "ARC ",
        "Contacts": "",
        "location": "PASTEUR 346 DPTO. L PISO 7, Buenos Aires, C.A.B.A."
    },
    {
        "id": 158,
        "Name": "MEGA POLY TRADE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70948856-9\"}",
        "KeyUnique": "MPT ",
        "Contacts": "",
        "location": "AV. CORRIENTES 2312 PISO 6 OFICINA 52, Buenos Aires, C.A.B.A."
    },
    {
        "id": 159,
        "Name": "ATHAND S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71441662-2\"}",
        "KeyUnique": "ATHA",
        "Contacts": "",
        "location": "AV. JUAN DE GARAY 737 PISO 6 DPTO. 3 T: R, Buenos Aires, C.A.B.A."
    },
    {
        "id": 160,
        "Name": "ADRIAN PETROCELLI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-14228033-8\"}",
        "KeyUnique": "APET",
        "Contacts": "",
        "location": "ALSINA 1414, Santa Fe, Rosario"
    },
    {
        "id": 161,
        "Name": "RAMOS ETCHEVERRY GONZALO MARTIN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-92848188-4\"}",
        "KeyUnique": "REGM",
        "Contacts": "",
        "location": "ACHEGA 2965 PB B, Buenos Aires, C.A.B.A."
    },
    {
        "id": 162,
        "Name": "ELIBET SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51735933-1\"}",
        "KeyUnique": "ELIB",
        "Contacts": "",
        "location": "ROSALES 4051, Buenos Aires, VILLA LYNCH"
    },
    {
        "id": 163,
        "Name": "ASOC. DE COOPERATIVAS ARGENTINAS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50012088-2\"}",
        "KeyUnique": "ACA ",
        "Contacts": "",
        "location": "RUTA 8 KM 229.5, Buenos Aires, Pergamino"
    },
    {
        "id": 164,
        "Name": "RODEIRO CONSTRUCCIONES S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71414965-9\"}",
        "KeyUnique": "ROCO",
        "Contacts": "",
        "location": "WHITE 948, Buenos Aires, C.A.B.A."
    },
    {
        "id": 165,
        "Name": "MERCADO VENTA NORTE",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71520778-4\"}",
        "KeyUnique": "MEVN",
        "Contacts": "",
        "location": "ALMAFUERTE 455, Buenos Aires, SAN PEDRO"
    },
    {
        "id": 166,
        "Name": "IDEA ILUMINACIÓN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70810942-4\"}",
        "KeyUnique": "IDEA",
        "Contacts": "",
        "location": "Varela 897, Buenos Aires, VILLA MARTELLI"
    },
    {
        "id": 167,
        "Name": "ONECLICK ARGENTINO SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70880869-1\"}",
        "KeyUnique": "ONEC",
        "Contacts": "",
        "location": "ORTIZ DE OCAMPO 3302 Dpto. 24, BUENOS AIRES, C.A.B.A"
    },
    {
        "id": 168,
        "Name": "FAME S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70794342-0\"}",
        "KeyUnique": "FAME",
        "Contacts": "",
        "location": "Av. Calingasta 5580, Córdoba, CORDOBA"
    },
    {
        "id": 169,
        "Name": "METROLAB SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-68704162-9\"}",
        "KeyUnique": "MLAB",
        "Contacts": "",
        "location": "HERRERA 2246, Buenos Aires, C.A.B.A."
    },
    {
        "id": 170,
        "Name": "SARCRIS SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71432747-6\"}",
        "KeyUnique": "SARC",
        "Contacts": "",
        "location": "Maipu 464, piso 4, Buenos Aires, Agregar nueva Localidad"
    },
    {
        "id": 171,
        "Name": "ALCABLE SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-63774782-3\"}",
        "KeyUnique": "ALCA",
        "Contacts": "",
        "location": "Güemes 1460, Buenos Aires, Merlo"
    },
    {
        "id": 172,
        "Name": "FACULTAD DE CIENCIAS AGRARIAS",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30602326671}",
        "KeyUnique": "FDCA",
        "Contacts": "",
        "location": "CAMPO EXPERIMENTAL VILLARINO, WILDE, Agregar nueva Localidad"
    },
    {
        "id": 173,
        "Name": "TROBBIANI DANIEL RAMON",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-11710721-4\"}",
        "KeyUnique": "TROB",
        "Contacts": "",
        "location": "BV. 27 DE FEBRERO 2439, Santa Fe, Rosario"
    },
    {
        "id": 174,
        "Name": "PHILIPS LIGHTING ARGENTINA S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71492461-9\"}",
        "KeyUnique": "PHIL",
        "Contacts": "",
        "location": "DR. NICOLAS REPETTO, Buenos Aires, OLIVOS, VICENTE LÓPEZ"
    },
    {
        "id": 175,
        "Name": "LIPARI JOSÉ ENRIQUE",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-12736104-6\"}",
        "KeyUnique": "LIPA",
        "Contacts": "",
        "location": "MITRE 4656, Santa Fe, Rosario"
    },
    {
        "id": 176,
        "Name": "ESTETICA SCORPION",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-07749345-0\"}",
        "KeyUnique": "SCOR",
        "Contacts": "",
        "location": "BONIFACINI 5430, Buenos Aires, CASEROS"
    },
    {
        "id": 177,
        "Name": "REHAU S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67657566-5\"}",
        "KeyUnique": "REHA",
        "Contacts": "",
        "location": "CASACCIA 5161, Santa Fe, Rosario"
    },
    {
        "id": 178,
        "Name": "HERNÁN ARIEL MAZZARELLA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-31293370-6\"}",
        "KeyUnique": "MAZZ",
        "Contacts": "",
        "location": "VIRGILIO 2935, Buenos Aires, C.A.B.A."
    },
    {
        "id": 179,
        "Name": "COPPENS SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51967820-5\"}",
        "KeyUnique": "COPP",
        "Contacts": "",
        "location": "CALLE 5 ENTRE 2 Y 4 - PARQUE INDUSTRIAL, Buenos Aires, MAR DEL PLATA"
    },
    {
        "id": 180,
        "Name": "MIMET",
        "Document": "{\"type\":\"ID Imp.\"}",
        "KeyUnique": "MIME",
        "Contacts": "",
        "location": "Av. Carlos Valdovinos No. 590, Santiago, Chile, San Joaquín"
    },
    {
        "id": 181,
        "Name": "PRO ELECTRO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71544156-6\"}",
        "KeyUnique": "PROE",
        "Contacts": "",
        "location": "PASTEUR 39 PISO 3 DTO. 19, Buenos Aires, C.A.B.A."
    },
    {
        "id": 182,
        "Name": "ELECTRO MOTORES ARGENTINOS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30--7084589-6\"}",
        "KeyUnique": "EMAR",
        "Contacts": "",
        "location": "ING. HUERGO 1209 - PARQUE INDUSTRIAL, Córdoba, SAN FRANCISCO"
    },
    {
        "id": 183,
        "Name": "MARANSI SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70871199-9\"}",
        "KeyUnique": "MARA",
        "Contacts": "",
        "location": "MANUEL OCAMPO 1170, Buenos Aires, HURLINGHAM"
    },
    {
        "id": 184,
        "Name": "BLITZ MOTORS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71522121-3\"}",
        "KeyUnique": "BLTZ",
        "Contacts": "",
        "location": "HIPOLITO YIRIGOYEN 3853, Buenos Aires, SAN MARTIN"
    },
    {
        "id": 185,
        "Name": "CONSTRUCTORA E IMPORTADORA SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71149302-2\"}",
        "KeyUnique": "COIM",
        "Contacts": "",
        "location": "SAN MARTIN 1267, Santa Fe, Rosario"
    },
    {
        "id": 186,
        "Name": "STEM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70929417-9\"}",
        "KeyUnique": "STEM",
        "Contacts": "",
        "location": "VIRASORO 1249, Santa Fe, Rosario"
    },
    {
        "id": 187,
        "Name": "FINAMORE ALBERTO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-06029629-9\"}",
        "KeyUnique": "FINA",
        "Contacts": "",
        "location": "Tucumán 2843, Santa Fe, Rosario"
    },
    {
        "id": 188,
        "Name": "TRANE DE ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-66210229-2\"}",
        "KeyUnique": "TRAN",
        "Contacts": "",
        "location": "AVENIDA MITRE 1345 / 51, Buenos Aires, FLORIDA"
    },
    {
        "id": 189,
        "Name": "STRADA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69539233-4\"}",
        "KeyUnique": "STRA",
        "Contacts": "",
        "location": "Av. Filippini 1421, Santa Fe, V. GDOR. GALVEZ"
    },
    {
        "id": 190,
        "Name": "SOUZA CRUZ S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"CNPJ33009911\"}",
        "KeyUnique": "SOUZ",
        "Contacts": "",
        "location": "AV. GAL.PLINIO TOURINHO, 3200, Paraná, Brasil, Río Negro, Paraná, Brasil"
    },
    {
        "id": 191,
        "Name": "CIROCO SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61481655-0\"}",
        "KeyUnique": "CIRO",
        "Contacts": "",
        "location": "ITALIA 531, Buenos Aires, EL TALAR"
    },
    {
        "id": 192,
        "Name": "HUILING MAI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-93932278-8\"}",
        "KeyUnique": "HUIL",
        "Contacts": "",
        "location": "SARMIENTO 2320, Buenos Aires, C.A.B.A."
    },
    {
        "id": 193,
        "Name": "LAGUIA CLAUDIO MARCELO",
        "Document": "{\"type\":\"ID Imp.\"}",
        "KeyUnique": "LAGU",
        "Contacts": "",
        "location": "ZENON LÓPEZ 1254, CORDOBA, Agregar nueva Localidad"
    },
    {
        "id": 194,
        "Name": "BONO WALTER ARIEL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-24400675-3\"}",
        "KeyUnique": "BONO",
        "Contacts": "",
        "location": "PCIAS UNIDAS 1202, Santa Fe, Rosario"
    },
    {
        "id": 195,
        "Name": "COL - VEN SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-56031241-1\"}",
        "KeyUnique": "COLV",
        "Contacts": "",
        "location": "CERRITO 1280, Buenos Aires, ITUZAINGO"
    },
    {
        "id": 196,
        "Name": "CAMIMPORT SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64086932-8\"}",
        "KeyUnique": "CAMI",
        "Contacts": "",
        "location": "24 DE SEPTIEMBRE 2447, Santa Fe, Rosario"
    },
    {
        "id": 197,
        "Name": "KIAR SA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30677508147}",
        "KeyUnique": "KIAR",
        "Contacts": "",
        "location": "VELEZ SARSFIELD 1121, Santa Fé, V. GDOR. GALVEZ"
    },
    {
        "id": 198,
        "Name": "OM SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62836560-8\"}",
        "KeyUnique": "OMSR",
        "Contacts": "",
        "location": "CARLOS PELLEGRINI 941, Santa Fe, TOTORAS"
    },
    {
        "id": 199,
        "Name": "DUCATI  ENERGÍA  SUD  AMÉRICA  SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71061827-1\"}",
        "KeyUnique": "DUCA",
        "Contacts": "",
        "location": "AV. GRAL. BELGRANO 2701, Buenos Aires, DON TORCUATO"
    },
    {
        "id": 200,
        "Name": "ELMET S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30707949968}",
        "KeyUnique": "ELME",
        "Contacts": "",
        "location": "Lote 4 Parque Industrial Avellaneda, Santa Fé, AVELLANEDA"
    },
    {
        "id": 201,
        "Name": "ORANFRESH SAS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71618017-0\"}",
        "KeyUnique": "ORAN",
        "Contacts": "",
        "location": "SAN LUIS 3585, Santa Fe, Rosario"
    },
    {
        "id": 202,
        "Name": "LADET SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70853383-8\"}",
        "KeyUnique": "LADE",
        "Contacts": "",
        "location": "RÍO CUARTO 2299 PB DPTO. 0, Buenos Aires, C.A.B.A."
    },
    {
        "id": 203,
        "Name": "ND MEDICAL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71440586-8\"}",
        "KeyUnique": "NDME",
        "Contacts": "",
        "location": "CARRIEGO 845, Santa Fe, Rosario"
    },
    {
        "id": 204,
        "Name": "WANG MINGJIE",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-94761547-6\"}",
        "KeyUnique": "WANG",
        "Contacts": "",
        "location": "SARMIENTO 2482, Buenos Aires, C.A.B.A."
    },
    {
        "id": 205,
        "Name": "TECNO L.D. BERNAL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71068682-9\"}",
        "KeyUnique": "TBER",
        "Contacts": "",
        "location": "CALLE 163 Nº 316, Buenos Aires, BERNAL"
    },
    {
        "id": 206,
        "Name": "NORA BEATRIZ APARICIO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-03893779-6\"}",
        "KeyUnique": "NORA",
        "Contacts": "",
        "location": "MAIPU 1118, Santa Fe, Rosario"
    },
    {
        "id": 207,
        "Name": "RACEDO ARAGON IGNACIO ANDRES",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-23645400-3\"}",
        "KeyUnique": "RAIG",
        "Contacts": "",
        "location": "ALVEAR 216, Santa Fe, Rosario"
    },
    {
        "id": 208,
        "Name": "FRIGOTEC SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70902575-5\"}",
        "KeyUnique": "FTEC",
        "Contacts": "",
        "location": "COLECTORA NORTE ACCESO OESTE 10413, Buenos Aires, LA REJA"
    },
    {
        "id": 209,
        "Name": "FACULTAD DE CIENCIAS AGROPECUARIAS U.N.C. LASIDYS-UNCOR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54667062-3\"}",
        "KeyUnique": "UNC ",
        "Contacts": "",
        "location": "ING. AGR. FÉLIX ALDO MARRONE 746 CD. UNIVERSITARIA, Córdoba, CORDOBA"
    },
    {
        "id": 210,
        "Name": "ENERTIK - Electronic S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70888560-2\"}",
        "KeyUnique": "ETIK",
        "Contacts": "",
        "location": "BV. N. OROÑO 5102, Santa Fe, Rosario"
    },
    {
        "id": 211,
        "Name": "GOLDMUND SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70860387-9\"}",
        "KeyUnique": "GOLD",
        "Contacts": "",
        "location": "MANUEL A. OCAMPO 1170, Buenos Aires, HURLINGHAM"
    },
    {
        "id": 212,
        "Name": "TUCAGRO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68572176-3\"}",
        "KeyUnique": "TUCA",
        "Contacts": "",
        "location": "AUTOPISTA J.D. PERON - KM 5,3, Tucumán, CEVIL POZO"
    },
    {
        "id": 213,
        "Name": "CUSILLOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70735537-5\"}",
        "KeyUnique": "CUSI",
        "Contacts": "",
        "location": "AV. PRESIDENTE PERON 2300 PISO 2 DPTO 3 T 1, Tucumán, YERBA BUENA"
    },
    {
        "id": 214,
        "Name": "GARMAT S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68568869-3\"}",
        "KeyUnique": "GAR ",
        "Contacts": "",
        "location": "AV. PRESIDENTE PERON 2300 PISO 2 DPTO 3-A T 1, Tucumán, YERBA BUENA"
    },
    {
        "id": 215,
        "Name": "ESTABLECIMIENTO METALURGICO RENANIA SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50275261-4\"}",
        "KeyUnique": "RENA",
        "Contacts": "",
        "location": "BOLIVIA 2117, Buenos Aires, LANUS"
    },
    {
        "id": 216,
        "Name": "LABORATORIOS RADSON S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\"}",
        "KeyUnique": "RADS",
        "Contacts": "",
        "location": "Esfuerzo Nº 1-C  -  Col. Lázaro Cárdenas, Edo. de México - MEX, Naucalpan de Juárez"
    },
    {
        "id": 217,
        "Name": "EURO - ELECTRIC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64669443-0\"}",
        "KeyUnique": "EURO",
        "Contacts": "",
        "location": "FRANCISCO NARCISO LAPRIDA 1106, Buenos Aires, LOMAS DE ZAMORA"
    },
    {
        "id": 218,
        "Name": "SALA HNOS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"--\"}",
        "KeyUnique": "SALA",
        "Contacts": "",
        "location": "AV. AGUSTIN TOSCO 199, Córdoba, CORONEL MOLDES"
    },
    {
        "id": 219,
        "Name": "COOP. AGRÍCOLA GANADERA DE MONTE BUEY LTDA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-53112211-5\"}",
        "KeyUnique": "CAGM",
        "Contacts": "",
        "location": "RIVADAVIA Y DEAN FUNES 188, Córdoba, Monte Buey"
    },
    {
        "id": 220,
        "Name": "ARCOR SAIC",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50279317-5\"}",
        "KeyUnique": "ARCO",
        "Contacts": "",
        "location": "AV. FULVIO S. PAGANI 487, Córdoba, Arroyito"
    },
    {
        "id": 221,
        "Name": "MULTI HOUSING LAUNDRY S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"--\"}",
        "KeyUnique": "MHL ",
        "Contacts": "",
        "location": "AVENIDA BELGRANO 4133, Buenos Aires, C.A.B.A."
    },
    {
        "id": 222,
        "Name": "ESKABE SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50333978-8\"}",
        "KeyUnique": "ESKA",
        "Contacts": "",
        "location": "Nicolas Repetto 1541, Buenos Aires, C.A.B.A."
    },
    {
        "id": 223,
        "Name": "KAIBO S. A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71213567-7\"}",
        "KeyUnique": "KAIB",
        "Contacts": "",
        "location": "PASTEUR 351, Buenos Aires, C.A.B.A."
    },
    {
        "id": 224,
        "Name": "PETROQUÍMICA CUYO S.A.I.C.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-58342640-6\"}",
        "KeyUnique": "CUYO",
        "Contacts": "",
        "location": "CNO. GOB. VERGARA KM 2.5, Buenos Aires, ENSENADA"
    },
    {
        "id": 225,
        "Name": "CANIETI INTEGRACION EN SERVICIOS Y ASESORIA EN TELECOMUNICAC",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"SCO8001182D6\"}",
        "KeyUnique": "CANI",
        "Contacts": "",
        "location": "CULIACAN 71 (CANIETI) AV. NUEVO LEON Nº253-802, MEXICO, MEXICO D.F"
    },
    {
        "id": 226,
        "Name": "ELDEN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54073298-8\"}",
        "KeyUnique": "ELDE",
        "Contacts": "",
        "location": "AV. DEL LIBERTADOR 1298, Buenos Aires, VICENTE LOPEZ"
    },
    {
        "id": 227,
        "Name": "INDUSTRIAS ESPERANZA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71499076-0\"}",
        "KeyUnique": "ESPE",
        "Contacts": "",
        "location": "Ruta Prov. 14 Km 45 (Parque Industrial), Santa Fe, Bigand"
    },
    {
        "id": 228,
        "Name": "CARILO APPAREL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71121598-7\"}",
        "KeyUnique": "CARI",
        "Contacts": "",
        "location": "AV. LUIS CANDIDO CARBALLO 186 PISO 2 OF. M, Santa Fe, Rosario"
    },
    {
        "id": 229,
        "Name": "ALL STRAPPING S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70999562-2\"}",
        "KeyUnique": "ALLS",
        "Contacts": "",
        "location": "SUVIRIA 5076, Buenos Aires, C.A.B.A."
    },
    {
        "id": 230,
        "Name": "NEOINGENIERIA - SEBASTIAN PAJARO Y MAXIMILIANO DELLACASSA SH",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71476481-7\"}",
        "KeyUnique": "NEOI",
        "Contacts": "",
        "location": "MARCONI 211, San Luis, Villa Mercedes"
    },
    {
        "id": 231,
        "Name": "DIAZ LORENA ANDREA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-27602045-0\"}",
        "KeyUnique": "DIAZ",
        "Contacts": "",
        "location": "SIMBRON 5322, Buenos Aires, C.A.B.A."
    },
    {
        "id": 232,
        "Name": "DELYAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70812398-2\"}",
        "KeyUnique": "DELY",
        "Contacts": "",
        "location": "BV. ROCA 3103, Córdoba, SAN FRANCISCO"
    },
    {
        "id": 233,
        "Name": "TECCAM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70889813-5\"}",
        "KeyUnique": "TECA",
        "Contacts": "",
        "location": "J.S. Agüero 870, Buenos Aires, FLORIDA"
    },
    {
        "id": 234,
        "Name": "LEON RABEY E HIJOS SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57113159-1\"}",
        "KeyUnique": "RABE",
        "Contacts": "",
        "location": "BRAGE VILLAR 701, Entre Ríos, HASENKAMP"
    },
    {
        "id": 235,
        "Name": "INTEVA ENERGÍA SOLAR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-17288432-7\"}",
        "KeyUnique": "INT ",
        "Contacts": "",
        "location": "R. DE ESCALADA 2558, Santa Fe, CASILDA"
    },
    {
        "id": 236,
        "Name": "LABORATORIO PAMPA SAS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71619515-1\"}",
        "KeyUnique": "PMPA",
        "Contacts": "",
        "location": "AV. GRAL LAVALLE 584, Córdoba, JUSTINIANO POSSE"
    },
    {
        "id": 237,
        "Name": "ANGAR SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65821936-3\"}",
        "KeyUnique": "ANGA",
        "Contacts": "",
        "location": "AV. JOSE OTERO Nº 128, Buenos Aires, PONTEVEDRA, MERLO"
    },
    {
        "id": 238,
        "Name": "LUJAN AGRÍCOLA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69582299-1\"}",
        "KeyUnique": "LUJA",
        "Contacts": "",
        "location": "ANGEL MOSCONI 627, Mendoza, Lujan de Cuyo"
    },
    {
        "id": 239,
        "Name": "E-COLOGICA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71174915-9\"}",
        "KeyUnique": "ECOL",
        "Contacts": "",
        "location": "MORENO 2866, Santa Fe, Rosario"
    },
    {
        "id": 240,
        "Name": "LEDLAR SAPEM",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71183664-7\"}",
        "KeyUnique": "LEDL",
        "Contacts": "",
        "location": "RUTA NACIONAL Nº 38 1017 M:143 BARRIO INDUSTRIAL, La Rioja, Chamical"
    },
    {
        "id": 241,
        "Name": "TOTAL HOME S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71179042-6\"}",
        "KeyUnique": "THOM",
        "Contacts": "",
        "location": "GUEMES 695, Buenos Aires, VICENTE LOPEZ"
    },
    {
        "id": 242,
        "Name": "HELIOS ENERGY S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71596551-4\"}",
        "KeyUnique": "HELI",
        "Contacts": "",
        "location": "OLAZABAL 1515 Piso: 10 Dpto:1010, Buenos Aires, C.A.B.A."
    },
    {
        "id": 243,
        "Name": "LABORATORIO INDUSTRIAL MONTEVIDEO S.A.",
        "Document": "{\"type\":\"RUT\",\"value\":\"21-026 047 001 5\"}",
        "KeyUnique": "LIMS",
        "Contacts": "",
        "location": "SITIO GRANDE 1311, URUGUAY, Agregar nueva Localidad"
    },
    {
        "id": 244,
        "Name": "CAELBI SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71082200-6\"}",
        "KeyUnique": "CAEL",
        "Contacts": "",
        "location": "DANIEL BINI, Santa Fe, Rosario"
    },
    {
        "id": 245,
        "Name": "COOP. ELECTRICA Y DE OBRAS Y SERV. PUBLICOS LTD. DE J. POSSE",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54573491-1\"}",
        "KeyUnique": "VATI",
        "Contacts": "",
        "location": "9 DE JULIO 681, Córdoba, JUSTINIANO POSSE"
    },
    {
        "id": 246,
        "Name": "BREMEN TOOLS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64671020-7\"}",
        "KeyUnique": "BREM",
        "Contacts": "",
        "location": "JUAN DOMINGO PERÓN 4749, Buenos Aires, BENAVIDEZ"
    },
    {
        "id": 247,
        "Name": "INGENIERÍA EN CONTROL ELECTRÓNICO Y MECÁNICO S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"ICE020429672\"}",
        "KeyUnique": "ICEM",
        "Contacts": "",
        "location": "RETORNO MARIO VARGAS LLOSA Nº 105-1, México, Chihuahua"
    },
    {
        "id": 248,
        "Name": "COMPLIANCE ENGINEERING SERVICES SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70182439-9\"}",
        "KeyUnique": "CES ",
        "Contacts": "",
        "location": "BENITO QUINQUELA MARTÍN 1100, Buenos Aires, C.A.B.A."
    },
    {
        "id": 249,
        "Name": "GESTIÓN DE EMPRENDIMIENTOS DEPORTIVOS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71028354-7\"}",
        "KeyUnique": "EDEP",
        "Contacts": "",
        "location": "PARAGUAY 2060 PISO P.B., Buenos Aires, C.A.B.A."
    },
    {
        "id": 250,
        "Name": "AGROINTEGRAL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-14737395-4\"}",
        "KeyUnique": "AINT",
        "Contacts": "",
        "location": "RIO NEGRO 946, Santa Fe, EL TREBOL"
    },
    {
        "id": 251,
        "Name": "CEMLA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64305574-7\"}",
        "KeyUnique": "CEML",
        "Contacts": "",
        "location": "AV. SAN MARTIN 1298, Santa Fe, TOTORAS"
    },
    {
        "id": 252,
        "Name": "LABORATORIO DE ANÁLISIS DE GRANOS SANTA ROSA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-06557190-1\"}",
        "KeyUnique": "LASR",
        "Contacts": "",
        "location": "AV. FULVIO PAGANI 1153, Córdoba, Arroyito"
    },
    {
        "id": 253,
        "Name": "BGH S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71129196-6\"}",
        "KeyUnique": "BGH ",
        "Contacts": "",
        "location": "BRASIL 731, Buenos Aires, C.A.B.A."
    },
    {
        "id": 254,
        "Name": "DEEP S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70748996-7\"}",
        "KeyUnique": "DEEP",
        "Contacts": "",
        "location": "SALVAT 1344, Santa Fe, Rosario"
    },
    {
        "id": 255,
        "Name": "CASA FENK SACIFI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52345669-1\"}",
        "KeyUnique": "FENK",
        "Contacts": "",
        "location": "AV. JUAN B. ALBERDI 7138, Buenos Aires, C.A.B.A."
    },
    {
        "id": 256,
        "Name": "PRODEMAN SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-66908849-9\"}",
        "KeyUnique": "PROD",
        "Contacts": "",
        "location": "RUTA NACIONAL 158  230.5, Córdoba, GENERAL CABRERA"
    },
    {
        "id": 257,
        "Name": "CALIOTTI  LEONARDO JAVIER",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22896345-4\"}",
        "KeyUnique": "CALI",
        "Contacts": "",
        "location": "MAIPÚ 1699, Santa Fe, Rosario"
    },
    {
        "id": 258,
        "Name": "TECNOLOGÍA Y SERVICIO SA de C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"TSE960126F20\"}",
        "KeyUnique": "TYSS",
        "Contacts": "",
        "location": "PONIENTE 126 A Nº 400 - COL. NUEVA VALLEJO, MEXICO, MEXICO D.F"
    },
    {
        "id": 259,
        "Name": "MIG SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70965354-3\"}",
        "KeyUnique": "MIGS",
        "Contacts": "",
        "location": "CALLE 74 DIEGO POMBO 4881, Buenos Aires, SAN MARTIN"
    },
    {
        "id": 260,
        "Name": "APUM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71642128-3\"}",
        "KeyUnique": "APUM",
        "Contacts": "",
        "location": "LAVALLE 1619 PISO 1 DPTO. G, Buenos Aires, C.A.B.A."
    },
    {
        "id": 261,
        "Name": "INDULAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70145649-8\"}",
        "KeyUnique": "INDU",
        "Contacts": "",
        "location": "GARAY 482, Santa Fe, Rosario"
    },
    {
        "id": 262,
        "Name": "VULCANO SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-55536556-6\"}",
        "KeyUnique": "VULC",
        "Contacts": "",
        "location": "BV. RIVADAVIA 2875, Córdoba, LOS BOULEVARES"
    },
    {
        "id": 263,
        "Name": "SISTEMAS ELECTRONICOS ROSARIO SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67749995-4\"}",
        "KeyUnique": "SIST",
        "Contacts": "",
        "location": "PJE SOLIS 2483, Santa Fe, V. GDOR. GALVEZ"
    },
    {
        "id": 264,
        "Name": "ENERGIZER ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70733953-1\"}",
        "KeyUnique": "ENAR",
        "Contacts": "",
        "location": "SUIPACHA 1111 PISO 11, Buenos Aires, C.A.B.A."
    },
    {
        "id": 265,
        "Name": "ELECTROLUX DO BRASIL S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":20076136476}",
        "KeyUnique": "ELBR",
        "Contacts": "",
        "location": "Rua Ministro Gabriel Passos, 360, Paraná, Curitiba"
    },
    {
        "id": 266,
        "Name": "SIGNIFY ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71492461-9\"}",
        "KeyUnique": "SIGN",
        "Contacts": "",
        "location": "DR. NICOLAS REPETTO 3656; 4º PISO, Buenos Aires, OLIVOS, VICENTE LÓPEZ"
    },
    {
        "id": 267,
        "Name": "INNARTEC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71093286-3\"}",
        "KeyUnique": "INNA",
        "Contacts": "",
        "location": "SAN LORENZO 630 PISO 19 DPTO. 3, Mendoza, MENDOZA"
    },
    {
        "id": 268,
        "Name": "ALIMASC",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-14293562-2\"}",
        "KeyUnique": "ALI ",
        "Contacts": "",
        "location": "LOS NOGALES ( EX AGUAYO ) 3050, Santa Fe, SANTA FÉ"
    },
    {
        "id": 269,
        "Name": "LABORATORIO LITORAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67683390-7\"}",
        "KeyUnique": "LITO",
        "Contacts": "",
        "location": "BAJADA SALADILLO S/N, Santa Fe, V. GDOR. GALVEZ"
    },
    {
        "id": 270,
        "Name": "I-LED ARGENTINA SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71474138-8\"}",
        "KeyUnique": "ILED",
        "Contacts": "",
        "location": "AV. SANTA FE 846 PISO 11, Buenos Aires, C.A.B.A."
    },
    {
        "id": 271,
        "Name": "NOSACH ANA MARTA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-11205140-1\"}",
        "KeyUnique": "NOSA",
        "Contacts": "",
        "location": "GABASTON 2083, Buenos Aires, LUIS GUILLON"
    },
    {
        "id": 272,
        "Name": "2 SOLVE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71004054-7\"}",
        "KeyUnique": "SOLV",
        "Contacts": "",
        "location": "AV. DIEGO PALMA 1250, Buenos Aires, SAN ISIDRO"
    },
    {
        "id": 273,
        "Name": "SANTA PLANTA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71582721-9\"}",
        "KeyUnique": "SANT",
        "Contacts": "",
        "location": "AV. SAN JUAN 942, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 274,
        "Name": "AGRO CONSTRUCCIONES ESTRELLA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71301250-1\"}",
        "KeyUnique": "ACE ",
        "Contacts": "",
        "location": "COCHABAMBA 1771, Santa Fe, Rosario"
    },
    {
        "id": 275,
        "Name": "VERDEVIDA SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70765729-0\"}",
        "KeyUnique": "VEVI",
        "Contacts": "",
        "location": "SANTA FE 837 Local 39-40 (entrepiso 2 Of 01), Santa Fe, Rosario"
    },
    {
        "id": 276,
        "Name": "SOMASI S.A. by BSD SUR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71104052-4\"}",
        "KeyUnique": "SOMA",
        "Contacts": "",
        "location": "General Paz 141 Dpto: S Barrio: Centro, Córdoba, RIO TERCERO"
    },
    {
        "id": 277,
        "Name": "QUALITY SYSTEMS GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70945880-5\"}",
        "KeyUnique": "QUSY",
        "Contacts": "",
        "location": "JOSE HERNANDEZ 767, Santa Fe, Rosario"
    },
    {
        "id": 278,
        "Name": "MARLEW S.A. by Patagonia Tools",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-58551048-9\"}",
        "KeyUnique": "MARL",
        "Contacts": "",
        "location": "PERU 1815, Buenos Aires, AVELLANEDA"
    },
    {
        "id": 279,
        "Name": "JS NORTE INGENIERÍA by Patagonia Tools",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71414105-4\"}",
        "KeyUnique": "JSNI",
        "Contacts": "",
        "location": "SAN MARTIN 445, Catamarca, SANTA MARÍA"
    },
    {
        "id": 280,
        "Name": "FORNAX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57084367-9\"}",
        "KeyUnique": "FORN",
        "Contacts": "",
        "location": "RUEDA 1540, Santa Fe, Rosario"
    },
    {
        "id": 281,
        "Name": "VILLA ZAPPA Y CIA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50343115-3\"}",
        "KeyUnique": "ZAPP",
        "Contacts": "",
        "location": "AV. MITRE 2243, Buenos Aires, 9 DE JULIO"
    },
    {
        "id": 282,
        "Name": "AKSI HERRAMIENTAS S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"AHE070309N12\"}",
        "KeyUnique": "AKSI",
        "Contacts": "",
        "location": "Av. Universidad s/n Col. La Palma, Edo. de México, MEX, CUAUTITLAN"
    },
    {
        "id": 283,
        "Name": "AMPLIEQUIPOS S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"AMP870824DM9\"}",
        "KeyUnique": "AMPL",
        "Contacts": "",
        "location": "URBINA 14 COL. PARQUE INDUSTRIAL NAUCALPAN, Edo. de México, MEX, Naucalpan de Juárez"
    },
    {
        "id": 284,
        "Name": "LABORATORIO ATC MÉXICO S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"LAM080415JH9\"}",
        "KeyUnique": "ATC ",
        "Contacts": "",
        "location": "JACINTO CANEK 15-A, COL. SAN JUAN IXHUATEPEC, Edo. de México, MEX, TLANEPANTLA"
    },
    {
        "id": 285,
        "Name": "LABORATORIO JABA S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"LJA1002049Q6\"}",
        "KeyUnique": "JABA",
        "Contacts": "",
        "location": "JOSÉ MA. SALVATIERRA 17529 GARITA DE OTAY, BAJA CALIFORNIA, MEX, TIJUANA"
    },
    {
        "id": 286,
        "Name": "RP HOGAR SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71569486-3\"}",
        "KeyUnique": "EIFF",
        "Contacts": "",
        "location": "COSQUIN 2464, ESQ. AV. DE LOS CORRALES, C.A.B.A., MATADEROS"
    },
    {
        "id": 287,
        "Name": "COMPAÑIA ARGENTINA DE MERCHANDISING S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70913513-5\"}",
        "KeyUnique": "NEBA",
        "Contacts": "",
        "location": "CHICLANA 102, Buenos Aires, LA TABLADA"
    },
    {
        "id": 288,
        "Name": "GOLDSONIC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68830252-4\"}",
        "KeyUnique": "GLDS",
        "Contacts": "",
        "location": "Pasteur 359 2º A, Buenos Aires, C.A.B.A."
    },
    {
        "id": 289,
        "Name": "ANTONIO MENDEZ by Patagonia Tools",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-20452654-1\"}",
        "KeyUnique": "ANME",
        "Contacts": "",
        "location": "COLECTORA 212, Río Negro, BALNEARIO LAS GRUTAS"
    },
    {
        "id": 290,
        "Name": "SERVICIOS DE ANALISIS TECNICOS, SA DE CV",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"SAT 940824 J37\"}",
        "KeyUnique": "SEAT",
        "Contacts": "",
        "location": "MANUEL NICOLÁS CORPANCHO Nº 364, CIUDAD DE MEXICO, COL.  LORENZO BOTURINI"
    },
    {
        "id": 291,
        "Name": "CACCIATORE LUIS C.  -  ALETHEIAS BIOSEEDLAB",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-16747335-1\"}",
        "KeyUnique": "ALET",
        "Contacts": "",
        "location": "MILICIAS ORIENTALES 703, Buenos Aires, ITUZAINGO"
    },
    {
        "id": 292,
        "Name": "METALÚRGICA ELECTROSTYLE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71511040-3\"}",
        "KeyUnique": "ESTY",
        "Contacts": "",
        "location": "SAN JORGE 4477, Buenos Aires, CASEROS"
    },
    {
        "id": 293,
        "Name": "BELQUIM S.R.L. by Patagonia Tools",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69530250-5\"}",
        "KeyUnique": "BELQ",
        "Contacts": "",
        "location": "Tronador 2822, Buenos Aires, C.A.B.A."
    },
    {
        "id": 294,
        "Name": "DEPIMIEL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70901194-0\"}",
        "KeyUnique": "DEPI",
        "Contacts": "",
        "location": "ANGEL PINI 4560, Buenos Aires, CASEROS"
    },
    {
        "id": 295,
        "Name": "HALKMON MOTORS SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71531943-4\"}",
        "KeyUnique": "HALK",
        "Contacts": "",
        "location": "JOSE HERNANDEZ 1006, Buenos Aires, VILLA BOSCH"
    },
    {
        "id": 296,
        "Name": "SNA-E ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50203411-8\"}",
        "KeyUnique": "SNAE",
        "Contacts": "",
        "location": "RUTA 19 KM 1.6, Santa Fe, SANTO TOME"
    },
    {
        "id": 297,
        "Name": "ELECTROMETAL LATINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70842993-3\"}",
        "KeyUnique": "ELAT",
        "Contacts": "",
        "location": "CATRIEL 4315, Buenos Aires, LA TABLADA"
    },
    {
        "id": 298,
        "Name": "INDUXPORT S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69482391-9\"}",
        "KeyUnique": "INDX",
        "Contacts": "",
        "location": "SERAPIO VILLEGAS 1266, Buenos Aires, HAEDO"
    },
    {
        "id": 299,
        "Name": "RETEPLAST S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70853854-6\"}",
        "KeyUnique": "RETE",
        "Contacts": "",
        "location": "ANASTACIO GONZÁLEZ 5518, Buenos Aires, SAN MARTIN"
    },
    {
        "id": 300,
        "Name": "INELECTO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70902341-8\"}",
        "KeyUnique": "INEL",
        "Contacts": "",
        "location": "DOMINGO FRENCH, Buenos Aires, VILLA MARTELLI"
    },
    {
        "id": 301,
        "Name": "COMERCIAL ALPACA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70721269-8\"}",
        "KeyUnique": "ALPA",
        "Contacts": "",
        "location": "ZELAYA 3087, Buenos Aires, C.A.B.A."
    },
    {
        "id": 302,
        "Name": "CIMET S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50282973-0\"}",
        "KeyUnique": "CIME",
        "Contacts": "",
        "location": "CALLE 47   8029, Buenos Aires, JOSE LEON SUAREZ"
    },
    {
        "id": 303,
        "Name": "NETOOLS S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71667014-3\"}",
        "KeyUnique": "NETO",
        "Contacts": "",
        "location": "AV. ALMTE. BROWN Nº 772, Buenos Aires, C.A.B.A."
    },
    {
        "id": 304,
        "Name": "CARTONALE INDUSTRIA MATERIAIS PLASTICOS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71538439-2\"}",
        "KeyUnique": "CART",
        "Contacts": "",
        "location": "ALICIA M. JUSTO 1150 OF. 306A, Buenos Aires, C.A.B.A."
    },
    {
        "id": 305,
        "Name": "MONTAJES ROSARIO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-18378778-6\"}",
        "KeyUnique": "MORO",
        "Contacts": "",
        "location": "HUMBERTO PRIMO 1722, Santa Fe, Rosario"
    },
    {
        "id": 306,
        "Name": "ITASOL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70957201-2\"}",
        "KeyUnique": "ITAS",
        "Contacts": "",
        "location": "LAMADRID 468 NAVE 2 - P. 1 - OF. 6, Santa Fe, Rosario"
    },
    {
        "id": 307,
        "Name": "PETROVINA - Carlos Ernesto Augustin",
        "Document": "{\"type\":\"ID Imp.\",\"value\":287640990}",
        "KeyUnique": "PTRO",
        "Contacts": "",
        "location": "Fazenda Farroupilha - Zona Rural, Mato Grosso - BRASIL, Pedra Preta"
    },
    {
        "id": 308,
        "Name": "LA AGRÍCOLA REGIONAL COOP. LTDA.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-50404708-9\"}",
        "KeyUnique": "AREG",
        "Contacts": "",
        "location": "MORENO 1404, Entre Ríos, CRESPO"
    },
    {
        "id": 309,
        "Name": "MAYCAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61286533-3\"}",
        "KeyUnique": "MAYC",
        "Contacts": "",
        "location": "AV. CHORROARIN 1002, Buenos Aires, C.A.B.A."
    },
    {
        "id": 310,
        "Name": "HECTOR VILLAROEL by Patagonia Tools",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71663389-2\"}",
        "KeyUnique": "HEVI",
        "Contacts": "",
        "location": "Alem s/n Monoblock 50, 2do Piso Barrio Manantial, San Juan, San Juan"
    },
    {
        "id": 311,
        "Name": "DAMFER S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62446716-3\"}",
        "KeyUnique": "DAMF",
        "Contacts": "",
        "location": "AV. ANDRES BARANDA 742, Buenos Aires, Quilmes"
    },
    {
        "id": 312,
        "Name": "DEPORTE TOTAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68727156-0\"}",
        "KeyUnique": "DEPT",
        "Contacts": "",
        "location": "MONTEVIDEO 1536, Buenos Aires, C.A.B.A."
    },
    {
        "id": 313,
        "Name": "AUTOSAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60655239-0\"}",
        "KeyUnique": "AUTO",
        "Contacts": "",
        "location": "ECHEVERRÍA 930, Buenos Aires, FLORIDA"
    },
    {
        "id": 314,
        "Name": "DROGUERIA COMARSA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70708588-2\"}",
        "KeyUnique": "DCOM",
        "Contacts": "",
        "location": "JUJUY 2944, Santa Fe, Rosario"
    },
    {
        "id": 315,
        "Name": "BROGAS S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51567617-8\"}",
        "KeyUnique": "BROG",
        "Contacts": "",
        "location": "DR. RAFAEL BIELSA 249, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 316,
        "Name": "INILAB S.L.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"B81620445\"}",
        "KeyUnique": "INLA",
        "Contacts": "",
        "location": "CALLE HERMANOS LUMIERE 2, MADRID, ESP, ARGANDA DEL REY"
    },
    {
        "id": 317,
        "Name": "HARDCORE FITNESS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71527940-8\"}",
        "KeyUnique": "HARD",
        "Contacts": "",
        "location": "FRANKLIN ROOSVELT 5814, Buenos Aires, C.A.B.A."
    },
    {
        "id": 318,
        "Name": "MELEX ARGENTINA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67875238-6\"}",
        "KeyUnique": "MELE",
        "Contacts": "",
        "location": "BOULOGNE SUR MER 2749, Buenos Aires, DON TORCUATO"
    },
    {
        "id": 319,
        "Name": "J H BOURLOT S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64138893-5\"}",
        "KeyUnique": "BOUR",
        "Contacts": "",
        "location": "SARACHAGA 27, Córdoba, CORDOBA"
    },
    {
        "id": 320,
        "Name": "ENERGE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71140917-9\"}",
        "KeyUnique": "ENRG",
        "Contacts": "",
        "location": "CARRIL RODRIGUEZ PEÑA 2115, Mendoza, MAIPU"
    },
    {
        "id": 321,
        "Name": "UVC SOLUCIONES S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71685953-9\"}",
        "KeyUnique": "UVC ",
        "Contacts": "",
        "location": "AV. EVA PERÓN 8945, Santa Fe, Rosario"
    },
    {
        "id": 322,
        "Name": "JOSÉ ROBERTO TAMBURRINI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-10858921-4\"}",
        "KeyUnique": "JOTA",
        "Contacts": "",
        "location": "AVELLANEDA 987, Córdoba, MARCO JUAREZ"
    },
    {
        "id": 323,
        "Name": "ECOZONO S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71662030-8\"}",
        "KeyUnique": "ECOZ",
        "Contacts": "",
        "location": "BUENOS AIRES 1201, Santa Fe, Rosario"
    },
    {
        "id": 324,
        "Name": "ZOLODA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54891771-5\"}",
        "KeyUnique": "ZOLO",
        "Contacts": "",
        "location": "HIPOLITO YIRIGOYEN 15689, Buenos Aires, BURZACO"
    },
    {
        "id": 325,
        "Name": "IÑIGUEZ ISABEL OFELIA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-06434958-4\"}",
        "KeyUnique": "ATEN",
        "Contacts": "",
        "location": "GUTEMBERG 847, Santa Fe, Rosario"
    },
    {
        "id": 326,
        "Name": "PLUMITA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-56756919-1\"}",
        "KeyUnique": "PLUM",
        "Contacts": "",
        "location": "AV. 9 DE SEPTIEMBRE 3203, Córdoba, SAN FRANCISCO"
    },
    {
        "id": 327,
        "Name": "ALL KAISEN & LEAN S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"AKA171116QB2\"}",
        "KeyUnique": "AKAI",
        "Contacts": "",
        "location": "Cafetal Nº 139 B Col. Granjas México, Ciudad de México, Iztacalco"
    },
    {
        "id": 328,
        "Name": "SIEMENS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50336489-8\"}",
        "KeyUnique": "SIEM",
        "Contacts": "",
        "location": "JULIAN SEGUNDO AGÜERO 2830, Buenos Aires, MUNRO"
    },
    {
        "id": 329,
        "Name": "PROYECCIÓN ELECTROLUZ S.R.L.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"30-60127190-3\"}",
        "KeyUnique": "ELUZ",
        "Contacts": "",
        "location": "PATRICIO DIEZ 175, SANTA FÉ, RECONQUISTA"
    },
    {
        "id": 330,
        "Name": "LUG ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71574286-8\"}",
        "KeyUnique": "LUG ",
        "Contacts": "",
        "location": "CALLE 62 Y 239 PIIP, Misiones, POSADAS"
    },
    {
        "id": 331,
        "Name": "GaCYF SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71216563-0\"}",
        "KeyUnique": "GACY",
        "Contacts": "",
        "location": "CAMINO GRAL. BELGRANO 5320, Buenos Aires, FLORENCIO VARELA"
    },
    {
        "id": 332,
        "Name": "AZIENDA SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71569742-0\"}",
        "KeyUnique": "AZIE",
        "Contacts": "",
        "location": "ANDALGALA 2244 - BARIO MATADEROS, Buenos Aires, C.A.B.A."
    },
    {
        "id": 333,
        "Name": "DROMEL SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71690377-6\"}",
        "KeyUnique": "DROM",
        "Contacts": "",
        "location": "TRES ARROYOS 2046 - BARRIO VILLA GRAL MITRE, Buenos Aires, C.A.B.A."
    },
    {
        "id": 334,
        "Name": "SCARPIGNATO S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71616789-1\"}",
        "KeyUnique": "SCAR",
        "Contacts": "",
        "location": "LAS FLORES 3290, Santa Fe, Rosario"
    },
    {
        "id": 335,
        "Name": "MILICIC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62231778-4\"}",
        "KeyUnique": "MILI",
        "Contacts": "",
        "location": "AV. PTE. PERÓN 8110, Santa Fe, Rosario"
    },
    {
        "id": 336,
        "Name": "LIBSON - COMPAÑIA ARGENTINA DE MERCHANDISING S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70913513-5\"}",
        "KeyUnique": "LIBS",
        "Contacts": "",
        "location": "CHICLANA 102, Buenos Aires, LA TABLADA"
    },
    {
        "id": 337,
        "Name": "LABORATORIO DOBLE NN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-29711576-7\"}",
        "KeyUnique": "LANN",
        "Contacts": "",
        "location": "Ruta Nacional 89, KM 385,5, Santiago del Estero, QUIMILI"
    },
    {
        "id": 338,
        "Name": "AMETEK SOLIDSTATE CONTROLS DE ARGENTINA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-58735561-9\"}",
        "KeyUnique": "AMTK",
        "Contacts": "",
        "location": "OLIVÉ 1954, Santa Fe, Rosario"
    },
    {
        "id": 339,
        "Name": "LABORATORIO AGRÍCOLA VENADO TUERTO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-06705415-1\"}",
        "KeyUnique": "LAVT",
        "Contacts": "",
        "location": "CALLE LÓPEZ 1285, Santa Fe, VENADO TUERTO"
    },
    {
        "id": 340,
        "Name": "LABORATORIO TECNOLÓGICO DEL URUGUAY",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"214110970015\"}",
        "KeyUnique": "LATU",
        "Contacts": "",
        "location": "AV. ITALIA 6201, MONTEVIDEO, URUGUAY, MONTEVIDEO"
    },
    {
        "id": 341,
        "Name": "MINISTERIO DE EDUCACIÓN DE LA PROVINCIA DE CÓRDOBA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-99925244-9\"}",
        "KeyUnique": "MECO",
        "Contacts": "",
        "location": "SANTA ROSA 751, PISO 3, BARRIO CENTRO NORTE, Córdoba, CORDOBA"
    },
    {
        "id": 342,
        "Name": "SPRINT ELECTRONICS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71699467-4\"}",
        "KeyUnique": "SPRI",
        "Contacts": "",
        "location": "AV. JUAN DE GARAY 2350, Buenos Aires, C.A.B.A."
    },
    {
        "id": 343,
        "Name": "OFICINA TÉCNICA VEGA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-24980386-4\"}",
        "KeyUnique": "OTEV",
        "Contacts": "",
        "location": "GÜEMES (SUR) 333 PISO: 1 DPTO: OF-5, San Juan, San Juan"
    },
    {
        "id": 344,
        "Name": "MR CONEXIONES de Antonia H. Avolio",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-13555986-0\"}",
        "KeyUnique": "MRCO",
        "Contacts": "",
        "location": "CORDOBA 1281, Buenos Aires, MORON"
    },
    {
        "id": 345,
        "Name": "METALURGICA SAN PATRICIO S.H.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-62602806-9\"}",
        "KeyUnique": "SPAT",
        "Contacts": "",
        "location": "CALLE 111 N° 511/17, Buenos Aires, MERCEDES"
    },
    {
        "id": 346,
        "Name": "IMPORTACIONES NORCOMEX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71544565-0\"}",
        "KeyUnique": "IMNO",
        "Contacts": "",
        "location": "CUYO 2355 PISO 2 DPTO. A, Buenos Aires, MARTINEZ"
    },
    {
        "id": 347,
        "Name": "WHEEL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69543335-9\"}",
        "KeyUnique": "WHEE",
        "Contacts": "",
        "location": "LA REPÚBLICA 7136, Santa Fe, Rosario"
    },
    {
        "id": 348,
        "Name": "POSTHAC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70844708-7\"}",
        "KeyUnique": "POST",
        "Contacts": "",
        "location": "MAZA 1225, Buenos Aires, C.A.B.A."
    },
    {
        "id": 349,
        "Name": "LILIANA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51687722-3\"}",
        "KeyUnique": "LILI",
        "Contacts": "",
        "location": "WARNES 1155, Santa Fe, Rosario"
    },
    {
        "id": 350,
        "Name": "ARLUX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71604352-1\"}",
        "KeyUnique": "ARLU",
        "Contacts": "",
        "location": "HERRERA 1855, Buenos Aires, C.A.B.A."
    },
    {
        "id": 351,
        "Name": "TROX ARGENTINA SA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70820788-4\"}",
        "KeyUnique": "TROX",
        "Contacts": "",
        "location": "TIMBO 2610 - PARQUE IND. BURZACO, Buenos Aires, ALMIRANTE BROWN"
    },
    {
        "id": 352,
        "Name": "WEG EQUIPAMIENTOS ELECTRICOS S.A",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-66916066-2\"}",
        "KeyUnique": "WEG ",
        "Contacts": "",
        "location": "Av. Grad.Bernardo O´Higgins 4045, Córdoba, CORDOBA"
    },
    {
        "id": 353,
        "Name": "SUMINISTROS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71480309-9\"}",
        "KeyUnique": "SUMI",
        "Contacts": "",
        "location": "GIANELLI 550 Bº GENERAL BUSTOS, Córdoba, CORDOBA"
    },
    {
        "id": 354,
        "Name": "GARCÍA PAEZ SONIA CARINA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"21-28223472-1\"}",
        "KeyUnique": "GARP",
        "Contacts": "",
        "location": "PARAGUAY 783, Tucumán, YERBA BUENA"
    },
    {
        "id": 355,
        "Name": "RUBEN RICCHIONE SOLUCIONES ELECTRICAS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-14354545-9\"}",
        "KeyUnique": "RRSE",
        "Contacts": "",
        "location": "ANTARTIDA ARGENTINA 148, Santa Fe, VENADO TUERTO"
    },
    {
        "id": 356,
        "Name": "LEA ELECTRICIDAD INTEGRAL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65334238-8\"}",
        "KeyUnique": "LEA ",
        "Contacts": "",
        "location": "URUGUAY 1284, Santa Fe, VENADO TUERTO"
    },
    {
        "id": 357,
        "Name": "LPA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71425586-6\"}",
        "KeyUnique": "LPA ",
        "Contacts": "",
        "location": "Goyena 1149, Santa Fe, Rosario"
    },
    {
        "id": 358,
        "Name": "H.L. CATAMARCA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71678659-1\"}",
        "KeyUnique": "HLCA",
        "Contacts": "",
        "location": "RUTA NACIONAL 38 KM 1304 - BARRIO EL PANTANILLO, Catamarca, Sn Fdo del Valle de Catamarca"
    },
    {
        "id": 359,
        "Name": "IMEFF ELECTRODOMÉSTICOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71624612-0\"}",
        "KeyUnique": "IMEF",
        "Contacts": "",
        "location": "RUTA 38 1315 ÁREA IND. EL PANTANILLO, Catamarca, Sn Fdo del Valle de Catamarca"
    },
    {
        "id": 360,
        "Name": "MEDIO MÉDICO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-57051358-9\"}",
        "KeyUnique": "MMED",
        "Contacts": "",
        "location": "PASCO 3250, Santa Fe, Rosario"
    },
    {
        "id": 361,
        "Name": "SAPPIA HECTOR PABLO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-16076645-0\"}",
        "KeyUnique": "SAPP",
        "Contacts": "",
        "location": "AVDA JORGE CURA 2649, Santa Fe, Rosario"
    },
    {
        "id": 362,
        "Name": "GOLAU S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71339280-0\"}",
        "KeyUnique": "GOLA",
        "Contacts": "",
        "location": "MARCELO T. DE ALVEAR, Buenos Aires, C.A.B.A."
    },
    {
        "id": 363,
        "Name": "PRETEC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71093587-0\"}",
        "KeyUnique": "PRET",
        "Contacts": "",
        "location": "ITALIA 761, Santa Fe, VENADO TUERTO"
    },
    {
        "id": 364,
        "Name": "ROBERTO LUIS BAROFFI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-11445622-6\"}",
        "KeyUnique": "BARO",
        "Contacts": "",
        "location": "GALICIA 539, Santa Fe, Rosario"
    },
    {
        "id": 365,
        "Name": "SEERY MARTIN MIGUEL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22163552-4\"}",
        "KeyUnique": "SEER",
        "Contacts": "",
        "location": "Agustín Álvarez 2001, Buenos Aires, 9 DE JULIO"
    },
    {
        "id": 366,
        "Name": "FAG SISTEMS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70975211-8\"}",
        "KeyUnique": "FAG ",
        "Contacts": "",
        "location": "AV. DR. H. PUEYRREDON 1548 PISO 2, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 367,
        "Name": "HIDROCOR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70818643-7\"}",
        "KeyUnique": "HIDR",
        "Contacts": "",
        "location": "AV. SARMIENTO 2100, Chaco, RESISTENCIA"
    },
    {
        "id": 368,
        "Name": "Ingeniería Electrónica Argentina S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57314064-4\"}",
        "KeyUnique": "IEA ",
        "Contacts": "",
        "location": "Av. Eva Perón 4468, Santa Fe, Rosario"
    },
    {
        "id": 369,
        "Name": "Construcciones Industriales y Portuarias S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70957201-2\"}",
        "KeyUnique": "CIPS",
        "Contacts": "",
        "location": "DR. RIVA 332, Santa Fe, Rosario"
    },
    {
        "id": 370,
        "Name": "GRUPO GRISENTI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71563671-5\"}",
        "KeyUnique": "GRIS",
        "Contacts": "",
        "location": "BELGRANO 1651, Mendoza, GODOY CRUZ"
    },
    {
        "id": 371,
        "Name": "CARBONERO ADRIAN CEFERINO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-33821102-4\"}",
        "KeyUnique": "CARB",
        "Contacts": "",
        "location": "VÉLEZ SARSFIELD 1283, Mendoza, GODOY CRUZ"
    },
    {
        "id": 372,
        "Name": "SPOTSLINE S.R.L",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30709572438}",
        "KeyUnique": "SPOT",
        "Contacts": "",
        "location": "Pedro Ignacio Rivera 5915, Buenos Aires, Carapachay"
    },
    {
        "id": 373,
        "Name": "ADVANCE WIRE & WIRELESS LABORATORIOS S.C.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"AW&0501284U9\"}",
        "KeyUnique": "ADVA",
        "Contacts": "",
        "location": "MARIANO ESCOBEDO 164 PB, COL. BARRIO SAN PEDRO, CIUDAD DE MÉXICO, IZTAPALAPA"
    },
    {
        "id": 374,
        "Name": "NOTEBOOKS CÓRDOBA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71494777-6\"}",
        "KeyUnique": "NOTE",
        "Contacts": "",
        "location": "LIMA 332, Córdoba, CORDOBA"
    },
    {
        "id": 375,
        "Name": "FRIHEL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70856252-8\"}",
        "KeyUnique": "FRIH",
        "Contacts": "",
        "location": "Calle 49 Nº 6575, Buenos Aires, JOSE LEON SUAREZ"
    },
    {
        "id": 376,
        "Name": "JB INTERNATIONAL SERVICE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71093722-9\"}",
        "KeyUnique": "JBIN",
        "Contacts": "",
        "location": "A. T. de Alvear 3867, Buenos Aires, Carapachay"
    },
    {
        "id": 377,
        "Name": "MABE COLOMBIA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":2380119080664}",
        "KeyUnique": "MABE",
        "Contacts": "",
        "location": "CARRETERA 21  #74-100, undefined, Manizales, Colombia"
    },
    {
        "id": 378,
        "Name": "Silke Rogelio Fabián - AMBIENTAR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-21080445-6\"}",
        "KeyUnique": "SLKE",
        "Contacts": "",
        "location": "Av. Monteagudo 2121 Entre las calles: Herrera - Re, Misiones, POSADAS"
    },
    {
        "id": 379,
        "Name": "INNOVAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70787506-9\"}",
        "KeyUnique": "IVAR",
        "Contacts": "",
        "location": "AV. JUSTO DARACT INTERSECCIÓN RUTA 147, San Luis, SAN LUIS"
    },
    {
        "id": 380,
        "Name": "GEO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70928771-7\"}",
        "KeyUnique": "GEO ",
        "Contacts": "",
        "location": "SANTA FE 1764, Santa Fe, Rosario"
    },
    {
        "id": 381,
        "Name": "METALFRIO SOLUTIONS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71581192-4\"}",
        "KeyUnique": "MFRI",
        "Contacts": "",
        "location": "AV. DE MAYO 651, Buenos Aires, C.A.B.A."
    },
    {
        "id": 382,
        "Name": "BIOLEDARG S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71657648-1\"}",
        "KeyUnique": "BLED",
        "Contacts": "",
        "location": "Pedro Tuella 824 BIS Piso 3, Santa Fe, Rosario"
    },
    {
        "id": 383,
        "Name": "NAUTICA RECONQUISTA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71684737-9\"}",
        "KeyUnique": "NREC",
        "Contacts": "",
        "location": "MORENO 1453, Santa Fe, RECONQUISTA"
    },
    {
        "id": 384,
        "Name": "COOP. DE TRABAJOS PORTUARIOS LTDA. DE SAN MARTIN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50693111-4\"}",
        "KeyUnique": "CPOR",
        "Contacts": "",
        "location": "CAYETANO NERBUTTI 256, Santa Fe, Puerto General San Martín"
    },
    {
        "id": 385,
        "Name": "TRIANGULAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60945338-5\"}",
        "KeyUnique": "TRIA",
        "Contacts": "",
        "location": "AGUIRRE 1337, Buenos Aires, C.A.B.A."
    },
    {
        "id": 386,
        "Name": "ACCESORIOS.COM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71037004-0\"}",
        "KeyUnique": "ACCE",
        "Contacts": "",
        "location": "RIVADAVIA, Córdoba, CORDOBA"
    },
    {
        "id": 387,
        "Name": "Calamante Horacio R. y Calamante Norberto G. - DISDEN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68469384-7\"}",
        "KeyUnique": "DISD",
        "Contacts": "",
        "location": "SANTA FE 3153, Santa Fe, Rosario"
    },
    {
        "id": 388,
        "Name": "SAN MIGUEL CENTER S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70818345-4\"}",
        "KeyUnique": "SMCE",
        "Contacts": "",
        "location": "SANTA ROSA 240, Santa Fe, RUFINO"
    },
    {
        "id": 389,
        "Name": "VAN HESSEN CASINGS SAU",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71659859-0\"}",
        "KeyUnique": "VANH",
        "Contacts": "",
        "location": "BV. SAN DIEGO 1948, Santa Fe, V. GDOR. GALVEZ"
    },
    {
        "id": 390,
        "Name": "NYCE LABORATORIOS S.C.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"NLA010913CD3\"}",
        "KeyUnique": "NYCE",
        "Contacts": "",
        "location": "Alfonso Herrera # 15, México, MEXICO D.F"
    },
    {
        "id": 391,
        "Name": "DIAGNOSTICA TELEMEDICINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71711722-7\"}",
        "KeyUnique": "DIAG",
        "Contacts": "",
        "location": "BIEDMA 960, Santa Fe, Rosario"
    },
    {
        "id": 392,
        "Name": "INGENIERIA IT de Nicolás Trosce",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-34091044-4\"}",
        "KeyUnique": "INIT",
        "Contacts": "",
        "location": "Primera Junta 518, Santa Fe, GALVEZ"
    },
    {
        "id": 393,
        "Name": "FARMACIA SAN ANTONIO de Ana Belén Canale",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-36762043-4\"}",
        "KeyUnique": "CANA",
        "Contacts": "",
        "location": "SARMIENTO 1125, Santa Fe, Piamonte"
    },
    {
        "id": 394,
        "Name": "IPANCO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70149887-5\"}",
        "KeyUnique": "IPAN",
        "Contacts": "",
        "location": "GUATEMALA 1356, Santa Fe, Rosario"
    },
    {
        "id": 395,
        "Name": "INVENTU TRAIN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71654879-8\"}",
        "KeyUnique": "INVE",
        "Contacts": "",
        "location": "BIEDMA 9600, Santa Fe, Rosario"
    },
    {
        "id": 396,
        "Name": "GRUPO K Y B S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71492936-0\"}",
        "KeyUnique": "KYB ",
        "Contacts": "",
        "location": "AU. ROSARIO-CORDOBA KM 308, Santa Fe, FUNES"
    },
    {
        "id": 397,
        "Name": "Instituto Argentino de Normalizacion y Certificacion",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52556-6\"}",
        "KeyUnique": "IRAM",
        "Contacts": "",
        "location": "PERU 552/5, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 398,
        "Name": "DIPROMAS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62459525-0\"}",
        "KeyUnique": "DIPR",
        "Contacts": "",
        "location": "BUENOS AIRES 1702, Córdoba, VILLA MARIA"
    },
    {
        "id": 399,
        "Name": "RAXION S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71574065-2\"}",
        "KeyUnique": "RAXI",
        "Contacts": "",
        "location": "CURA BROCHERO 160, Córdoba, Las Varillas"
    },
    {
        "id": 400,
        "Name": "INSTRUMENTACION METRIX S.A. de C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"IME-180323RT6\"}",
        "KeyUnique": "MTRX",
        "Contacts": "",
        "location": "Av. Peñón Texcoco Manzana 750, Lote 26, Estado de MX, Ciudad Nezahualcóyotl"
    },
    {
        "id": 401,
        "Name": "LIGHTING Y LOGISTICA INTERNACIONAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71286180-7\"}",
        "KeyUnique": "LYLI",
        "Contacts": "",
        "location": "Bvd. 25 de Mayo 175, Córdoba, Morteros"
    },
    {
        "id": 402,
        "Name": "CASHER EQUIPAMIENTOS de Godoy José Luis",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-31232831-4\"}",
        "KeyUnique": "CASH",
        "Contacts": "",
        "location": "NEWBERY 4184, Misiones, POSADAS"
    },
    {
        "id": 403,
        "Name": "ECOSOL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-34389970-0\"}",
        "KeyUnique": "ECOS",
        "Contacts": "",
        "location": "MORENO 3042, Buenos Aires, C.A.B.A."
    },
    {
        "id": 404,
        "Name": "HIFIMAN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71580268-2\"}",
        "KeyUnique": "HIFI",
        "Contacts": "",
        "location": "SARACHAGA 5696, Buenos Aires, C.A.B.A."
    },
    {
        "id": 405,
        "Name": "RUBIKIA S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71661637-8\"}",
        "KeyUnique": "RUBI",
        "Contacts": "",
        "location": "MARCOS PAZ 4617, Santa Fe, Rosario"
    },
    {
        "id": 406,
        "Name": "3D ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71370180-3\"}",
        "KeyUnique": "3DAR",
        "Contacts": "",
        "location": "AYACUCHO 656, Entre Ríos, PARANA"
    },
    {
        "id": 407,
        "Name": "AGRISEED S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62891059-2\"}",
        "KeyUnique": "AGRI",
        "Contacts": "",
        "location": "AV. CIRCUNVALACIÓN Y RUTA 188, Buenos Aires, JUNIN"
    },
    {
        "id": 408,
        "Name": "TST S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69909788-4\"}",
        "KeyUnique": "TST ",
        "Contacts": "",
        "location": "Colectora Nº 752, Ruta Prov. 4, Buenos Aires, Lavallol"
    },
    {
        "id": 409,
        "Name": "ACORDES AROMATICOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71546659-3\"}",
        "KeyUnique": "ACOR",
        "Contacts": "",
        "location": "Calle 7 Nº 6750, Buenos Aires, Platanos"
    },
    {
        "id": 410,
        "Name": "CONDUSUR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71493311-2\"}",
        "KeyUnique": "CSUR",
        "Contacts": "",
        "location": "Calle 53 Nº 2125, Buenos Aires, Necochea"
    },
    {
        "id": 411,
        "Name": "METALURGICA VAZQUEZ S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71351270-9\"}",
        "KeyUnique": "VAZQ",
        "Contacts": "",
        "location": "PJE. CUBA 729, Buenos Aires, AVELLANEDA"
    },
    {
        "id": 412,
        "Name": "IBICO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67734906-5\"}",
        "KeyUnique": "IBIC",
        "Contacts": "",
        "location": "BALBASTRO 1711, Buenos Aires, ITUZAINGO"
    },
    {
        "id": 413,
        "Name": "PILISAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70918084-9\"}",
        "KeyUnique": "PILI",
        "Contacts": "",
        "location": "Coronel Molinedo 1600, Buenos Aires, Piñeyro, Avellaneda"
    },
    {
        "id": 414,
        "Name": "MALAGA GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71571327-2\"}",
        "KeyUnique": "MLGA",
        "Contacts": "",
        "location": "Eva Peron 8022, Santa Fe, Rosario"
    },
    {
        "id": 415,
        "Name": "NAZER S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71159993-9\"}",
        "KeyUnique": "NAZR",
        "Contacts": "",
        "location": "San Juan 4335, Santa Fe, Rosario"
    },
    {
        "id": 416,
        "Name": "EMPRESA DE SERVICIOS TÉCNICOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70938001-6\"}",
        "KeyUnique": "STEC",
        "Contacts": "",
        "location": "San Luis 4329, Santa Fe, Rosario"
    },
    {
        "id": 417,
        "Name": "CONCI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"31-71079618-8\"}",
        "KeyUnique": "CONC",
        "Contacts": "",
        "location": "J. B. Justo 6500, Córdoba, CORDOBA"
    },
    {
        "id": 418,
        "Name": "DHM INDUSTRIA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71216195-3\"}",
        "KeyUnique": "DHM ",
        "Contacts": "",
        "location": "Velez Sarfield 34, Córdoba, Bell Ville"
    },
    {
        "id": 419,
        "Name": "INGENIERIA BOGGIO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50261312-6\"}",
        "KeyUnique": "BOGG",
        "Contacts": "",
        "location": "Velez Sarfield 699, Santa Fe, Rosario"
    },
    {
        "id": 420,
        "Name": "MEELKO S.A.S",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71568631-3\"}",
        "KeyUnique": "MEEL",
        "Contacts": "",
        "location": "Octavio Navarro 4364, Córdoba, CORDOBA"
    },
    {
        "id": 421,
        "Name": "INTEC INGENIERIA S.A.E.",
        "Document": "{\"type\":\"RUC\",\"value\":\"80004396-0\"}",
        "KeyUnique": "INTC",
        "Contacts": "",
        "location": "Paz del Chaco No. 658, Paraguay, Lambaré, Dpto. Central"
    },
    {
        "id": 422,
        "Name": "BLUMAREL S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":218837210017}",
        "KeyUnique": "BLUM",
        "Contacts": "",
        "location": "Rincón 468, Uruguay, MONTEVIDEO"
    },
    {
        "id": 423,
        "Name": "ARREDOBAGNO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64127448-4\"}",
        "KeyUnique": "ARRE",
        "Contacts": "",
        "location": "Zapiola 4756, Buenos Aires, C.A.B.A."
    },
    {
        "id": 424,
        "Name": "EQUIPEL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68447614-5\"}",
        "KeyUnique": "EQPL",
        "Contacts": "",
        "location": "Félix San Martín 2322, Neuquén, Neuquén"
    },
    {
        "id": 425,
        "Name": "INVENTU CITY S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71687710-4\"}",
        "KeyUnique": "CITY",
        "Contacts": "",
        "location": "San Martin 3773, Santa Fe, Rosario"
    },
    {
        "id": 426,
        "Name": "VOIP EXPERTS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71224933-8\"}",
        "KeyUnique": "VOIP",
        "Contacts": "",
        "location": "Juan de Avila y Zarate 2034, 1º Piso \"A\", Córdoba, CORDOBA"
    },
    {
        "id": 427,
        "Name": "DANIEL MIGNANI S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64147136-0\"}",
        "KeyUnique": "MIGN",
        "Contacts": "",
        "location": "Montevideo 3734, Santa Fe, Rosario"
    },
    {
        "id": 428,
        "Name": "UNIVERSIDAD TECNOLÓGICA NACIONAL REGIONAL CÓRDOBA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30--5466711-6\"}",
        "KeyUnique": "UTRC",
        "Contacts": "",
        "location": "Maestro López esq. Cruz Roja Argentina, Córdoba, CORDOBA"
    },
    {
        "id": 429,
        "Name": "PARQUE PAMPA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57986601-9\"}",
        "KeyUnique": "PPAM",
        "Contacts": "",
        "location": "Darwin Passaponti 6602, Pque. Ind. Del Oeste, Buenos Aires, Moreno"
    },
    {
        "id": 430,
        "Name": "POWER SYSTEMS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70791053-0\"}",
        "KeyUnique": "POSY",
        "Contacts": "",
        "location": "Agustin Alvarez 3555, Buenos Aires, VILLA MARTELLI"
    },
    {
        "id": 431,
        "Name": "TECNO STAMPA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70844809-1\"}",
        "KeyUnique": "STAM",
        "Contacts": "",
        "location": "Las Heras 3736, Buenos Aires, VILLA MARTELLI"
    },
    {
        "id": 432,
        "Name": "ESPACIO DE INNOVACION S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71528822-9\"}",
        "KeyUnique": "ESIN",
        "Contacts": "",
        "location": "Bartolomé Mitre 1225, 1º Piso, Dto. 102, Buenos Aires, C.A.B.A."
    },
    {
        "id": 433,
        "Name": "BARREL AMERICA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71550155-0\"}",
        "KeyUnique": "BARR",
        "Contacts": "",
        "location": "Bvd. Del Mirador 290, Piso 5 Dto. 09, Nordelta, Buenos Aires, TIGRE"
    },
    {
        "id": 434,
        "Name": "ROSSFER IMPORT S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71702912-3\"}",
        "KeyUnique": "ROSS",
        "Contacts": "",
        "location": "Balcarce 98, Buenos Aires, Lomas de Zamora"
    },
    {
        "id": 435,
        "Name": "J&S ELECTRONIC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70797086-9\"}",
        "KeyUnique": "JYS ",
        "Contacts": "",
        "location": "Av. Cnel. I. Warnes 213, Buenos Aires, C.A.B.A."
    },
    {
        "id": 436,
        "Name": "EASING GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71455069-8\"}",
        "KeyUnique": "EASI",
        "Contacts": "",
        "location": "Segundo Blanco 1356, Pilar, Córdoba, Rio Segundo"
    },
    {
        "id": 437,
        "Name": "ACORD GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71455513-4\"}",
        "KeyUnique": "ACRD",
        "Contacts": "",
        "location": "Segundo Blanco 1356, Pilar, Córdoba, Rio Segundo"
    },
    {
        "id": 438,
        "Name": "RUBENJUVE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71462864-6\"}",
        "KeyUnique": "JUVE",
        "Contacts": "",
        "location": "Galvan 3230, C.A.B.A., C.A.B.A."
    },
    {
        "id": 439,
        "Name": "REALTEX S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70760754-4\"}",
        "KeyUnique": "RTEX",
        "Contacts": "",
        "location": "Av. Gaona 3561, Buenos Aires, C.A.B.A."
    },
    {
        "id": 440,
        "Name": "NATIONAL EXPRESS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70722280-4\"}",
        "KeyUnique": "NAEX",
        "Contacts": "",
        "location": "Rio Negro 6442, Santa Fe, Rosario"
    },
    {
        "id": 441,
        "Name": "INDUSTRIAS MAR S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71686122-4\"}",
        "KeyUnique": "IMAR",
        "Contacts": "",
        "location": "Carlos Gauss 5619, Córdoba, Villa Belgrano "
    },
    {
        "id": 442,
        "Name": "FIDECAL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-55294500-6\"}",
        "KeyUnique": "FIDE",
        "Contacts": "",
        "location": "Corrientes 729, Piso 8, Of. 803-804, Santa Fe, Rosario"
    },
    {
        "id": 443,
        "Name": "BIDCOM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71106936-0\"}",
        "KeyUnique": "BIDC",
        "Contacts": "",
        "location": "Av. Bouchard 468, Buenos Aires, C.A.B.A."
    },
    {
        "id": 444,
        "Name": "TERMOFUSORAS GASSMANN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":30714904260}",
        "KeyUnique": "GASS",
        "Contacts": "",
        "location": "J. J. Paso 656, Buenos Aires, MORON"
    },
    {
        "id": 445,
        "Name": "LUMINATEC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":30716227614}",
        "KeyUnique": "LUMI",
        "Contacts": "",
        "location": "Av. L. N. Alem 1026, Piso 4, Depto H, Buenos Aires, C.A.B.A."
    },
    {
        "id": 446,
        "Name": "GMRA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30715621866}",
        "KeyUnique": "GMRA",
        "Contacts": "",
        "location": "Av. Del Libertador 6350, Piso 3, Buenos Aires, C.A.B.A."
    },
    {
        "id": 447,
        "Name": "LUDADEL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71510645-7\"}",
        "KeyUnique": "LUDA",
        "Contacts": "",
        "location": "Av. Ricardo Balbín 2457, Buenos Aires, Billinghurst - San Martín"
    },
    {
        "id": 448,
        "Name": "SUSTENTATOR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71117282-9\"}",
        "KeyUnique": "SUST",
        "Contacts": "",
        "location": "Tapalque 6260, Buenos Aires, C.A.B.A."
    },
    {
        "id": 449,
        "Name": "SSI SCHAEFER LTDA.",
        "Document": "{\"type\":\"CUIT\",\"value\":30711202540}",
        "KeyUnique": "SSI ",
        "Contacts": "",
        "location": "Coronel Loza 7198, Pque. Ind. Los Polígonos (U27), Santa Fe, SANTA FÉ"
    },
    {
        "id": 450,
        "Name": "GRAMON GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":33714169799}",
        "KeyUnique": "GRAM",
        "Contacts": "",
        "location": "Suipacha 2645, Buenos Aires, Lanus Este"
    },
    {
        "id": 451,
        "Name": "FRANCO ADRIAN SARDA",
        "Document": "{\"type\":\"CUIT\",\"value\":23371779639}",
        "KeyUnique": "SARD",
        "Contacts": "",
        "location": "Diagonal Garibaldi 5630, Buenos Aires, MAR DEL PLATA"
    },
    {
        "id": 452,
        "Name": "GO GLOBAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30715564544}",
        "KeyUnique": "GOGL",
        "Contacts": "",
        "location": "Ugarteche 3145, 4to \"B\", Buenos Aires, C.A.B.A."
    },
    {
        "id": 453,
        "Name": "PROTAN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30680469276}",
        "KeyUnique": "PROT",
        "Contacts": "",
        "location": "Catamarca 1207, Santa Fe, ROLDAN"
    },
    {
        "id": 454,
        "Name": "JBH Equipamientos de Gustavo Hernandez",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-20024026-0\"}",
        "KeyUnique": "JBH ",
        "Contacts": "",
        "location": "Jean Jaures 1285, Buenos Aires, Lanus Oeste"
    },
    {
        "id": 455,
        "Name": "INDUSTRIAS PUGLIESE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30547847586}",
        "KeyUnique": "PSA ",
        "Contacts": "",
        "location": "Aristobulo del Valle 1180, Buenos Aires, Lanus Oeste"
    },
    {
        "id": 456,
        "Name": "PAULKIHN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":30710826052}",
        "KeyUnique": "PAUL",
        "Contacts": "",
        "location": "Prof. Ruben A. Turi 61, Entre Ríos, PARANA"
    },
    {
        "id": 457,
        "Name": "IMPOMOTORS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30709772135}",
        "KeyUnique": "IMPO",
        "Contacts": "",
        "location": "Gral. J.J De urquiza 1756 PB, Buenos Aires, FLORIDA"
    },
    {
        "id": 458,
        "Name": "RESET ARGENTINA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":30709589942}",
        "KeyUnique": "RESE",
        "Contacts": "",
        "location": "Av. Julio A. Roca 738, Córdoba, CORDOBA"
    },
    {
        "id": 459,
        "Name": "CABRALES S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30537745742}",
        "KeyUnique": "CABR",
        "Contacts": "",
        "location": "Rivadavia 3171, Buenos Aires, MAR DEL PLATA"
    },
    {
        "id": 460,
        "Name": "CET S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30708160853}",
        "KeyUnique": "CET ",
        "Contacts": "",
        "location": "Juan Bautista Daniel 1946, Córdoba, CORDOBA"
    },
    {
        "id": 461,
        "Name": "DANIEL JORGE ESTEBAN",
        "Document": "{\"type\":\"CUIT\",\"value\":20166805490}",
        "KeyUnique": "EYDE",
        "Contacts": "",
        "location": "Torcuato De Alvear 2993, Buenos Aires, Quilmes"
    },
    {
        "id": 462,
        "Name": "REFRIMET S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64045928-6\"}",
        "KeyUnique": "REFR",
        "Contacts": "",
        "location": "Famatina 3100, Buenos Aires, ITUZAINGO"
    },
    {
        "id": 463,
        "Name": "KOVAR ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30716771632}",
        "KeyUnique": "KOVA",
        "Contacts": "",
        "location": "Perito Moreno 845, P.I. Canning, Etapa 2, Nave 61B, Buenos Aires, Canning"
    },
    {
        "id": 464,
        "Name": "VALLS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30542071741}",
        "KeyUnique": "VALL",
        "Contacts": "",
        "location": "Irala 433, Buenos Aires, C.A.B.A."
    },
    {
        "id": 465,
        "Name": "CFL UNIÓN OBRERA METALÚRGICA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"-\"}",
        "KeyUnique": "CFL ",
        "Contacts": "",
        "location": "Uruguay 960, Santa Fe, Rosario"
    },
    {
        "id": 466,
        "Name": "LIFE WILL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71695175-4\"}",
        "KeyUnique": "LIFE",
        "Contacts": "",
        "location": "Av. De Los Incas 4892, Buenos Aires, C.A.B.A."
    },
    {
        "id": 467,
        "Name": "DELAVAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30572530996}",
        "KeyUnique": "DELA",
        "Contacts": "",
        "location": "ITALIA 772, Santa Fe, EL TREBOL"
    },
    {
        "id": 468,
        "Name": "AUTRON SRL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70944158-9\"}",
        "KeyUnique": "AUTR",
        "Contacts": "",
        "location": "ANCHORENA 84, Santa Fe, Rosario"
    },
    {
        "id": 469,
        "Name": "FEMAT A.C.E.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71007428-9\"}",
        "KeyUnique": "FEMT",
        "Contacts": "",
        "location": "Peru 590, 3º \"B\", Buenos Aires, C.A.B.A."
    },
    {
        "id": 470,
        "Name": "GRUPO DOMO S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71673145-2\"}",
        "KeyUnique": "DOMO",
        "Contacts": "",
        "location": "Av. Rafael Nuñez 3513, Dto. 2, Cerro de Las Rosas, Córdoba, CORDOBA"
    },
    {
        "id": 471,
        "Name": "PLASTICOS DEL COMAHUE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30611385680}",
        "KeyUnique": "COMA",
        "Contacts": "",
        "location": "Calle 106, entre 6 y 8 - Pque. Ind. Sur, San Luis, SAN LUIS"
    },
    {
        "id": 472,
        "Name": "PERMAQUIM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59274689-8\"}",
        "KeyUnique": "PERM",
        "Contacts": "",
        "location": "Tucuman 983, 3ero \"C\", Buenos Aires, C.A.B.A."
    },
    {
        "id": 473,
        "Name": "AUTOSERVICIO MAYORISTA DIARCO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60737179-9\"}",
        "KeyUnique": "DIAR",
        "Contacts": "",
        "location": "Av. De Circunvalación entre El Tallo y El Fruto,, Buenos Aires, EL TALAR"
    },
    {
        "id": 474,
        "Name": "CRIOLLO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69039221-2\"}",
        "KeyUnique": "CRIO",
        "Contacts": "",
        "location": "Bacacay 5267, Buenos Aires, C.A.B.A."
    },
    {
        "id": 475,
        "Name": "RESISTENCIAS MAR DEL PLATA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70848486-1\"}",
        "KeyUnique": "RMDP",
        "Contacts": "",
        "location": "Gaboto 3545, Buenos Aires, MAR DEL PLATA"
    },
    {
        "id": 476,
        "Name": "ELECTRO HOGAR INTERNACIONAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71569724-0\"}",
        "KeyUnique": "ELHO",
        "Contacts": "",
        "location": "Caratini 51, Buenos Aires, Gral. Rodriguez"
    },
    {
        "id": 477,
        "Name": "ACEGAME S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-68851288-9\"}",
        "KeyUnique": "ACEG",
        "Contacts": "",
        "location": "Andres Lamas 1446, Buenos Aires, C.A.B.A."
    },
    {
        "id": 478,
        "Name": "ANTONINI NATALIA PAOLA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-26315633-7\"}",
        "KeyUnique": "ANTO",
        "Contacts": "",
        "location": "Blanco Encalada 4540, Buenos Aires, C.A.B.A."
    },
    {
        "id": 479,
        "Name": "HUBELAM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71176986-9\"}",
        "KeyUnique": "HUBE",
        "Contacts": "",
        "location": "Boedo 373, Buenos Aires, LOMAS DE ZAMORA"
    },
    {
        "id": 480,
        "Name": "HIKVISION ARGENTINA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71672322-0\"}",
        "KeyUnique": "HIKV",
        "Contacts": "",
        "location": "Camila O'Gorman 412, Of 1702-1107, Buenos Aires, C.A.B.A."
    },
    {
        "id": 481,
        "Name": "BAZAN CARRICABURU MAURICIO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-30771610-1\"}",
        "KeyUnique": "BCM ",
        "Contacts": "",
        "location": "Tucumán 890, Cordoba, VILLA MARIA"
    },
    {
        "id": 482,
        "Name": "INDUSTRIAS TAESCA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70927472-0\"}",
        "KeyUnique": "TAE ",
        "Contacts": "",
        "location": "Los Liquidambar S/N, Santa Fe, Carcaraña"
    },
    {
        "id": 483,
        "Name": "ISECOM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70920098-0\"}",
        "KeyUnique": "ISEC",
        "Contacts": "",
        "location": "Sarmiento 431, Córdoba, CORDOBA"
    },
    {
        "id": 484,
        "Name": "CONEXTUBE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65503724-8\"}",
        "KeyUnique": "CONX",
        "Contacts": "",
        "location": "Au. Cam. del Buen Ayre s/n, Buenos Aires, William C. Morris"
    },
    {
        "id": 485,
        "Name": "JADASERVICIOS de Dario E. Ferraro",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-35272945-1\"}",
        "KeyUnique": "JADA",
        "Contacts": "",
        "location": "Santo Tome 4317, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 486,
        "Name": "HSU CHIAO HSIN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-92870850-1\"}",
        "KeyUnique": "HSU ",
        "Contacts": "",
        "location": "Del Barco Centenara 185, Buenos Aires, CAPITAL FEDERAL"
    },
    {
        "id": 487,
        "Name": "KARCHER S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71098851-6\"}",
        "KeyUnique": "KARC",
        "Contacts": "",
        "location": "Pan. Colectora Este 38781 Esq. Vte. López, Buenos Aires, BENAVIDEZ"
    },
    {
        "id": 488,
        "Name": "BDL3K S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71509698-2\"}",
        "KeyUnique": "KOKK",
        "Contacts": "",
        "location": "Anahi 1157, Buenos Aires, Ingeniero Maschwitz"
    },
    {
        "id": 489,
        "Name": "SERVICE PRO de Damián Vacotto",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-17323975-1\"}",
        "KeyUnique": "SPRO",
        "Contacts": "",
        "location": "Beruti 1709, Buenos Aires, San Antonio de Padua"
    },
    {
        "id": 490,
        "Name": "MARTINO MARIELA OLGA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-29592407-7\"}",
        "KeyUnique": "INDH",
        "Contacts": "",
        "location": "Franklin 866, 6to \"B\", Buenos Aires, C.A.B.A."
    },
    {
        "id": 491,
        "Name": "NEXINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71476562-7\"}",
        "KeyUnique": "NEXI",
        "Contacts": "",
        "location": "Virgilio Tedin 363, Buenos Aires, BENAVIDEZ"
    },
    {
        "id": 492,
        "Name": "IMA MAI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71545498-6\"}",
        "KeyUnique": "IMA ",
        "Contacts": "",
        "location": "Juan de Solís 8250, Santa Rita, Buenos Aires, MAR DEL PLATA"
    },
    {
        "id": 493,
        "Name": "DREAN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50268047-8\"}",
        "KeyUnique": "DREA",
        "Contacts": "",
        "location": "Av. Córdoba 325, Córdoba, Luque"
    },
    {
        "id": 494,
        "Name": "ARGENTAL S.A.I.C.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50256682-9  \"}",
        "KeyUnique": "ARGE",
        "Contacts": "",
        "location": "Av. San Martin 1666, Santa Fe, Baigorria"
    },
    {
        "id": 495,
        "Name": "INNOVASOL ENERGIAS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71616954-1\"}",
        "KeyUnique": "ISOL",
        "Contacts": "",
        "location": "Luis Agote 2227, Buenos Aires, Quilmes"
    },
    {
        "id": 496,
        "Name": "REPARE ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68411347-6\"}",
        "KeyUnique": "REPA",
        "Contacts": "",
        "location": "Manuel A. Ocampo 1170, Galpón 10 AB, Buenos Aires, HURLINGHAM"
    },
    {
        "id": 497,
        "Name": "WIENER LABORATORIOS S.A.I.C",
        "Document": "{\"type\":\"CUIT\",\"value\":30522228210}",
        "KeyUnique": "WIEN",
        "Contacts": "",
        "location": "RIOBAMBA 2944, Santa Fe, Rosario"
    },
    {
        "id": 498,
        "Name": "LA CASA DE LOS TERMINALES S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68371933-8\"}",
        "KeyUnique": "LCT ",
        "Contacts": "",
        "location": "Federico Ozanam 5245, C.A.B.A., MATADEROS"
    },
    {
        "id": 499,
        "Name": "HY POWER ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71506911-9\"}",
        "KeyUnique": "HYPO",
        "Contacts": "",
        "location": "Montes de Oca 425, Buenos Aires, AVELLANEDA"
    },
    {
        "id": 500,
        "Name": "BIZBOX S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71589323-8\"}",
        "KeyUnique": "BIZB",
        "Contacts": "",
        "location": "Andres Maria Ampere 6150, PB, Dto 1, Córdoba, Villa Belgrano"
    },
    {
        "id": 501,
        "Name": "ROTOPLAS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69082706-5\"}",
        "KeyUnique": "ROTO",
        "Contacts": "",
        "location": "C. 22 358, Buenos Aires, Fatima"
    }
]


const clientListCorrect = [
    {
        "Name": "LABORATORIO CONSULTAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70750447-8\"}",
        "KeyUnique": "LABO",
        "Contacts": "",
        "location": "LAPRIDA 3346, Santa Fe, Rosario",
        "idEditable": 0
    },
    {
        "Name": "GRIDE ELECTRONICA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62105411-9\"}",
        "KeyUnique": "GRDE",
        "Contacts": "",
        "location": "AMENABAR 944, Santa Fe, Rosario",
        "idEditable": 2
    },
    {
        "Name": "OM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62836560-8\"}",
        "KeyUnique": "OMSR",
        "Contacts": "",
        "location": "CARLOS PELLEGRINI 941, Santa Fe, TOTORAS",
        "idEditable": 4
    },
    {
        "Name": "TOMAS FERMIN MENA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-04637386-4\"}",
        "KeyUnique": "MENA",
        "Contacts": "",
        "location": "PASAJE BOLONIA 5065, Santa Fe, Rosario",
        "idEditable": 5
    },
    {
        "Name": "GRUPO CONSULTAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62341561-5\"}",
        "KeyUnique": "CONS",
        "Contacts": "",
        "location": "URUGUAY 960, Santa Fe, Rosario",
        "idEditable": 8
    },
    {
        "Name": "TALLERES METALURGICOS BAMBI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-53311922-7\"}",
        "KeyUnique": "TAMB",
        "Contacts": "",
        "location": "520 Nº 6999, Santa Fe, Rosario",
        "idEditable": 10
    },
    {
        "Name": "AXEL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-55590776-8\"}",
        "KeyUnique": "AXEL",
        "Contacts": "",
        "location": "CALLE LIMITE DE MUNICIPIO 4515, Santa Fe, Rosario",
        "idEditable": 25
    },
    {
        "Name": "NARDI & HERRERO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30--5618012-0\"}",
        "KeyUnique": "NAHE",
        "Contacts": "",
        "location": "COLON 2899, Santa Fe, Rosario",
        "idEditable": 38
    },
    {
        "Name": "KRETZ S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54764718-8\"}",
        "KeyUnique": "KRTZ",
        "Contacts": "",
        "location": "RUTA NAC. Nº9 KM.276, Santa Fe, Pueblo Esther",
        "idEditable": 39
    },
    {
        "Name": "FRIMETAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59697015-6\"}",
        "KeyUnique": "FRIM",
        "Contacts": "",
        "location": "BATTLE Y ORDOÑEZ 3436, Santa Fe, Rosario",
        "idEditable": 50
    },
    {
        "Name": "ARNEG ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-58642351-3\"}",
        "KeyUnique": "ARNE",
        "Contacts": "",
        "location": "AV. 25 DE MAYO 2330, Santa Fe, Rosario",
        "idEditable": 51
    },
    {
        "Name": "EPTA ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60217363-8\"}",
        "KeyUnique": "EPTA",
        "Contacts": "",
        "location": "OVIDIO LAGOS 6753, Santa Fe, Rosario",
        "idEditable": 55
    },
    {
        "Name": "BARBUY TEAM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65716216-3\"}",
        "KeyUnique": "BRBY",
        "Contacts": "",
        "location": "RUTA 9 KM 501, Córdoba, BELL VILLE",
        "idEditable": 56
    },
    {
        "Name": "METALBO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68090337-5\"}",
        "KeyUnique": "MTLB",
        "Contacts": "",
        "location": "OVIDIO LAGOS 6858, Santa Fe, Rosario",
        "idEditable": 63
    },
    {
        "Name": "PLYRAP S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70860316-9\"}",
        "KeyUnique": "PLYR",
        "Contacts": "",
        "location": "ROBERTO IMPERIALE 1111 - PARQUE INDUSTRIAL, Santa Fe, VENADO TUERTO",
        "idEditable": 64
    },
    {
        "Name": "SYLWAN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50088106-9\"}",
        "KeyUnique": "SYLW",
        "Contacts": "",
        "location": "AVENIDA PTE PERON 7669, Santa Fe, Rosario",
        "idEditable": 71
    },
    {
        "Name": "HECTOR CODINI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50351035-5\"}",
        "KeyUnique": "CODI",
        "Contacts": "",
        "location": "URQUIZA 55, Córdoba, SAN FRANCISCO",
        "idEditable": 72
    },
    {
        "Name": "CAMIMPORT S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64086932-8\"}",
        "KeyUnique": "CAMI",
        "Contacts": "",
        "location": "24 DE SEPTIEMBRE 2447, Santa Fe, Rosario",
        "idEditable": 74
    },
    {
        "Name": "BRIKET S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50377165-5\"}",
        "KeyUnique": "BRIK",
        "Contacts": "",
        "location": "OVIDIO LAGOS 7245, Santa Fe, Rosario",
        "idEditable": 76
    },
    {
        "Name": "BCD S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61520790-6\"}",
        "KeyUnique": "BCD ",
        "Contacts": "",
        "location": "3 DE FEBRERO 312, Santa Fe, Rosario",
        "idEditable": 78
    },
    {
        "Name": "RICOH ARGENTINA S.A.",
        "Document": "{\"type\":\"RUT\",\"value\":\"21-275 932 001 9\"}",
        "KeyUnique": "RICO",
        "Contacts": "",
        "location": "RUTA 8 KM 17500 - LOC 334, URUGUAY, MONTEVIDEO",
        "idEditable": 80
    },
    {
        "Name": "MEDIX MEDICAL DEVICES S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52320075-1\"}",
        "KeyUnique": "MEDI",
        "Contacts": "",
        "location": "MERMOZ 1750, Buenos Aires, EL TALAR",
        "idEditable": 81
    },
    {
        "Name": "MOTORES CZERWENY S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69725135-5\"}",
        "KeyUnique": "CZER",
        "Contacts": "",
        "location": "AV. JORGE NEWBERY 372, Santa Fe, GALVEZ",
        "idEditable": 84
    },
    {
        "Name": "EL DORADO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61790753-0\"}",
        "KeyUnique": "ELDO",
        "Contacts": "",
        "location": "RUTA 34 KM44, Santa Fe, SALTO GRANDE",
        "idEditable": 91
    },
    {
        "Name": "BASCULAS GAMA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68050265-6\"}",
        "KeyUnique": "GAMA",
        "Contacts": "",
        "location": "ACC. NORTE DE AUTOPISTA Y RUTA 11, Santa Fe, SAN LORENZO",
        "idEditable": 103
    },
    {
        "Name": "VULCANO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-55536556-6\"}",
        "KeyUnique": "VULC",
        "Contacts": "",
        "location": "BV. RIVADAVIA 2875, Córdoba, LOS BOULEVARES",
        "idEditable": 110
    },
    {
        "Name": "PRETEC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71093587-0\"}",
        "KeyUnique": "PRET",
        "Contacts": "",
        "location": "ITALIA 761, Santa Fe, VENADO TUERTO",
        "idEditable": 113
    },
    {
        "Name": "CARRIER S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-50392124-9\"}",
        "KeyUnique": "CARR",
        "Contacts": "",
        "location": "VEDIA 3616 PISO 3, Buenos Aires, C.A.B.A.",
        "idEditable": 114
    },
    {
        "Name": "CANIETI SA DE CV",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"SCO8001182D6\"}",
        "KeyUnique": "CANI",
        "Contacts": "",
        "location": "CULIACAN 71 (CANIETI) AV. NUEVO LEON Nº253-802, MEXICO, MEXICO D.F",
        "idEditable": 115
    },
    {
        "Name": "DEMIQUELLI ANIBAL LUIS (ANION 68)",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-04309841-2\"}",
        "KeyUnique": "DEMI",
        "Contacts": "",
        "location": "ITAQUI 2828, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 120
    },
    {
        "Name": "SNA-E ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50203411-8\"}",
        "KeyUnique": "SNAE",
        "Contacts": "",
        "location": "RUTA 19 KM 1.6, Santa Fe, SANTO TOME",
        "idEditable": 123
    },
    {
        "Name": "ARGENTINO CIPOLATTI S.A. (PEÓN)",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71028101-3\"}",
        "KeyUnique": "PEON",
        "Contacts": "",
        "location": "AV. HIPOLITO YRIGOYEN 1374, Santa Fe, SUNCHALES",
        "idEditable": 129
    },
    {
        "Name": "DIBRA S.H.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70881661-9\"}",
        "KeyUnique": "DIBR",
        "Contacts": "",
        "location": "ALBARIÑO 2870, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 136
    },
    {
        "Name": "ELECTROMECÁNICA VIC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52208537-1\"}",
        "KeyUnique": "VIC ",
        "Contacts": "",
        "location": "ECUADOR 451 BIS, Santa Fe, Rosario",
        "idEditable": 141
    },
    {
        "Name": "MIG S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70965354-3\"}",
        "KeyUnique": "MIGS",
        "Contacts": "",
        "location": "CALLE 74 DIEGO POMBO 4881, Buenos Aires, SAN MARTIN",
        "idEditable": 151
    },
    {
        "Name": "KODAK ALARIS SAIC",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71423088-9\"}",
        "KeyUnique": "KODA",
        "Contacts": "",
        "location": "SAN VLADIMIRO 3056 - PISO 1 OF. 5-6, Buenos Aires, SAN ISIDRO",
        "idEditable": 152
    },
    {
        "Name": "GaCYF S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71216563-0\"}",
        "KeyUnique": "GACY",
        "Contacts": "",
        "location": "CAMINO GRAL. BELGRANO 5320, Buenos Aires, FLORENCIO VARELA",
        "idEditable": 153
    },
    {
        "Name": "VERDEVIDA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70765729-0\"}",
        "KeyUnique": "VEVI",
        "Contacts": "",
        "location": "SANTA FE 837 Local 39-40 (entrepiso 2 Of 01), Santa Fe, Rosario",
        "idEditable": 163
    },
    {
        "Name": "INDELPLAS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-12143144-1\"}",
        "KeyUnique": "INDL",
        "Contacts": "",
        "location": "MALVINAS ARGENTINAS 1260, Buenos Aires, JUNIN",
        "idEditable": 170
    },
    {
        "Name": "MULTIREP S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69543649-8\"}",
        "KeyUnique": "MULT",
        "Contacts": "",
        "location": "AV. WARNES 1624, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 171
    },
    {
        "Name": "CIROCO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61481655-0\"}",
        "KeyUnique": "CIRO",
        "Contacts": "",
        "location": "ITALIA 531, Buenos Aires, EL TALAR",
        "idEditable": 172
    },
    {
        "Name": "ELECTROLUX ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-66347145-3\"}",
        "KeyUnique": "ELUX",
        "Contacts": "",
        "location": "COSSETTINI OLGA 771 piso 1, Buenos Aires, C.A.B.A.",
        "idEditable": 179
    },
    {
        "Name": "JOSÉ CAPOBIANCO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64647148-2\"}",
        "KeyUnique": "CAPO",
        "Contacts": "",
        "location": "AV. 25 DE MAYO 911 BIS, Santa Fe, Rosario",
        "idEditable": 182
    },
    {
        "Name": "TICAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69083341-3\"}",
        "KeyUnique": "TICA",
        "Contacts": "",
        "location": "AMENABAR 3555, Santa Fe, Rosario",
        "idEditable": 183
    },
    {
        "Name": "JARVIS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"01-1 4238 6-3\"}",
        "KeyUnique": "JARV",
        "Contacts": "",
        "location": "L.M.DRAGO 2685, Buenos Aires, BURZACO",
        "idEditable": 186
    },
    {
        "Name": "PLUMITA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-56756919-1\"}",
        "KeyUnique": "PLUM",
        "Contacts": "",
        "location": "AV. 9 DE SEPTIEMBRE 3203, Córdoba, SAN FRANCISCO",
        "idEditable": 194
    },
    {
        "Name": "SOLEK S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68261942-9\"}",
        "KeyUnique": "SOLE",
        "Contacts": "",
        "location": "AV. ROSALES 1742/44, Buenos Aires, HAEDO",
        "idEditable": 201
    },
    {
        "Name": "JUAN CARLOS PROLA Y CIA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-56998296-7\"}",
        "KeyUnique": "JCPR",
        "Contacts": "",
        "location": "AVENIDA CERDAN 900, Santa Fe, RAFAELA",
        "idEditable": 203
    },
    {
        "Name": "ARGENTRADE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-66010157-4\"}",
        "KeyUnique": "ARTR",
        "Contacts": "",
        "location": "Calle 514 Nº 2050, Buenos Aires, La Plata",
        "idEditable": 205
    },
    {
        "Name": "PLOTTER SERVICE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71145923-1\"}",
        "KeyUnique": "PLOT",
        "Contacts": "",
        "location": "SAN LORENZO 3617, Santa Fe, Rosario",
        "idEditable": 206
    },
    {
        "Name": "NEW CLOR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57734682-4\"}",
        "KeyUnique": "CLOR",
        "Contacts": "",
        "location": "TINOGASTA 4636, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 217
    },
    {
        "Name": "SUREX ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70802317-1\"}",
        "KeyUnique": "SURX",
        "Contacts": "",
        "location": "AV.HIPOLITO YRIGOYEN 2175, Buenos Aires, AVELLANEDA",
        "idEditable": 225
    },
    {
        "Name": "ESKABE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50333978-8\"}",
        "KeyUnique": "ESKA",
        "Contacts": "",
        "location": "Nicolas Repetto 1541, Buenos Aires, C.A.B.A.",
        "idEditable": 226
    },
    {
        "Name": "ROS MATERIALES ELECTRICOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-63320183-4\"}",
        "KeyUnique": "ROMA",
        "Contacts": "",
        "location": "RN 3 KM 42.5, Buenos Aires, VIRREY DEL PINO",
        "idEditable": 230
    },
    {
        "Name": "USHUAIA - ERREQUET VICTOR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70790964-8\"}",
        "KeyUnique": "USHU",
        "Contacts": "",
        "location": "CALLE 3 Nº 475, Buenos Aires, MERCEDES",
        "idEditable": 231
    },
    {
        "Name": "METALFRIO SOLUTIONS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71581192-4\"}",
        "KeyUnique": "MFRI",
        "Contacts": "",
        "location": "AV. DE MAYO 651, Buenos Aires, C.A.B.A.",
        "idEditable": 233
    },
    {
        "Name": "INDULAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70145649-8\"}",
        "KeyUnique": "INDU",
        "Contacts": "",
        "location": "GARAY 482, Santa Fe, Rosario",
        "idEditable": 238
    },
    {
        "Name": "GILBARCO LATIN AMERICA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-67992122-9\"}",
        "KeyUnique": "GILB",
        "Contacts": "",
        "location": "AV. CONGRESO 3450, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 240
    },
    {
        "Name": "BACOPE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50497362-6\"}",
        "KeyUnique": "BACO",
        "Contacts": "",
        "location": "LAPRIDA 2375, Buenos Aires, LOMAS DE ZAMORA",
        "idEditable": 243
    },
    {
        "Name": "ENKEM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71119054-2\"}",
        "KeyUnique": "ENKE",
        "Contacts": "",
        "location": "1º de Mayo 2245, Santa Fe, Rosario",
        "idEditable": 245
    },
    {
        "Name": "TROBBIANI DANIEL RAMON (FRIGOFE)",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-11710721-4\"}",
        "KeyUnique": "TROB",
        "Contacts": "",
        "location": "BV. 27 DE FEBRERO 2439, Santa Fe, Rosario",
        "idEditable": 261
    },
    {
        "Name": "SIGNIFY ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71492461-9\"}",
        "KeyUnique": "SIGN",
        "Contacts": "",
        "location": "DR. NICOLAS REPETTO 3656; 4º PISO, Buenos Aires, OLIVOS, VICENTE LÓPEZ",
        "idEditable": 262
    },
    {
        "Name": "LIPARI JOSÉ ENRIQUE",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-12736104-6\"}",
        "KeyUnique": "LIPA",
        "Contacts": "",
        "location": "MITRE 4656, Santa Fe, Rosario",
        "idEditable": 278
    },
    {
        "Name": "BICIMUNDO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70855603-9\"}",
        "KeyUnique": "BICI",
        "Contacts": "",
        "location": "CASTRO BARROS 375, Córdoba, CORDOBA",
        "idEditable": 283
    },
    {
        "Name": "MABE COLOMBIA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":2380119080664}",
        "KeyUnique": "MABE",
        "Contacts": "",
        "location": "CARRETERA 21  #74-100, undefined, Manizales, Colombia",
        "idEditable": 284
    },
    {
        "Name": "SISTEMAS Y SOLUCIONES DIGITALES S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70780100-6\"}",
        "KeyUnique": "SYSO",
        "Contacts": "",
        "location": "AV. BELGRANO 748 PISO 4 DTO 3, Buenos Aires, C.A.B.A.",
        "idEditable": 290
    },
    {
        "Name": "DEEP S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70748996-7\"}",
        "KeyUnique": "DEEP",
        "Contacts": "",
        "location": "SALVAT 1344, Santa Fe, Rosario",
        "idEditable": 291
    },
    {
        "Name": "FENOGLIO Y CAPELLO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59076179-2\"}",
        "KeyUnique": "FENO",
        "Contacts": "",
        "location": "ING. HUERGO 1378 (Pque Industrial), Córdoba, SAN FRANCISCO",
        "idEditable": 292
    },
    {
        "Name": "CAELBI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71082200-6\"}",
        "KeyUnique": "CAEL",
        "Contacts": "",
        "location": "DANIEL BINI, Santa Fe, Rosario",
        "idEditable": 302
    },
    {
        "Name": "ND MEDICAL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71440586-8\"}",
        "KeyUnique": "NDME",
        "Contacts": "",
        "location": "CARRIEGO 845, Santa Fe, Rosario",
        "idEditable": 308
    },
    {
        "Name": "DANIEL MIGNANI S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64147136-0\"}",
        "KeyUnique": "MIGN",
        "Contacts": "",
        "location": "Montevideo 3734, Santa Fe, Rosario",
        "idEditable": 312
    },
    {
        "Name": "FACULTAD DE CIENCIAS AGRARIAS",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30602326671}",
        "KeyUnique": "FDCA",
        "Contacts": "",
        "location": "CAMPO EXPERIMENTAL VILLARINO, WILDE, Agregar nueva Localidad",
        "idEditable": 325
    },
    {
        "Name": "SCHREDER ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70969638-2\"}",
        "KeyUnique": "SCHR",
        "Contacts": "",
        "location": "AV. REGIMIENTO DE PATRICIOS 1052 OF.121, Buenos Aires, C.A.B.A.",
        "idEditable": 326
    },
    {
        "Name": "CYM MATERIALES S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51787897-5\"}",
        "KeyUnique": "CYM ",
        "Contacts": "",
        "location": "BRIG. ESTANISLAO LÓPEZ Nº6, Santa Fe, SOLDINI",
        "idEditable": 334
    },
    {
        "Name": "KRONEN INTERNACIONAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60451400-9\"}",
        "KeyUnique": "KRON",
        "Contacts": "",
        "location": "VALENTIN GOMEZ 151, Buenos Aires, HAEDO",
        "idEditable": 336
    },
    {
        "Name": "FORNAX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57084367-9\"}",
        "KeyUnique": "FORN",
        "Contacts": "",
        "location": "RUEDA 1540, Santa Fe, Rosario",
        "idEditable": 337
    },
    {
        "Name": "MULTIJACTO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-63208973-9\"}",
        "KeyUnique": "JACT",
        "Contacts": "",
        "location": "RUTA 8 KM 176,, Buenos Aires, Arrecifes",
        "idEditable": 341
    },
    {
        "Name": "CONDUCTORES ROSARIO S.H.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70872581-8\"}",
        "KeyUnique": "COND",
        "Contacts": "",
        "location": "GUSTAVO COCHET 7557, Santa Fe, Rosario",
        "idEditable": 349
    },
    {
        "Name": "ESTÉTICA ESCORPION (JUAN GARBATE)",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-07749345-0\"}",
        "KeyUnique": "SCOR",
        "Contacts": "",
        "location": "BONIFACINI 5430, Buenos Aires, CASEROS",
        "idEditable": 350
    },
    {
        "Name": "CEMLA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64305574-7\"}",
        "KeyUnique": "CEML",
        "Contacts": "",
        "location": "AV. SAN MARTIN 1298, Santa Fe, TOTORAS",
        "idEditable": 380
    },
    {
        "Name": "STEFANELLI JOSE ANTONIO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-10995982-1\"}",
        "KeyUnique": "STEF",
        "Contacts": "",
        "location": "HIPOLITO YRIGOYEN 5672, Buenos Aires, EZPELETA QUILMES",
        "idEditable": 385
    },
    {
        "Name": "BIOTEX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70846409-7\"}",
        "KeyUnique": "BIOT",
        "Contacts": "",
        "location": "SOLIS 1505, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 405
    },
    {
        "Name": "ROWA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54072172-2\"}",
        "KeyUnique": "ROWA",
        "Contacts": "",
        "location": "PUERTO RICO 1255, Buenos Aires, MARTINEZ",
        "idEditable": 406
    },
    {
        "Name": "JAMES S.A.",
        "Document": "{\"type\":\"RUT\",\"value\":\"21-015 911 001 7\"}",
        "KeyUnique": "JAME",
        "Contacts": "",
        "location": "FRATERNIDAD 3948, URUGUAY, MONTEVIDEO",
        "idEditable": 413
    },
    {
        "Name": "CEM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62869104-1\"}",
        "KeyUnique": "CEM ",
        "Contacts": "",
        "location": "PASAJE DE LA FLOR 72, Córdoba, CORDOBA",
        "idEditable": 421
    },
    {
        "Name": "BIENESTAR Y RELAX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71127060-0\"}",
        "KeyUnique": "BIEN",
        "Contacts": "",
        "location": "O´HIGGINS 1136, Salta, SALTA",
        "idEditable": 423
    },
    {
        "Name": "RAYOVAC ARGENTINA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70706168-1\"}",
        "KeyUnique": "RAYO",
        "Contacts": "",
        "location": "HUMBOLDT 2495 PISO 3, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 426
    },
    {
        "Name": "IMPRESOS VELOX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52304778-3\"}",
        "KeyUnique": "IMVE",
        "Contacts": "",
        "location": "LAVALLE 1450, Buenos Aires, C.A.B.A.",
        "idEditable": 428
    },
    {
        "Name": "LUIS PABLO PANATTI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22592440-7\"}",
        "KeyUnique": "PANA",
        "Contacts": "",
        "location": "9 DE JULIO 2277, Córdoba, MONTE MAIZ",
        "idEditable": 429
    },
    {
        "Name": "LIHUE INGENIERIA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61217676-7\"}",
        "KeyUnique": "LIHU",
        "Contacts": "",
        "location": "DIAGONAL 78 (ex Santa Rosalia) 1348, Buenos Aires, VILLA ZAGALA",
        "idEditable": 433
    },
    {
        "Name": "SORRENTO MAQUINARIAS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50606135-7\"}",
        "KeyUnique": "SORR",
        "Contacts": "",
        "location": "RUTA 21 KM 7 LOTE 53 - PARQUE IND. ALVEAR, Santa Fe, ALVEAR",
        "idEditable": 436
    },
    {
        "Name": "ZOLODA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54891771-5\"}",
        "KeyUnique": "ZOLO",
        "Contacts": "",
        "location": "HIPOLITO YIRIGOYEN 15689, Buenos Aires, BURZACO",
        "idEditable": 438
    },
    {
        "Name": "GOLDMUND S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70860387-9\"}",
        "KeyUnique": "GOLD",
        "Contacts": "",
        "location": "MANUEL A. OCAMPO 1170, Buenos Aires, HURLINGHAM",
        "idEditable": 440
    },
    {
        "Name": "HYDRAL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71048911-0\"}",
        "KeyUnique": "HYDR",
        "Contacts": "",
        "location": "VIRREY LORETO 1703, PISO 6 (24), Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 442
    },
    {
        "Name": "ELWIC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71053537-6\"}",
        "KeyUnique": "ELWI",
        "Contacts": "",
        "location": "MONTAÑESES 1879, Buenos Aires, C.A.B.A.",
        "idEditable": 444
    },
    {
        "Name": "LABORATORIO LITORAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67683390-7\"}",
        "KeyUnique": "LITO",
        "Contacts": "",
        "location": "BAJADA SALADILLO S/N, Santa Fe, V. GDOR. GALVEZ",
        "idEditable": 448
    },
    {
        "Name": "FAME S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70794342-0\"}",
        "KeyUnique": "FAME",
        "Contacts": "",
        "location": "Av. Calingasta 5580, Córdoba, CORDOBA",
        "idEditable": 453
    },
    {
        "Name": "COOLBRAND S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71143440-9\"}",
        "KeyUnique": "COOL",
        "Contacts": "",
        "location": "AV. TRIUNVIRATO 3332, Buenos Aires, C.A.B.A.",
        "idEditable": 455
    },
    {
        "Name": "SOLUCIONES INTEGRALES DE INGENIERIA Y DESARROLLO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70881374-1\"}",
        "KeyUnique": "SIID",
        "Contacts": "",
        "location": "Calle 2 Nro 53, Santa Fe, Avellaneda",
        "idEditable": 460
    },
    {
        "Name": "PINTFRANCE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70772500-8\"}",
        "KeyUnique": "PINT",
        "Contacts": "",
        "location": "AV. RIVADAVIA 16102, Buenos Aires, HAEDO",
        "idEditable": 462
    },
    {
        "Name": "YPF S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"/--/\"}",
        "KeyUnique": "YPF",
        "Contacts": "",
        "location": "MACACHA GÜEMES 515, Buenos Aires, C.A.B.A.",
        "idEditable": 464
    },
    {
        "Name": "RHEEM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61295852-8\"}",
        "KeyUnique": "RHEE",
        "Contacts": "",
        "location": "AV. SANTOS ORTIZ (EX RUTA 7) KM 790, San Luis, PARQUE IND. SUR",
        "idEditable": 491
    },
    {
        "Name": "COPPENS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51967820-5\"}",
        "KeyUnique": "COPP",
        "Contacts": "",
        "location": "CALLE 5 ENTRE 2 Y 4 - PARQUE INDUSTRIAL, Buenos Aires, MAR DEL PLATA",
        "idEditable": 497
    },
    {
        "Name": "DUCATI ENERGIA SUD AMERICA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71061827-1\"}",
        "KeyUnique": "DUCA",
        "Contacts": "",
        "location": "AV. GRAL. BELGRANO 2701, Buenos Aires, DON TORCUATO",
        "idEditable": 507
    },
    {
        "Name": "ROTOPLAS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69082706-5\"}",
        "KeyUnique": "ROTO",
        "Contacts": "",
        "location": "C. 22 358, Buenos Aires, Fatima",
        "idEditable": 511
    },
    {
        "Name": "FULLMOON S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71235642-8\"}",
        "KeyUnique": "FULL",
        "Contacts": "",
        "location": "PASO DE LA PATRIA 451, Buenos Aires, VALENTIN ALSINA",
        "idEditable": 512
    },
    {
        "Name": "ARCOR SAIC",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50279317-5\"}",
        "KeyUnique": "ARCO",
        "Contacts": "",
        "location": "AV. FULVIO S. PAGANI 487, Córdoba, Arroyito",
        "idEditable": 515
    },
    {
        "Name": "PHILIPS LIGHTING ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71492461-9\"}",
        "KeyUnique": "PHIL",
        "Contacts": "",
        "location": "DR. NICOLAS REPETTO, Buenos Aires, OLIVOS, VICENTE LÓPEZ",
        "idEditable": 522
    },
    {
        "Name": "IGNIS LIGHTING S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50371815-0\"}",
        "KeyUnique": "IGNI",
        "Contacts": "",
        "location": "RUTA PANAMERICANA KM 47.5 - PLANTA IND. Nº 2, Buenos Aires, RAMAL ESCOBAR",
        "idEditable": 523
    },
    {
        "Name": "AUTRON S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70944158-9\"}",
        "KeyUnique": "AUTR",
        "Contacts": "",
        "location": "ANCHORENA 84, Santa Fe, Rosario",
        "idEditable": 528
    },
    {
        "Name": "German Lisandro Farias",
        "Document": "{\"type\":\"CUIT\",\"value\":\"23-23978621-9\"}",
        "KeyUnique": "GELF",
        "Contacts": "",
        "location": "Maipu 890, Santa Fe, VENADO TUERTO",
        "idEditable": 529
    },
    {
        "Name": "J&S ELECTRONIC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70797086-9\"}",
        "KeyUnique": "JYS ",
        "Contacts": "",
        "location": "Av. Cnel. I. Warnes 213, Buenos Aires, C.A.B.A.",
        "idEditable": 529
    },
    {
        "Name": "INSTRUMENTAL DE CALIDAD",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71056577-1\"}",
        "KeyUnique": "INST",
        "Contacts": "",
        "location": "1º DE MAYO 1348, Santa Fe, Rosario",
        "idEditable": 530
    },
    {
        "Name": "LABORATORIIO INDUSTRIAL MONTEVIDEO S.A.",
        "Document": "{\"type\":\"RUT\",\"value\":\"21-026 047 001 5\"}",
        "KeyUnique": "LIMS",
        "Contacts": "",
        "location": "SITIO GRANDE 1311, URUGUAY, Agregar nueva Localidad",
        "idEditable": 532
    },
    {
        "Name": "BROGAS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51567617-8\"}",
        "KeyUnique": "BROG",
        "Contacts": "",
        "location": "DR. RAFAEL BIELSA 249, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 537
    },
    {
        "Name": "BIZBOX S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71589323-8\"}",
        "KeyUnique": "BIZB",
        "Contacts": "",
        "location": "Andres Maria Ampere 6150, PB, Dto 1, Córdoba, Villa Belgrano",
        "idEditable": 539
    },
    {
        "Name": "JOSE AZAR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-13104046-7\"}",
        "KeyUnique": "AZAR",
        "Contacts": "",
        "location": "MARIANO ACHA 290, Buenos Aires, HURLINGHAM",
        "idEditable": 540
    },
    {
        "Name": "NAGROZ S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70776334-1\"}",
        "KeyUnique": "NAGR",
        "Contacts": "",
        "location": "DR. DOMINGO CABREG 4701, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 541
    },
    {
        "Name": "DAVICA SAICA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50261824-1\"}",
        "KeyUnique": "DAVI",
        "Contacts": "",
        "location": "RICARDO BALBIN 232, Buenos Aires, VALENTIN ALSINA - LANUS",
        "idEditable": 542
    },
    {
        "Name": "BERVILLE S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30710238983}",
        "KeyUnique": "BERV",
        "Contacts": "",
        "location": "RODRIGUEZ PEÑA 1736, MENDOZA, MAIPU",
        "idEditable": 552
    },
    {
        "Name": "IGT ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-66193250-9\"}",
        "KeyUnique": "IGT ",
        "Contacts": "",
        "location": "CUYO 2870, Buenos Aires, MARTINEZ",
        "idEditable": 553
    },
    {
        "Name": "IMA MAI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71545498-6\"}",
        "KeyUnique": "IMA ",
        "Contacts": "",
        "location": "Juan de Solís 8250, Santa Rita, Buenos Aires, MAR DEL PLATA",
        "idEditable": 553
    },
    {
        "Name": "INCOMPANY",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22774514-3\"}",
        "KeyUnique": "INCO",
        "Contacts": "",
        "location": "GOBERNADOR GREGORIO GAVIER 1812, Córdoba, CERRO DE LAS ROSAS",
        "idEditable": 554
    },
    {
        "Name": "WEG EQUIPAMIENTOS ELÉCTRICOS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-66916066-2\"}",
        "KeyUnique": "WEG ",
        "Contacts": "",
        "location": "Av. Grad.Bernardo O´Higgins 4045, Córdoba, CORDOBA",
        "idEditable": 555
    },
    {
        "Name": "ONECLICK ARGENTINO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70880869-1\"}",
        "KeyUnique": "ONEC",
        "Contacts": "",
        "location": "ORTIZ DE OCAMPO 3302 Dpto. 24, BUENOS AIRES, C.A.B.A",
        "idEditable": 558
    },
    {
        "Name": "ESTABLECIMIENTO METALURGICO RENANIA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50275261-4\"}",
        "KeyUnique": "RENA",
        "Contacts": "",
        "location": "BOLIVIA 2117, Buenos Aires, LANUS",
        "idEditable": 563
    },
    {
        "Name": "SOUZA CRUZ S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"CNPJ33009911\"}",
        "KeyUnique": "SOUZ",
        "Contacts": "",
        "location": "AV. GAL.PLINIO TOURINHO, 3200, Paraná, Brasil, Río Negro, Paraná, Brasil",
        "idEditable": 569
    },
    {
        "Name": "REFRIMET S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64045928-6\"}",
        "KeyUnique": "REFR",
        "Contacts": "",
        "location": "Famatina 3100, Buenos Aires, ITUZAINGO",
        "idEditable": 570
    },
    {
        "Name": "DP ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71095230-9\"}",
        "KeyUnique": "DPAR",
        "Contacts": "",
        "location": "PTE DERQUI 147, Córdoba, BELL VILLE",
        "idEditable": 571
    },
    {
        "Name": "HSU CHIAO HSIN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-92870850-1\"}",
        "KeyUnique": "HSU ",
        "Contacts": "",
        "location": "Del Barco Centenara 185, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 572
    },
    {
        "Name": "ELECTRODOMESTICOS MAYVA DE NESTOR MARISCO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"23-04961031-9\"}",
        "KeyUnique": "MAYV",
        "Contacts": "",
        "location": "A. ALSINA Nº 980, Buenos Aires, JUNIN",
        "idEditable": 573
    },
    {
        "Name": "WIENER LABORATORIOS S.A.I.C.",
        "Document": "{\"type\":\"CUIT\",\"value\":30522228210}",
        "KeyUnique": "WIEN",
        "Contacts": "",
        "location": "RIOBAMBA 2944, Santa Fe, Rosario",
        "idEditable": 581
    },
    {
        "Name": "LIME ROSARIO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71470874-7\"}",
        "KeyUnique": "LIME",
        "Contacts": "",
        "location": "PTE PERON 8490, Santa Fe, Rosario",
        "idEditable": 583
    },
    {
        "Name": "FARMACIA SAN ANTONIO de Ana Belén Canale",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-36762043-4\"}",
        "KeyUnique": "CANA",
        "Contacts": "",
        "location": "SARMIENTO 1125, Santa Fe, Piamonte",
        "idEditable": 584
    },
    {
        "Name": "YAMAHA MOTOR ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68723475-4\"}",
        "KeyUnique": "YAMA",
        "Contacts": "",
        "location": "PTE. PERON 8370, Buenos Aires, ITUZAINGO",
        "idEditable": 585
    },
    {
        "Name": "CARILO APPAREL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71121598-7\"}",
        "KeyUnique": "CARI",
        "Contacts": "",
        "location": "AV. LUIS CANDIDO CARBALLO 186 PISO 2 OF. M, Santa Fe, Rosario",
        "idEditable": 592
    },
    {
        "Name": "MILLTAB S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70987757-3\"}",
        "KeyUnique": "MILL",
        "Contacts": "",
        "location": "AV. INDEPENDENCIA 1832 PISO 1 DPTO. C, Buenos Aires, C.A.B.A.",
        "idEditable": 593
    },
    {
        "Name": "TOTAL HOME S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71179042-6\"}",
        "KeyUnique": "THOM",
        "Contacts": "",
        "location": "GUEMES 695, Buenos Aires, VICENTE LOPEZ",
        "idEditable": 601
    },
    {
        "Name": "REPARE ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68411347-6\"}",
        "KeyUnique": "REPA",
        "Contacts": "",
        "location": "Manuel A. Ocampo 1170, Galpón 10 AB, Buenos Aires, HURLINGHAM",
        "idEditable": 603
    },
    {
        "Name": "IFM ELECTRONIC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71045716-2\"}",
        "KeyUnique": "IFM ",
        "Contacts": "",
        "location": "LOLA MORA 421 - piso 10 dto 3, Buenos Aires, C.A.B.A.",
        "idEditable": 604
    },
    {
        "Name": "DREAN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50268047-8\"}",
        "KeyUnique": "DREA",
        "Contacts": "",
        "location": "Av. Córdoba 325, Córdoba, Luque",
        "idEditable": 610
    },
    {
        "Name": "ELECTRONIC SYSTEM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64358677-7\"}",
        "KeyUnique": "ELSY",
        "Contacts": "",
        "location": "PEREZ ROQUE 3650, Buenos Aires, C.A.B.A.",
        "idEditable": 611
    },
    {
        "Name": "RUBEN RICCHIONE SOLUCIONES ELÉCTRICAS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-14354545-9\"}",
        "KeyUnique": "RRSE",
        "Contacts": "",
        "location": "ANTARTIDA ARGENTINA 148, Santa Fe, VENADO TUERTO",
        "idEditable": 612
    },
    {
        "Name": "NORA BEATRIZ APARICIO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-03893779-6\"}",
        "KeyUnique": "NORA",
        "Contacts": "",
        "location": "MAIPU 1118, Santa Fe, Rosario",
        "idEditable": 618
    },
    {
        "Name": "ATOMLUX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-57385583-9\"}",
        "KeyUnique": "ATOM",
        "Contacts": "",
        "location": "RODRIGUEZ PEÑA 4069 (CALLE 22), Buenos Aires, SAN MARTIN",
        "idEditable": 619
    },
    {
        "Name": "INSTRUMENTACION Metrix S.A de C.V",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"IME-180323RT6\"}",
        "KeyUnique": "MTRX",
        "Contacts": "",
        "location": "Av. Peñón Texcoco Manzana 750, Lote 26, Estado de MX, Ciudad Nezahualcóyotl",
        "idEditable": 626
    },
    {
        "Name": "VISUAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65553446-2\"}",
        "KeyUnique": "VISU",
        "Contacts": "",
        "location": "LA MARTONA, Buenos Aires, CAÑUELAS",
        "idEditable": 627
    },
    {
        "Name": "COMPLIANCE ENGINEERING SERVICES S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70182439-9\"}",
        "KeyUnique": "CES ",
        "Contacts": "",
        "location": "BENITO QUINQUELA MARTÍN 1100, Buenos Aires, C.A.B.A.",
        "idEditable": 627
    },
    {
        "Name": "GRUPO AYEX S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70813125-9\"}",
        "KeyUnique": "AYEX",
        "Contacts": "",
        "location": "PEDRO CALDERON DE LA BARCA 2579, Buenos Aires, C.A.B.A.",
        "idEditable": 628
    },
    {
        "Name": "PERMAQUIM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59274689-8\"}",
        "KeyUnique": "PERM",
        "Contacts": "",
        "location": "Tucuman 983, 3ero \"C\", Buenos Aires, C.A.B.A.",
        "idEditable": 633
    },
    {
        "Name": "INGEMAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71491374-9\"}",
        "KeyUnique": "INGE",
        "Contacts": "",
        "location": "AV. EDUARDO BULNES NO. 2250, Córdoba, CORDOBA",
        "idEditable": 634
    },
    {
        "Name": "SERVICE PRO de Damián Vacotto",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-17323975-1\"}",
        "KeyUnique": "SPRO",
        "Contacts": "",
        "location": "Beruti 1709, Buenos Aires, San Antonio de Padua",
        "idEditable": 634
    },
    {
        "Name": "MOTORES DAFA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-93985014-8\"}",
        "KeyUnique": "DAFA",
        "Contacts": "",
        "location": "GRAL MARTIN RODRIGUEZ 65, Buenos Aires, RAMOS MEJIA",
        "idEditable": 635
    },
    {
        "Name": "BDL3K S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71509698-2\"}",
        "KeyUnique": "KOKK",
        "Contacts": "",
        "location": "Anahi 1157, Buenos Aires, Ingeniero Maschwitz",
        "idEditable": 635
    },
    {
        "Name": "HPM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71121778-5\"}",
        "KeyUnique": "HPM ",
        "Contacts": "",
        "location": "SAAVEDRA 1733, Santa Fe, Rosario",
        "idEditable": 636
    },
    {
        "Name": "LONGVIE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50083378-1\"}",
        "KeyUnique": "LONG",
        "Contacts": "",
        "location": "LAPRIDA 4851, Buenos Aires, VILLA MARTELLI",
        "idEditable": 636
    },
    {
        "Name": "SCHRAIBER GUSTAVO DANIEL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22426171-1\"}",
        "KeyUnique": "SCHG",
        "Contacts": "",
        "location": "AV. ALMIRANTE G. BROWN Nº772, Buenos Aires, C.A.B.A.",
        "idEditable": 637
    },
    {
        "Name": "ISECOM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70920098-0\"}",
        "KeyUnique": "ISEC",
        "Contacts": "",
        "location": "Sarmiento 431, Córdoba, CORDOBA",
        "idEditable": 637
    },
    {
        "Name": "NEWTRONIC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70729798-7\"}",
        "KeyUnique": "NEWT",
        "Contacts": "",
        "location": "NOGOYA 4839 - planta alta, Buenos Aires, C.A.B.A.",
        "idEditable": 638
    },
    {
        "Name": "BREMEN TOOLS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64671020-7\"}",
        "KeyUnique": "BREM",
        "Contacts": "",
        "location": "JUAN DOMINGO PERÓN 4749, Buenos Aires, BENAVIDEZ",
        "idEditable": 639
    },
    {
        "Name": "ESPACIO DE INNOVACION S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71528822-9\"}",
        "KeyUnique": "ESIN",
        "Contacts": "",
        "location": "Bartolomé Mitre 1225, 1º Piso, Dto. 102, Buenos Aires, C.A.B.A.",
        "idEditable": 639
    },
    {
        "Name": "ACUARIO DANIEL´S MAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59775618-2\"}",
        "KeyUnique": "ACUA",
        "Contacts": "",
        "location": "AV. CABILDO 3339, Buenos Aires, C.A.B.A.",
        "idEditable": 640
    },
    {
        "Name": "LEA ELECTRICIDAD INTEGRAL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65334238-8\"}",
        "KeyUnique": "LEA ",
        "Contacts": "",
        "location": "URUGUAY 1284, Santa Fe, VENADO TUERTO",
        "idEditable": 640
    },
    {
        "Name": "TRI-VIAL TECH S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71229715-4\"}",
        "KeyUnique": "TRIV",
        "Contacts": "",
        "location": "Gral Manual N. Savio 2750, Buenos Aires, San Martin",
        "idEditable": 641
    },
    {
        "Name": "METROLAB S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-68704162-9\"}",
        "KeyUnique": "MLAB",
        "Contacts": "",
        "location": "HERRERA 2246, Buenos Aires, C.A.B.A.",
        "idEditable": 642
    },
    {
        "Name": "MERCADO VENTA NORTE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71520778-4\"}",
        "KeyUnique": "MEVN",
        "Contacts": "",
        "location": "ALMAFUERTE 455, Buenos Aires, SAN PEDRO",
        "idEditable": 646
    },
    {
        "Name": "LADET S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70853383-8\"}",
        "KeyUnique": "LADE",
        "Contacts": "",
        "location": "RÍO CUARTO 2299 PB DPTO. 0, Buenos Aires, C.A.B.A.",
        "idEditable": 649
    },
    {
        "Name": "KIAR S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30677508147}",
        "KeyUnique": "KIAR",
        "Contacts": "",
        "location": "VELEZ SARSFIELD 1121, Santa Fé, V. GDOR. GALVEZ",
        "idEditable": 651
    },
    {
        "Name": "KOMPUSUR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60933119-0\"}",
        "KeyUnique": "KOMP",
        "Contacts": "",
        "location": "Chascomus 5602, Buenos Aires, C.A.B.A.",
        "idEditable": 652
    },
    {
        "Name": "Calamante Horacio R. y Calamante Norberto G. - DISDEN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68469384-7\"}",
        "KeyUnique": "DISD",
        "Contacts": "",
        "location": "SANTA FE 3153, Santa Fe, Rosario",
        "idEditable": 652
    },
    {
        "Name": "TOTALNEO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71512360-2\"}",
        "KeyUnique": "TNEO",
        "Contacts": "",
        "location": "VIAMONTE 1453, Buenos Aires, C.A.B.A.",
        "idEditable": 653
    },
    {
        "Name": "ECOSOL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-34389970-0\"}",
        "KeyUnique": "ECOS",
        "Contacts": "",
        "location": "MORENO 3042, Buenos Aires, C.A.B.A.",
        "idEditable": 654
    },
    {
        "Name": "INDUSTRIAS SUR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70995799-2\"}",
        "KeyUnique": "INDS",
        "Contacts": "",
        "location": "PASAJE DIEGO CALA 565 - Bo. PUENTE BLANCO, Córdoba, CORDOBA",
        "idEditable": 655
    },
    {
        "Name": "JADASERVICIOS de Dario E. Ferraro",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-35272945-1\"}",
        "KeyUnique": "JADA",
        "Contacts": "",
        "location": "Santo Tome 4317, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 656
    },
    {
        "Name": "HONDA MOTOR DE ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57754677-7\"}",
        "KeyUnique": "HOND",
        "Contacts": "",
        "location": "SUIPACHA 1111, Buenos Aires, C.A.B.A.",
        "idEditable": 657
    },
    {
        "Name": "CONEXTUBE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65503724-8\"}",
        "KeyUnique": "CONX",
        "Contacts": "",
        "location": "Au. Cam. del Buen Ayre s/n, Buenos Aires, William C. Morris",
        "idEditable": 658
    },
    {
        "Name": "LABORATORIO FARKIM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-58063903-4\"}",
        "KeyUnique": "FARK",
        "Contacts": "",
        "location": "PJE BEETHOVEN 772, Santa Fe, Rosario",
        "idEditable": 659
    },
    {
        "Name": "COOP. ELEC. Y DE OBRAS Y SERV. PÚBL. LTD DE JUSTINIANO POSSE",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54573491-1\"}",
        "KeyUnique": "VATI",
        "Contacts": "",
        "location": "9 DE JULIO 681, Córdoba, JUSTINIANO POSSE",
        "idEditable": 660
    },
    {
        "Name": "DELAVAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30572530996}",
        "KeyUnique": "DELA",
        "Contacts": "",
        "location": "ITALIA 772, Santa Fe, EL TREBOL",
        "idEditable": 662
    },
    {
        "Name": "THALOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67833108-9\"}",
        "KeyUnique": "THAL",
        "Contacts": "",
        "location": "GREGORIO DE LAFERRERE 4780, Buenos Aires, C.A.B.A.",
        "idEditable": 663
    },
    {
        "Name": "INSTITUTO ARGENTINO DE NORMALIZACIÓN Y CERTIFICACIÓN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52556-6\"}",
        "KeyUnique": "IRAM",
        "Contacts": "",
        "location": "PERU 552/5, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 664
    },
    {
        "Name": "ALCABLE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-63774782-3\"}",
        "KeyUnique": "ALCA",
        "Contacts": "",
        "location": "Güemes 1460, Buenos Aires, Merlo",
        "idEditable": 665
    },
    {
        "Name": "LILIANA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51687722-3\"}",
        "KeyUnique": "LILI",
        "Contacts": "",
        "location": "WARNES 1155, Santa Fe, Rosario",
        "idEditable": 667
    },
    {
        "Name": "DISTRIBUIDORA AIFANG S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71459011-8\"}",
        "KeyUnique": "AIFA",
        "Contacts": "",
        "location": "PASTEUR 229, Buenos Aires, C.A.B.A.",
        "idEditable": 668
    },
    {
        "Name": "METALURGICA VAZQUEZ S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71351270-9\"}",
        "KeyUnique": "VAZQ",
        "Contacts": "",
        "location": "PJE. CUBA 729, Buenos Aires, AVELLANEDA",
        "idEditable": 668
    },
    {
        "Name": "CANTERAS CERRO NEGRO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50101005-3\"}",
        "KeyUnique": "CCN ",
        "Contacts": "",
        "location": "RECONQUISTA 1088 PISO 9, Buenos Aires, C.A.B.A.",
        "idEditable": 669
    },
    {
        "Name": "WIMER - LOSA VERONICA LAURA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-22285706-1\"}",
        "KeyUnique": "LOSA",
        "Contacts": "",
        "location": "DEFENSA 2052, Buenos Aires, LA MATANZA",
        "idEditable": 669
    },
    {
        "Name": "PERCOMIN ICSA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54073298-8\"}",
        "KeyUnique": "PERC",
        "Contacts": "",
        "location": "AV. DEL LIBERTADOR 1298, Buenos Aires, VICENTE LOPEZ",
        "idEditable": 670
    },
    {
        "Name": "SITEPRA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-59299266-9\"}",
        "KeyUnique": "SITE",
        "Contacts": "",
        "location": "AV. CORRIENTES 4368, Buenos Aires, C.A.B.A.",
        "idEditable": 671
    },
    {
        "Name": "UNIVERSIDAD TECNOLÓGICA NACIONAL REGIONAL CÓRDOBA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30--5466711-6\"}",
        "KeyUnique": "UTRC",
        "Contacts": "",
        "location": "Maestro López esq. Cruz Roja Argentina, Córdoba, CORDOBA",
        "idEditable": 671
    },
    {
        "Name": "GRISENTI HECTOR DANIEL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-08368766-6\"}",
        "KeyUnique": "GHD ",
        "Contacts": "",
        "location": "BELGRANO 1651, Mendoza, GODOY CRUZ",
        "idEditable": 672
    },
    {
        "Name": "HALKOM MOTORS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71531943-4\"}",
        "KeyUnique": "HALK",
        "Contacts": "",
        "location": "JOSE HERNANDEZ 1006, Buenos Aires, VILLA BOSCH",
        "idEditable": 675
    },
    {
        "Name": "JBH Equipamientos de Gustavo Hernandez",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-20024026-0\"}",
        "KeyUnique": "JBH ",
        "Contacts": "",
        "location": "Jean Jaures 1285, Buenos Aires, Lanus Oeste",
        "idEditable": 678
    },
    {
        "Name": "PROYECTOS AGROINDUSTRIALES S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60765800-1\"}",
        "KeyUnique": "AGRO",
        "Contacts": "",
        "location": "AV. BELGRANO 1876 Piso 4 Dto A, Buenos Aires, C.A.B.A.",
        "idEditable": 679
    },
    {
        "Name": "ASOSIACION DE COOPERATIVAS ARGENTINAS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50012088-2\"}",
        "KeyUnique": "ACA ",
        "Contacts": "",
        "location": "RUTA 8 KM 229.5, Buenos Aires, Pergamino",
        "idEditable": 680
    },
    {
        "Name": "METALURGICA DEL SUR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67750814-7\"}",
        "KeyUnique": "MDS ",
        "Contacts": "",
        "location": "VELEZ SARSFIELD 1121, Santa Fe, V. GDOR. GALVEZ",
        "idEditable": 693
    },
    {
        "Name": "PILISAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70918084-9\"}",
        "KeyUnique": "PILI",
        "Contacts": "",
        "location": "Coronel Molinedo 1600, Buenos Aires, Piñeyro, Avellaneda",
        "idEditable": 693
    },
    {
        "Name": "TP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71526439-7\"}",
        "KeyUnique": "TP3D",
        "Contacts": "",
        "location": "ESTRADA 136 dto 1D, Córdoba, CORDOBA",
        "idEditable": 694
    },
    {
        "Name": "ELDEN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54073298-8\"}",
        "KeyUnique": "ELDE",
        "Contacts": "",
        "location": "AV. DEL LIBERTADOR 1298, Buenos Aires, VICENTE LOPEZ",
        "idEditable": 698
    },
    {
        "Name": "GARBARINO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54008821-3\"}",
        "KeyUnique": "GARB",
        "Contacts": "",
        "location": "GUEVARA 533, Buenos Aires, C.A.B.A.",
        "idEditable": 702
    },
    {
        "Name": "DANGELO Y CABRERA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71539774-5\"}",
        "KeyUnique": "DACA",
        "Contacts": "",
        "location": "AV. MAIPU 51 - PISO 12 - DTO 7B, Córdoba, CORDOBA",
        "idEditable": 703
    },
    {
        "Name": "MARANSI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-70871199-9\"}",
        "KeyUnique": "MARA",
        "Contacts": "",
        "location": "MANUEL OCAMPO 1170, Buenos Aires, HURLINGHAM",
        "idEditable": 704
    },
    {
        "Name": "MARTIN OUBIÑA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-28462995-8\"}",
        "KeyUnique": "OUBI",
        "Contacts": "",
        "location": "SOLDADO DE LA INDEPENDENCIA 1341 PISO4A, Buenos Aires, C.A.B.A.",
        "idEditable": 705
    },
    {
        "Name": "I-LED ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71474138-8\"}",
        "KeyUnique": "ILED",
        "Contacts": "",
        "location": "AV. SANTA FE 846 PISO 11, Buenos Aires, C.A.B.A.",
        "idEditable": 706
    },
    {
        "Name": "EDISUR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70941894-3\"}",
        "KeyUnique": "EDIS",
        "Contacts": "",
        "location": "AV. ROGELIO MARTINEZ 2649, Córdoba, CORDOBA",
        "idEditable": 707
    },
    {
        "Name": "ELECTRO MOTORES ARGENTINOS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30--7084589-6\"}",
        "KeyUnique": "EMAR",
        "Contacts": "",
        "location": "ING. HUERGO 1209 - PARQUE INDUSTRIAL, Córdoba, SAN FRANCISCO",
        "idEditable": 709
    },
    {
        "Name": "KAIBO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71213567-7\"}",
        "KeyUnique": "KAIB",
        "Contacts": "",
        "location": "PASTEUR 351, Buenos Aires, C.A.B.A.",
        "idEditable": 710
    },
    {
        "Name": "RODEIRO CONSTRUCCIONES S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71414965-9\"}",
        "KeyUnique": "ROCO",
        "Contacts": "",
        "location": "WHITE 948, Buenos Aires, C.A.B.A.",
        "idEditable": 714
    },
    {
        "Name": "FACULTAD DE CIENCIAS AGROPECUARIAS U.N.C. LASIDYS-UNCOR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-54667062-3\"}",
        "KeyUnique": "UNC ",
        "Contacts": "",
        "location": "ING. AGR. FÉLIX ALDO MARRONE 746 CD. UNIVERSITARIA, Córdoba, CORDOBA",
        "idEditable": 714
    },
    {
        "Name": "ROSARIO TECH S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71501087-5\"}",
        "KeyUnique": "ROST",
        "Contacts": "",
        "location": "SAN MARTIN 1231, Santa Fe, Rosario",
        "idEditable": 715
    },
    {
        "Name": "SALA HNOS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"--\"}",
        "KeyUnique": "SALA",
        "Contacts": "",
        "location": "AV. AGUSTIN TOSCO 199, Córdoba, CORONEL MOLDES",
        "idEditable": 715
    },
    {
        "Name": "CORADIR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67338016-2\"}",
        "KeyUnique": "CORA",
        "Contacts": "",
        "location": "RUTA 3 KM 0600, San Luis, SAN LUIS",
        "idEditable": 716
    },
    {
        "Name": "ANGAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-65821936-3\"}",
        "KeyUnique": "ANGA",
        "Contacts": "",
        "location": "AV. JOSE OTERO Nº 128, Buenos Aires, PONTEVEDRA, MERLO",
        "idEditable": 716
    },
    {
        "Name": "DIMASHQ ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71100577-9\"}",
        "KeyUnique": "DIMA",
        "Contacts": "",
        "location": "CATAMARCA 1950 1º PISO OF 1, Buenos Aires, MARTINEZ",
        "idEditable": 717
    },
    {
        "Name": "SISTEMAS ELECTRONICOS ROSARIO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67749995-4\"}",
        "KeyUnique": "SIST",
        "Contacts": "",
        "location": "PJE SOLIS 2483, Santa Fe, V. GDOR. GALVEZ",
        "idEditable": 717
    },
    {
        "Name": "TECNOCASA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71205066-3\"}",
        "KeyUnique": "TECN",
        "Contacts": "",
        "location": "SAENS PEÑA 1143, Buenos Aires, SAN MARTIN",
        "idEditable": 718
    },
    {
        "Name": "DHM INDUSTRIA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71216195-3\"}",
        "KeyUnique": "DHM ",
        "Contacts": "",
        "location": "Velez Sarfield 34, Córdoba, Bell Ville",
        "idEditable": 719
    },
    {
        "Name": "GRUPO MAYO COMEX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71544156-6\"}",
        "KeyUnique": "MAYO",
        "Contacts": "",
        "location": "PASTEUR 39 PISO DPTO 19, Buenos Aires, C.A.B.A.",
        "idEditable": 720
    },
    {
        "Name": "ELECTRO HOGAR INTERNACIONAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71569724-0\"}",
        "KeyUnique": "ELHO",
        "Contacts": "",
        "location": "Caratini 51, Buenos Aires, Gral. Rodriguez",
        "idEditable": 720
    },
    {
        "Name": "CARLOS PESCE S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30711330433}",
        "KeyUnique": "PAMP",
        "Contacts": "",
        "location": "AV. URQUIZA 1539, CORDOBA, Agregar nueva Localidad",
        "idEditable": 721
    },
    {
        "Name": "BAZAN CARRICABURU MAURICIO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-30771610-1\"}",
        "KeyUnique": "BCM ",
        "Contacts": "",
        "location": "Tucumán 890, Cordoba, VILLA MARIA",
        "idEditable": 721
    },
    {
        "Name": "TRAMOTINA GARIBALDI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71193338-3\"}",
        "KeyUnique": "TRAM",
        "Contacts": "",
        "location": "NOGOYÁ 4865, Buenos Aires, C.A.B.A.",
        "idEditable": 722
    },
    {
        "Name": "KARCHER S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71098851-6\"}",
        "KeyUnique": "KARC",
        "Contacts": "",
        "location": "Pan. Colectora Este 38781 Esq. Vte. López, Buenos Aires, BENAVIDEZ",
        "idEditable": 722
    },
    {
        "Name": "TECNOSUR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71041830-2\"}",
        "KeyUnique": "TSUR",
        "Contacts": "",
        "location": "COMBATE DE MONTEVIDEO 1139/1141 1139, Tierra del Fuego, RIO GRANDE",
        "idEditable": 723
    },
    {
        "Name": "MARTINO MARIELA OLGA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-29592407-7\"}",
        "KeyUnique": "INDH",
        "Contacts": "",
        "location": "Franklin 866, 6to \"B\", Buenos Aires, C.A.B.A.",
        "idEditable": 723
    },
    {
        "Name": "BANNER DIRECTOR S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30714787558}",
        "KeyUnique": "BADI",
        "Contacts": "",
        "location": "CASEROS 980 piso1 - dto A, Rosario, Agregar nueva Localidad",
        "idEditable": 724
    },
    {
        "Name": "NEXINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71476562-7\"}",
        "KeyUnique": "NEXI",
        "Contacts": "",
        "location": "Virgilio Tedin 363, Buenos Aires, BENAVIDEZ",
        "idEditable": 724
    },
    {
        "Name": "CA.EL.AR. S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":33707471129}",
        "KeyUnique": "CAAR",
        "Contacts": "",
        "location": "CRESPO 3020/40, BUENOS AIRES, Agregar nueva Localidad",
        "idEditable": 725
    },
    {
        "Name": "ARGENTAL S.A.I.C.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50256682-9  \"}",
        "KeyUnique": "ARGE",
        "Contacts": "",
        "location": "Av. San Martin 1666, Santa Fe, Baigorria",
        "idEditable": 725
    },
    {
        "Name": "TERRAGENE S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30709585939}",
        "KeyUnique": "TERR",
        "Contacts": "",
        "location": "AUTOPISTA ROS-BS AS, SANTA FE, Alvear",
        "idEditable": 726
    },
    {
        "Name": "INNOVASOL ENERGIAS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71616954-1\"}",
        "KeyUnique": "ISOL",
        "Contacts": "",
        "location": "Luis Agote 2227, Buenos Aires, Quilmes",
        "idEditable": 726
    },
    {
        "Name": "FARM TECH S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"/\"}",
        "KeyUnique": "FARM",
        "Contacts": "",
        "location": "TUCUMAN 540, PISO 28 D, BUENOS AIRES, Agregar nueva Localidad",
        "idEditable": 727
    },
    {
        "Name": "LA CASA DE LOS TERMINALES S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68371933-8\"}",
        "KeyUnique": "LCT ",
        "Contacts": "",
        "location": "Federico Ozanam 5245, C.A.B.A., MATADEROS",
        "idEditable": 727
    },
    {
        "Name": "MAIDA VICTOR SEBASTIAN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-24350498-9\"}",
        "KeyUnique": "MAID",
        "Contacts": "",
        "location": "SAN JUAN 3853, Santa Fe, Rosario",
        "idEditable": 728
    },
    {
        "Name": "HY POWER ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71506911-9\"}",
        "KeyUnique": "HYPO",
        "Contacts": "",
        "location": "Montes de Oca 425, Buenos Aires, AVELLANEDA",
        "idEditable": 728
    },
    {
        "Name": "HONEYWELL SAIC",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"/\"}",
        "KeyUnique": "HONE",
        "Contacts": "",
        "location": "CARLOS PELLEGRINI 179, BUENOS AIRES, Agregar nueva Localidad",
        "idEditable": 729
    },
    {
        "Name": "CALPRO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71206983-6\"}",
        "KeyUnique": "CALP",
        "Contacts": "",
        "location": "CHILE 537, PISO 4, DPTO 16, Buenos Aires, C.A.B.A.",
        "idEditable": 730
    },
    {
        "Name": "RS BAHIA COMEX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71561677-3\"}",
        "KeyUnique": "RSBC",
        "Contacts": "",
        "location": "AV. MASSEY 1624, Buenos Aires, LINCOLN",
        "idEditable": 731
    },
    {
        "Name": "C&S COMUNICACIÓN Y SISTEMAS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69545669-3\"}",
        "KeyUnique": "COMS",
        "Contacts": "",
        "location": "CARACAS 632, Buenos Aires, C.A.B.A.",
        "idEditable": 732
    },
    {
        "Name": "INTEGRAL TRADING S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71255525-0\"}",
        "KeyUnique": "INTR",
        "Contacts": "",
        "location": "SUIPACHA 57, Buenos Aires, LINCOLN",
        "idEditable": 733
    },
    {
        "Name": "VIRANDO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71535770-0\"}",
        "KeyUnique": "VIRA",
        "Contacts": "",
        "location": "AV. CORRIENTES 6041, PISO 9 DPTO. B, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 734
    },
    {
        "Name": "DYM TRADE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71238198-8\"}",
        "KeyUnique": "DYMT",
        "Contacts": "",
        "location": "PASTEUR 39, PISO 3 OF. 24, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 735
    },
    {
        "Name": "KARULIS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70849920-6\"}",
        "KeyUnique": "KARU",
        "Contacts": "",
        "location": "PASTEUR 334, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 736
    },
    {
        "Name": "NIANI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70775831-3\"}",
        "KeyUnique": "NIAN",
        "Contacts": "",
        "location": "AV. CORRIENTES 2312, PISO 3 OF. 31, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 737
    },
    {
        "Name": "SCHNEIDER ELECTRIC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-59219954-4\"}",
        "KeyUnique": "SCHN",
        "Contacts": "",
        "location": "AV. GRAL. SAN MARTIN 5020, Buenos Aires, FLORIDA",
        "idEditable": 738
    },
    {
        "Name": "TRENES ARGENTINOS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71068177-1\"}",
        "KeyUnique": "TRAR",
        "Contacts": "",
        "location": "AVDA. DR. RAMOS MEJÍA 1302, Buenos Aires, C.A.B.A.",
        "idEditable": 739
    },
    {
        "Name": "GOLDSONIC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68830252-4\"}",
        "KeyUnique": "GOLN",
        "Contacts": "",
        "location": "Pasteur 359 2º A, Buenos Aires, C.A.B.A.",
        "idEditable": 740
    },
    {
        "Name": "GOLDSONIC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68830252-4\"}",
        "KeyUnique": "GLDS",
        "Contacts": "",
        "location": "Pasteur 359 2º A, Buenos Aires, C.A.B.A.",
        "idEditable": 740
    },
    {
        "Name": "COPALUS S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30708447494}",
        "KeyUnique": "COPA",
        "Contacts": "",
        "location": "PASTEUR 39 2º OF. 18, C.A.B.A, C.A.B.A.",
        "idEditable": 741
    },
    {
        "Name": "ESMAJOBRAN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71524214-8\"}",
        "KeyUnique": "ESMA",
        "Contacts": "",
        "location": "AZCUENGA 709, C.A.B.A., C.A.B.A.",
        "idEditable": 742
    },
    {
        "Name": "ECO RIDES S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71544156-6\"}",
        "KeyUnique": "ECRI",
        "Contacts": "",
        "location": "VIDT 1669 PISO 9 DPTO. B, C.A.B.A., C.A.B.A.",
        "idEditable": 743
    },
    {
        "Name": "EXO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57960755-2\"}",
        "KeyUnique": "EXOS",
        "Contacts": "",
        "location": "AV. CHICLANA 3444, Buenos Aires, C.A.B.A.",
        "idEditable": 745
    },
    {
        "Name": "TZIPOR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71145408-6\"}",
        "KeyUnique": "TZIP",
        "Contacts": "",
        "location": "BUENOS AIRES 114 PISO 1 DPTO. 9M, Mendoza, MENDOZA",
        "idEditable": 746
    },
    {
        "Name": "EMICOL ELETRO ELETRONICA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":61685723000166}",
        "KeyUnique": "EMIC",
        "Contacts": "",
        "location": "MARGINAL EMICOL S/N, SAO PAULO, ITU",
        "idEditable": 747
    },
    {
        "Name": "FRICOM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-23279609-0\"}",
        "KeyUnique": "FRIC",
        "Contacts": "",
        "location": "AV. JAURETCHE 7210, Misiones, POSADAS",
        "idEditable": 748
    },
    {
        "Name": "ORBIS MERTIG SAIC",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50059755-7\"}",
        "KeyUnique": "ORBI",
        "Contacts": "",
        "location": "YERBAL 1200, Buenos Aires, VILLA ADELINA",
        "idEditable": 749
    },
    {
        "Name": "UPS INTEGRAL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71106871-2\"}",
        "KeyUnique": "UPSI",
        "Contacts": "",
        "location": "RIOBAMBA 2876, Santa Fe, Rosario",
        "idEditable": 750
    },
    {
        "Name": "MULBAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71123677-1\"}",
        "KeyUnique": "MULB",
        "Contacts": "",
        "location": "EVITA 1313, Buenos Aires, EL JAGÜEL",
        "idEditable": 751
    },
    {
        "Name": "FUTURE GRAPHICS LLC ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70823800-3\"}",
        "KeyUnique": "LLC ",
        "Contacts": "",
        "location": "HERRERA 475, Buenos Aires, C.A.B.A.",
        "idEditable": 752
    },
    {
        "Name": "MEGA POLY TRADE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70948856-9\"}",
        "KeyUnique": "MPT ",
        "Contacts": "",
        "location": "AV. CORRIENTES 2312 PISO 6 OFICINA 52, Buenos Aires, C.A.B.A.",
        "idEditable": 753
    },
    {
        "Name": "ATHAND S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71441662-2\"}",
        "KeyUnique": "ATHA",
        "Contacts": "",
        "location": "AV. JUAN DE GARAY 737 PISO 6 DPTO. 3 T: R, Buenos Aires, C.A.B.A.",
        "idEditable": 754
    },
    {
        "Name": "MEGA SHOW S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71343740-5\"}",
        "KeyUnique": "SHOW",
        "Contacts": "",
        "location": "PRESIDENTE PERON 10298 DPTO. 119, Buenos Aires, ITUZAINGO",
        "idEditable": 755
    },
    {
        "Name": "ARIEL RUBEN CORDON",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-07613647-6\"}",
        "KeyUnique": "ARC ",
        "Contacts": "",
        "location": "PASTEUR 346 DPTO. L PISO 7, Buenos Aires, C.A.B.A.",
        "idEditable": 756
    },
    {
        "Name": "ADRIAN PETROCELLI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-14228033-8\"}",
        "KeyUnique": "APET",
        "Contacts": "",
        "location": "ALSINA 1414, Santa Fe, Rosario",
        "idEditable": 757
    },
    {
        "Name": "RAMOS ETCHEVERRY GONZALO MARTIN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-92848188-4\"}",
        "KeyUnique": "REGM",
        "Contacts": "",
        "location": "ACHEGA 2965 PB B, Buenos Aires, C.A.B.A.",
        "idEditable": 758
    },
    {
        "Name": "SARCRIS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71432747-6\"}",
        "KeyUnique": "SARC",
        "Contacts": "",
        "location": "Maipu 464, piso 4, Buenos Aires, Agregar nueva Localidad",
        "idEditable": 759
    },
    {
        "Name": "REHAU S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67657566-5\"}",
        "KeyUnique": "REHA",
        "Contacts": "",
        "location": "CASACCIA 5161, Santa Fe, Rosario",
        "idEditable": 760
    },
    {
        "Name": "HERNAN ARIEL MAZZARELLA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-31293370-6\"}",
        "KeyUnique": "MAZZ",
        "Contacts": "",
        "location": "VIRGILIO 2935, Buenos Aires, C.A.B.A.",
        "idEditable": 761
    },
    {
        "Name": "MIMET",
        "Document": "{\"type\":\"ID Imp.\"}",
        "KeyUnique": "MIME",
        "Contacts": "",
        "location": "Av. Carlos Valdovinos No. 590, Santiago, Chile, San Joaquín",
        "idEditable": 762
    },
    {
        "Name": "PRO ELECTRO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71544156-6\"}",
        "KeyUnique": "PROE",
        "Contacts": "",
        "location": "PASTEUR 39 PISO 3 DTO. 19, Buenos Aires, C.A.B.A.",
        "idEditable": 763
    },
    {
        "Name": "BLITZ MOTORS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71522121-3\"}",
        "KeyUnique": "BLTZ",
        "Contacts": "",
        "location": "HIPOLITO YIRIGOYEN 3853, Buenos Aires, SAN MARTIN",
        "idEditable": 764
    },
    {
        "Name": "CONSTRUCTORA E IMPORTADORA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71149302-2\"}",
        "KeyUnique": "COIM",
        "Contacts": "",
        "location": "SAN MARTIN 1267, Santa Fe, Rosario",
        "idEditable": 765
    },
    {
        "Name": "STRADA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69539233-4\"}",
        "KeyUnique": "STRA",
        "Contacts": "",
        "location": "Av. Filippini 1421, Santa Fe, V. GDOR. GALVEZ",
        "idEditable": 766
    },
    {
        "Name": "FINAMORE ALBERTO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-06029629-9\"}",
        "KeyUnique": "FINA",
        "Contacts": "",
        "location": "Tucumán 2843, Santa Fe, Rosario",
        "idEditable": 767
    },
    {
        "Name": "STEM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70929417-9\"}",
        "KeyUnique": "STEM",
        "Contacts": "",
        "location": "VIRASORO 1249, Santa Fe, Rosario",
        "idEditable": 768
    },
    {
        "Name": "TRANE DE ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-66210229-2\"}",
        "KeyUnique": "TRAN",
        "Contacts": "",
        "location": "AVENIDA MITRE 1345 / 51, Buenos Aires, FLORIDA",
        "idEditable": 769
    },
    {
        "Name": "HUILING MAI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-93932278-8\"}",
        "KeyUnique": "HUIL",
        "Contacts": "",
        "location": "SARMIENTO 2320, Buenos Aires, C.A.B.A.",
        "idEditable": 770
    },
    {
        "Name": "LAGUIA CLAUDIO MARCELO",
        "Document": "{\"type\":\"ID Imp.\"}",
        "KeyUnique": "LAGU",
        "Contacts": "",
        "location": "ZENON LÓPEZ 1254, CORDOBA, Agregar nueva Localidad",
        "idEditable": 771
    },
    {
        "Name": "BONO WALTER ARIEL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-24400675-3\"}",
        "KeyUnique": "BONO",
        "Contacts": "",
        "location": "PCIAS UNIDAS 1202, Santa Fe, Rosario",
        "idEditable": 772
    },
    {
        "Name": "COL-VEN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-56031241-1\"}",
        "KeyUnique": "COLV",
        "Contacts": "",
        "location": "CERRITO 1280, Buenos Aires, ITUZAINGO",
        "idEditable": 773
    },
    {
        "Name": "ELIBET S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-51735933-1\"}",
        "KeyUnique": "ELIB",
        "Contacts": "",
        "location": "ROSALES 4051, Buenos Aires, VILLA LYNCH",
        "idEditable": 774
    },
    {
        "Name": "ELMET S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30707949968}",
        "KeyUnique": "ELME",
        "Contacts": "",
        "location": "Lote 4 Parque Industrial Avellaneda, Santa Fé, AVELLANEDA",
        "idEditable": 775
    },
    {
        "Name": "ORANFRESH S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71618017-0\"}",
        "KeyUnique": "ORAN",
        "Contacts": "",
        "location": "SAN LUIS 3585, Santa Fe, Rosario",
        "idEditable": 776
    },
    {
        "Name": "WANG MINGJIE",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-94761547-6\"}",
        "KeyUnique": "WANG",
        "Contacts": "",
        "location": "SARMIENTO 2482, Buenos Aires, C.A.B.A.",
        "idEditable": 777
    },
    {
        "Name": "TECNO L.D. BERNAL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71068682-9\"}",
        "KeyUnique": "TBER",
        "Contacts": "",
        "location": "CALLE 163 Nº 316, Buenos Aires, BERNAL",
        "idEditable": 778
    },
    {
        "Name": "RACEDO ARAGON IGNACIO ANDRES",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-23645400-3\"}",
        "KeyUnique": "RAIG",
        "Contacts": "",
        "location": "ALVEAR 216, Santa Fe, Rosario",
        "idEditable": 779
    },
    {
        "Name": "FRIGOTEC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70902575-5\"}",
        "KeyUnique": "FTEC",
        "Contacts": "",
        "location": "COLECTORA NORTE ACCESO OESTE 10413, Buenos Aires, LA REJA",
        "idEditable": 780
    },
    {
        "Name": "ENERTIK",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70888560-2\"}",
        "KeyUnique": "ETIK",
        "Contacts": "",
        "location": "BV. N. OROÑO 5102, Santa Fe, Rosario",
        "idEditable": 781
    },
    {
        "Name": "TUCAGRO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68572176-3\"}",
        "KeyUnique": "TUCA",
        "Contacts": "",
        "location": "AUTOPISTA J.D. PERON - KM 5,3, Tucumán, CEVIL POZO",
        "idEditable": 782
    },
    {
        "Name": "CUSILLOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70735537-5\"}",
        "KeyUnique": "CUSI",
        "Contacts": "",
        "location": "AV. PRESIDENTE PERON 2300 PISO 2 DPTO 3 T 1, Tucumán, YERBA BUENA",
        "idEditable": 783
    },
    {
        "Name": "GARMAT S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68568869-3\"}",
        "KeyUnique": "GAR ",
        "Contacts": "",
        "location": "AV. PRESIDENTE PERON 2300 PISO 2 DPTO 3-A T 1, Tucumán, YERBA BUENA",
        "idEditable": 784
    },
    {
        "Name": "LABORATORIOS RADSON S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\"}",
        "KeyUnique": "RADS",
        "Contacts": "",
        "location": "Esfuerzo Nº 1-C  -  Col. Lázaro Cárdenas, Edo. de México - MEX, Naucalpan de Juárez",
        "idEditable": 785
    },
    {
        "Name": "EURO-ELECTRIC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64669443-0\"}",
        "KeyUnique": "EURO",
        "Contacts": "",
        "location": "FRANCISCO NARCISO LAPRIDA 1106, Buenos Aires, LOMAS DE ZAMORA",
        "idEditable": 786
    },
    {
        "Name": "COOPERATIVA AGRÍCOLA GANADERA DE MONTE BUEY LTDA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-53112211-5\"}",
        "KeyUnique": "CAGM",
        "Contacts": "",
        "location": "RIVADAVIA Y DEAN FUNES 188, Córdoba, Monte Buey",
        "idEditable": 788
    },
    {
        "Name": "MULTI HOUSING LAUNDRY S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"--\"}",
        "KeyUnique": "MHL ",
        "Contacts": "",
        "location": "AVENIDA BELGRANO 4133, Buenos Aires, C.A.B.A.",
        "idEditable": 789
    },
    {
        "Name": "PETROQUÍMICA CUYO S.A.I.C.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-58342640-6\"}",
        "KeyUnique": "CUYO",
        "Contacts": "",
        "location": "CNO. GOB. VERGARA KM 2.5, Buenos Aires, ENSENADA",
        "idEditable": 790
    },
    {
        "Name": "INDUSTRIAS ESPERANZA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71499076-0\"}",
        "KeyUnique": "ESPE",
        "Contacts": "",
        "location": "Ruta Prov. 14 Km 45 (Parque Industrial), Santa Fe, Bigand",
        "idEditable": 792
    },
    {
        "Name": "ALL STRAPPING S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70999562-2\"}",
        "KeyUnique": "ALLS",
        "Contacts": "",
        "location": "SUVIRIA 5076, Buenos Aires, C.A.B.A.",
        "idEditable": 793
    },
    {
        "Name": "NEOINGENIERIA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71476481-7\"}",
        "KeyUnique": "NEOI",
        "Contacts": "",
        "location": "MARCONI 211, San Luis, Villa Mercedes",
        "idEditable": 794
    },
    {
        "Name": "DELYAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70812398-2\"}",
        "KeyUnique": "DELY",
        "Contacts": "",
        "location": "BV. ROCA 3103, Córdoba, SAN FRANCISCO",
        "idEditable": 795
    },
    {
        "Name": "DIAZ LORENA ANDREA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-27602045-0\"}",
        "KeyUnique": "DIAZ",
        "Contacts": "",
        "location": "SIMBRON 5322, Buenos Aires, C.A.B.A.",
        "idEditable": 796
    },
    {
        "Name": "TECCAM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70889813-5\"}",
        "KeyUnique": "TECA",
        "Contacts": "",
        "location": "J.S. Agüero 870, Buenos Aires, FLORIDA",
        "idEditable": 797
    },
    {
        "Name": "LEON RABEY E HIJOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57113159-1\"}",
        "KeyUnique": "RABE",
        "Contacts": "",
        "location": "BRAGE VILLAR 701, Entre Ríos, HASENKAMP",
        "idEditable": 798
    },
    {
        "Name": "INTEVA ENERGÍA SOLAR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-17288432-7\"}",
        "KeyUnique": "INT ",
        "Contacts": "",
        "location": "R. DE ESCALADA 2558, Santa Fe, CASILDA",
        "idEditable": 799
    },
    {
        "Name": "LABORATORIO PAMPA S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71619515-1\"}",
        "KeyUnique": "PMPA",
        "Contacts": "",
        "location": "AV. GRAL LAVALLE 584, Córdoba, JUSTINIANO POSSE",
        "idEditable": 800
    },
    {
        "Name": "IDEA ILUMINACIÓN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70810942-4\"}",
        "KeyUnique": "IDEA",
        "Contacts": "",
        "location": "Varela 897, Buenos Aires, VILLA MARTELLI",
        "idEditable": 801
    },
    {
        "Name": "LUJAN AGRÍCOLA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69582299-1\"}",
        "KeyUnique": "LUJA",
        "Contacts": "",
        "location": "ANGEL MOSCONI 627, Mendoza, Lujan de Cuyo",
        "idEditable": 802
    },
    {
        "Name": "E-COLOGICA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71174915-9\"}",
        "KeyUnique": "ECOL",
        "Contacts": "",
        "location": "MORENO 2866, Santa Fe, Rosario",
        "idEditable": 803
    },
    {
        "Name": "LEDLAR S.A.P.E.M.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71183664-7\"}",
        "KeyUnique": "LEDL",
        "Contacts": "",
        "location": "RUTA NACIONAL Nº 38 1017 M:143 BARRIO INDUSTRIAL, La Rioja, Chamical",
        "idEditable": 804
    },
    {
        "Name": "HELIOS ENERGY S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71596551-4\"}",
        "KeyUnique": "HELI",
        "Contacts": "",
        "location": "OLAZABAL 1515 Piso: 10 Dpto:1010, Buenos Aires, C.A.B.A.",
        "idEditable": 805
    },
    {
        "Name": "INGENIERÍA EN CONTROL ELECTRÓNICO Y MECÁNICO S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"ICE020429672\"}",
        "KeyUnique": "ICEM",
        "Contacts": "",
        "location": "RETORNO MARIO VARGAS LLOSA Nº 105-1, México, Chihuahua",
        "idEditable": 806
    },
    {
        "Name": "GESTIÓN DE EMPRENDIMIENTOS DEPORTIVOS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71028354-7\"}",
        "KeyUnique": "EDEP",
        "Contacts": "",
        "location": "PARAGUAY 2060 PISO P.B., Buenos Aires, C.A.B.A.",
        "idEditable": 807
    },
    {
        "Name": "AGROINTEGRAL",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-14737395-4\"}",
        "KeyUnique": "AINT",
        "Contacts": "",
        "location": "RIO NEGRO 946, Santa Fe, EL TREBOL",
        "idEditable": 808
    },
    {
        "Name": "LABORATORIO DE ANÁLISIS DE GRANOS SANTA ROSA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-06557190-1\"}",
        "KeyUnique": "LASR",
        "Contacts": "",
        "location": "AV. FULVIO PAGANI 1153, Córdoba, Arroyito",
        "idEditable": 809
    },
    {
        "Name": "CASA FENK SACIFI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-52345669-1\"}",
        "KeyUnique": "FENK",
        "Contacts": "",
        "location": "AV. JUAN B. ALBERDI 7138, Buenos Aires, C.A.B.A.",
        "idEditable": 810
    },
    {
        "Name": "PRODEMAN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-66908849-9\"}",
        "KeyUnique": "PROD",
        "Contacts": "",
        "location": "RUTA NACIONAL 158  230.5, Córdoba, GENERAL CABRERA",
        "idEditable": 811
    },
    {
        "Name": "TECNOLOGÍA Y SERVICIO S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"TSE960126F20\"}",
        "KeyUnique": "TYSS",
        "Contacts": "",
        "location": "PONIENTE 126 A Nº 400 - COL. NUEVA VALLEJO, MEXICO, MEXICO D.F",
        "idEditable": 812
    },
    {
        "Name": "CALIOTTI LEONARDO JAVIER",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22896345-4\"}",
        "KeyUnique": "CALI",
        "Contacts": "",
        "location": "MAIPÚ 1699, Santa Fe, Rosario",
        "idEditable": 813
    },
    {
        "Name": "APUM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71642128-3\"}",
        "KeyUnique": "APUM",
        "Contacts": "",
        "location": "LAVALLE 1619 PISO 1 DPTO. G, Buenos Aires, C.A.B.A.",
        "idEditable": 814
    },
    {
        "Name": "ELECTROLUX DO BRASIL",
        "Document": "{\"type\":\"ID Imp.\",\"value\":20076136476}",
        "KeyUnique": "ELBR",
        "Contacts": "",
        "location": "Rua Ministro Gabriel Passos, 360, Paraná, Curitiba",
        "idEditable": 815
    },
    {
        "Name": "ENERGIZER ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70733953-1\"}",
        "KeyUnique": "ENAR",
        "Contacts": "",
        "location": "SUIPACHA 1111 PISO 11, Buenos Aires, C.A.B.A.",
        "idEditable": 816
    },
    {
        "Name": "BGH S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71129196-6\"}",
        "KeyUnique": "BGH ",
        "Contacts": "",
        "location": "BRASIL 731, Buenos Aires, C.A.B.A.",
        "idEditable": 817
    },
    {
        "Name": "INNARTEC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71093286-3\"}",
        "KeyUnique": "INNA",
        "Contacts": "",
        "location": "SAN LORENZO 630 PISO 19 DPTO. 3, Mendoza, MENDOZA",
        "idEditable": 818
    },
    {
        "Name": "ALIMASC",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-14293562-2\"}",
        "KeyUnique": "ALI ",
        "Contacts": "",
        "location": "LOS NOGALES ( EX AGUAYO ) 3050, Santa Fe, SANTA FÉ",
        "idEditable": 819
    },
    {
        "Name": "NOSACH ANA MARTA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-11205140-1\"}",
        "KeyUnique": "NOSA",
        "Contacts": "",
        "location": "GABASTON 2083, Buenos Aires, LUIS GUILLON",
        "idEditable": 820
    },
    {
        "Name": "SANTA PLANTA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71582721-9\"}",
        "KeyUnique": "SANT",
        "Contacts": "",
        "location": "AV. SAN JUAN 942, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 821
    },
    {
        "Name": "2 SOLVE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71004054-7\"}",
        "KeyUnique": "SOLV",
        "Contacts": "",
        "location": "AV. DIEGO PALMA 1250, Buenos Aires, SAN ISIDRO",
        "idEditable": 822
    },
    {
        "Name": "AGRO CONSTRUCCIONES ESTRELLA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71301250-1\"}",
        "KeyUnique": "ACE ",
        "Contacts": "",
        "location": "COCHABAMBA 1771, Santa Fe, Rosario",
        "idEditable": 823
    },
    {
        "Name": "SOMASI S.A. by BSD SUR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71104052-4\"}",
        "KeyUnique": "SOMA",
        "Contacts": "",
        "location": "General Paz 141 Dpto: S Barrio: Centro, Córdoba, RIO TERCERO",
        "idEditable": 824
    },
    {
        "Name": "MARLEW S.A. by PATAGONIA TOOLS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-58551048-9\"}",
        "KeyUnique": "MARL",
        "Contacts": "",
        "location": "PERU 1815, Buenos Aires, AVELLANEDA",
        "idEditable": 825
    },
    {
        "Name": "QUALITY SYSTEMS GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70945880-5\"}",
        "KeyUnique": "QUSY",
        "Contacts": "",
        "location": "JOSE HERNANDEZ 767, Santa Fe, Rosario",
        "idEditable": 826
    },
    {
        "Name": "JS NORTE INGENIERÍA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71414105-4\"}",
        "KeyUnique": "JSNI",
        "Contacts": "",
        "location": "SAN MARTIN 445, Catamarca, SANTA MARÍA",
        "idEditable": 827
    },
    {
        "Name": "VILLA ZAPPA Y CIA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50343115-3\"}",
        "KeyUnique": "ZAPP",
        "Contacts": "",
        "location": "AV. MITRE 2243, Buenos Aires, 9 DE JULIO",
        "idEditable": 828
    },
    {
        "Name": "LABORATORIO JABA S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"LJA1002049Q6\"}",
        "KeyUnique": "JABA",
        "Contacts": "",
        "location": "JOSÉ MA. SALVATIERRA 17529 GARITA DE OTAY, BAJA CALIFORNIA, MEX, TIJUANA",
        "idEditable": 829
    },
    {
        "Name": "AMPLIEQUIPOS S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"AMP870824DM9\"}",
        "KeyUnique": "AMPL",
        "Contacts": "",
        "location": "URBINA 14 COL. PARQUE INDUSTRIAL NAUCALPAN, Edo. de México, MEX, Naucalpan de Juárez",
        "idEditable": 830
    },
    {
        "Name": "LABORATORIO ATC MEXICO S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"LAM080415JH9\"}",
        "KeyUnique": "ATC ",
        "Contacts": "",
        "location": "JACINTO CANEK 15-A, COL. SAN JUAN IXHUATEPEC, Edo. de México, MEX, TLANEPANTLA",
        "idEditable": 831
    },
    {
        "Name": "AKSI HERRAMIENTAS S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"AHE070309N12\"}",
        "KeyUnique": "AKSI",
        "Contacts": "",
        "location": "Av. Universidad s/n Col. La Palma, Edo. de México, MEX, CUAUTITLAN",
        "idEditable": 832
    },
    {
        "Name": "RP HOGAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71569486-3\"}",
        "KeyUnique": "EIFF",
        "Contacts": "",
        "location": "COSQUIN 2464, ESQ. AV. DE LOS CORRALES, C.A.B.A., MATADEROS",
        "idEditable": 833
    },
    {
        "Name": "COMPAÑIA ARGENTINA DE MERCHANDISING S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70913513-5\"}",
        "KeyUnique": "NEBA",
        "Contacts": "",
        "location": "CHICLANA 102, Buenos Aires, LA TABLADA",
        "idEditable": 834
    },
    {
        "Name": "ANTONIO MENDEZ",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-20452654-1\"}",
        "KeyUnique": "ANME",
        "Contacts": "",
        "location": "COLECTORA 212, Río Negro, BALNEARIO LAS GRUTAS",
        "idEditable": 835
    },
    {
        "Name": "SERVICIOS DE ANALISIS TECNICOS, SA DE CV",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"SAT 940824 J37\"}",
        "KeyUnique": "SEAT",
        "Contacts": "",
        "location": "MANUEL NICOLÁS CORPANCHO Nº 364, CIUDAD DE MEXICO, COL.  LORENZO BOTURINI",
        "idEditable": 836
    },
    {
        "Name": "ALETHEIAS BIOSEEDLAR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-16747335-1\"}",
        "KeyUnique": "ALET",
        "Contacts": "",
        "location": "MILICIAS ORIENTALES 703, Buenos Aires, ITUZAINGO",
        "idEditable": 837
    },
    {
        "Name": "METALÚRGICA ELECTROSTYLE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71511040-3\"}",
        "KeyUnique": "ESTY",
        "Contacts": "",
        "location": "SAN JORGE 4477, Buenos Aires, CASEROS",
        "idEditable": 838
    },
    {
        "Name": "BELQUIM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69530250-5\"}",
        "KeyUnique": "BELQ",
        "Contacts": "",
        "location": "Tronador 2822, Buenos Aires, C.A.B.A.",
        "idEditable": 839
    },
    {
        "Name": "DEPIMIEL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70901194-0\"}",
        "KeyUnique": "DEPI",
        "Contacts": "",
        "location": "ANGEL PINI 4560, Buenos Aires, CASEROS",
        "idEditable": 840
    },
    {
        "Name": "RETEPLAST S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70853854-6\"}",
        "KeyUnique": "RETE",
        "Contacts": "",
        "location": "ANASTACIO GONZÁLEZ 5518, Buenos Aires, SAN MARTIN",
        "idEditable": 841
    },
    {
        "Name": "INELECTO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70902341-8\"}",
        "KeyUnique": "INEL",
        "Contacts": "",
        "location": "DOMINGO FRENCH, Buenos Aires, VILLA MARTELLI",
        "idEditable": 842
    },
    {
        "Name": "COMERCIAL ALPACA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70721269-8\"}",
        "KeyUnique": "ALPA",
        "Contacts": "",
        "location": "ZELAYA 3087, Buenos Aires, C.A.B.A.",
        "idEditable": 843
    },
    {
        "Name": "CIMET S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50282973-0\"}",
        "KeyUnique": "CIME",
        "Contacts": "",
        "location": "CALLE 47   8029, Buenos Aires, JOSE LEON SUAREZ",
        "idEditable": 844
    },
    {
        "Name": "ELECTROMETAL LATINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70842993-3\"}",
        "KeyUnique": "ELAT",
        "Contacts": "",
        "location": "CATRIEL 4315, Buenos Aires, LA TABLADA",
        "idEditable": 845
    },
    {
        "Name": "CARTONALE INDUSTRIA MATERIALES PLÁSTICOS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71538439-2\"}",
        "KeyUnique": "CART",
        "Contacts": "",
        "location": "ALICIA M. JUSTO 1150 OF. 306A, Buenos Aires, C.A.B.A.",
        "idEditable": 846
    },
    {
        "Name": "NETOOLS S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71667014-3\"}",
        "KeyUnique": "NETO",
        "Contacts": "",
        "location": "AV. ALMTE. BROWN Nº 772, Buenos Aires, C.A.B.A.",
        "idEditable": 847
    },
    {
        "Name": "INDUXPORT S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69482391-9\"}",
        "KeyUnique": "INDX",
        "Contacts": "",
        "location": "SERAPIO VILLEGAS 1266, Buenos Aires, HAEDO",
        "idEditable": 848
    },
    {
        "Name": "MONTAJES ROSARIO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-18378778-6\"}",
        "KeyUnique": "MORO",
        "Contacts": "",
        "location": "HUMBERTO PRIMO 1722, Santa Fe, Rosario",
        "idEditable": 849
    },
    {
        "Name": "ITASOL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70957201-2\"}",
        "KeyUnique": "ITAS",
        "Contacts": "",
        "location": "LAMADRID 468 NAVE 2 - P. 1 - OF. 6, Santa Fe, Rosario",
        "idEditable": 850
    },
    {
        "Name": "LA AGRÍCOLA REGIONAL COOPERATIVA LIMITADA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-50404708-9\"}",
        "KeyUnique": "AREG",
        "Contacts": "",
        "location": "MORENO 1404, Entre Ríos, CRESPO",
        "idEditable": 851
    },
    {
        "Name": "PETROVINA",
        "Document": "{\"type\":\"ID Imp.\",\"value\":287640990}",
        "KeyUnique": "PTRO",
        "Contacts": "",
        "location": "Fazenda Farroupilha - Zona Rural, Mato Grosso - BRASIL, Pedra Preta",
        "idEditable": 852
    },
    {
        "Name": "MAYCAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-61286533-3\"}",
        "KeyUnique": "MAYC",
        "Contacts": "",
        "location": "AV. CHORROARIN 1002, Buenos Aires, C.A.B.A.",
        "idEditable": 853
    },
    {
        "Name": "HECTOR VILLARROEL by PATAGONIA TOOLS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71663389-2\"}",
        "KeyUnique": "HEVI",
        "Contacts": "",
        "location": "Alem s/n Monoblock 50, 2do Piso Barrio Manantial, San Juan, San Juan",
        "idEditable": 854
    },
    {
        "Name": "DAMFER S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62446716-3\"}",
        "KeyUnique": "DAMF",
        "Contacts": "",
        "location": "AV. ANDRES BARANDA 742, Buenos Aires, Quilmes",
        "idEditable": 855
    },
    {
        "Name": "AUTOSAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60655239-0\"}",
        "KeyUnique": "AUTO",
        "Contacts": "",
        "location": "ECHEVERRÍA 930, Buenos Aires, FLORIDA",
        "idEditable": 856
    },
    {
        "Name": "DROGUERÍA COMARSA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70708588-2\"}",
        "KeyUnique": "DCOM",
        "Contacts": "",
        "location": "JUJUY 2944, Santa Fe, Rosario",
        "idEditable": 857
    },
    {
        "Name": "INILAB S.L.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"B81620445\"}",
        "KeyUnique": "INLA",
        "Contacts": "",
        "location": "CALLE HERMANOS LUMIERE 2, MADRID, ESP, ARGANDA DEL REY",
        "idEditable": 858
    },
    {
        "Name": "DEPORTE TOTAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68727156-0\"}",
        "KeyUnique": "DEPT",
        "Contacts": "",
        "location": "MONTEVIDEO 1536, Buenos Aires, C.A.B.A.",
        "idEditable": 859
    },
    {
        "Name": "HARDCORE FITNESS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71527940-8\"}",
        "KeyUnique": "HARD",
        "Contacts": "",
        "location": "FRANKLIN ROOSVELT 5814, Buenos Aires, C.A.B.A.",
        "idEditable": 860
    },
    {
        "Name": "MELEX ARGENTINA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67875238-6\"}",
        "KeyUnique": "MELE",
        "Contacts": "",
        "location": "BOULOGNE SUR MER 2749, Buenos Aires, DON TORCUATO",
        "idEditable": 861
    },
    {
        "Name": "JH BOURLOT S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64138893-5\"}",
        "KeyUnique": "BOUR",
        "Contacts": "",
        "location": "SARACHAGA 27, Córdoba, CORDOBA",
        "idEditable": 862
    },
    {
        "Name": "ENERGE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71140917-9\"}",
        "KeyUnique": "ENRG",
        "Contacts": "",
        "location": "CARRIL RODRIGUEZ PEÑA 2115, Mendoza, MAIPU",
        "idEditable": 863
    },
    {
        "Name": "JOSÉ TAMBURRINI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-10858921-4\"}",
        "KeyUnique": "JOTA",
        "Contacts": "",
        "location": "AVELLANEDA 987, Córdoba, MARCO JUAREZ",
        "idEditable": 864
    },
    {
        "Name": "UVC SOLUCIONES S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71685953-9\"}",
        "KeyUnique": "UVC ",
        "Contacts": "",
        "location": "AV. EVA PERÓN 8945, Santa Fe, Rosario",
        "idEditable": 865
    },
    {
        "Name": "ECOZONO S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71662030-8\"}",
        "KeyUnique": "ECOZ",
        "Contacts": "",
        "location": "BUENOS AIRES 1201, Santa Fe, Rosario",
        "idEditable": 866
    },
    {
        "Name": "IÑIGUEZ ISABEL OFELIA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-06434958-4\"}",
        "KeyUnique": "ATEN",
        "Contacts": "",
        "location": "GUTEMBERG 847, Santa Fe, Rosario",
        "idEditable": 867
    },
    {
        "Name": "AMETEK SOLIDSTATE CONTROLS DE ARGENTINA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-58735561-9\"}",
        "KeyUnique": "AMTK",
        "Contacts": "",
        "location": "OLIVÉ 1954, Santa Fe, Rosario",
        "idEditable": 868
    },
    {
        "Name": "ALL KAISEN & LEAN S.A. DE C.V.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"AKA171116QB2\"}",
        "KeyUnique": "AKAI",
        "Contacts": "",
        "location": "Cafetal Nº 139 B Col. Granjas México, Ciudad de México, Iztacalco",
        "idEditable": 869
    },
    {
        "Name": "PROYECCIÓN ELECTROLUZ S.R.L.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"30-60127190-3\"}",
        "KeyUnique": "ELUZ",
        "Contacts": "",
        "location": "PATRICIO DIEZ 175, SANTA FÉ, RECONQUISTA",
        "idEditable": 870
    },
    {
        "Name": "SIEMENS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50336489-8\"}",
        "KeyUnique": "SIEM",
        "Contacts": "",
        "location": "JULIAN SEGUNDO AGÜERO 2830, Buenos Aires, MUNRO",
        "idEditable": 871
    },
    {
        "Name": "LUG ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71574286-8\"}",
        "KeyUnique": "LUG ",
        "Contacts": "",
        "location": "CALLE 62 Y 239 PIIP, Misiones, POSADAS",
        "idEditable": 872
    },
    {
        "Name": "AZIENDA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71569742-0\"}",
        "KeyUnique": "AZIE",
        "Contacts": "",
        "location": "ANDALGALA 2244 - BARIO MATADEROS, Buenos Aires, C.A.B.A.",
        "idEditable": 873
    },
    {
        "Name": "DROMEL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71690377-6\"}",
        "KeyUnique": "DROM",
        "Contacts": "",
        "location": "TRES ARROYOS 2046 - BARRIO VILLA GRAL MITRE, Buenos Aires, C.A.B.A.",
        "idEditable": 874
    },
    {
        "Name": "SCARPIGNATO S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71616789-1\"}",
        "KeyUnique": "SCAR",
        "Contacts": "",
        "location": "LAS FLORES 3290, Santa Fe, Rosario",
        "idEditable": 875
    },
    {
        "Name": "MILICIC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62231778-4\"}",
        "KeyUnique": "MILI",
        "Contacts": "",
        "location": "AV. PTE. PERÓN 8110, Santa Fe, Rosario",
        "idEditable": 876
    },
    {
        "Name": "LIBSON",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70913513-5\"}",
        "KeyUnique": "LIBS",
        "Contacts": "",
        "location": "CHICLANA 102, Buenos Aires, LA TABLADA",
        "idEditable": 877
    },
    {
        "Name": "LABORATORIO DOBLE NN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-29711576-7\"}",
        "KeyUnique": "LANN",
        "Contacts": "",
        "location": "Ruta Nacional 89, KM 385,5, Santiago del Estero, QUIMILI",
        "idEditable": 878
    },
    {
        "Name": "LABORATORIO AGRÍCOLA VENADO TUERTO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-06705415-1\"}",
        "KeyUnique": "LAVT",
        "Contacts": "",
        "location": "CALLE LÓPEZ 1285, Santa Fe, VENADO TUERTO",
        "idEditable": 879
    },
    {
        "Name": "LABORATORIO TECNOLÓGICO DEL URUGUAY",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"214110970015\"}",
        "KeyUnique": "LATU",
        "Contacts": "",
        "location": "AV. ITALIA 6201, MONTEVIDEO, URUGUAY, MONTEVIDEO",
        "idEditable": 880
    },
    {
        "Name": "MINISTERIO DE EDUCACIÓN DE LA PROVINCIA DE CÓRDOBA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-99925244-9\"}",
        "KeyUnique": "MECO",
        "Contacts": "",
        "location": "SANTA ROSA 751, PISO 3, BARRIO CENTRO NORTE, Córdoba, CORDOBA",
        "idEditable": 881
    },
    {
        "Name": "SPRINT ELECTRONICS",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71699467-4\"}",
        "KeyUnique": "SPRI",
        "Contacts": "",
        "location": "AV. JUAN DE GARAY 2350, Buenos Aires, C.A.B.A.",
        "idEditable": 882
    },
    {
        "Name": "OFICINA TÉCNICA VEGA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-24980386-4\"}",
        "KeyUnique": "OTEV",
        "Contacts": "",
        "location": "GÜEMES (SUR) 333 PISO: 1 DPTO: OF-5, San Juan, San Juan",
        "idEditable": 883
    },
    {
        "Name": "IMPORTACIONES NORCOMEX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71544565-0\"}",
        "KeyUnique": "IMNO",
        "Contacts": "",
        "location": "CUYO 2355 PISO 2 DPTO. A, Buenos Aires, MARTINEZ",
        "idEditable": 884
    },
    {
        "Name": "MR CONEXIONES de Antonia H. Avolio",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-13555986-0\"}",
        "KeyUnique": "MRCO",
        "Contacts": "",
        "location": "CORDOBA 1281, Buenos Aires, MORON",
        "idEditable": 885
    },
    {
        "Name": "METALURGICA SAN PATRICIO S.H.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-62602806-9\"}",
        "KeyUnique": "SPAT",
        "Contacts": "",
        "location": "CALLE 111 N° 511/17, Buenos Aires, MERCEDES",
        "idEditable": 886
    },
    {
        "Name": "SILKE ROGELIO FABIÁN - AMBIENTAR",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-21080445-6\"}",
        "KeyUnique": "SLKE",
        "Contacts": "",
        "location": "Av. Monteagudo 2121 Entre las calles: Herrera - Re, Misiones, POSADAS",
        "idEditable": 887
    },
    {
        "Name": "WHEEL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69543335-9\"}",
        "KeyUnique": "WHEE",
        "Contacts": "",
        "location": "LA REPÚBLICA 7136, Santa Fe, Rosario",
        "idEditable": 888
    },
    {
        "Name": "ARLUX S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71604352-1\"}",
        "KeyUnique": "ARLU",
        "Contacts": "",
        "location": "HERRERA 1855, Buenos Aires, C.A.B.A.",
        "idEditable": 889
    },
    {
        "Name": "TROX ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70820788-4\"}",
        "KeyUnique": "TROX",
        "Contacts": "",
        "location": "TIMBO 2610 - PARQUE IND. BURZACO, Buenos Aires, ALMIRANTE BROWN",
        "idEditable": 890
    },
    {
        "Name": "LPA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71425586-6\"}",
        "KeyUnique": "LPA ",
        "Contacts": "",
        "location": "Goyena 1149, Santa Fe, Rosario",
        "idEditable": 891
    },
    {
        "Name": "SUMINISTROS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71480309-9\"}",
        "KeyUnique": "SUMI",
        "Contacts": "",
        "location": "GIANELLI 550 Bº GENERAL BUSTOS, Córdoba, CORDOBA",
        "idEditable": 892
    },
    {
        "Name": "SONIA CARINA GARCÍA PAEZ",
        "Document": "{\"type\":\"CUIT\",\"value\":\"21-28223472-1\"}",
        "KeyUnique": "GARP",
        "Contacts": "",
        "location": "PARAGUAY 783, Tucumán, YERBA BUENA",
        "idEditable": 893
    },
    {
        "Name": "HL CATAMARCA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71678659-1\"}",
        "KeyUnique": "HLCA",
        "Contacts": "",
        "location": "RUTA NACIONAL 38 KM 1304 - BARRIO EL PANTANILLO, Catamarca, Sn Fdo del Valle de Catamarca",
        "idEditable": 894
    },
    {
        "Name": "IMEFF S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71624612-0\"}",
        "KeyUnique": "IMEF",
        "Contacts": "",
        "location": "RUTA 38 1315 ÁREA IND. EL PANTANILLO, Catamarca, Sn Fdo del Valle de Catamarca",
        "idEditable": 895
    },
    {
        "Name": "MEDIO MEDICO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-57051358-9\"}",
        "KeyUnique": "MMED",
        "Contacts": "",
        "location": "PASCO 3250, Santa Fe, Rosario",
        "idEditable": 896
    },
    {
        "Name": "HECTOR SAPPIA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-16076645-0\"}",
        "KeyUnique": "SAPP",
        "Contacts": "",
        "location": "AVDA JORGE CURA 2649, Santa Fe, Rosario",
        "idEditable": 897
    },
    {
        "Name": "GOLAU S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71339280-0\"}",
        "KeyUnique": "GOLA",
        "Contacts": "",
        "location": "MARCELO T. DE ALVEAR, Buenos Aires, C.A.B.A.",
        "idEditable": 898
    },
    {
        "Name": "ROBERTO LUIS BAROFFI",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-11445622-6\"}",
        "KeyUnique": "BARO",
        "Contacts": "",
        "location": "GALICIA 539, Santa Fe, Rosario",
        "idEditable": 899
    },
    {
        "Name": "MARTIÍN MIGUEL SEERY",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-22163552-4\"}",
        "KeyUnique": "SEER",
        "Contacts": "",
        "location": "Agustín Álvarez 2001, Buenos Aires, 9 DE JULIO",
        "idEditable": 900
    },
    {
        "Name": "HIDROCOR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70818643-7\"}",
        "KeyUnique": "HIDR",
        "Contacts": "",
        "location": "AV. SARMIENTO 2100, Chaco, RESISTENCIA",
        "idEditable": 901
    },
    {
        "Name": "FAG SISTEMS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70975211-8\"}",
        "KeyUnique": "FAG ",
        "Contacts": "",
        "location": "AV. DR. H. PUEYRREDON 1548 PISO 2, Buenos Aires, CAPITAL FEDERAL",
        "idEditable": 902
    },
    {
        "Name": "INGENIERÍA ELECTRÓNICA ARGENTINA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57314064-4\"}",
        "KeyUnique": "IEA ",
        "Contacts": "",
        "location": "Av. Eva Perón 4468, Santa Fe, Rosario",
        "idEditable": 903
    },
    {
        "Name": "CONSTRUCCIONES INDUSTRIALES Y PORTURIAS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70957201-2\"}",
        "KeyUnique": "CIPS",
        "Contacts": "",
        "location": "DR. RIVA 332, Santa Fe, Rosario",
        "idEditable": 904
    },
    {
        "Name": "GRUPO GRISENTI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71563671-5\"}",
        "KeyUnique": "GRIS",
        "Contacts": "",
        "location": "BELGRANO 1651, Mendoza, GODOY CRUZ",
        "idEditable": 905
    },
    {
        "Name": "CARBONERO ADRIAN CEFERINO",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-33821102-4\"}",
        "KeyUnique": "CARB",
        "Contacts": "",
        "location": "VÉLEZ SARSFIELD 1283, Mendoza, GODOY CRUZ",
        "idEditable": 906
    },
    {
        "Name": "SPOTSLINE S.R.L.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":30709572438}",
        "KeyUnique": "SPOT",
        "Contacts": "",
        "location": "Pedro Ignacio Rivera 5915, Buenos Aires, Carapachay",
        "idEditable": 907
    },
    {
        "Name": "ADVANCE WIRE & WIRELESS LABORATORIOS S.C.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"AW&0501284U9\"}",
        "KeyUnique": "ADVA",
        "Contacts": "",
        "location": "MARIANO ESCOBEDO 164 PB, COL. BARRIO SAN PEDRO, CIUDAD DE MÉXICO, IZTAPALAPA",
        "idEditable": 908
    },
    {
        "Name": "NOTEBOOKS CORDOBA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71494777-6\"}",
        "KeyUnique": "NOTE",
        "Contacts": "",
        "location": "LIMA 332, Córdoba, CORDOBA",
        "idEditable": 909
    },
    {
        "Name": "FRIHEL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70856252-8\"}",
        "KeyUnique": "FRIH",
        "Contacts": "",
        "location": "Calle 49 Nº 6575, Buenos Aires, JOSE LEON SUAREZ",
        "idEditable": 910
    },
    {
        "Name": "JB INTERNATIONAL SERVICE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71093722-9\"}",
        "KeyUnique": "JBIN",
        "Contacts": "",
        "location": "A. T. de Alvear 3867, Buenos Aires, Carapachay",
        "idEditable": 911
    },
    {
        "Name": "GEO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70928771-7\"}",
        "KeyUnique": "GEO ",
        "Contacts": "",
        "location": "SANTA FE 1764, Santa Fe, Rosario",
        "idEditable": 912
    },
    {
        "Name": "INNOVAR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70787506-9\"}",
        "KeyUnique": "IVAR",
        "Contacts": "",
        "location": "AV. JUSTO DARACT INTERSECCIÓN RUTA 147, San Luis, SAN LUIS",
        "idEditable": 913
    },
    {
        "Name": "BIOLEDARG S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71657648-1\"}",
        "KeyUnique": "BLED",
        "Contacts": "",
        "location": "Pedro Tuella 824 BIS Piso 3, Santa Fe, Rosario",
        "idEditable": 914
    },
    {
        "Name": "NAUTICA RECONQUISTA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71684737-9\"}",
        "KeyUnique": "NREC",
        "Contacts": "",
        "location": "MORENO 1453, Santa Fe, RECONQUISTA",
        "idEditable": 915
    },
    {
        "Name": "COOPERATIVA DE TRABAJOS PORTUARIOS LTDA. DE SAN MARTIN",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50693111-4\"}",
        "KeyUnique": "CPOR",
        "Contacts": "",
        "location": "CAYETANO NERBUTTI 256, Santa Fe, Puerto General San Martín",
        "idEditable": 916
    },
    {
        "Name": "TRIANGULAR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60945338-5\"}",
        "KeyUnique": "TRIA",
        "Contacts": "",
        "location": "AGUIRRE 1337, Buenos Aires, C.A.B.A.",
        "idEditable": 918
    },
    {
        "Name": "ACCESORIOS.COM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71037004-0\"}",
        "KeyUnique": "ACCE",
        "Contacts": "",
        "location": "RIVADAVIA, Córdoba, CORDOBA",
        "idEditable": 919
    },
    {
        "Name": "SAN MIGUEL CENTER S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70818345-4\"}",
        "KeyUnique": "SMCE",
        "Contacts": "",
        "location": "SANTA ROSA 240, Santa Fe, RUFINO",
        "idEditable": 920
    },
    {
        "Name": "POSTHAC S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70844708-7\"}",
        "KeyUnique": "POST",
        "Contacts": "",
        "location": "MAZA 1225, Buenos Aires, C.A.B.A.",
        "idEditable": 921
    },
    {
        "Name": "VAN HESSEN CASINGS SAU",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71659859-0\"}",
        "KeyUnique": "VANH",
        "Contacts": "",
        "location": "BV. SAN DIEGO 1948, Santa Fe, V. GDOR. GALVEZ",
        "idEditable": 922
    },
    {
        "Name": "Ingenieria IT - Nicolás Trosce",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-34091044-4\"}",
        "KeyUnique": "INIT",
        "Contacts": "",
        "location": "Primera Junta 518, Santa Fe, GALVEZ",
        "idEditable": 923
    },
    {
        "Name": "NYCE Laboratorios S.C.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":\"NLA010913CD3\"}",
        "KeyUnique": "NYCE",
        "Contacts": "",
        "location": "Alfonso Herrera # 15, México, MEXICO D.F",
        "idEditable": 924
    },
    {
        "Name": "DIAGNOSTICA TELEMEDICINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71711722-7\"}",
        "KeyUnique": "DIAG",
        "Contacts": "",
        "location": "BIEDMA 960, Santa Fe, Rosario",
        "idEditable": 925
    },
    {
        "Name": "IPANCO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70149887-5\"}",
        "KeyUnique": "IPAN",
        "Contacts": "",
        "location": "GUATEMALA 1356, Santa Fe, Rosario",
        "idEditable": 927
    },
    {
        "Name": "GRUPO K & B S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71492936-0\"}",
        "KeyUnique": "KYB ",
        "Contacts": "",
        "location": "AU. ROSARIO-CORDOBA KM 308, Santa Fe, FUNES",
        "idEditable": 928
    },
    {
        "Name": "INVENTU TRAIN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71654879-8\"}",
        "KeyUnique": "INVE",
        "Contacts": "",
        "location": "BIEDMA 9600, Santa Fe, Rosario",
        "idEditable": 929
    },
    {
        "Name": "LIGHTING Y LOGISTICA INTERNACIONAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71286180-7\"}",
        "KeyUnique": "LYLI",
        "Contacts": "",
        "location": "Bvd. 25 de Mayo 175, Córdoba, Morteros",
        "idEditable": 930
    },
    {
        "Name": "DIPROMAS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62459525-0\"}",
        "KeyUnique": "DIPR",
        "Contacts": "",
        "location": "BUENOS AIRES 1702, Córdoba, VILLA MARIA",
        "idEditable": 931
    },
    {
        "Name": "RAXION S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71574065-2\"}",
        "KeyUnique": "RAXI",
        "Contacts": "",
        "location": "CURA BROCHERO 160, Córdoba, Las Varillas",
        "idEditable": 932
    },
    {
        "Name": "CASHER EQUIPAMIENTOS de Godoy Jose Luis",
        "Document": "{\"type\":\"CUIT\",\"value\":\"20-31232831-4\"}",
        "KeyUnique": "CASH",
        "Contacts": "",
        "location": "NEWBERY 4184, Misiones, POSADAS",
        "idEditable": 934
    },
    {
        "Name": "HIFIMAN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71580268-2\"}",
        "KeyUnique": "HIFI",
        "Contacts": "",
        "location": "SARACHAGA 5696, Buenos Aires, C.A.B.A.",
        "idEditable": 935
    },
    {
        "Name": "RUBIKIA S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71661637-8\"}",
        "KeyUnique": "RUBI",
        "Contacts": "",
        "location": "MARCOS PAZ 4617, Santa Fe, Rosario",
        "idEditable": 936
    },
    {
        "Name": "3D ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71370180-3\"}",
        "KeyUnique": "3DAR",
        "Contacts": "",
        "location": "AYACUCHO 656, Entre Ríos, PARANA",
        "idEditable": 937
    },
    {
        "Name": "AGRISEED S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-62891059-2\"}",
        "KeyUnique": "AGRI",
        "Contacts": "",
        "location": "AV. CIRCUNVALACIÓN Y RUTA 188, Buenos Aires, JUNIN",
        "idEditable": 939
    },
    {
        "Name": "TST S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69909788-4\"}",
        "KeyUnique": "TST ",
        "Contacts": "",
        "location": "Colectora Nº 752, Ruta Prov. 4, Buenos Aires, Lavallol",
        "idEditable": 940
    },
    {
        "Name": "ACORDES AROMATICOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71546659-3\"}",
        "KeyUnique": "ACOR",
        "Contacts": "",
        "location": "Calle 7 Nº 6750, Buenos Aires, Platanos",
        "idEditable": 941
    },
    {
        "Name": "CONDUSUR S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71493311-2\"}",
        "KeyUnique": "CSUR",
        "Contacts": "",
        "location": "Calle 53 Nº 2125, Buenos Aires, Necochea",
        "idEditable": 942
    },
    {
        "Name": "IBICO S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-67734906-5\"}",
        "KeyUnique": "IBIC",
        "Contacts": "",
        "location": "BALBASTRO 1711, Buenos Aires, ITUZAINGO",
        "idEditable": 944
    },
    {
        "Name": "MALAGA GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71571327-2\"}",
        "KeyUnique": "MLGA",
        "Contacts": "",
        "location": "Eva Peron 8022, Santa Fe, Rosario",
        "idEditable": 945
    },
    {
        "Name": "MEELKO S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71568631-3\"}",
        "KeyUnique": "MEEL",
        "Contacts": "",
        "location": "Octavio Navarro 4364, Córdoba, CORDOBA",
        "idEditable": 946
    },
    {
        "Name": "NAZER S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71159993-9\"}",
        "KeyUnique": "NAZR",
        "Contacts": "",
        "location": "San Juan 4335, Santa Fe, Rosario",
        "idEditable": 947
    },
    {
        "Name": "EMPRESA DE SERVICIOS TÉCNICOS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70938001-6\"}",
        "KeyUnique": "STEC",
        "Contacts": "",
        "location": "San Luis 4329, Santa Fe, Rosario",
        "idEditable": 948
    },
    {
        "Name": "CONCI S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"31-71079618-8\"}",
        "KeyUnique": "CONC",
        "Contacts": "",
        "location": "J. B. Justo 6500, Córdoba, CORDOBA",
        "idEditable": 949
    },
    {
        "Name": "INGENIERIA BOGGIO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-50261312-6\"}",
        "KeyUnique": "BOGG",
        "Contacts": "",
        "location": "Velez Sarfield 699, Santa Fe, Rosario",
        "idEditable": 950
    },
    {
        "Name": "INTEC INGENIERÍA S.A.E.",
        "Document": "{\"type\":\"RUC\",\"value\":\"80004396-0\"}",
        "KeyUnique": "INTC",
        "Contacts": "",
        "location": "Paz del Chaco No. 658, Paraguay, Lambaré, Dpto. Central",
        "idEditable": 951
    },
    {
        "Name": "BLUMAREL S.A.",
        "Document": "{\"type\":\"ID Imp.\",\"value\":218837210017}",
        "KeyUnique": "BLUM",
        "Contacts": "",
        "location": "Rincón 468, Uruguay, MONTEVIDEO",
        "idEditable": 954
    },
    {
        "Name": "ARREDOBAGNO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-64127448-4\"}",
        "KeyUnique": "ARRE",
        "Contacts": "",
        "location": "Zapiola 4756, Buenos Aires, C.A.B.A.",
        "idEditable": 955
    },
    {
        "Name": "EQUIPEL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-68447614-5\"}",
        "KeyUnique": "EQPL",
        "Contacts": "",
        "location": "Félix San Martín 2322, Neuquén, Neuquén",
        "idEditable": 956
    },
    {
        "Name": "VOIP EXPERTS S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71224933-8\"}",
        "KeyUnique": "VOIP",
        "Contacts": "",
        "location": "Juan de Avila y Zarate 2034, 1º Piso \"A\", Córdoba, CORDOBA",
        "idEditable": 957
    },
    {
        "Name": "INVENTU CITY S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71687710-4\"}",
        "KeyUnique": "CITY",
        "Contacts": "",
        "location": "San Martin 3773, Santa Fe, Rosario",
        "idEditable": 958
    },
    {
        "Name": "PARQUE PAMPA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-57986601-9\"}",
        "KeyUnique": "PPAM",
        "Contacts": "",
        "location": "Darwin Passaponti 6602, Pque. Ind. Del Oeste, Buenos Aires, Moreno",
        "idEditable": 959
    },
    {
        "Name": "POWER SYSTEMS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70791053-0\"}",
        "KeyUnique": "POSY",
        "Contacts": "",
        "location": "Agustin Alvarez 3555, Buenos Aires, VILLA MARTELLI",
        "idEditable": 960
    },
    {
        "Name": "TECNO ESTAMPA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70844809-1\"}",
        "KeyUnique": "STAM",
        "Contacts": "",
        "location": "Las Heras 3736, Buenos Aires, VILLA MARTELLI",
        "idEditable": 961
    },
    {
        "Name": "BARREL AMERICA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71550155-0\"}",
        "KeyUnique": "BARR",
        "Contacts": "",
        "location": "Bvd. Del Mirador 290, Piso 5 Dto. 09, Nordelta, Buenos Aires, TIGRE",
        "idEditable": 963
    },
    {
        "Name": "ROSSFER IMPORT S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71702912-3\"}",
        "KeyUnique": "ROSS",
        "Contacts": "",
        "location": "Balcarce 98, Buenos Aires, Lomas de Zamora",
        "idEditable": 964
    },
    {
        "Name": "RUBENJUVE S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71462864-6\"}",
        "KeyUnique": "JUVE",
        "Contacts": "",
        "location": "Galvan 3230, C.A.B.A., C.A.B.A.",
        "idEditable": 965
    },
    {
        "Name": "REALTEX S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70760754-4\"}",
        "KeyUnique": "RTEX",
        "Contacts": "",
        "location": "Av. Gaona 3561, Buenos Aires, C.A.B.A.",
        "idEditable": 966
    },
    {
        "Name": "NATIONAL EXPRESS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70722280-4\"}",
        "KeyUnique": "NAEX",
        "Contacts": "",
        "location": "Rio Negro 6442, Santa Fe, Rosario",
        "idEditable": 967
    },
    {
        "Name": "EASING GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71455069-8\"}",
        "KeyUnique": "EASI",
        "Contacts": "",
        "location": "Segundo Blanco 1356, Pilar, Córdoba, Rio Segundo",
        "idEditable": 968
    },
    {
        "Name": "ACORD GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71455513-4\"}",
        "KeyUnique": "ACRD",
        "Contacts": "",
        "location": "Segundo Blanco 1356, Pilar, Córdoba, Rio Segundo",
        "idEditable": 969
    },
    {
        "Name": "FIDECAL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-55294500-6\"}",
        "KeyUnique": "FIDE",
        "Contacts": "",
        "location": "Corrientes 729, Piso 8, Of. 803-804, Santa Fe, Rosario",
        "idEditable": 970
    },
    {
        "Name": "BIDCOM S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71106936-0\"}",
        "KeyUnique": "BIDC",
        "Contacts": "",
        "location": "Av. Bouchard 468, Buenos Aires, C.A.B.A.",
        "idEditable": 971
    },
    {
        "Name": "SUSTENTATOR S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71117282-9\"}",
        "KeyUnique": "SUST",
        "Contacts": "",
        "location": "Tapalque 6260, Buenos Aires, C.A.B.A.",
        "idEditable": 972
    },
    {
        "Name": "LUDADEL S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71510645-7\"}",
        "KeyUnique": "LUDA",
        "Contacts": "",
        "location": "Av. Ricardo Balbín 2457, Buenos Aires, Billinghurst - San Martín",
        "idEditable": 973
    },
    {
        "Name": "SSI Schaefer Ltda.",
        "Document": "{\"type\":\"CUIT\",\"value\":30711202540}",
        "KeyUnique": "SSI ",
        "Contacts": "",
        "location": "Coronel Loza 7198, Pque. Ind. Los Polígonos (U27), Santa Fe, SANTA FÉ",
        "idEditable": 974
    },
    {
        "Name": "GRAMON GROUP S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":33714169799}",
        "KeyUnique": "GRAM",
        "Contacts": "",
        "location": "Suipacha 2645, Buenos Aires, Lanus Este",
        "idEditable": 975
    },
    {
        "Name": "FRANCO ADRIÁN SARDÁ",
        "Document": "{\"type\":\"CUIT\",\"value\":23371779639}",
        "KeyUnique": "SARD",
        "Contacts": "",
        "location": "Diagonal Garibaldi 5630, Buenos Aires, MAR DEL PLATA",
        "idEditable": 976
    },
    {
        "Name": "LUMINATEC S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":30716227614}",
        "KeyUnique": "LUMI",
        "Contacts": "",
        "location": "Av. L. N. Alem 1026, Piso 4, Depto H, Buenos Aires, C.A.B.A.",
        "idEditable": 977
    },
    {
        "Name": "PROTAN S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30680469276}",
        "KeyUnique": "PROT",
        "Contacts": "",
        "location": "Catamarca 1207, Santa Fe, ROLDAN",
        "idEditable": 978
    },
    {
        "Name": "GMRA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30715621866}",
        "KeyUnique": "GMRA",
        "Contacts": "",
        "location": "Av. Del Libertador 6350, Piso 3, Buenos Aires, C.A.B.A.",
        "idEditable": 979
    },
    {
        "Name": "PAULKIHN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":30710826052}",
        "KeyUnique": "PAUL",
        "Contacts": "",
        "location": "Prof. Ruben A. Turi 61, Entre Ríos, PARANA",
        "idEditable": 980
    },
    {
        "Name": "IMPOMOTORS ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30709772135}",
        "KeyUnique": "IMPO",
        "Contacts": "",
        "location": "Gral. J.J De urquiza 1756 PB, Buenos Aires, FLORIDA",
        "idEditable": 981
    },
    {
        "Name": "INDUSTRIAS PUGLIESE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30547847586}",
        "KeyUnique": "PSA ",
        "Contacts": "",
        "location": "Aristobulo del Valle 1180, Buenos Aires, Lanus Oeste",
        "idEditable": 982
    },
    {
        "Name": "RESET ARGENTINA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":30709589942}",
        "KeyUnique": "RESE",
        "Contacts": "",
        "location": "Av. Julio A. Roca 738, Córdoba, CORDOBA",
        "idEditable": 983
    },
    {
        "Name": "TERMOFUSORAS GASSMAN S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":30714904260}",
        "KeyUnique": "GASS",
        "Contacts": "",
        "location": "J. J. Paso 656, Buenos Aires, MORON",
        "idEditable": 984
    },
    {
        "Name": "CABRALES S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30537745742}",
        "KeyUnique": "CABR",
        "Contacts": "",
        "location": "Rivadavia 3171, Buenos Aires, MAR DEL PLATA",
        "idEditable": 985
    },
    {
        "Name": "INDUSTRIAS MAR S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71686122-4\"}",
        "KeyUnique": "IMAR",
        "Contacts": "",
        "location": "Carlos Gauss 5619, Córdoba, Villa Belgrano ",
        "idEditable": 986
    },
    {
        "Name": "CET S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30708160853}",
        "KeyUnique": "CET ",
        "Contacts": "",
        "location": "Juan Bautista Daniel 1946, Córdoba, CORDOBA",
        "idEditable": 987
    },
    {
        "Name": "DANIEL JORGE ESTEBAN",
        "Document": "{\"type\":\"CUIT\",\"value\":20166805490}",
        "KeyUnique": "EYDE",
        "Contacts": "",
        "location": "Torcuato De Alvear 2993, Buenos Aires, Quilmes",
        "idEditable": 988
    },
    {
        "Name": "GO GLOBAL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30715564544}",
        "KeyUnique": "GOGL",
        "Contacts": "",
        "location": "Ugarteche 3145, 4to \"B\", Buenos Aires, C.A.B.A.",
        "idEditable": 989
    },
    {
        "Name": "KOVAR ARGENTINA S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30716771632}",
        "KeyUnique": "KOVA",
        "Contacts": "",
        "location": "Perito Moreno 845, P.I. Canning, Etapa 2, Nave 61B, Buenos Aires, Canning",
        "idEditable": 990
    },
    {
        "Name": "VALLS S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30542071741}",
        "KeyUnique": "VALL",
        "Contacts": "",
        "location": "Irala 433, Buenos Aires, C.A.B.A.",
        "idEditable": 991
    },
    {
        "Name": "CFL UOM",
        "Document": "{\"type\":\"CUIT\",\"value\":\"-\"}",
        "KeyUnique": "CFL ",
        "Contacts": "",
        "location": "Uruguay 960, Santa Fe, Rosario",
        "idEditable": 992
    },
    {
        "Name": "LIFE WILL S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71695175-4\"}",
        "KeyUnique": "LIFE",
        "Contacts": "",
        "location": "Av. De Los Incas 4892, Buenos Aires, C.A.B.A.",
        "idEditable": 993
    },
    {
        "Name": "GRUPO DOMO S.A.S.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71673145-2\"}",
        "KeyUnique": "DOMO",
        "Contacts": "",
        "location": "Av. Rafael Nuñez 3513, Dto. 2, Cerro de Las Rosas, Córdoba, CORDOBA",
        "idEditable": 994
    },
    {
        "Name": "PLASTICOS DEL COMAHUE S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":30611385680}",
        "KeyUnique": "COMA",
        "Contacts": "",
        "location": "Calle 106, entre 6 y 8 - Pque. Ind. Sur, San Luis, SAN LUIS",
        "idEditable": 995
    },
    {
        "Name": "CRIOLLO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-69039221-2\"}",
        "KeyUnique": "CRIO",
        "Contacts": "",
        "location": "Bacacay 5267, Buenos Aires, C.A.B.A.",
        "idEditable": 996
    },
    {
        "Name": "RESISTENCIAS MAR DEL PLATA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70848486-1\"}",
        "KeyUnique": "RMDP",
        "Contacts": "",
        "location": "Gaboto 3545, Buenos Aires, MAR DEL PLATA",
        "idEditable": 997
    },
    {
        "Name": "ACEGAME S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-68851288-9\"}",
        "KeyUnique": "ACEG",
        "Contacts": "",
        "location": "Andres Lamas 1446, Buenos Aires, C.A.B.A.",
        "idEditable": 998
    },
    {
        "Name": "ANTONINI NATALIA PAOLA",
        "Document": "{\"type\":\"CUIT\",\"value\":\"27-26315633-7\"}",
        "KeyUnique": "ANTO",
        "Contacts": "",
        "location": "Blanco Encalada 4540, Buenos Aires, C.A.B.A.",
        "idEditable": 999
    },
    {
        "Name": "FEMAT A.C.E.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"33-71007428-9\"}",
        "KeyUnique": "FEMT",
        "Contacts": "",
        "location": "Peru 590, 3º \"B\", Buenos Aires, C.A.B.A.",
        "idEditable": 1000
    },
    {
        "Name": "HUBELAM S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71176986-9\"}",
        "KeyUnique": "HUBE",
        "Contacts": "",
        "location": "Boedo 373, Buenos Aires, LOMAS DE ZAMORA",
        "idEditable": 1001
    },
    {
        "Name": "AUTOSERVICIO MAYORISTA DIARCO S.A.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-60737179-9\"}",
        "KeyUnique": "DIAR",
        "Contacts": "",
        "location": "Av. De Circunvalación entre El Tallo y El Fruto,, Buenos Aires, EL TALAR",
        "idEditable": 1002
    },
    {
        "Name": "HIKVISION ARGENTINA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-71672322-0\"}",
        "KeyUnique": "HIKV",
        "Contacts": "",
        "location": "Camila O'Gorman 412, Of 1702-1107, Buenos Aires, C.A.B.A.",
        "idEditable": 1003
    },
    {
        "Name": "INDUSTRIAS TAESCA S.R.L.",
        "Document": "{\"type\":\"CUIT\",\"value\":\"30-70927472-0\"}",
        "KeyUnique": "TAE ",
        "Contacts": "",
        "location": "Los Liquidambar S/N, Santa Fe, Carcaraña",
        "idEditable": 1004
    }
]
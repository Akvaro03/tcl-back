
class OType {
    constructor({ Fecha_OT, OT_ID, Empresa, Producto, Marca, Modelo, Fecha_Estimada_Entrega, Cotizacion, Item1, Description1, Importe1, Item2, Description2, Importe2, Item3, Description3, Importe3, TOTAL, Observacion }) {
        this.Date = new Date(refactorDate(Fecha_OT)).getTime()
        this.FechaEstimada = Fecha_Estimada_Entrega
        this.Description = [{ item: Item1, Description: Description1, import: Importe1 },
        { item: Item2, Description: Description2, import: Importe2 },
        { item: Item3, Description: Description3, import: Importe3 }]
        this.Observations = Observacion
        this.Cotizacion = Cotizacion
        this.StateProcess = "End"
        this.FechaVencimiento = ""
        this.Producto = Producto
        this.Availability = null
        this.NormaAplicar = ""
        this.Client = Empresa
        this.Modelo = Modelo
        this.Activities = ""
        this.Factura = null
        this.OTKey = OT_ID
        this.Marca = Marca
        this.IdClient = ""
        this.Contact = ""
        this.Changes = ""
        this.Type = ""
        this.Auth = "0"
    }
}
class Client {
    constructor({ PROVINCIA, LOCALIDAD, Empresa, DIRECCION, KeyUnique, VALUE_DOCUM, TYPE_DOCUM }) {
        this.Name = Empresa.trim()
        this.KeyUnique = KeyUnique
        this.Contacts = ""
        this.Document = JSON.stringify({ type: TYPE_DOCUM, value: VALUE_DOCUM })
        this.location = `${DIRECCION}, ${PROVINCIA}, ${LOCALIDAD}`
    }
}

const refactorDate = (date) => {
    const data = date.split("/")
    return `${data[1]}/${data[0]}/${data[2]}`
}
module.exports = { OType, Client } 
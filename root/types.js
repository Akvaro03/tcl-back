
class OType {
    constructor({ Fecha_OT, OT_ID, Empresa, Producto, Marca, Modelo, Fecha_Estimada_Entrega, Cotizacion, Item1, Description1, Importe1, Item2, Description2, Importe2, Item3, Description3, Importe3, TOTAL, Observacion }) {
        this.Date = new Date(refactorDate(Fecha_OT)).getTime()
        this.FechaEstimada = Fecha_Estimada_Entrega
        this.Description1 = Description1
        this.Description2 = Description2
        this.Description3 = Description3
        this.Observations = Observacion
        this.Cotizacion = Cotizacion
        this.StateProcess = "End"
        this.FechaVencimiento = ""
        this.Producto = Producto
        this.Importe1 = Importe1
        this.Importe2 = Importe2
        this.Importe3 = Importe3
        this.Availability = null
        this.NormaAplicar = ""
        this.Client = Empresa
        this.Modelo = Modelo
        this.Activities = ""
        this.Factura = null
        this.OTKey = OT_ID
        this.Item1 = Item1
        this.Item2 = Item2
        this.Marca = Marca
        this.Item3 = Item3
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
        this.location = JSON.stringify({ direction: DIRECCION, province: PROVINCIA, location: LOCALIDAD })
    }
}

const refactorDate = (date) => {
    const data = date.split("/")
    return `${data[1]}/${data[0]}/${data[2]}`
}
module.exports = {OType, Client} 
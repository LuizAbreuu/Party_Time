const mongoose = require("mongoose")

async function main() {

    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect("STRING DE CONEXÃO")

        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }

}

module.exports = main
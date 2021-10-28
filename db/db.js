const mongoose = require('mongoose')

const url = process.env.URLCONN || "mongodb://localhost:27017"


mongoose.connect(`${url}/notesEtudiants`, err=>{
    if (err) {
        console.log("Erreur de connexon a mongo db", err);
        return
    }
    console.log("Connexion reussie !");
})
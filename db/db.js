const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/notesEtudiants", err=>{
    if (err) {
        console.log("Erreur de connexon a mongo db", err);
        return
    }
    console.log("Connexion reussie !");
})
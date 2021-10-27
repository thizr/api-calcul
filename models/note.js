const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    id_etudiant : {type : String},
    note_etudiant : {type : Number}
})

module.exports = mongoose.model('Note', noteSchema)
const Note = require('../models/note')
const axios = require('axios').default

const host = (process.env.URLHOST || "http://localhost:3000") + "/api-inscription/get-etudiant/"

exports.postNote = (req, res)=>{
    axios.get(`${host + req.body.id_etudiant}`)
      .then((results)=>{
        if (!results.data.results) {
            return res.status(201).json({message : "Etudiant non inscrit !"})
        }
        const note = new Note({
            ...req.body
        })
    
        note.save()
        .then(()=>{
            res.status(201).json({message : "Note enrégistrée !"})
        })
        .catch((err)=>{
            res.status(500).json({message : "Une erreur est survenue"})
        })
      })
      .catch((err)=>{
          console.log(err);
      })
}

exports.getMoyenne = (req, res)=>{
    console.log(req.params.id_etudiant);
    axios.get(`${host}${req.params.id_etudiant}`)
      .then((results)=>{
        if (!results.data.results) {
            return res.status(201).json({message : "Etudiant non inscrit !"})
        }
        Note.find({id_etudiant: req.params.id_etudiant}).select('note_etudiant')
        .then((note)=>{
            let sum=0, i = 0
            
            note.forEach(ele=>{
                i++
                sum = ele.note_etudiant + sum
            })
            
            res.status(200).json({moyenne : sum/i})
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}
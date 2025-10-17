
const express = require('express')      // Import del framework Express

/***************************
    CONFIGURAZIONE ROUTER
****************************/
const router = express.Router()

/*************************
    ROTTE - ENTITA' POST
**************************/

// Index - Mostra lista completa dei post
router.get('/', (req, res) => {
    res.send("Lista dei post");
})

// Show - Mostra un post specifico
router.get('/:id', (req, res) => {
    res.send("Dettagli del post: " + req.params.id);
})

// Create - Crea un nuovo post
router.post('/', (req, res) => {
    res.send("Creato nuovo post");
})

// Update - Aggiorna un post
router.put('/:id', (req, res) => {
    res.send("Aggiornato post: " + req.params.id);
})

// Delete - Elimina un post
router.delete('/:id', (req, res) {
    res.send("Eliminato post: " + req.params.id)
})

/*******************
    EXPORT ROUTER
********************/
module.exports = router; 
const express = require('express');
const router = express.Router();
const formulario = require('../models/formulario'); 

router.post('/register', async (req, res) => {
    try {
        const nuevoformulario = new formulario(req.body);
        const formularioGuardado = await nuevoformulario.save();
        res.status(201).json(formularioGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const formularios = await formulario.find();
        res.json(formularios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
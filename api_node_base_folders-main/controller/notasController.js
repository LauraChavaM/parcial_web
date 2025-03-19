const { Notas } = require("../models");

const getNotas = async (req, res) => { 
    try {
        const notas = await Notas.findAll();
        res.status(200).json(notas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const addNotas = async (req, res) => {
    try {
        const { id_estudiante, materia, nota1, nota2, nota3 } = req.body;
        const notas = await Notas.create({ id_estudiante, materia, nota1, nota2, nota3 });
        //promedio: ((nota.nota1 + nota.nota2 + nota.nota3) / 3)
        res.status(201).json(notas);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}


const updateNotas = async (req, res) => {
    try{
        const{id} = req.params;
        const { id_estudiante, materia, nota1, nota2, nota3 } = req.body;

        const notas = await Notas.findByPk(id);
        if(!notas){
            return res.status(404).json({error: "Notas no encontradas"});
        }

        if(id_estudiante) notas.id_estudiante = id_estudiante;
        if(materia) notas.materia = materia;
        if(nota1) notas.nota1 = nota1;
        if(nota2) notas.nota2 = nota2;
        if(nota3) notas.nota3 = nota3;

        await notas.save();
        return res.status(200).json({message: "notas actualizadas", notas})
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getNotas, addNotas, updateNotas }

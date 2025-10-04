const courseService = require('../services/courseService');

function listCourses(req, res) {
    try {
        const cursos = courseService.getAllCourses();
        res.json(cursos);
    } catch (error) {
        console.error('Error en listCourses:', error);
        res.status(500).json({ error: 'Error al obtener los cursos' });
    }
}

function createCourse(req, res) {
    try {
        const nuevoCurso = req.body;
        const cursoCreado = courseService.createCourse(nuevoCurso);
        res.status(201).json(cursoCreado);
    } catch (error) {
        console.error('Error en createCourse:', error);
        res.status(500).json({ error: 'Error al crear el curso' });
    }
}

module.exports = {
    listCourses,
    createCourse
};

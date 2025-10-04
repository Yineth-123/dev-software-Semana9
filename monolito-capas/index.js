const express = require('express');
const app = express();
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

app.use(express.json());
app.use((err, req, res, next) => {
    console.error('❌ ERROR DETECTADO:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
});

// Endpoints de estudiantes
app.use('/estudiantes', studentRoutes);

// Endpoints de cursos
app.use('/cursos', courseRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

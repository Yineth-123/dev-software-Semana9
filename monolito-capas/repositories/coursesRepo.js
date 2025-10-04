let cursos = [];

const create = (curso) => {
    cursos.push(curso);
    return curso;
};

const findAll = () => {
    return cursos;
};

module.exports = {
    create,
    findAll
};

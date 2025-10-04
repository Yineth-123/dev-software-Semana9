const courseRepo = require('../repositories/coursesRepo');

const createCourse = (cursoData) => {
    return courseRepo.create(cursoData);
};

const getAllCourses = () => {
    return courseRepo.findAll();
};

module.exports = {
    createCourse,
    getAllCourses
};

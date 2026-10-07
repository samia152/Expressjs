let students = [
    {
        id: 1,
        name: "Ali",
        age: 20
    },
    {
        id: 2,
        name: "Sara",
        age: 22
    }
];

const getStudents = (req, res) => {
    res.json(students);
};

const getStudentById = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
};

module.exports = {
    getStudents,
    getStudentById
};
import Student from "../Models/studentModel.js";

export const createStudent = async (req, res) => {
  const students = req.body;
  try {
    const newStudent = new Student({
      firstname: students.firstname,
      lastname: students.lastname,
      location: students.location,
      email: students.email,
      dob: students.dob,
      education: students.education,
      about: students.about,
    });
    await newStudent.save();
    res
      .status(200)
      .json({ message: "student created successfully", data: newStudent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

export const getStudents = async (req, res) => {
  try {
    const getStudent = await Student.find({});
    res.status(201).json({ message: "get all students data", getStudent });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "students not found" });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(201).json({ message: "update successfully", student });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

export const getById = async (req, res) => {
  try {
    const getStudentById = await Student.findById({ _id: req.params.id });
    res
      .status(200)
      .json({ message: "getStudent data Successfully", data: getStudentById });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "User not found" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.deleteOne(
      { _id: req.params.id },
      { new: true }
    );
    res.status(201).json({ message: "deleted successfully", student });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
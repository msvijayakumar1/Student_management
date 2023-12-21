import express from "express";
import {
  createStudent,
  deleteStudent,
  getById,
  getStudents,
  updateStudent,
} from "../Controllers/studentController.js";

const router = express.Router();

router.post("/student/create", createStudent);
router.get("/getStudents", getStudents);
router.put("/updateStudent/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);
router.get("/student/:id", getById);
export default router;

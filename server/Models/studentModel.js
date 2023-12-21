import mongoose from "mongoose";


const studentSchema=mongoose.Schema({
    firstname:{
        type: String,
        required:true,
    },
    lastname:{
        type: String,
        required:true,
    },
    location:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        lowercase:true,
        required:true,
        unique: true,
    },
    dob:{
        type: String,
        required:true,
    },
    education:{
        type: String,
        required:true,
    },
    about:{
        type: String,
        required:true,
    },
})
export const Student=mongoose.model("Student",studentSchema);
export default Student;
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./Database/config.js";
import studentRouter from "./Routers/studentRoutes.js";
dotenv.config();

const app=express();
const port =process.env.PORT;
app.use(cors());
ConnectDB();

app.use(express.json());


app.use("/api",studentRouter)

app.listen(port,()=>{
    console.log(`App is running on port:${port}`)
})
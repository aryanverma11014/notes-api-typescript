import express from 'express';
import dotenv from "dotenv";

import noteRouter from "./routes/note.routes";
import connectDB from './db/connect';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/", noteRouter);


app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});


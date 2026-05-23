import {Router} from "express";
import Note from "../models/Notes";

import { createNote,
         getAllNOtes,
         getNoteById,
         updateNote,
         deleteNote } from "../controllers/note.controllers";

const router = Router();

const notes = [{
    id : 1,
    title: "learn TypeScrip"
},
{
    id: 2,
    title: "build Notes API"
}];

router.get("/",(req, res)=>{
    res.send("welcome to Notes API");
});

router.post("/notes",createNote)

router.get("/notes", getAllNOtes)

router.get("/notes/:id",getNoteById)

router.put("/notes/:id",updateNote)

router.delete("/notes/:id",deleteNote)



export default router;

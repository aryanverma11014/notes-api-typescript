import { Request, Response} from "express";
import Note from "../models/Notes"


// Create a note
export const createNote = async(
    req: Request,
    res: Response
)=>{
    const note = await Note.create({
        title: req.body.title,
    });

    res.json(note);
};

// getting all the notes from database 
export const getAllNOtes = async (
    req: Request,
    res: Response
) =>{
    const notes = await Note.find();
    res.json(notes);
};


// getting only the required note from the database through ID
export const getNoteById = async (
    req: Request,
    res: Response
) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};


// updated notes by ID
export const updateNote = async (
    req: Request,
    res: Response
) => {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,
        { 
            title: req.body.title,
        },
        {
            new: true,
        }
    );

    res.json(updatedNote);
};



// deleting notes by ID
export const deleteNote = async (
    req: Request,
    res: Response
)=> {
    await Note.findByIdAndDelete(req.params.id);
    res.json({
        message: "Note deleted sucessfully"
    });
};



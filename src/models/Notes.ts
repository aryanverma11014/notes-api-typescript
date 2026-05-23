import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
});

const Note = mongoose.model("Notes", noteSchema)

export default Note;
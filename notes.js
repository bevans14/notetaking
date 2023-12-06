const fs = require('fs')


const chalk = require('chalk') // need to configure it to set color scheme


// these functions just 
const addNote = (title, body) => {
    const notes = loadNotes()


    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        }
        )

        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!')) // same output but program is more dynamic
    } else {

        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {

    const notes = loadNotes()
// create an array of notes to keep, uses .filter to find notes to keep
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {

        console.log(chalk.red.inverse('No note found!'))
    }    
}

const listNotes = () => {
    const notes = loadNotes()



    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {


        console.log(note.title)
    }
    )
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    // creating a new file with a string of data
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) // parsing that data so computer understands
    } catch (e) { // if code throws an error return nothing
        return []
    }
}

module.exports = { // this exports multiple files at once because it's an object
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
// exporting these modules because they have their own scope and 
// cannot be accessed outside of this file
// then they need to be loaded in in the other file

// so we wrote all these functions that we could use somewhere else
// must export to reuse

// dont always have  to load in our own functions, we can import npm modules which are prewritten functions
//

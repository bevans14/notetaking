// // before using fs module, you need to load it in by using a required function.
// const fs = require('fs') // require function is how you load in modules like fs (thats why fs is in the ())
// FS is a method that takes 2 paramaters. First is file type, second is the content that goes in the file.
// if you need to know what files to load in, refer to docs
 //call to writefilesync

                    // file type        //file content
fs.writeFileSync('notes.txt', 'this file was created by Node.js')

// !!!!!!!!! require function is loading in modules (prewritten javascript code)
// need to store all that data in a variable

const chalk = require('chalk') // importing chalk module for styling
const yargs = require('yargs') // yargs used for creating interactive commands in node
const notes = require('./notes.js')
// const msg = getNodes()
// console.log(msg)







// if (command === 'add){
//     console.log('adding note')
// }

//!!!! // yargs is a npm package that parses our arguments for us so we dont need to write our own parsing functions

yargs.version('1.1.0') 

// in notes app you need to add, remove, read, and list
// since we'll be working with these commands, they need to be easily accessable
// thats where yargs comes in
// creating an add command


yargs.command({ // we can customize how command should work
    command: 'add', // add is the value
    describe: 'Add a new note', //description just describes what command does
    // handler : function(){
    //     console.log('hi')
    // }
    
    builder: { // builders value is an object. you can define options this command needs to support
        title: {
            describe: 'Note title',
            demandOption: true, // it is now required 
            type: 'string' // it must be a string
        },
        body: { // value of bosy is an object
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { // argument vector
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse(); // parses all arguments using information provided so the program knows what yargs does
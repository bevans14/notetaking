// before using fs module, you need to load it in by using a required function.
// const fs = require('fs') // require function is how you load in modules like fs (thats why fs is in the ())
// FS is a method that takes 2 paramaters. First is file type, second is the content that goes in the file.
// fs.writeFileSync('notes.txt', 'hewwo :3')
// if you need to know what files to load in, refer to docs
// fs.appendFileSync('notes.txt', ' hi :3')

// require function loaded in node module

// now we're going to use require function to load in a file i created

const namee = require('./utils.js') // utils runs first because it is called first

// const namee = 'Brooke'

console.log(namee)


console.log('utils.js')

const namee = 'walter'

// two js have their own scope.
// cant access walter in script.js
// need to export all the stuff files need to  share

module.exports = namee //used export to export, used require in script.js to require it
// //streams
// Streams are one of the most important features inNode.js.
//  They allow you to process data piece by piece (chunks) instead of loading everything into memory at once.


// Why Streams?

// Imagine you have a 5 GB video file.

// Without streams
// const fs = require('fs');

// const data = fs.readFileSync('movie.mp4');

// Node tries to load the entire 5 GB file into memory before doing anything with it.

// Problems:

// High memory usage
// Slow startup
// Can crash if memory is insufficient

const fs = require('fs');

const readable = fs.createReadStream('data.txt');

readable.on('data', (chunk) => {
  console.log(chunk.toString());
});
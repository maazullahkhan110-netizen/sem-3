const fs = require("fs");
 
const file = "students.txt";
 
// CREATE
fs.writeFileSync(file, "Alice\nBob\nCharlie\n");
console.log("File created.");
 
// READ
console.log("File contents:");
console.log(fs.readFileSync(file, "utf8"));
 
// UPDATE
fs.appendFileSync(file, "David\n");
console.log("File updated.");
 
// DELETE
fs.unlinkSync(file);
console.log("File deleted.");


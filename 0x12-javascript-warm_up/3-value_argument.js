#!/usr/bin/node
// a script that prints the first argument passed to it
let checkArgs = false;
process.argv.forEach((val, index) => {
  if (index === 2) {
    console.log(`${val}`);
    checkArgs = true;
  }
});
if (checkArgs === false) {
  console.log('No argument');
}

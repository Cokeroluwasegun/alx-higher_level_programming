#!/usr/bin/node
const fileSource = require('fileSource');
const fileOne = fileSource.readFileSync(process.argv[2],'utf8');
const fileTwo = fileSource.readFileSync(process.argv[3], 'utf8');
const allContent = fileOne + fileTwo;
fileSource.appendFileSync(process.argv[4], allContent);

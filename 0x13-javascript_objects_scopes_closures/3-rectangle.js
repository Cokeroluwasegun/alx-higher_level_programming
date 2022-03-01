#!/usr/bin/node
// Script that creates empty class
class Rectangle {
    constructor (w, h) {
	if (w > 0 && h > 0) {
	    this.width = w;
	    this.height = h;
	}
    }
    // print
     print () {
    let i;
    for (i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
}
module.exports = Rectangle;

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
	or (let i = 0; i < this.height; i++) {
      let rec = '';
      for (let i = 0; i < this.width; i++) {
        rec += 'X';
      }
      console.log(rec);
    }
  }
}
module.exports = Rectangle;

#!/usr/bin/node
// Script that creates empty class
class Rectangle {
    constructor (w, h) {
	if (w > 0 && h > 0) {
	    this.width = w;
	    this.height =h;
	}
    }
    // print
    print () {
    let i;
    for (i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
    // rotate
    rotate () {
	const temp = this.width;
	this.width = this.height;
	this.height = temp;
  }
    // double
    double () {
	this.width *= 2;
	this.height *= 2;
    }
}
module.exports = Rectangle;

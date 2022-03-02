#!/usr/bin/node
// Script that creates empty class
class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }
    // Print
  print () {
    let i;
    for (i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
    // Rotate
  rotate () {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }
    // Double
  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
module.exports = Rectangle;

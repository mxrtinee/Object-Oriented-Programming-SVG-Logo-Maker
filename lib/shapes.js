class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    // Implements rendering logic for a triangle
    return `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}

class Circle extends Shape {
  render() {
    // Implements rendering logic for a circle
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    // Implements rendering logic for a square
    return `<rect x="50" width="200" height="200" fill="${this.color}"/>`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};

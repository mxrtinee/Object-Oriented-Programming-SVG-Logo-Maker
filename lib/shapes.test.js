const {Triangle, Circle, Square} = require("./shapes");

// Triangle Shape
describe("Triangle",()=>{
  test('renders correctly', () => {
    const shape = new Triangle();
    var color = ("red")
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="red"/>`)
   });
});

//Circle Shape
describe('Circle', () => {
  test('renders correctly', () => {
    const shape = new Circle();
    var color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>`)
  });
});

// Square Shape
describe("Square",() => {
  test('renders correctly', () => {
    const shape = new Square();
    var color = "green";
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="green"/>`)
   });
 });

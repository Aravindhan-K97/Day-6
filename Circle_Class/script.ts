type colorData = "Red" | "Blue" | "Purple" | "Black";
class Circle {
  radius: number = 1.0;
  color: colorData = "Red";

  //To create a constructor with optional parameter
  constructor(radius?: number, color?: colorData) {
    if (typeof radius !== "undefined") {
      this.radius = radius;
    }
    if (typeof color !== "undefined") {
      this.color = color;
    }
  }

  //function to get radius value with number as return type
  getRadius(): number {
    return this.radius;
  }

  //function to set radius value
  setRadius(radius: number) {
    this.radius = radius;
  }

  //function to get color value with custom return type colorData
  getColor(): colorData {
    return this.color;
  }

  //function to set the color value
  setColor(color: colorData) {
    this.color = color;
  }

  //To return string of member variables value
  toString(): String {
    return `Radius: ${this.radius} Color: ${this.color}`;
  }

  //To compute and return circle area using radius
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  //To compute and return circle circumference using radius
  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }
}

//Invoking the Circle-class constructor with no parameters
let c1 = new Circle();
console.log("Constructor with no parameters: " + c1.toString());

//Invoking the Circle-class constructor with one parameter
let c2 = new Circle(3.5);
console.log("Constructor with one parameter: " + c2.toString());

//Invoking the Circle-class constructor with all the parameters
let c3 = new Circle(2.2, "Purple");
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area of a Circle: " + c3.getArea());
console.log("Circumference of a Circle: " + c3.getCircumference());

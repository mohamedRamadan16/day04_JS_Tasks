class Veihcle {
  #name;
  #speed;
  #color;

  constructor(_name, _speed, _color) {
    this.Name = _name;
    this.Speed = _speed;
    this.Color = _color;
  }

  set Name(_name) {
    if (_name === "") this.#name = "N/A";
    else this.#name = _name;
  }
  get Name() {
    return this.#name;
  }

  set Speed(_speed) {
    if (_speed === "") this.#speed = 10;
    else this.#speed = _speed;
  }
  get Speed() {
    return this.#speed;
  }

  set Color(_color) {
    if (_color === "") this.#color = "N/A";
    else this.#color = _color;
  }
  get Color() {
    return this.#color;
  }

  toString() {
    return `${this.#name}, ${this.#color}, ${this.Speed}`;
  }
}

class Car extends Veihcle {
  constructor(_name, _speed, _color) {
    super(_name, _speed, _color);
  }

  move() {
    let screenWidth = screen.width - 200;
    let margin = 100;

    let carObj = document.querySelector(".js-car");
    let interval = 20000 / this.Speed;

    setInterval(() => {
      const currentMarginStr = window.getComputedStyle(carObj).marginLeft;
      let currentMargin = parseInt(currentMarginStr, 10);
      if (isNaN(currentMargin)) {
        currentMargin = 0;
      }

      if (currentMargin >= screenWidth) {
        margin *= -1;
        carObj.setAttribute("src", "../images/car2.png");
      } else if (currentMargin <= 100 && margin < 0) {
        margin *= -1;
        carObj.setAttribute("src", "../images/car.png");
      }

      const newMargin = currentMargin + margin;

      carObj.style.marginLeft = newMargin + "px";
    }, interval);
  }
}

class Bike extends Veihcle {
  constructor(_name, _speed, _color) {
    super(_name, _speed, _color);
  }

  move() {
    let screenWidth = screen.width - 200;
    let margin = 100;

    let bikeObj = document.querySelector(".js-bike");
    let interval = 20000 / this.Speed;

    setInterval(() => {
      const currentMarginStr = window.getComputedStyle(bikeObj).marginLeft;
      let currentMargin = parseInt(currentMarginStr, 10);
      if (isNaN(currentMargin)) {
        currentMargin = 0;
      }

      if (currentMargin >= screenWidth) {
        margin *= -1;
        bikeObj.setAttribute("src", "../images/bike2.png");
      } else if (currentMargin <= 100 && margin < 0) {
        margin *= -1;
        bikeObj.setAttribute("src", "../images/bike.webp");
      }

      const newMargin = currentMargin + margin;

      bikeObj.style.marginLeft = newMargin + "px";
    }, interval);
  }
}

let c = new Car("BMW", 100, "red");
c.move();

let b = new Bike("TT", 50, "Black");
b.move();

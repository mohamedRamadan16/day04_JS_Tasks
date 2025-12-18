export class Employee {
  #fName;
  #lName;
  #age;
  #salary;
  constructor(_fName, _lName, _age, _salary) {
    this.Age = _age;
    this.fName = _fName;
    this.lName = _lName;
    this.Salary = _salary;
  }

  set Age(_age) {
    if (_age <= 0) this.#age = 1;
    else this.#age = _age;
  }
  get Age() {
    return this.#age;
  }

  set Salary(_salary) {
    if (_salary <= 0) this.#salary = 1;
    else this.#salary = _salary;
  }
  get Salary() {
    return this.#salary;
  }

  set fName(_name) {
    if (_name === "") _name = "N/A";
    else this.#fName = _name;
  }
  get fName() {
    return this.#fName;
  }

  set lName(_name) {
    if (_name === "") _name = "N/A";
    else this.#lName = _name;
  }
  get lName() {
    return this.#lName;
  }

  toString() {
    return `${this.#fName} ${this.#lName} : ${this.#age} : ${this.#salary}`;
  }
}

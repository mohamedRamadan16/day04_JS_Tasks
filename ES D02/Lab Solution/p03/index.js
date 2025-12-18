import { Employee } from "./Employee.js";
import {
  Emps,
  addEmployee,
  findByName,
  increaseSalary,
} from "./EmployeeOps.js";

let e1 = new Employee("Mohammed", "Ramadan", 23, 5000);
let e2 = new Employee("Ahmed", "Ali", 25, 7000);
let e3 = new Employee("Eman", "Ashraf", 23, 6000);
let e4 = new Employee("Sayed", "Ahmed", 30, 10000);

addEmployee(e1);
addEmployee(e2);
addEmployee(e3);

Emps.forEach((emp) => {
  console.log(emp.toString());
});

let e5 = findByName("Eman");
console.log(e5.toString());

increaseSalary(2000, "Eman");
console.log(e5.toString());

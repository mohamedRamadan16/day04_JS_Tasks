import {Employee} from "./Employee.js";

export let Emps = [];

export function addEmployee(...emps){
  emps.forEach(emp => Emps.push(emp));
}

export function findByName(name){
  return Emps.find(emp => emp.fName === name);
}

export function increaseSalary(amount, empName){
  let e = findByName(empName);
  e.Salary += amount;
}
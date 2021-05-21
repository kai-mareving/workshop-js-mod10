/* global utils */
{
  'use strict';

  //# 1: create a new array with female names only
  const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
  utils.filterArrForFemaleNames(names);

  //# 2: Using the [for] loop, go through each object in employees and create 2 new arrays: employeesNames and employeesSalaries
  const employees = {
    john: {
      name: 'John Doe',
      salary: 3000
    },
    amanda: {
      name: 'Amanda Doe',
      salary: 4000
    },
  };
  utils.filterEmployee(employees);

  //# 3: display in console: sum of all salaries, highest salary, lowest salary
  const salaries = [2000, 3000, 1500, 6000, 3000];
  utils.calculateSalaries(salaries);
}

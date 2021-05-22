/* global utils */
//? uncomment execution of utils{} to see it in action
{
  'use strict';

  //# 1: create a new array with female names only
  const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
  //> utils.filterArrForFemaleNames(names);

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
  //> utils.filterEmployee(employees);

  //# 3: display in console: sum of all salaries, highest salary, lowest salary
  const salaries = [2000, 3000, 1500, 6000, 3000];
  //> utils.calculateSalaries(salaries);

  //# 4: display in the console: total salary, highest salary, lowest salary
  //#4: Tip: try the built-in Object.values method
  const persons = {
    john: 2000,
    amanda: 3000,
    thomas: 1500,
    james: 7300,
    claire: 3000
  };
  //> utils.calcPersonSalaries(persons);

  const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];
  utils.createObjectWithProps(tags);

}

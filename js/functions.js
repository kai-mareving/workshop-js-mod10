const utils = {}; // eslint-disable-line no-unused-vars

const dom = {
  myList: document.getElementById('my-list'),
};

utils.filterArrForFemaleNames = function (arr) {
  const femaleNames = [];

  arr.forEach(name => {
    if (name.endsWith('a')) { //or if(name.slice(-1) === 'a')
      femaleNames.push(name);
    }
  });
  dom.myList.insertAdjacentHTML('beforeend', 'Female names:' + femaleNames + '<br>');
};

utils.filterEmployee = function (employees) {
  const employeeNames = [];
  const employeeSalary = [];

  for (let employeeId in employees) {
    const employee = employees[employeeId];
    const name = employee.name.split(' ')[0];
    employeeNames.push(name);
    employeeSalary.push(employee.salary);
    /*for (let key in employee) {
        const keyValue = employee[key];
        if (key === 'name') { employeeNames.push(keyValue); }
        if (key === 'salary') { employeeSalary.push(keyValue); }
      } */
  }
  dom.myList.insertAdjacentHTML('beforeend', 'employeeNames:' + employeeNames + '<br>' + 'employeeSalary:' + employeeSalary + '<br>');
};

utils.calculateSalaries = function (salaries) {
  let salaryMax = Math.max.apply(Math, salaries);
  let salaryMin = Math.min.apply(Math, salaries);
  let salaryTotal = 0;

  salaries.forEach(function (salary) {
    salaryTotal += salary;
  });
  dom.myList.insertAdjacentHTML('beforeend', 'Salaries=> Min: ' + salaryMin + ' Max: ' + salaryMax + ' Total: ' + salaryTotal+'<br>');
  console.log('salaryMin: ', salaryMin, ' salaryMax: ', salaryMax, ' salaryTotal: ', salaryTotal);
};
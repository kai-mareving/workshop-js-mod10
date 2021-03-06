const utils = {}; // eslint-disable-line no-unused-vars

const dom = {
  listLeft: document.getElementById('list-left'),
  listMain: document.getElementById('list-main'),
  listRight: document.getElementById('list-right'),
};

utils.filterArrForFemaleNames = function (arr) {
  const femaleNames = [];

  arr.forEach(name => {
    if (name.endsWith('a')) { //or if(name.slice(-1) === 'a')
      femaleNames.push(name);
    }
  });
  dom.listLeft.insertAdjacentHTML('beforeend', 'Female names:' + femaleNames + '<br>');
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
  //& dom.listMain.insertAdjacentHTML('beforeend', 'employeeNames:' + employeeNames + '<br>' + 'employeeSalary:' + employeeSalary + '<br>');
  return 'employeeNames:'+employeeNames+'. employeeSalary:'+employeeSalary;
};

utils.calculateSalaries = function (salaries) {
  let salaryMax = Math.max.apply(Math, salaries);
  let salaryMin = Math.min.apply(Math, salaries);
  let salaryTotal = 0;

  salaries.forEach(function (salary) {
    salaryTotal += salary;
  });
  dom.listRight.insertAdjacentHTML('beforeend', 'Salaries=> Min: ' + salaryMin + ' Max: ' + salaryMax + ' Total: ' + salaryTotal+'<br>');
};

utils.calcPersonSalaries = function (persons) {
  let salaries = Object.values(persons);
  let salaryMax = Math.max.apply(Math, salaries);
  let salaryMin = Math.min.apply(Math, salaries);
  let salaryTotal = 0;

  salaries.forEach(function (salary) {
    salaryTotal += salary;
  });

  console.log('calcPersonSalaries:', salaryMax, salaryMin, salaryTotal);
};

utils.createObjectWithProps = function (tags) {
  let uniqueTags = {};

  for (let tag of tags) {
    !uniqueTags[tag] ? uniqueTags[tag] = { appearances: 1 } : uniqueTags[tag].appearances++;
  }

  console.log('From: ', tags); console.log('To: ', uniqueTags);
};
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', dept: 'IT', city: 'New York', email: 'john.doe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', dept: 'HR', city: 'San Francisco', email: 'jane.smith@example.com' },
    { id: 3, firstName: 'Michael', lastName: 'Johnson', dept: 'Finance', city: 'Chicago', email: 'michael.johnson@example.com' },
    { id: 4, firstName: 'Emily', lastName: 'Davis', dept: 'Marketing', city: 'Los Angeles', email: 'emily.davis@example.com' },
    { id: 5, firstName: 'shalini',lastName:'shalu', dept:'IT',city:'SALEM',email:'shalu@gmail.com'}
  ];

  selectedEmployee: Employee = { id: 0, firstName: '', lastName: '', dept: '', city: '', email: '' };

  constructor() { }

  ngOnInit(): void { }

  editEmp(employee: Employee): void {
    this.selectedEmployee = { ...employee };
  }

  updateEmp(): void {
    const index = this.employees.findIndex(emp => emp.id === this.selectedEmployee.id);
    if (index !== -1) {
      this.employees[index] = { ...this.selectedEmployee };
      this.selectedEmployee = { id: 0, firstName: '', lastName: '', dept: '', city: '', email: '' };
    }
  }
  }


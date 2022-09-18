import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // @ts-ignore
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.employeeService.getAll().subscribe(value => {
      this.employees = value
    }, error => {
      if (error.status === 302 && error.statusText === "OK")
        this.employees = error.error;
    });
  }

}

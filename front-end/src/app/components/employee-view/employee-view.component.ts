import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getById(this.route.snapshot.params['id'])
      .subscribe({
        next: v => this.employee = v,
        error: e => console.log(e)
      });
  }

}

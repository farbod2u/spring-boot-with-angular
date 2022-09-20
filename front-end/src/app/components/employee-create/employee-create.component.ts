import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.employeeService.create(this.employee).subscribe({
      next: v => {
        console.log(v);
        this.router.navigate(["/employee-list"]);
      },
      error: e => console.log("error on save employee ==>\n" + e)
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    var id: number = this.route.snapshot.params['id'];

    this.employeeService.getById(id).subscribe(data => {
      this.employee = data;
      console.log(data);
    }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.update(this.employee).subscribe(data => this.router.navigate(['employee-list']),
      error => console.log(error));
  }
}

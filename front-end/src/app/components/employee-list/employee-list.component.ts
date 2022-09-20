import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // @ts-ignore
  employees: Employee[];
  employee: Employee | undefined;

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.employeeService.getAll().subscribe({
      next: v => this.employees = v,
      error: e => console.log(e)
    });
  }

  edit(id: number) {
    this.router.navigate(['employee-edit', id]);
  }

  delete(id: number) {
    if (confirm("Are you sure about delete this record?"))
      this.employeeService.delete(id).subscribe({
        next: v => {
          console.log(v);
          this.getAll();
        }, error: e => console.log(e)
      });
  }

  view(id: number) {
    this.router.navigate(['employee-view', id]);
  }
}

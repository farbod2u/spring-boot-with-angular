import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "/api/v1/employees";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`/*, headers*/);
  }

  create(entity: Employee): Observable<object> {
    return this.httpClient.post(this.baseUrl, entity);
  }

  update(entity: Employee): Observable<object> {
    return this.httpClient.put(this.baseUrl, entity);
  }

  getById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }
}

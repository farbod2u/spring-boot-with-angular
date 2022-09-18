import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
   /* let headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");*/

    // @ts-ignore
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`/*, headers*/);
  }
}

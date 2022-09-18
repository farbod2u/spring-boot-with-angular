import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeCreateComponent} from "./components/employee-create/employee-create.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";

const routes: Routes = [
  {path: 'create', component: EmployeeCreateComponent},
  {path: 'list', component: EmployeeListComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

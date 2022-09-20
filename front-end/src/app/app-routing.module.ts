import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeCreateComponent} from "./components/employee-create/employee-create.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {EmployeeEditComponent} from "./components/employee-edit/employee-edit.component";
import {EmployeeViewComponent} from "./components/employee-view/employee-view.component";

const routes: Routes = [
  {path: 'employee-create', component: EmployeeCreateComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-edit/:id', component: EmployeeEditComponent},
  {path: 'employee-view/:id', component: EmployeeViewComponent},
  {path: '', redirectTo: 'employee-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

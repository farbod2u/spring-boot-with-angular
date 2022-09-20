import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeCreateComponent} from "./components/employee-create/employee-create.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {EmployeeEditComponent} from "./components/employee-edit/employee-edit.component";

const routes: Routes = [
  {path: 'create', component: EmployeeCreateComponent},
  {path: 'list', component: EmployeeListComponent},
  {path: 'edit/:id', component: EmployeeEditComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

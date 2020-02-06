import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './employee-list/employee-form/employee-form.component';


const routes: Routes = [
  {
    path: 'add',
    component: EmployeeFormComponent
},
{
    path: 'edit/:id',
    component: EmployeeFormComponent
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

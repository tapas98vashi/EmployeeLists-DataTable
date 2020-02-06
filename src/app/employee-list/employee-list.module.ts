import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [EmployeeListComponent, EmployeeFormComponent, SearchPipe, SortPipe],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    EmployeeListComponent
  ]
})
export class EmployeeListModule { }

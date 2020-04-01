import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddComponent } from './student-add/student-add.component';


const routes: Routes = [
  {
    path: '', component: StudentListComponent
},
{
  path: 'student', component: StudentListComponent
},
{
  path: 'student/:id', component: StudentEditComponent
},
{
  path: 'student-add', component: StudentAddComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

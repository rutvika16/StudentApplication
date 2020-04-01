import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentService} from './student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
  

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [HttpClientModule, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

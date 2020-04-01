import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
     
  result: any;
  id:any;

  constructor(private router:Router, private http:HttpClient, private studentService : StudentService) { }

  ngOnInit(): void {
    this.loadAllStudents();
       
        
   }  
  loadAllStudents() {  
     this.studentService.getStudentDetails().subscribe(res => {
               this.result = res;}); 
  }
  
  
  Delete(StudentId) {  
    var ans = confirm("Do you want to delete student with Id: " + StudentId);  
    if (ans) {  
        this.studentService.deleteStudentDetail(StudentId).subscribe((data) => {  
            this.loadAllStudents();  
        }, error => console.error(error))  
    }  
}  
  }   



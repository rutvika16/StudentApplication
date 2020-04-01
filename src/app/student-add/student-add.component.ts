import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  
  studentData:FormGroup;
 
  constructor(private formBuilder:FormBuilder, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.studentData = this.formBuilder.group({
      name:['',Validators.required],
      mobileNumber:['',Validators.required],
      emailId:['',Validators.required],
      courseEnrolled:['',Validators.required],
      feesStatus:['',Validators.required]})
  }

  addStudent()
  {
    console.log(this.studentData);
    this.http.post('https://localhost:44393/api/Student',{Name:this.studentData.value.name,MobileNumber:this.studentData.value.mobileNumber,EmailId:this.studentData.value.emailId,CourseEnrolled:this.studentData.value.courseEnrolled,FeesStatus:this.studentData.value.feesStatus}).subscribe(res=>{console.log(res);});
    this.router.navigate(['']);
    
  }


}

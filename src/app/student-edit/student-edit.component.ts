import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  url = 'http://localhost:44393/api/Student';  
  studentEditFormgroup:FormGroup;
  studentId=null;
  id:any;
  result:any;
  constructor(private router:Router, private formBuilder: FormBuilder,private http:HttpClient, private activatedRouter: ActivatedRoute,private studentService : StudentService) { }

  ngOnInit() {
    this.id=this.activatedRouter.snapshot.paramMap.get('id');
    this.loadStudentDetail();
        this.studentEditFormgroup=this.formBuilder.group(
          { name:['',Validators.required],
            mobileNumber:['',Validators.required],
            emailId:['',Validators.required],
            courseEnrolled:['',Validators.required],
            feesStatus:['',Validators.required]})
       
    
    }  

    loadStudentDetail()
    {
      this.studentService.getStudentDetailById(this.id).subscribe(res => {
        this.result = res;
      console.log(this.result)});
    }

    StudentEdit()
    {
      this.http.put('https://localhost:44393/api/Student',{studentId:+this.id,Name:this.studentEditFormgroup.value.name,MobileNumber:this.studentEditFormgroup.value.mobileNumber,EmailId:this.studentEditFormgroup.value.emailId,CourseEnrolled:this.studentEditFormgroup.value.courseEnrolled,FeesStatus:this.studentEditFormgroup.value.feesStatus}).subscribe(res=>{console.log(res);});
      this.router.navigate(['']);
    }

    


}

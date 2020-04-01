import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Student } from './student'; 

@Injectable({  
    providedIn: 'root'  
  })  

  export class StudentService {  
    url = 'https://localhost:44393/api/Student';  
    constructor(private http: HttpClient) { } 

    getStudentDetails(): Observable<Student[]> {  
      return this.http.get<Student[]>(this.url);  
    }  
    getStudentDetailById(studentId: number): Observable<Student[]> {  
      return this.http.get<Student[]>(this.url + '/' + studentId);  
    }  
    postStudentDetail(student: Student): Observable<Student> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<Student>(this.url + '/', student, httpOptions);  
    }  
    updateStudentDetail(student: Student): Observable<Student> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<Student>(this.url + '/', student, httpOptions);  
    }  
    deleteStudentDetail(studentId: number): Observable<number> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.delete<number>(this.url + '/' , httpOptions);  
    }  
  }  
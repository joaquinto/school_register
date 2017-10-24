import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }

  domain = 'http://localhost:4070/api/student/';
  id: any;

  getStudents(){
    return this.http.get(this.domain).map(res => res.json());
  }

  postStudent(student){
    return this.http.post(this.domain, student).map(res => res.json());
  }

  getStudent(id){
    return this.http.get(this.domain + id).map( res => res.json());
  }

  deleteStudent(id){
    return this.http.delete(this.domain + id).map(res => res.json());
  }

  editStudent(id, student){
    return this.http.put(this.domain + id, student ).map( res => res.json());
  }

  selectedStudent(stu){
    this.id = stu;
  }

}

import { Component, OnInit } from '@angular/core';
import {StudentService} from "../app/student.service";

@Component({
  selector: 'app-stdent-list',
  templateUrl: './stdent-list.component.html',
  styleUrls: ['./stdent-list.component.css']
})
export class StdentListComponent implements OnInit {
  students: any;
  id: any;
  constructor(private studentService: StudentService) {
    this.loadStudents();
  }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents(){
    this.studentService.getStudents().subscribe( data => {
      this.students = data.student;
      console.log(this.students);
    });
  }

  onSelect(student:any){
    this.id = student._id;
    this.studentService.selectedStudent(this.id);
    console.log(this.id);
  }

}

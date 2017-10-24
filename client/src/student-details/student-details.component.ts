import { Component, ElementRef, OnInit} from '@angular/core';
import { StudentService } from "../app/student.service";
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id: any;
  student: any;

  constructor( private flashMessageService: FlashMessagesService, private el: ElementRef, private studentService: StudentService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.studentDetails();
  }

  studentDetails(){
    this.id = this.studentService.id;
    console.log(this.id);
    this.studentService.getStudent(this.id).subscribe( data => {
      this.student = data.student;
      console.log(this.student);
    });
  }

  goBack(){
    this.location.back();
  }

  deleteStudent(){
    this.id = this.studentService.id;
    console.log(this.id);
    this.studentService.deleteStudent(this.id).subscribe( data => {
      if (!data.success){
        this.flashMessageService.show("Unable to delete student", { cssClass: "alert-danger", timeout: 5000});
        console.log("unable to delete data");
      }
    });
    setTimeout(() => {
    this.router.navigate(['/student-list']);
    }, 400);

  }

}

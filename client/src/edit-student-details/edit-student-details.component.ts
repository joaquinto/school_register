import { Component, ElementRef, OnInit } from '@angular/core';
import { StudentService } from "../app/student.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.css']
})
export class EditStudentDetailsComponent implements OnInit {
  id: any;
  student: any;
  logom: any;
  myForm: FormGroup;
  studentImage: any;

  constructor( private flashMessageService: FlashMessagesService, private router: Router, private studentService: StudentService, private formBuilder: FormBuilder, private el: ElementRef, private location: Location) {
    this.createsForm();
  }

  ngOnInit() {
    this.getStudentDetail();
  }

  getStudentDetail() {
    this.id = this.studentService.id;
    console.log(this.studentService.id);
    this.studentService.getStudent(this.id).subscribe(data => {
      this.student = data.student;
      this.studentImage = data.student.student_pix;
      this.logom = '../assets/images/' + this.studentImage;
      console.log(this.logom);
    })
  }

  createsForm() {
    this.myForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      studentClass: ['', Validators.required]
    });
  }

  editStudent() {
    const studentData = {
      "firstname": this.myForm.get('firstname').value,
      "lastname": this.myForm.get('lastname').value,
      "age": this.myForm.get('age').value,
      "gender": this.myForm.get('gender').value,
      "studentClass": this.myForm.get('studentClass').value
    }

    this.studentService.editStudent(this.id, studentData).subscribe(data => {
      console.log(this.id);
      console.log(studentData);
      if (!data.success) {
        this.flashMessageService.show("Failed to update student information", { cssClass: "alert-danger", timeout: 5000});
        console.log({
          success: false,
          message: "failed to update student information"
        });
      }
      else {
        console.log({
          success: true,
          message: "student information saved successfully..."
        });
        setTimeout(() => {
          this.router.navigate(['/student-list']);
        }, 500);
      }
    });
  }

  letgoBack() {
    this.location.back();
  }
}

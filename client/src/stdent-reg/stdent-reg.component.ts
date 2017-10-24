import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {StudentService} from "../app/student.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-stdent-reg',
  templateUrl: './stdent-reg.component.html',
  styleUrls: ['./stdent-reg.component.css']
})
export class StdentRegComponent implements OnInit {
  myForm: FormGroup;
  logo: any;
  name: any;
  formData: any;
  constructor( private flashMessagesService : FlashMessagesService, private router: Router,private formBuilder: FormBuilder, private el: ElementRef, private studentService: StudentService) {
    this.createForm();
  }

  ngOnInit() {
    this.start();
    this.edit();
  }

  start(){
    document.getElementById("jji").addEventListener("click", ()=>{
      document.getElementById("imh").click();
    });

  }

  edit(){
    document.getElementById("img").addEventListener("click", ()=>{
      document.getElementById("jji").click();
    });
  }


  fileChange(input: any){
    this.logo = input.target.files[0];
    console.log(this.logo);
    this.name = this.logo.name;
    console.log(this.name);
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.logo = e.target.result;

    }

    reader.readAsDataURL(input.target.files[0]);
    document.getElementById("jji").style.display = "none";
  }

  createForm(){
    this.myForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      studentClass: ['', Validators.required],
      student_pix: ['', Validators.required]
    });
  }

  registerStudent(){
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#imh');
    let fileCount: number = inputEl.files.length;
    this.formData = new FormData();
    if (fileCount > 0) {
      this.formData.append('firstname', this.myForm.get('firstname').value);
      this.formData.append('lastname', this.myForm.get('lastname').value);
      this.formData.append('age', this.myForm.get('age').value);
      this.formData.append('gender', this.myForm.get('gender').value);
      this.formData.append('student_pix', inputEl.files.item(0));
      this.formData.append('studentClass', this.myForm.get('studentClass').value);
    }

    this.studentService.postStudent(this.formData).subscribe( data => {
      if (!data.success){
        this.flashMessagesService.show('Unable to register student', { cssClass: "alert-danger", timeout: 5000});
        console.log("unable to save student record");
      }
      else{
        console.log({
          success: true,
          message: "student information saved successfully..."
        });
        setTimeout(() => {
          window.location.reload();
        },500);
      }
    });
  }

}

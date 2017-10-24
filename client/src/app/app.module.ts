import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { FlashMessagesModule } from "angular2-flash-messages";

import { AppComponent } from './app.component';
import { StdentRegComponent } from '../stdent-reg/stdent-reg.component';
import { StudentService } from "./student.service";
import { StdentListComponent } from '../stdent-list/stdent-list.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { EditStudentDetailsComponent } from '../edit-student-details/edit-student-details.component';

const routes:Routes = [
  {
    path: 'student-list',
    component: StdentListComponent,
    pathMatch: 'full'
  },
  {
    path: 'student-details',
    component: StudentDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit-student-details',
    component: EditStudentDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'student-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'student-list'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StdentRegComponent,
    StdentListComponent,
    StudentDetailsComponent,
    EditStudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

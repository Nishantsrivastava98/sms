import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {NglModule,NGL_ICON_CONFIG, NglIconConfig} from 'ng-lightning';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { MessageComponent } from './message/message.component';
import { LibraryAdministrationComponent } from './library-administration/library-administration.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookInsertComponent } from './book-insert/book-insert.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomStudentsComponent } from './classroom-students/classroom-students.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TestComponent } from './test/test.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherConfigurationComponent } from './teacher-configuration/teacher-configuration.component';
import { ConfigureTeacherComponent } from './configure-teacher/configure-teacher.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { LibrarycardComponent } from './librarycard/librarycard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HeroFormComponent,
    StudentInsertComponent,
    StudentDetailsComponent,
    MessageComponent,
    LibraryAdministrationComponent,
    BookDetailsComponent,
    BookInsertComponent,
    SearchBookComponent,
    ClassroomComponent,
    ClassroomStudentsComponent,
    ConfigureTeacherComponent,
    AttendanceComponent,
    TestComponent,
    TeachersComponent,
    SubjectsComponent,
    AddTeacherComponent,
    TeacherDetailsComponent,
    TeacherConfigurationComponent,
    BackButtonComponent,
    LibrarycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NglModule
    
  ],
  providers: [
    { provide: NGL_ICON_CONFIG, useValue: <NglIconConfig>{ svgPath: '/assets/icons' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

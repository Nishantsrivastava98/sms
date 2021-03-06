import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LibraryAdministrationComponent } from './library-administration/library-administration.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookInsertComponent } from './book-insert/book-insert.component';
import { ClassroomComponent } from './classroom/classroom.component';
import{ ClassroomStudentsComponent } from './classroom-students/classroom-students.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TestComponent } from './test/test.component';
import{ SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherConfigurationComponent } from './teacher-configuration/teacher-configuration.component';
import { ConfigureTeacherComponent } from './configure-teacher/configure-teacher.component';

const routes: Routes = [
  {path:'',redirectTo:'/students',pathMatch:'full'},
  {path:'students',component:StudentsComponent},
  {path :'student/add',component:StudentInsertComponent},
  {path : 'student/details/:id',component:StudentDetailsComponent},
  {path :'student/update/:id',component:StudentInsertComponent},
  {path : 'library',component:LibraryAdministrationComponent},
  {path : 'library/details/:id',component:BookDetailsComponent},
  {path :'library/update/:id',component:BookInsertComponent},
  {path :'library/add',component:BookInsertComponent},
  {path : 'classroom',component:ClassroomComponent},
  {path : 'classroom/student/:id',component:ClassroomStudentsComponent},
  {path : 'classroom/attendance/:id',component:AttendanceComponent},
  {path : 'subjects',component:SubjectsComponent},
  {path : 'teachers',component:TeachersComponent},
  {path : 'teachers/add',component : AddTeacherComponent},
  {path : 'teachers/update/:id',component : AddTeacherComponent},
  {path : 'test',component:TestComponent},
  {path : 'teacher/details/:id',component:TeacherDetailsComponent},
  {path : 'teacherconfiguration',component:TeacherConfigurationComponent},
  {path : 'configureTeacher',component:ConfigureTeacherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AuthGuard } from './auth.guard';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { LoginComponent } from './login/login.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "studentlist", component: StudentlistComponent, canActivate: [AuthGuard] },
  { path: "addStudent", component: AddstudentComponent, canActivate: [AuthGuard] },
  { path: "editStudent/:id", component: EditstudentComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

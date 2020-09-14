import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadStaffComponent } from './load-staff/load-staff.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'load', component: LoadStaffComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/:empId', component: RegisterComponent },
  { path: '', redirectTo: '/load', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

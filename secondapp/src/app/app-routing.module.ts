import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { CseComponent } from './cse/cse.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"departments",component:DepartmentComponent,children:[
    {path:"csepg",component:CseComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

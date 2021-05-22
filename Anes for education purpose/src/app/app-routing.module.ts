import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './code/code.component';
import { CodeagainComponent } from './codeagain/codeagain.component';
import { LoginComponent } from './login/login.component';
import { MemorableComponent } from './memorable/memorable.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'question', component:MemorableComponent},
  {path: 'password', component:PasswordComponent},
  {path: 'verify_SMS', component:CodeComponent},
  {path: 'try_again', component:CodeagainComponent},
  {path: '**', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

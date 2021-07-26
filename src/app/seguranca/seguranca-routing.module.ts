import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'login', component: LoginFormComponent }
  ];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }

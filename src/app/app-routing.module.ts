import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
          {path :'', component:LoginComponent},
          {path :'home',component:HomeComponent},
          { path :'register',component:RegisterformComponent},
          { path :'transation',component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

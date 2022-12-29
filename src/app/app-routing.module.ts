import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { NotificationComponent } from './account/notification/notification.component';
import { ProfileComponent } from './account/profile/profile.component';
import { SigninComponent } from './account/signin/signin.component';
import { SignupComponent } from './account/signup/signup.component';
import { TransactionsComponent } from './account/transactions/transactions.component';
import { HomeComponent } from './website/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'user/dashboard', component: DashboardComponent },
  { path: 'user/my-transactions', component: TransactionsComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'user/notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

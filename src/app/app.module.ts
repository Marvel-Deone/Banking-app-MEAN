import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './account/account/account.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { SigninComponent } from './account/signin/signin.component';
import { SignupComponent } from './account/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './public/footer/footer.component';
import { HeaderMenuComponent } from './public/header-menu/header-menu.component';
import { MenuComponent } from './public/menu/menu.component';
import { SidemenuComponent } from './public/sidemenu/sidemenu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './website/home/home.component';
import { TransactionsComponent } from './account/transactions/transactions.component';
import { ProfileComponent } from './account/profile/profile.component';
import { NotificationComponent } from './account/notification/notification.component';
import { HelpComponent } from './account/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    SidemenuComponent,
    SidebarComponent,
    HeaderMenuComponent,
    AccountComponent,
    TransactionsComponent,
    ProfileComponent,
    NotificationComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

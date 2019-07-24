import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleAddComponent } from './middle-add/middle-add.component';
import { MiddleGetComponent } from './middle-get/middle-get.component';
import{FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    FooterComponent,
    MiddleAddComponent,
    MiddleGetComponent,
    UpdateComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

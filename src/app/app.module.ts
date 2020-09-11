import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadStaffComponent } from './load-staff/load-staff.component';
import { RegisterComponent } from './register/register.component';
import { StaffSpecificDirective } from './staff-specific.directive'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoadStaffComponent,
    RegisterComponent,
    StaffSpecificDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

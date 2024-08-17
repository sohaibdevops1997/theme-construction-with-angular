import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';

import { DashComponent } from './dash/dash.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

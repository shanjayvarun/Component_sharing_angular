import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ShanjayComponent } from './shanjay/shanjay.component';
import { VarunComponent } from './varun/varun.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ShanjayComponent,
    VarunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }

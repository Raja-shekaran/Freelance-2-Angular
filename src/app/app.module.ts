import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginsuccessComponent,
    routingComponents
    
    
   
 
    
  ],
  imports: [
    
   
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HomeimgComponent } from './homeimg/homeimg.component';

import { RegistrationComponent } from './registration/registration.component';

import { TablebookingComponent } from './tablebooking/tablebooking.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'homeimg',component:HomeimgComponent},
  {path:'contact',component:ContactComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:'cart-page',component:CartPageComponent},
  
  {path:'tablebooking',component:TablebookingComponent}
  
 

  
  
  
	
	

  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegistrationComponent, HomeComponent, AboutComponent, 
  ContactComponent, TablebookingComponent, HomeimgComponent,FoodPageComponent,CartPageComponent

]

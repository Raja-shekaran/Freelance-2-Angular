import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablebooking',
  templateUrl: './tablebooking.component.html',
  styleUrls: ['./tablebooking.component.css']
})
export class TablebookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage:string = "assets/img/Deli.png";

  myClickFunction() { 
    alert("Table has been Confirmed");
    console.log(event);
 }

}

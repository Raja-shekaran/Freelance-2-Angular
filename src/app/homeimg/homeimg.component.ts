import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
@Component({
  selector: 'app-homeimg',
  templateUrl: './homeimg.component.html',
  styleUrls: ['./homeimg.component.css']
})
export class HomeimgComponent implements OnInit {
  foods:Food[]=[];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll()
  }

}

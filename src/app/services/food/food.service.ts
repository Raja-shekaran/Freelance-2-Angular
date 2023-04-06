import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id: number): Food{
  return this.getAll().find(food => food.id ==id)!;
  }
  getAll():Food[]{
    return[
      {
        id:1,
        name:'Veg Salad',
        cookTime:'5-8',
        price:45,
        imageUrl:'/assets/img/gallery/01.jpg'
      },
      {
        id:2,
        name:'Pizza',
        cookTime:'10-18',
        price:95,
        imageUrl:'/assets/img/gallery/02.jpg'
      },
      {
        id:3,
        name:'Chicken Roll',
        cookTime:'8-15',
        price:75,
        imageUrl:'/assets/img/gallery/03.jpg'
      },{
        id:4,
        name:'Cheesy Pasta',
        cookTime:'10-15',
        price:95,
        imageUrl:'/assets/img/gallery/04.jpg'
      }
      ,{
        id:5,
        name:'Meat Balls',
        cookTime:'8-15',
        price:55,
        imageUrl:'/assets/img/gallery/05.jpg'
      }
      ,{
        id:6,
        name:'Pan cake',
        cookTime:'5-10',
        price:45,
        imageUrl:'/assets/img/gallery/06.jpg'
      }
      ,{
        id:7,
        name:'Greek Salad',
        cookTime:'5-8',
        price:65,
        imageUrl:'/assets/img/gallery/07.jpg'
      }
      ,{
        id:8,
        name:'Momos',
        cookTime:'5-8',
        price:75,
        imageUrl:'/assets/img/gallery/08.jpg'
      }
      ,{
        id:9,
        name:'Taco',
        cookTime:'8-15',
        price:105,
        imageUrl:'/assets/img/taco.jpg'
      }
      ,{
        id:10,
        name:'Veg Burger',
        cookTime:'10',
        price:85,
        imageUrl:'/assets/img/bur.jpg'
      },
      {
        id:11,
        name:'Crispy Chicken',
        cookTime:'10-15',
        price:185,
        imageUrl:'/assets/img/crispy.jpg'
      },
      {
        id:12,
        name:'Chicken Burger',
        cookTime:'10-15',
        price:195,
        imageUrl:'/assets/img/cb.jpg'
      },
    ]
  
  }
}

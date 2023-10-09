import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  foods: Food[] = [];
  constructor(private foodservice: FoodService, activatedRoute:ActivatedRoute){
    let foodsObservalbe: Observable<Food[]>;
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
      foodsObservalbe = this.foodservice.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
      foodsObservalbe = this.foodservice.getAllFoodsByTag(params.tag);
      else
      foodsObservalbe = foodservice.getAll();
      foodsObservalbe.subscribe((serverFoods) =>{
        this.foods = serverFoods;
      })
    });
    
  }
  ngOnInit(): void {
    
  }

}

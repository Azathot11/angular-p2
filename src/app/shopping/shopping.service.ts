import { Injectable,EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
 ingredientAdded = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] =[
    new Ingredients('Apples',5),
    new Ingredients('Tomatoes',10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient:Ingredients){
  
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
    
  }

  constructor() { }
}

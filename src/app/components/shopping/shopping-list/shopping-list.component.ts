import { Component,Input } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  @Input() ingredients: Ingredients[] =[
    new Ingredients('Apples',5),
    new Ingredients('Tomatoes',10),
  ];

  onIngredientAdded(ingredient:Ingredients){
    console.log(ingredient,'')
    this.ingredients.push(ingredient);
  }
}

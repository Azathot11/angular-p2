import { Component, Input,EventEmitter,Output } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from '../recipe-list/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],

})
export class RecipeItemComponent {
 @Input() recipe:Recipe

}

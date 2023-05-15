import { NgModule } from "@angular/core";
import { Routes,RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailComponent } from "./components/recipe/recipe-detail/recipe-detail.component";
import { StartComponent } from "./components/recipe/start/start.component";

const appRoutes: Routes = [
    {path:'' , redirectTo:'/recipes', pathMatch: 'full'},
    {path:'recipes',component:RecipesComponent, 
    children:[
        {path:'',component:StartComponent},
        {path:':id',component:RecipeDetailComponent}
    ]},
    {path:'shopping',component:ShoppingComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
  })
  export class AppModuleRouting {}
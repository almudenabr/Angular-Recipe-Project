import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'The name of the recipe1',
      'This is the description of the recipe1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fpxmMH_E-AiBsmYLqVvCmLR3TpclpTt1aw&usqp=CAU',
      [new Ingredient('Meat', 1), new Ingredient('Potatoes', 10)]
    ),
    new Recipe(
      'The name of the recipe2',
      'This is the description of the recipe2',
      'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
      [new Ingredient('Fish', 1), new Ingredient('Vegetables', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    //.slice -> to return a copy of the array in this file. Without it we might change sm in recipes
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

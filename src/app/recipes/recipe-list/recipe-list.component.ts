import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'The name of the recipe',
      'This is the description of the recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fpxmMH_E-AiBsmYLqVvCmLR3TpclpTt1aw&usqp=CAU'
    ),
    new Recipe(
      'The name of the recipe',
      'This is the description of the recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fpxmMH_E-AiBsmYLqVvCmLR3TpclpTt1aw&usqp=CAU'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

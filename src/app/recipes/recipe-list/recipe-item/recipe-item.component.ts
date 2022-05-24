import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeElement: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>(); -> this has been now located in the recipe.service.ts

  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}

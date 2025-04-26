import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/models';
import { RecipeService } from '../services/recipe.service';


@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent {
  favoriteRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { } // Inject RecipeService

  ngOnInit(): void {
    this.loadFavoriteRecipes();
  }

  loadFavoriteRecipes(): void {
    this.recipeService.getRecipesfa().subscribe( // Use recipeService.getRecipesfa()
      (recipes: Recipe[]) => {
        this.favoriteRecipes = recipes;
      },
      (error) => {
        console.error('Error loading favorite recipes:', error);
      }
    );
  }
}
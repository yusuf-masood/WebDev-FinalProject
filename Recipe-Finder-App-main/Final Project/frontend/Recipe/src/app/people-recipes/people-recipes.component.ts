import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ShareRecipe } from '../models/models';


@Component({
  selector: 'app-people-recipes',
  templateUrl: './people-recipes.component.html',
  styleUrls: ['./people-recipes.component.css']
})
export class PeopleRecipesComponent implements OnInit {
  recipes: ShareRecipe[] = [];
  selectedRecipe: ShareRecipe | null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.fetchSharedRecipes();
  }

  fetchSharedRecipes() {
    this.recipeService.getRecipesShared().subscribe(
      (recipes: ShareRecipe[]) => {
        this.recipes = recipes;
      },
      (error: any) => {
        console.error('Failed to fetch shared recipes:', error);
      }
    );
  }

  showRecipeDetails(index: number) {
    this.selectedRecipe = this.recipes[index];
  }
}
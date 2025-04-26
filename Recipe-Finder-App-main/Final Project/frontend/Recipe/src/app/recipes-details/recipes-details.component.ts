import { Component, OnInit } from '@angular/core';
import { RecipeDetail } from '../models/models';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipeId!: number;
  recipeDetail!: RecipeDetail;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = +params['id']; // Get the recipe ID from route parameters
      this.getRecipeDetail(this.recipeId); // Fetch recipe detail when component initializes
    });
  }

  getRecipeDetail(recipeId: number): void {
    this.recipeService.getRecipeDetails(recipeId).subscribe(
      (recipeDetail: RecipeDetail) => {
        this.recipeDetail = recipeDetail;
      },
      error => {
        console.error('Error loading recipe detail:', error);
      }
    );
  }
}
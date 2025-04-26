// import { Component, OnInit, Input, SimpleChanges, OnChanges, } from '@angular/core';
// import { Recipe } from '../models/models';
// import { RecipeService } from '../services/recipe.service';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css']
// })
// export class RecipeListComponent implements  OnInit, OnChanges {

//   @Input() selectedCategory: string = ''; // Receive the selected category from FilterComponent
//   recipes: Recipe[] = [];

//   constructor(private router: Router,
//     private recipeService: RecipeService) { }

//   ngOnInit(): void {
//     this.loadRecipes();
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['selectedCategory'] && !changes['selectedCategory'].firstChange) {
//       console.log('Selected Category changed to:', this.selectedCategory);
//       this.loadRecipes();
//     }
//   }

//   loadRecipes() {
//     if (!this.selectedCategory) return; // Exit early if no category selected

//     this.recipeService.getRecipes(this.selectedCategory).subscribe(
//       (recipes: Recipe[]) => {
//         this.recipes = recipes;
//       },
//       (error) => {
//         console.error('Error loading recipes:', error);
//       }
//     );
//   }

//   navigateToRecipeDetail(id: number): void {
//     this.router.navigate(['/recipe', id]);
//   }
// }

import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Recipe } from '../models/models';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnChanges {

  @Input() selectedCategory: string = '';
  recipes: Recipe[] = [];

  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.loadRecipes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategory'] && !changes['selectedCategory'].firstChange) {
      console.log('Selected Category changed to:', this.selectedCategory);
      this.loadRecipes();
    }
  }

  loadRecipes() {
    if (!this.selectedCategory) return;

    this.recipeService.getRecipes(this.selectedCategory).subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      },
      (error) => {
        console.error('Error loading recipes:', error);
      }
    );
  }

  navigateToRecipeDetail(id: number): void {
    this.router.navigate(['/recipe', id]);
  }

  addToFavorites(recipe: Recipe): void {
    this.recipeService.addRecipeToFavorites(recipe).subscribe(
      (response) => {
        console.log('Recipe added to favorites:', recipe);
        // Optionally, you can update the UI to reflect the addition of the recipe to favorites
      },
      (error) => {
        // Log the error details for better troubleshooting
        console.error('Error adding recipe to favorites:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
          console.error('Response Body:', error.error);
        }
      }
    );
  }
  
}

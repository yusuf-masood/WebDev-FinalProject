// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { ShareRecipe } from '../models/models';
// import { RecipeService } from '../services/recipe.service';

// @Component({
//   selector: 'app-myrecipes',
//   templateUrl: './myrecipes.component.html',
//   styleUrls: ['./myrecipes.component.css']
// })
// export class MyrecipesComponent implements OnInit {
//   recipeForm!: FormGroup; // Add '!' to mark it as possibly undefined

//   constructor(
//     private formBuilder: FormBuilder,
//     private recipeService: RecipeService
//   ) {}

//   ngOnInit(): void {
//     this.initForm();
//   }

//   initForm(): void {
//     this.recipeForm = this.formBuilder.group({
//       title: ['', Validators.required],
//       ingredients: ['', Validators.required],
//       instructions: ['', Validators.required],
//       cooking_time: [0, [Validators.required, Validators.min(1)]],
//       difficulty: ['', Validators.required],
//       image: ['', [Validators.required, this.urlValidator()]]
//     });
//   }

//   submitRecipe(): void {
//     if (this.recipeForm.valid) {
//       const recipe: ShareRecipe = this.recipeForm.value;
//       this.recipeService.createRecipe(recipe).subscribe(
//         (createdRecipe: ShareRecipe) => {
//           console.log('Recipe created successfully:', createdRecipe);
//           this.resetForm();
//         },
//         (error: any) => {
//           console.error('Failed to create recipe:', error);
//           // Handle error response, such as displaying error messages to the user
//         }
//       );
//     } else {
//       console.error('Form is invalid');
//     }
//   }

//   urlValidator() {
//     return (control: AbstractControl) => { // Specify the type of 'control' parameter
//       const urlRegex = /^(http|https):\/\/.*$/;
//       const valid = urlRegex.test(control.value);
//       return valid ? null : { invalidUrl: true };
//     };
//   }

//   resetForm(): void {
//     this.recipeForm.reset({
//       cooking_time: 0
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ShareRecipe } from '../models/models';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.component.html',
  styleUrls: ['./myrecipes.component.css']
})
export class MyrecipesComponent implements OnInit {
  recipeForm!: FormGroup; // Add '!' to mark it as possibly undefined

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.recipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      cooking_time: [0, [Validators.required, Validators.min(1)]],
      difficulty: ['', Validators.required],
      image: ['', [Validators.required, this.urlValidator()]]
    });
  }
  submitRecipe(): void {
    if (this.recipeForm.valid) {
      // Get the image URL value from the form control
      let imageUrl = this.recipeForm.get('image')?.value || ''; // Default to empty string if null
  
      // Create the recipe object using form values
      const recipe: ShareRecipe = {
        title: this.recipeForm.get('title')?.value,
        ingredients: this.recipeForm.get('ingredients')?.value,
        instructions: this.recipeForm.get('instructions')?.value,
        cooking_time: this.recipeForm.get('cooking_time')?.value,
        difficulty: this.recipeForm.get('difficulty')?.value,
        image: imageUrl // Assign the image URL
      };
  
      // Call the recipe service to create the recipe
      this.recipeService.createRecipe(recipe).subscribe(
        (createdRecipe: ShareRecipe) => {
          console.log('Recipe created successfully:', createdRecipe);
          this.resetForm(); // Reset the form after successful creation
        },
        (error: any) => {
          console.error('Failed to create recipe:', error);
          // Handle error response, such as displaying error messages to the user
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
  
  
  urlValidator() {
    return (control: AbstractControl) => { // Specify the type of 'control' parameter
      const urlRegex = /^(http|https):\/\/.*$/;
      const valid = urlRegex.test(control.value);
      return valid ? null : { invalidUrl: true };
    };
  }

  resetForm(): void {
    this.recipeForm.reset({
      cooking_time: 0
    });
  }
}

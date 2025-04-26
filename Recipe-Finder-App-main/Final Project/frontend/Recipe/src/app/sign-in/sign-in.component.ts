import { Component } from '@angular/core';
import { User } from '../models/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private recipeService: RecipeService, 
    private router: Router
  ) {
    this.signInForm = this.fb.group({
      user_name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.signInForm.valid) {
      const credentials = this.signInForm.value;
      console.log('Submitting sign-in credentials:', credentials);

      this.recipeService.getUsers().subscribe(
        (users: User[]) => {
          console.log('Users retrieved:', users);

          // Check if any user matches the sign-in credentials
          const matchedUser = users.find(user => 
            user.user_name === credentials.user_name && user.password === credentials.password
          );

          if (matchedUser) {
            console.log('Sign-in successful for user:', matchedUser);
            // Navigate to the "share" component if sign-in is successful
            this.router.navigate(['/share']).then(
              () => console.log('Navigated to share')
            ).catch(
              err => console.error('Navigation to share failed:', err)
            );
          } else {
            console.error('No user found with the provided credentials.');
            // Handle case where no user matches the provided credentials
          }
        },
        error => {
          console.error('Failed to retrieve users:', error);
          // Handle error response, such as displaying error messages to the user
        }
      );
    } else {
      console.error('Form is not valid.');
    }
  }
}

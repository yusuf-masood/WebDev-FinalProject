import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(private router: Router) { }

  navigateToSignUp() {
    // Use router navigation to navigate to the sign-up component
    this.router.navigate(['signup']); // Replace 'signup' with your actual route path
  }

  navigateToSignIn(){
    {
      // Use router navigation to navigate to the sign-up component
      this.router.navigate(['signin']); // Replace 'signup' with your actual route path
    }
  }
  navigateToShare(){{
    this.router.navigate(['share'])

  }}
  navigateTopeopleRecipe(){{
    this.router.navigate(['peopleRecipe'])

  }}

  navigateFavorilist(){{
    this.router.navigate(['favorite'])

  }}
}

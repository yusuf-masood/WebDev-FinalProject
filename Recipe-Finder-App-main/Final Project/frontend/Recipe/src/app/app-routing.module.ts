import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { PeopleRecipesComponent } from './people-recipes/people-recipes.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';



const routes: Routes = [
  { path: 'signup', component:SignUpComponent },
  { path: 'signin', component:SignInComponent},
  { path: 'share', component:MyrecipesComponent},
  { path: 'peopleRecipe', component:PeopleRecipesComponent},
  { path: 'recipe/:id', component:RecipesDetailsComponent },
  { path: 'favorite', component:FavoriteListComponent }
  
  // Add other routes as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/models';
import { map } from 'rxjs/operators';
import { RecipeDetail } from '../models/models';
import { ShareRecipe } from '../models/models';

import { User } from '../models/models';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // Add other headers as needed, such as 'Authorization'
  })
};


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  private apiKey = '27eddddb896d45f8adc0d0605c59a2ed';

  constructor(private http: HttpClient) { }

  getRecipes(query: string): Observable<Recipe[]> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&query=${query}`;
    return this.http.get<any>(url)
      .pipe(
        map((response: any) => response.results)
      );
  }

  private apiUrld = 'https://api.spoonacular.com/recipes/';

  getRecipeDetails(recipeId: number): Observable<RecipeDetail> {
    const url = `${this.apiUrld}/${recipeId}/information?apiKey=${this.apiKey}`;
    return this.http.get<RecipeDetail>(url);
  }

  private apiUrlUser = 'http://127.0.0.1:8000/users/user/'; // Update with your backend API URL



  signUpUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrlUser, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrlUser);
  }

  private apiShareUrl = 'http://127.0.0.1:8000/shareRecipes/recipes/';





  getRecipesShared(): Observable<ShareRecipe[]> {
    return this.http.get<ShareRecipe[]>(this.apiShareUrl);
  }



  createRecipe(recipe: ShareRecipe): Observable<ShareRecipe> {
    return this.http.post<ShareRecipe>(this.apiShareUrl, recipe, httpOptions);
  }
  
  private FaUrl= 'http://127.0.0.1:8000/recipes/recipes/add/'

  addRecipeToFavorites(recipe: Recipe): Observable<any> {
    const { id, title, image } = recipe; // Destructure only the required fields
    const data = { id, title, image }; // Create an object with the required fields
    return this.http.post<any>(this.FaUrl, data, httpOptions); // Send only the required data
  }


  private FListUrl = 'http://127.0.0.1:8000/recipes/recipes/'; 


  getRecipesfa(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.FListUrl);
  }

}
  

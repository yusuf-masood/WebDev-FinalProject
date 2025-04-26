export interface Recipe {
    id: number;
    title: string;
    image: string;
  }
  
  

  export interface RecipeDetail extends Recipe  {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    taste: {
      sweetness: number;
      saltiness: number;
      sourness: number;
      bitterness: number;
      savoriness: number;
      fattiness: number;
      spiciness: number;
    };
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    winePairing: {
      pairedWines: string[];
      pairingText: string;
      productMatches: {
        id: number;
        title: string;
        description: string;
        price: string;
        imageUrl: string;
        averageRating: number;
        ratingCount: number;
        score: number;
        link: string;
      }[];
    };
    instructions: string;
    analyzedInstructions: any[]; // You might want to define a proper interface for this
    originalId: number;
    spoonacularScore: number;
  }
  
  export interface ExtendedIngredient {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: {
      us: {
        amount: number;
        unitShort: string;
        unitLong: string;
      };
      metric: {
        amount: number;
        unitShort: string;
        unitLong: string;
      };
    };
  }
  
  export interface User {
    id?: number; // Optional ID field, as it might not exist until the user is saved to the database
    email: string;
    first_name: string;
    user_name: string;
    password: string;
}

export interface ShareRecipe {
  title: string;
  ingredients: string[];
  instructions: string;
  cooking_time: number;
  difficulty: string;
  image: string; // Change type to string or null to store image URL
}


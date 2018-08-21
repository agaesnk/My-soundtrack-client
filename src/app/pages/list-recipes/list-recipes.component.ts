import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  recipes = [];
  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.recipeService.getAll()
      .then((recipes: any) => {
        this.recipes = recipes;
      })
      .catch((error) => {
        
      })
  }

}

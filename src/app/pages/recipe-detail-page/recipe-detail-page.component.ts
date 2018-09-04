import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent implements OnInit {

  recipe: any;
  
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => { 
      this.recipeService.getOneById(params.id)
      .then((recipe: any) => {
        this.recipe = recipe;
      })
      .catch((error) => {
      })
    })
  }

}

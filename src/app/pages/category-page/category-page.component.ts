import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

recipes: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((val)=>{
      this.recipeService.getAllByCategory(val.category)
      .then((recipes: any) => {
        this.recipes = recipes;
      })
      .catch(err=>{
        console.error(err);
      })
    })
  }

}

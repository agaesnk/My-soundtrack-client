import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  categories: any;

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.recipeService.getCategories()
      .then(categories=>{
        this.categories=categories;
      })
      .catch(err=>{
        console.error(err);
      })
  }
}

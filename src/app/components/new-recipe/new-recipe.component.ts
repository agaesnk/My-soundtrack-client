import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  newRecipe = {
    category: ''
  };
  title: any;
  description: any;
  level: any;
  ingredients: any;
  elaboration: any;

  constructor() { }

  ngOnInit() {
  }

}

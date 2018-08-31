import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  // recipes: Array<any>;
  
  // title: any;
  // description: any;
  // category: any;
  // level: any;
  // ingredients: any;
  // elaboration: any;
  // imgUrl: any;

  constructor(
    // private recipeService: RecipeService,
    // private router: Router
  ) { }

  
  ngOnInit() {
  }

  // submitForm(form) {
  //   console.log(form  )
  //   const newRecipe = {
  //     title: this.title,
  //     description: this.description,
  //     category: this.category,
  //     level: this.level,
  //     ingredients: this.ingredients,
  //     elaboration: this.elaboration,
  //     imgUrl: this.imgUrl
  //   };
  
  //   this.recipeService.create(newRecipe)
  //   .then((data) => {
  //     console.log(data);
  //     this.router.navigate(['/profile']);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }
}

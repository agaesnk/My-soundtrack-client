import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  recipes: any;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    console.log(this.user);
    this.authService.userChange$.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
    this.recipeService.getAllMyRecipes()
      .then((recipes: any) => {
        this.recipes = recipes;
      })
      .catch(err=>{
        console.error(err);
      })
  }

}

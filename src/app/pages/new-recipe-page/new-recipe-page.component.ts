import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import axios from 'axios';


@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})
export class NewRecipePageComponent implements OnInit {

  CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dobv3whnn/image/upload';
  CLOUDINARY_UPLOAD_PRESET = 'bh5f2hgw';

  recipes: Array<any>;
  
  title: any;
  description: any;
  category: any;
  level: any;
  ingredients: any;
  elaboration: any;
  photo: any;

  formData: any;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getFiles(event) {
    this.photo = event.target.files[0];
    this.formData = new FormData();
    this.formData.append('file', this.photo);
    this.formData.append('upload_preset', this.CLOUDINARY_UPLOAD_PRESET);
  }

  submitForm(form) {
    if (this.photo) {
      axios({
        url: this.CLOUDINARY_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: this.formData
      })
        .then((res) => {
          this.recipeService.create({
            title: this.title,
            description: this.description,
            category: this.category,
            level: this.level,
            ingredients: this.ingredients,
            elaboration: this.elaboration,
            photo: res.data.secure_url
          });
          this.router.navigate(['/profile']);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
        this.recipeService.create({
          title: this.title,
          description: this.description,
          category: this.category,
          level: this.level,
          ingredients: this.ingredients,
          elaboration: this.elaboration
        });

    }
  }
}

//Angular base

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';

//Components

import { AppComponent } from './app.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';

//Pages

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { RecipeDetailPageComponent } from './pages/recipe-detail-page/recipe-detail-page.component';
import { ProfileComponent } from './pages/profile-page/profile.component';
import { NewRecipePageComponent } from './pages/new-recipe-page/new-recipe-page.component';
import { E404Component } from './pages/e404/e404.component';
import { ListRecipesComponent } from './pages/list-recipes/list-recipes.component';

//Guards

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';


const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuard ]},
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuard ]},
  { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'recipes', component: ListRecipesComponent, canActivate: [ RequireUserGuard ] },
  { path: 'recipes/:id', component:RecipeDetailPageComponent, canActivate: [ RequireUserGuard ] },
  { path: 'profile',  component: ProfileComponent, canActivate: [ RequireUserGuard ] },
  { path: 'new-recipe',  component: NewRecipePageComponent, canActivate: [ RequireUserGuard ] },
  { path: ':category',  component: CategoryPageComponent, canActivate: [ InitAuthGuard ] },
  { path: '**', component: E404Component } 
  ];



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    SignupPageComponent,
    ProfileComponent,
    NewRecipeComponent,
    CategoryPageComponent,
    RecipeDetailPageComponent,
    NavbarComponent,
    FooterComponent,
    LoginFormComponent,
    SignupFormComponent,
    NewRecipePageComponent,
    CardComponent,
    CardListComponent,
    ListRecipesComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    InitAuthGuard,
    RequireAnonGuard,
    RequireUserGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

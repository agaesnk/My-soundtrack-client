# My Soundtrack

## Description

Web app for music search based on void recognisation.


## User stories

 ### Errors epic
  - **404** - As a user/anon I can see a 404 page if I try to reach a page that does  not exist so that I know it's my fault.
  - **500** - As an user/anon I can see a 500 page if the server has an internal  error.
 
 ### Auth epic
  - **Sign Up** - As a user/anon I can sign up on the webpage so I can have an  account and access all My Soundtrack funcionalities.
  - **Login** - As a user I can log in to the application.
  - **Logout** - As a user I can log out from the aplication
 
 ### music epic
  - **Search song** - As a user I can use the microphone to record my humming of a song and search for it.
  - **List result**- As a user I can choose between the options gave as a result and access a page with the song details. 
  - **Song detail**- As a user I can see all the info from a song and download it.

 ### Profile
 - **View Profile** - As a user I can see my profile page where I can check and edit  my info.
 - **View My List** - As a user I can see the list of songs I searched for.


## Backlogs:

- As a user I can share a song with other users.


## Server
## API routes:

GET /auth/me
POST /auth/signup
POST /auth/login
POST /auth/me
POST /myList
GET /songs
GET /songs/:id
GET /search
GET/ profile


## Models

```javascript
User
 - username: String,
 - email: {type: String, unique: true},
 - password: String,
 - userMdBooks: [{
   type: ObjectId, ref: songs
 }]
```

```javascript
Songs
 - title: string,
 - Band: string
```


***

## Client
## Routes

  - /auth/login - Login form (RequireAnonGuard)
  - /auth/signup - Signup form (RequireAnonGuard) 
  - /home - Make a record and search for the corresponding song (RequireUserGuard)
  - /songs - See a list of songs as a resul ofthe search (RequireUserGuard)
  - /songs/:id - See the details of a song (RequireUserGuard)
  - /profile - See my details and my list of songs (RequireUserGuard)
 
## Pages

- 404
- Signup/Login
- Home
- List songs
- Song detail
- My Profile

## Components
- Login/Signup form
- Navbar
- Songs-list
- profile details

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- Profile Service
  - profile.me()



## Guards

- if logged in cannot access login/signup page
- if not logged in cannot access all pages in app

***

## LINKS



 ### Trello
 
 https://trello.com/b/wZqoFczW/my-soundtrack-proyect
 
 ### Git
 
 Client: https://github.com/agaesnk/My-soundtrack-client
 Server: https://github.com/agaesnk/My-soundtrack-server
 
 [Deploy Link](http://heroku.com)
 
 
 
 ### Slides.com
 
 [Slides Link](http://slides.com)


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

username: string;
password: string;

  constructor( 
    private authService: AuthService,
    private router : Router
    ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.authService.login({
        username: this.username,
        password: this.password
    })
    .then(()=> {
        this.router.navigate(['/private'])
    })
    .catch(error => {
        console.log(error)
    })  
  }

}
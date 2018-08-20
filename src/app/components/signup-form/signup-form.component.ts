import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  username: any;
  email: any;
  password: any;
  feedbackEnabled: any;
  processing: any;
  

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  

  ngOnInit() {
  }
  submitForm(form) {
    this.authService.signup(this.username, this.email, this.password)
    .then(() => {
        this.router.navigate(['/']);
    })
    .catch(error => {
        console.log(error);
    });
  }
}

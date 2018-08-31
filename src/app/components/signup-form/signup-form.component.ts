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
  error: any;
  

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  

  ngOnInit() {
  }
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if(form.valid){
      this.processing = true;
      this.authService.signup(this.username, this.email, this.password)
      .then(() => {
          this.router.navigate(['/']);
      })
      .catch(error => {
          this.error = error.error;
          this.processing = false;
          this.feedbackEnabled = false;
      });
    }
  }
}

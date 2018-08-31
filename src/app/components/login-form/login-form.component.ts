import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  
  feedbackEnabled: any;
  processing: any;
  error: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error= '';
    this.feedbackEnabled = true;
    if(form.valid){
      this.processing = true;
      this.authService.login(this.username, this.password)
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

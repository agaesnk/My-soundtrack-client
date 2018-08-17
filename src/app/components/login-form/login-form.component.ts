import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: any;
  password: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.authService.login(this.username, this.password)
    .then(() => {
        this.router.navigate(['/']);
    })
    .catch(error => {
        console.log(error);
    });
  }
}

import { Component } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Login } from '../../../Models/login';
import { LocalstrService } from '../../../Services/localstr.service';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginService: any;
  Client: any;
  constructor(private httpClient: LoginService,
    private router : Router,
    private local : LocalstrService,
  ) {}


     phoneNumber: string ="";
     password: string =""; 
   


     onSubmit(form: NgForm) {
      if (form.valid) {
        const loginData: Login = {
          phoneNumber: this.phoneNumber,
          password: this.password
        };
    
        this.httpClient.logInUser(loginData).subscribe({
          next: (resp: any) => {
            console.log(resp);
            this.local.setLocalStr('token', resp.token);
            this.router.navigateByUrl('/landing');
          },
          error: (err: any) => {
            console.error(err);
            alert('Login failed. Please check your credentials.');
          }
        });
      }
    }
    
}

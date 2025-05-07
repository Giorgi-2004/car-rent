import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterService } from '../../../Services/register.service';
import { Register } from '../../../Models/register';


@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private registerService: RegisterService) {}

  user: Register = {
    phoneNumber: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: ''
  };
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.registerService.postUser(this.user).subscribe({
        next: () => {
          alert('Registration succeeded');
          form.resetForm(); 
        },
        error: (resp) => {
          console.log(resp);
          alert('Registration failed');
        }
      });
    } else {
      alert('Please fill in all fields correctly');
    }
  }
}

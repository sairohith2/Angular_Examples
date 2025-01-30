import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('username') username !: ElementRef;
  @ViewChild('password') password !: ElementRef;
  authService : AuthService = inject(AuthService);
  router: Router = inject(Router)
  isLoginMode: boolean =  true;
  http: HttpClient = inject(HttpClient);
  authservice: AuthService = inject(AuthService);

  onLoginClicked(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user =  this.authService.login(username, password);

    // if(user == undefined)
    // {
    //   alert('The login Credentials you have entered is not correct')
    // }
    // else{
    //   alert('Welcome' + user.name + '.You are loged in');
    //   this.router.navigate(['/Form']);
    // }
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }


  // router: Router = inject(Router);

  // navigatetotrain(){
  //   this.router.navigate(['Train']);

  // }

  onFormSubmitted(form: NgForm){
    // console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;
    if(this.isLoginMode){
        return;
    }
    else{
      this.authService.signup(email, password).subscribe({
        next: (res) => {console.log(res)},
        error: (err) => {console.log(err)}
      });
    }
    form.reset();
  }

}

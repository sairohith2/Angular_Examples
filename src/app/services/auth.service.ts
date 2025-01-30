import { Inject, inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthResponse } from "../models/auth.response";
import { catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthService{

    isLogged: boolean = false;
    userservice : UserService = inject(UserService);
    http: HttpClient = inject(HttpClient);
    error: string | null = null;
    

    // login(username:string, password:string){

    //   let user =  this.userservice.users.find((u) => u.username === username && u.password === password);

    //   if(user == undefined)
    //         this.isLogged = false;
    //     else
    //         this.isLogged = true;
    //     return user;

    // }

    logout(){
        this.isLogged =false
    }
    IsAuthenticated(){
        return this.isLogged;
    }

    signup(email, password){
        const data = {email: email, password: password, returnSecureToken: true}
       return this.http.post<AuthResponse>
        (
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQ_ym0L68xqNDL9KXhUOtHWOIpKO396j4', 
             data
        )
        }

        login(email, password){
            const data = {email: email, password: password, returnSecureToken: true}
            this.http.post<AuthResponse>
            (
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQ_ym0L68xqNDL9KXhUOtHWOIpKO396j4',
                data

            )
        }
    }
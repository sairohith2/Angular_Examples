import { Injectable } from "@angular/core";
import { User } from "../models/users";


@Injectable({
    providedIn: 'root'
})
export class UserService{
    users: User[] = [
        new User(1, 'Rohith', 'pr', '12345'),
        new User(2, 'sai rohit', 'sr', '12345'),
        new User(3, 'pulaparthi', 'pp', '12345'),
    ]
}
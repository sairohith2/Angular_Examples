import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { TrainComponent } from "./train/train.component";
import { Route, RouterModule, Routes } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [

      {path: 'Home', component:HomeComponent },
      {path: 'Train',component:TrainComponent},
      {path: 'Form', component:FormComponent},
      {path: 'Login', component:LoginComponent}
]


@NgModule({
    imports : [
    RouterModule.forRoot(routes, {enableTracing: true})
    ],
    exports: [RouterModule]
})
export class RoutingModule {

}
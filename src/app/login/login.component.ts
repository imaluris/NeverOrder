import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router){

  }

  toDashboard(admin:boolean){
    if(admin){
      this.router.navigate(["admin-dashboard"]);
    }else{
      this.router.navigate(["dashboard"]);
    }
  }
}

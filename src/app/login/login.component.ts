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

  login(){
    document.getElementById("G")?.classList.add("hide");
    document.getElementById("A")?.classList.add("hide");
    document.getElementById("F")?.classList.add("show");

  }
  toDashboard(admin:boolean){
    if(admin){
      this.router.navigate(["admin-dashboard"]);
    }else{
      this.router.navigate(["dashboard"]);
    }
  }
}

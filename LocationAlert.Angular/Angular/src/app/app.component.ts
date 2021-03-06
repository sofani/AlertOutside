import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email = "";
  constructor(private router: Router, private authentication: AuthenticationService) { }
  
  onLogout(){
    this.authentication.logout();
    this.router.navigate(['logout']);
    this.email = "";
  }

  setEmail(email){
    this.email = email;
  }
}

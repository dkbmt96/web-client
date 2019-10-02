import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentUser: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x)
  }

  ngOnInit() {
    if (!this.currentUser) {
      this.router.navigate(['admin','login']);
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['admin','login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  status = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showSideMenu () {
    this.status =!this.status
  }
  myNotification() {
    this.router.navigate(['/user/notification']);
  }


}

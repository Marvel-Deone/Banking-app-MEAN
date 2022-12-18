import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  status = false;

  constructor() { }

  ngOnInit(): void {
  }

  // toggleBadgeVisibility() {
  //   this.hidden = !this.hidden;
  // }

}

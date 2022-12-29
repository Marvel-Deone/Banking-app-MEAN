import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayTitle: any = 'update_profile';
  constructor() { }

  ngOnInit(): void {
  }

  changeDisplay(title: any) {
    this.displayTitle = title;
  }

}

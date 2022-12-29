import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  setStatus() {
    this.status = !this.status;
  }

}

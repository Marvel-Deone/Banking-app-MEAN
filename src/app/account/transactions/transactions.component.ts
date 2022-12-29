import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  drawalTitle?:any;
  drawalStat?:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  drawal(value:any) {
    this.drawalTitle = value;
    this.drawalStat = true;
  } 
  myDrawal() {
    this.drawalStat = false;
  }

}

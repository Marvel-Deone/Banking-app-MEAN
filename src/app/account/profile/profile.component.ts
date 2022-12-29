import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayTitle: any = 'update_profile';
  imgname?:any;
  constructor() { }

  ngOnInit(): void {
  }

  changeDisplay(title: any) {
    this.displayTitle = title;
  }
  loadImage(event:any){
    if (event.target.files.length > 0) {
        const files = event.target.files[0];
      this.imgname = files.name;
      const reader = new FileReader();
      console.log(event.target.files);
    }else {
      console.log('Waiting');
      
    }
  }

}

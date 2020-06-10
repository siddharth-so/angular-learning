import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: any;
  itemImageUrl: any;
  isDisabled = true;

  constructor() { }

  ngOnInit() {
    this.title = 'This is your title';
    this.itemImageUrl = 'https://img.icons8.com/pastel-glyph/2x/person-male.png';
  }

  onKey(event: any){
    this.title = event.target.value;
  }

}

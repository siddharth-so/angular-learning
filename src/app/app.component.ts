import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './app.component.html',
  styles: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Good';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: '<h2>This is contact view</h2>',
  styles: ['./contact.component.scss']
})
export class ContactComponent {
  title: string;
  constructor() {
    this.title = 'Good';
  }

}

import { AppPage } from './../../e2e/src/app.po';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpolation5';
  name = 'bruce';
  getName()
  {
    // return this.name
    return 'peter'
  }
  obj = {
    name: 'kelly',
    age: 20
  }
  arr = ['bruce', 'tony', 'peter'];
  siteUrl = window.location.href
}

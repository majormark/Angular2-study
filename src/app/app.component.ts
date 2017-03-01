import { Component } from '@angular/core';

@Component({
  moduleId: module.id, //commonJS format, module.id = the absolute URL of the component class 
                       //module file(this file).
                       //tell Angular where the component file is by setting the moduleId
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active" >dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active" >Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent}   from './hero-search.component'
//上面这些import都是JavaScript级别的import，和angular毫无关系


@NgModule({
  imports: [ //引入module的顺序很重要
    BrowserModule,
    FormsModule,
    HttpModule,//这个和下面那个交换顺序，就会取不到数据
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
   
  ],
  declarations: [//可以放component、directives、pipes
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]//会被放到browser DOM中，通常就一个，会触发component tree的创建
})
export class AppModule { }

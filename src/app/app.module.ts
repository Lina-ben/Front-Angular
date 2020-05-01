import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component'

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';





@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        Ng2SearchPipeModule,
        RouterModule.forRoot([
            {path: '', component: MovieListComponent},
            {path: 'movies/:movieid', component: MovieDetailsComponent},
            {path: 'login', component: LoginComponent},
            {path: 'logout', component: LogoutComponent},


        ]),
        FormsModule
    ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MovieListComponent,
    MovieDetailsComponent,
    SearchBarComponent,
    LoginComponent,
    LogoutComponent,




  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

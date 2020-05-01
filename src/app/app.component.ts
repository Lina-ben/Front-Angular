import { Component } from '@angular/core';
import {MovieService} from "./movie.service";
import {Movie} from "./movie";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  movies: Movie[];
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getmovies().subscribe(
        res => {
          this.movies = res;
        }
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

import {Component, OnInit} from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  movies: Movie[];
  searchText;



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

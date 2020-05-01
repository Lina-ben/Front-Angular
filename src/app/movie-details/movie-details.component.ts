import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { switchMap } from 'rxjs/operators';
import {UserService} from "../user.service";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie:Movie;


  constructor( private movieService: MovieService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
            this.movieService.getmoviesWithId(params.get('movieid')))
    ).subscribe(movie => this.movie = movie);
  };










}

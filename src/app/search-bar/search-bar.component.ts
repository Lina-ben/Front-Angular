import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subject, of} from "rxjs";
import {Movie} from "../movie";
import {MovieService} from "../movie.service";
import {
  catchError,
  debounceTime, distinctUntilChanged, finalize, switchMap, tap
} from 'rxjs/operators';
import {HttpErrorResponse} from "@angular/common/http";




@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  movies$: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  clear()
  {
    this.searchTerms.next("");
  }
  ngOnInit(): void {

    this.movies$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),


        // switch to new search observable each time the term changes
        switchMap((term: string) =>  { if (term === '') return of<Movie[]>([]);
    else return this.movieService.getmoviesWithTitle(term);}),

  );
  }




}

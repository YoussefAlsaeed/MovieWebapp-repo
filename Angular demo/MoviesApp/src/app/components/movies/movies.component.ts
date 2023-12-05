import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { delay } from 'rxjs/internal/operators/delay';

interface Movie {
  id: number;
  name: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  first_air_date: string;
}


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  totalResults: any;
  total_results: any;
  movies: Movie[] = [];
  searchStr: any;
  searched=false;

  constructor(private movieService: MoviesService) {
  
  }

  ngOnInit() {
    this.getPopulardMovies(1);
  }

  getPopulardMovies(page: number) {
    this.movieService.getPopulardMovies(page).subscribe((res: any) => {
      this.movies = res.results;
      this.totalResults = res.total_results;
    },
    error => console.log(error));
  }


  searchMovies() {
    this.movieService.searchAll(this.searchStr).subscribe(res => {
      this.movies = res.results;
      this.searched=true;
    });
  }

}
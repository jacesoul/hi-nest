import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id); // +id는 string을 number로 바꿀수있다.
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');

const yourRating = prompt('На сколько оцените его?', '');


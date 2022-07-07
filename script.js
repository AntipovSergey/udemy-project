'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const lastWatchedFilmFirstQuestion = prompt('Один из последних просмотренных фильмов?', '');
  const yourRatingFirstQuestion = prompt('На сколько оцените его?', '');

  if (lastWatchedFilmFirstQuestion !== null && yourRatingFirstQuestion !== null && lastWatchedFilmFirstQuestion !== '' && yourRatingFirstQuestion !== '' && lastWatchedFilmFirstQuestion.length < 50) {
    personalMovieDB.movies[lastWatchedFilmFirstQuestion] = yourRatingFirstQuestion;
    console.log('Done!')
  } else {
    console.log('Error!');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);

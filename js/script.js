"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

   }
}
start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};





function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
         console.log("DONE");
         personalMovieDB.movies[a] = b;

      } else {
         console.log("ERROR");
         i--;
      }
   }
}
rememberMyFilms();





function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (personalMovieDB.count >= 30) {
      console.log("ВЫ киноман!!");
   } else {
      console.log("ERROR");
   }
}
detectPersonalLevel();

function showMyDW(show) {
   if (!show) {
      console.log(personalMovieDB);
   }
}
showMyDW(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

   }

}
writeYourGenres();




/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// // 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// const adv = document.querySelectorAll('.promo__adv img'),
//       poster = document.querySelector('.promo__bg'),              // це 2ге завдання
//       genre = poster.querySelector('.promo__genre'),              // це 2ге завдання
//       movieList = document.querySelector('.promo__interactive-list');     // це до 3го завдання
      
// Краще використовувати цей метод 
// adv.forEach(item => {
    // item.remove();
// });

// // Цим також можна але він більш для прикладу
// adv.forEach(function(item) {
//     item.remove();
// });


// //2) Изменить жанр фильма, поменять "комедия" на "драма"

// genre.textContent = 'драма';

// // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// // Реализовать только при помощи JS

// poster.style.backgroundImage = 'url("img/bg.jpg")';        // тут потрібно щоб кавички відрізнялись зовнішні від внутрішніх бо буде синтаксична помилка


// // 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// // Отсортировать их по алфавиту 

// movieList.innerHTML = '';

// movieDB.movies.sort();

// // 5) Добавить нумерацию выведенных фильмов */

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//     <li class="promo__interactive-item">${i + 1} ${film}
//              <div class="delete"></div>
//        </li>
//     `;
// });

// // a = a + 'aaa';       теж саме 
// //a += 'aaa';           для прикладу чому так робим в задачі №5


                    // // Урок 33. Практика. События на странице проекта

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики




    document.addEventListener('DOMContentLoaded', () => {       // 1 Завдання    // Чекає ззагрузку DOM дерево
        
        const movieDB = {
            movies: [
                "Логан",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость",
                "Скотт Пилигрим против..."
            ]
        };
        
        
        const adv = document.querySelectorAll('.promo__adv img'),
              poster = document.querySelector('.promo__bg'),              
              genre = poster.querySelector('.promo__genre'),              
              movieList = document.querySelector('.promo__interactive-list'),
              addForm = document.querySelector('form.add'),                         // 1 Завдання
              addInput = addForm.querySelector('.adding__input'),
              checkbox = addForm.querySelector('[type="checkbox"]');                // удобно находити чекбокси через атрибути тоїсть поставити [] це обозначение атрибутів html

        addForm.addEventListener('submit', (event) => {                         // 1 Завдання
            event.preventDefault();                                             // таким методом коли ми будем натискати відправити сторінка не буде перезагружатися

            let newFilm = addInput.value;                      // що користувач увів в інпут
            const favorite = checkbox.checked;                   // тут галочку чи поставлена чи ні

            if (newFilm) {                                       // для того щоб виконувалось тоді коли наш input заповнений, а якщо ні то щоб нічого не відбувалось
               
               if(newFilm.length > 21) {                              // 2 Завдання
                   newFilm = `${newFilm.substring(0, 22)}...`;
               }

               if (favorite) {                                       // 4 Завдання
                   console.log("Добавляем любимый фильм");
               }
               
                movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
            }

            event.target.reset();                                 // очищує форму щоб всі дані зчезли

        });

            const deleteAdv = (arr) => {
                arr.forEach(item => {
                     item.remove();
            });
        };
        
        deleteAdv(adv);

            
        
            const makeChanges = () => {
                genre.textContent = 'драма';
        
                poster.style.backgroundImage = 'url("img/bg.jpg")';
            };

            makeChanges();

            const sortArr = (arr) => {
                arr.sort();
            };


            function createMovieList(films, parent) {
                parent.innerHTML = '';
                sortArr(films);                                                // 5 Завдання   // сортує по алфавіту

                films.forEach((film, i) => {
                parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                         <div class="delete"></div>
                   </li>
                `;
            });


            document.querySelectorAll('.delete').forEach((btn, i) => {           // 3 Завдання
                btn.addEventListener('click', ()  => {
                    btn.parentElement.remove(); 
                    movieDB.movies.splice(i, 1);                                   // splise - вирізає елемент з масива. прописуєм в першому аргументі номер з якого потрібно почати, а другий аргумент скільки елементів потрібно удалити
                   
                    createMovieList(films, parent);                    // щоб заново перестроювався список при видаленні елемента 
                }); 
            });
         }

                createMovieList(movieDB.movies, movieList);           // movieDB.movies - фільми які будем перебирати і також movieList - куда ми будем все поміщати

    });









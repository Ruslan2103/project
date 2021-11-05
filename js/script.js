"use strict";                                 // это установка, которая заставляет код обрабатываться в строгом режиме. 

// console.log(44/0);                          // виходить Infinity
// console.log('string' * 9);                     // NaN тому що різні типи данних

// const person = `string`;

// const bool = true;

// // console.log(somehing);                        // null тому що somehing немає ніде

// let und;
// console.log(und);                                // тут undefined



// // console.log(obj.name);                          // такий спосіб 
// console.log(obj['name']);                          // і такий але якщо ми берем в [] то без крапки в скобки
  
 
// const obj = {                                     // тут ми створили ОБ'ЄКТ 
//     name: "Ruslan",                               // де name, age, isMarried є СВОЙСТВА ОБ'ЄКТА
//     age: 24,                                      // а "Ruslan", 24, false ЗНАЧЕННЯ СВОЙСТВА
//     isMarried: false                              // name, age, isMarried являються ключами до Значень
// };


// let arr =['bla.bla', 'pam.pam', '6', 'imf.gpg'];       // array(масив) тут ключів немає, тому що   
// console.log(arr[2]);                                   // Array йдуть в послідовному порядку


// 1. Просте спілкування з користувачем

//  alert('hello');                                  // alert - вибиває вікно де тільки Ок

// const result = confirm('Are you here?');          // confirm  - запитує, де є 2 варіанти відповіді.  
// console.log(result);                              // якщо ок нажали то true. Отмена то false
 
// // Якщо добавити перед prompt + то поміняється тип данних з string на number
// const answer = prompt('Вам є 18?', '18');        // prompt - вікно в якому вводиш данні '18'- задає варіант відповіді
// console.log(answer);                              // ІНФОРМАЦІЯ ЯКА ПРИХОДИТЬ ВІД КОРИСТУВАЧА БУДЕ У ВИГЛЯДІ STRING
                                                     // АЛЕ ЇЇ МОЖНА ЗМІНИТИ

// const answers = [];                                   // array

// answers[0] = prompt('Ваше імя?', '');                 // задає питання по порядку
// answers[1] = prompt('Ваша фамілія?', '');
// answers[2] = prompt('Скільки вам років?', '');

// console.log(typeof(answers));


// //  2. Интерполяция(ES6)

// // Приклад для того щоб знати що є такий
// const category1 = 'toys1';
// console.log('https://someurl.com/' + category1 + '/' + '5');


// // Приклад яким слід користуватись
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);          // Працює з такими кавичками `` 

// const user = 'Ruslan';
// alert(`Привіт, ${user}`);



// // 3.Оператори 

// console.log('arr' + ' - object');
// console.log( 6 + + ' 8');       //  другий + додає // другий + це унарний плюс, використовує один аргумент для роботи


// let incr = 10,
//     decr = 10;

// incr++;         // коли ставимо ++ оператори перед то нозиваються префиксними  
// decr--;         // якщо після то постфиксние

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);             // розділило на скільки можливо і вивело остаток 1


// // // одне = то це присвоєння
// console.log(2*4 == 8);                    // два == порівнює 
// console.log(2 * (2 + 2) === '8');         // три === порівнює по типу даних

// // && оператор І          // Працює тоді коли два або більше значень являються правдивими
// // || оператор или        // Працює коли хотя б 1 значення правдиве 
// // ! оператор отрицание повертає значення в противоположне 
// // != не равен
// const isChecked = true,
//       isChlose = false;

//       console.log(isChecked && isChlose);


//       const isChecked1 = true,
//       isChlose1 = false;

//       console.log(isChecked1 || isChlose1);


// // 4. Git - система контроля версій, позволяє створювати точки отчота
// //    Git - програма для створення репозиторії
// //    GitHub - хранилище репозиторіїв
      
// // Щоб поставити Git 
// // 1. прописуєм в ТЕРМІНАЛІ git init       // появиться скрита папка .git
// // 2. прописуєм ім'я git config --global user.name "Your Name"
// // 3. прописуєм емейл git config --global user.email "your_email@whatever.com"
// // щоб перевірити статис репозиторія git status
// // Щоб подивитись які commit були прописуєм git log.
// // У Git репозиторія є 3 состояния файлів:                                       // для поняття
// // 1)Коли файли просто створені
// // 2)Коли Git слідкує за певними файлами. Попадають в індекс
// // 3)Коли Git створи контрольну толчку, ми зможем вернутись і подивитись яким був проект раніше в контрольній точці 
// // 4. git add --A  з самого початку працювало з двома --  // потім з одним git add -A        // переносим файли в індекс. 2)Состояния файла
// // 5. git commit -a -m"Вказуєм що зробили на цій конкретній точці"                           // створили контрольнк точку 3)вище сказано      
// // Створюєм новий репозиторій на GitHub і вписуєм ті команди які там задаються у ТЕРМІНАЛІ
// // Для перенесення даних на GitHub коли щось змінили потрібно:
// // 1) подивитись де відбулись зміни командою git status
// // 2) додати ці файли як вказано в 4.пункті. Або git add js/script.js по назві файла 
// // 3) потім як у 5. пункті git commit -a -m"Нову назву файлу"
// // 4) git push - для того щоб пушилось в той репозиторій який створили раніше.

// // 5. Для того щоб використовувати той самий репозиторій на другому компютері
// // 1) cd .. 
// // 2) cd і назву папки куди хочем помістити
// // 3) git clone і шлях репозиторію(силку) і папку куди буде все складатись
// // Після того як внесли зміни і тд, потрібно зберегти як все:
// // git add -A
// // git commit  -a -m"назва" 
// // git push     відправляєм дані на репозиторій

// // Після роботи на другому компютері повертаємось за свій і щоб получити дані з репозиторію:
// // git pull          - витягує нові дані з репозиторію

// // Якщо в ручну в самому GitHub в репозиторії зробили зміни і ми в себе то:
// // git pull 
// // пишем повідомлення 
// // нажимаєм ctrl+c 2 раза
// // :wq!
// // Готово

// // Задача урок 12

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// // Розв'язок

// const numberOfFilms = +prompt('Скільки фільмів ви подивились?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     generes: [],
//     privat: false
// };

// const a = prompt('Один з останніх проглянутих фільмів?', ''),
//     b = prompt('На скільки оцінити його?', ''),
//     c = prompt('Один з останніх проглянутих фільмів?', ''),
//     d = prompt('На скільки оцінити його?', '');
    

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;
    

//     console.log(personalMovieDB);


// // Урок 13. Условия

// if (4 == 9) {
//     console.log('Ok');
// } else {
//     console.log('Error')
// }


// const num = 100;

// if (num < 99) {
//     console.log('Error')
// }else if (num > 200) {
//     console.log('Now');
// }else {
//     console.log('Ok!');
// }
// // // для того щоб запобігти таких великих розгалужень є конструкція switch
// // // switch - завжди йде на СТРОГЕ порівняння на відміну від простих умов як вище де є < >
// const num1 = 100;

// switch (num1) {
//     case 49:
//         console.log('Непрвильно');
//         break;
//         case 200:
//         console.log('Непрвильно');
//         break;
//         case 100:
//             console.log('Вірно!');
//             break;
//         default:
//             console.log('Не цього разу');
//             break;
// }



// // // З допомогою тернарного оператора

// (num === 100) ? console.log('Ok!') : console.log('Error');

// 4 + 4  // + являєьбся бінарним аргументом
// +'4';  // унарний + який працює лише з однією строкою


// // Урок 14. Цикли

// // 1.Цикл

// let num = 50;

// while (num <= 55) {          // while - поки в нас це умова виконується ми будем робити якісь дії
//     console.log(num);
//     num++;
// }

// // 2.Цикл

// do {
//     console.log(num);
//     num++;
// }
//     while (num < 55);

    // // 3.Цикл найчастіше використовується

    // for(let i = 1; i < 10; i++) {
    //     if(i===6) {
    //          break;                    // оператор break зупиняється на 5
    //         //continue;                // оператор continue пропускає 6 і рухається далі
    //     }
        
    //     console.log(i); 
    // }

   // // Задача по циклах и условиях 

    /* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// // Розв'язок

// const numberOfFilms = +prompt('Скільки фільмів ви подивились?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     generes: [],
//     privat: false
// };
   
//     for(let i = 0; i <2; i++) {
//         const a = prompt('Один з останніх проглянутих фільмів?', ''),
//               b = prompt('На скільки оцінити його?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
    
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     }else if (personalMovieDB.count >= 30 ) {
//         console.log('Вы киноман');
//     }else {
//         console.log('Произошла ошибка');
//     }

//     console.log(personalMovieDB);


// // Урок 16. Стрілочні функції
  // // Замикання функцій - це сама функція разом з всіма зовнішніми перемінними які їй доступні 

  // // Зразок 1) Функції
 // // FUNCTION DECLARATION - Можна визвати перед обявлением
//   let num = 20;                            //  ГЛОБАЛЬНА перемінна

// function showFirstMessege(text) {             // () - в середині пишемо аргумент
//     console.log(text);
//     let num = 10;                       // Якщо обявляєм ЛОКАЛЬНУ перемінну в середині функції то зовні вона не доступна
//     console.log(num);                   // відображає ЛОКАЛЬНУ тому що в середині 
// }

// showFirstMessege('Sex');                       // Обов'язково визивати функцію після створення щоб вона працювала
//  console.log(num);                             // як тут помилка, тому що ми зовні і відображає ГЛОБАЛЬНУ


//  // // Зразок 2) Функції
    
//     console.log(calc(4, 3));      // Наприклад тут FUNCTION DECLARATION - Можна визвати перед функцією
//     console.log(calc(5, 6));
//     console.log(calc(10, 6));
 
//  function calc (a, b) {
//     return (a + b);            // після return нічого не задаємо 
//     // // console.log('dwed'); // Цей код називається Unreachable недасяжний, мертвий він ніколи не виконаєтся
// }

//  // // Зразок 3) Функції
//  function ret () {
//      let num = 50;
//      return num;
//  }

//  const anotherNum = ret();    // 50 вийшло на зовні зберігається уже в anotherNum і просто виводим її 
//  console.log(anotherNum);
 
// // // FUNCTION EXPRESSION - Створюється тоді коли до неї дохходить потік коду. Можна визвати тільки після обявления 
// const logger = function() {
//     console.log("Hello");
// };

// logger();

// // // СТРІЛОЧНА ФУНКЦІЯ - Не має сaмого контекста

// const bla = (a, b) => {
//     console.log('1');
//      return a + b;
// };


// // Урок 17.Методи і свойства строк і чисел

// const str = 'teSt';
// // const arr = [1, 2, 10];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// let fruit = "Some fruit";
// console.log(fruit.indexOf('f'));    // indexOf - показує з якої позиції починається, в нас з 5 тому що є слово Some і пробіл


// const logg = 'Hello world';       
// // вирізали слово world (6, 11) але 11 не включається, тоїсть по факту 10 символів
// console.log(logg.slice(6, 11));  // slice - вирізає кусочки з такого то елеманта до такого то 
// console.log(logg.slice(6));      // Від 6 елемента все буде аж до кінця

// // substring чисто для поняття а так то є slice
// console.log(logg.substring(6, 11));   // substring - працює так же як і slice лише тут не можна - (мінус) і можна 1 значення задавати більшим ніж друге

// console.log(logg.substr(6, 5));    // substr - перше число це з якої позиції починаєм а друге скільки символів


// const num = 12.2;                   // Math - для робити з числами
// console.log(Math.round(num));       // Math.round - для заокруглення числа


// const test = '12.2px';
// console.log(parseInt(test));         // parseInt - навіть коли використовуєм на string то робить ціле число
// console.log(parseFloat(test));       // parseFloat - витягує з дробними значенням

// // Урок 18.Задача використовуєм функії

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/
 // // Розв'язок
// let  numberOfFilms;

// function start() {
//      numberOfFilms = +prompt('Скільки фільмів ви подивились?', '');
     
//      while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Скільки фільмів ви подивились?', '');
//      }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     generes: [],
//     privat: false
// };
   
    
//     function rememberMyFilms() {
//         for(let i = 0; i <2; i++) {
//             const a = prompt('Один з останніх проглянутих фільмів?', ''),
//                   b = prompt('На скільки оцінити його?', '');
    
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     }

//     rememberMyFilms();

    

//     function detectPersonalLevel() {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         }else if (personalMovieDB.count >= 30 ) {
//             console.log('Вы киноман');
//         }else {
//             console.log('Произошла ошибка');
//         }
//     }

//     detectPersonalLevel();

//     function showMyDB (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     }

//    showMyDB(personalMovieDB.privat); 

//    function writeYourGenres () {
//        for (let i = 1; i <=3; i++) {
//             personalMovieDB.generes[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);   
//        }
//    }

//    writeYourGenres();


// // Урок 19. Callback функция

function first() {
    setTimeout(function() {
        console.log(1);
    }, 3000);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, calback) {
    console.log(`Я вчу ${lang}`);
    calback();
}

function done() {
    console.log('Я пройшов цей урок');
}

learnJS('JavaScript', done);
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

// ++incr;         // коли ставимо ++ оператори перед то нозиваються префиксними  
// decr--;         // якщо після то постфиксние

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);             // розділило на скільки можливо і вивело остаток 1


// // // одне = то це присвоєння
// console.log(2*4 == 8);                    // два == порівнює 
// console.log(2 * (2 + 2) === '8');         // три === порівнює по типу даних

// // оператор &&(и) завжди запинається на false(лжи)
// // оператор ||(или) завжди запинається на true(правді)
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
        // case 100:
        //     console.log('Вірно!');
        //     break;
//         default:
//             console.log('Не цього разу');
//             break;
// }



// // // З допомогою тернарного оператора

// (num === 100) ? console.log('Ok!') : console.log('Error')

// 4 + 4  // + являєьбся бінарним аргументом
// +'4';  // унарний + який працює лише з однією строкою


                              // // Урок 14. Цикли

// // 1.Цикл

// l    et num = 50;

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

    // for(let i = 1; i < 10; i++ ) {       
    //     if(i===6) {
    //         //  break;                    // оператор break зупиняється на 5
    //         continue;                // оператор continue пропускає 6 і рухається далі
         
    //     }
    //         console.log(i);   // якщо пропишем так  console.log(++i); то будуть парні числа видавати, а якщо так console.log(i++); то не парні 
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

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 3000);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, calback) {
//     console.log(`Я вчу ${lang}`);
//     calback();
// }

// function done() {
//     console.log('Я пройшов цей урок');
// }

// learnJS('JavaScript', done);


                  // // Урок 20. Об'єкти

// // Об'єкти - це структури які можуть зберігати в собі любі типи данних в форматі КЛЮЧ ЗНАЧЕННЯ (name: 'test')
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {                         // // Створюєм метод вручну. Метод це дія яку вміє здійснювати наш об'єкт
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;                     // деструктуризация об'єкта для того щоб не шукати так console.log(options['colors']['border'])
// console.log(border);

// console.log(Object.keys(options).length);              // Object.keys - цей метод бере наш Об'єкт і робить масив і показує значення як ключі. А.length показує кількість

// console.log(options['colors']['border']);    // для того щоб дізнатись конкретне свойство об'єкта беремо [ключ] [значення], але це не дуже правильно тому що є деструктуризация об'єкта

// delete options.name;                     // delete Видаляє свойство з об'єкта 

// console.log(options.colors); 


// let counter = 0;                                  // для того щоб підраховувало свойства в об'єкті

// for (let key in options) {                        // щоб перебрати всі свойства об'єкта.Кожне свойсто називається словом key і кажемо що будем копатися в середині options
//     if (typeof(options[key]) === 'object') {                                   // провіряєм на те що це в нас є Об'єкт. Якщо так то
//         for (let i in options[key]) {                                          // запускаєм цикл for in. Замість key задали i бо буде пересікання
//             console.log(`Свойство ${i} має значення ${options[key][i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} має значення ${options[key]}`);          // ${key} - взнаєм як називається ключ. ${options[key]} і яке має значення. color вибиває значення [object Object]
//         counter++;
//     }                                                                         // щоб його вивести потрібно прописати условие яке відображається вище 
// }

// console.log(counter);                                                         // і вивести підраховані свойства в об'єкті


                      // // Масиви і підмасиви 

// const arr = [1, 2, 3, 6, 8];
// arr.pop();                               // pop видаляє останній елемент з нашого масиву
// arr.push(10);                            // push добавляє елемент в кінець масива
// console.log(arr);
// console.log(arr.length);

// arr.forEach(function(item, i, arr) {                                  // forEac перебираєм всі елементи масиву. Але тут нема break 
//     console.log(`${i}: ${item} в середині масива ${arr}`);            // позволяє зручно маніполювати тим масивом данних який в нас буде
// });

// for (let i = 0; i < arr.length; i++) {               // перебираєм всі елементи масиву обичним циклом 
//     console.log(arr[i]);
// }

// for (let value of arr) {                               // а можна перебирати методом for of . Має break 
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');                  // .split - перетворює строку в масив розделитель. (', ') вказали що через кому 
// products.sort();                                   // .sort - сортує строки
// console.log(products.join('; '));                  // .join - перетворює масив в строку розделитель
  
// const arr = [19, 22, 16, 12, 28, 3, 9];
// arr.sort(compareNum);                                        // .sort - сортує строки. Щоб сортувати числа 
// console.log(arr);

// function compareNum(a, b) {                                   // прописуєм о це і вуаля
//     return a - b;
// }

// // У псевдомасивів нема ніяких методів які є в масивах, це просто структура яка зберігає дані по порядку


                 // // Урок 22. Передача по силці або по значению. Spred оператор

// let a = 5,
// b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;        // Силку
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// // // 2гий Метод 

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// // // 3 Метод

// const oldArray = ['a', 'b', 'c'];                   // всюди в прикладах робим копію різними методами
// const newArrey = oldArray.slice();

// newArrey[1] = 'blabla'
// console.log(newArrey);
// console.log(oldArray);

// // // Spred оператор

// const video = ['yotube', 'video', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];      // Оператор розворота

//     console.log(internet);



    // function log(a, b, c) {
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    // }

    // const num = [2, 5, 7];

    // log(...num);                  // Spred оператор ...  Розкладаєм масив на 3 окремих елемента


    // // 4 Метод

// const array = ['a', 'b'];

// const newArrey1 = [...array];

// console.log(array);
// console.log(newArrey1);

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(q);
    

             // // Основи ООП, прототипно-ориентированное наследование
             // // ОПП - наука про те як правильно робити архітектуру 
             
    // let str = 'some';
    // let strObj = new String(str);

    // console.log(typeof(str));
    // console.log(typeof(strObj));

    // console.dir([1, 2, 3]);
       
    // // Робим так щоб jonh вмів все те саме що soldier, але різнились пару свойств наприклад як у нас health 

    // const soldier = {
    //     health: 400,
    //     armor: 100,
    //     sayHello: function() {
    //         console.log('Hello');
    //     }
    // };

    // const jonh = {
    //     health: 100
    // };

    // // А тут ми створювали окремі свойства для jonh які вказані вище
    // Object.setPrototypeOf(jonh, soldier);                    //   setPrototypeOf - jonh вмів все те саме що soldier
    // jonh.sayHello();
    // console.log(jonh.armor);

   // // по факту Object.create теж саме що Object.setPrototypeOf але тут ми не створюєм окремі свойста для jonh. А просто дублюєм все що в soldier
    // const jonh = Object.create(soldier);                  // Object.create - для створення прототипних зв'язків
    // jonh.sayHello();
    // console.log(jonh.health);

    


    // // Устарівший формат для того щоб просто знати

    // jonh.__proto__= soldier;

    // console.log(jonh.armor);
   
    // jonh.sayHello();


                // // Урок 24. Задача, використовуєм об'єкти


 // ) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
  // перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
  // Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
                
  // 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
  // переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
                
// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
 // Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
 // при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
                
                
                            // Код возьмите из предыдущего домашнего задания

 // // Розв'язок

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     generes: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Скільки фільмів ви подивились?', '');
        
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Скільки фільмів ви подивились?', '');
//         }
//     },
//     rememberMyFilms: function() {
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
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         }else if (personalMovieDB.count >= 30 ) {
//             console.log('Вы киноман');
//         }else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         }else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i < 2; i++) {
//         // //    let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//         //  //   if(genre === '' || genre == null) {
//         //  //     console.log('Введено не коректні дані ')                    // 2-ий Спосіб
//         //  //       i--;
//         //  //   }else {                                                       
//         //  //       personalMovieDB.generes[i - 1] = genre;
//         //  //   }
            
//         let genres = prompt(`Введеть улюблені жанри через кому `).toLowerCase();

//         if(genres === '' || genres == null) {
//                     console.log('Введено не коректні дані ');
//                     i--;
//                 }else {
//                     personalMovieDB.generes = genres.split(', ');
//                     personalMovieDB.generes.sort();
//                 }
//         }

//         personalMovieDB.generes.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };

                            // // Динамичекская типизация в JS
                            
        // // To String
// // 1. Спосіб.    Старий спосіб

// console.log(typeof(String(null)));

// // 2. Спосіб 
// console.log(typeof(5 + ''));           // при додаванні чого лібо до строки виходить string
// console.log(typeof(5 + ''));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';
// console.log(typeof(fontSize));

            // // To Number
// // 1. Спосіб.  Старий спосіб

// console.log(typeof(Number('4')));

// // 2. Спосіб  
// console.log(typeof(+'5'));                                                // змінюєм унарним + на числовий тип даних

// // 3. Спосіб.  Мало користуються цим способом

// console.log(typeof(parseInt('4px', 5)));

// // Реальний спосіб

// let answer = +prompt('Hello', 'напишіть число');                               // змінюєм унарним + на числовий тип даних 2им способом
// console.log(typeof(answer));
 
            // // To boolean

             // // 0, '', null, undefined, NaN;          // ЗАВЖДИ БУДЕ false
 
// // 1. Спосіб 
// let switcher = null;                        // не буде працювати оскільки null

// if (switcher) {
//     console.log('Warking...');
// }

// switcher = 1;                              // буде праювати оскільки задане значення

// if (switcher) {
//     console.log('Warking...');
// }

// // 2. Спосіб. використовується дуже рідко бо є попередній спосіб

// console.log(typeof(Boolean('4')));

// // 3. Спосіб

// console.log(typeof(!!'43444'));                        // !! для того щоб перетворити в boolean тип даних 


                        // // Задачі з співбесід на розуміння основи

// let x = 5; alert( x++ );                // буде 5  

// [ ] + false - null + true               // NaN 
// console.log([] + false - null + true);        // пустий масив в таких операціях [] відноситься до строкових типів даних а іменно до пустої строки

// let y = 1; 
// let x = y = 2; 
// alert(x);                                 // 2

// [ ] + 1 + 2                                   
// console.log([ ] + 1 + 2);           // "12"   із за приведение типов данных.       //  було б boolean або null замість [] тоді було б 3 

// alert( '123'[2] );                     // "3"       // тому що вказано 2ий символ а починаються з 0

// 2 && 1 && null && 0 && undefined                  // оператор &&(и) завжди запинається на false(лжи)
// console.log(2 && 1 && null && 0 && undefined );   // null                  // 0, '', null, undefined, NaN; - ЗАВЖДИ БУДЕ false. В даному випадку запинається на 1ому ложному виразі null і далі код не піде    

// console.log(!!( 1 && 2 ) === (1 && 2)) ;             // false    // є різниця між ними тому що так !! ми перетворили його в boolean значення   

// alert( null || 2 && 3 || 4 );         // 3                 // оператор ||(или) завжди запинається на true(правді)

// const a = [1, 2, 3];                               // тому що різні ящики в нашому випадку різні хранилища інформації  
// const b = [1, 2, 3];
// console.log(a == b);                               // false не правда

// alert( +"Infinity" );                                 // выведет этот код Infinity    // а тип даних Number

// console.log("Їжак" > "яблуко");                         // false     //  а хз чо,  треба дивитись по таблиця юнікод

// console.log(0 || "" || 2 || undefined || true || falsе );   // 2           // шукає і стопориться до першого true

                             // // Получаєм елемент зі сторінки

// const box = document.getElementById('box');               // шукаєм елемент по id

// console.log(box);

// const btns = document.getElementsByTagName('button');    // шукаєм елемент по назві тега

// console.log(btns);                            // якщо так вказати то нам видасть колекцію, навіть якщо елемент один
// console.log(btns[1]);                         // а так ми одержемо той елемент який вказалали 

// const circle = document.getElementsByClassName('circle');      // шукаєм елемент по class
// console.log(circle);

// const hearts = document.querySelectorAll('.heart');                    // querySelectorAll - в середину нього поміщаєм CSS селектор. і тут потрібно ставити . або # в залежності class чи id 
// hearts.forEach(item => {                                               // виводими всі почергово елементи які будуть находитись в масиві hearts
//     console.log(item);                                                 // item це кожний елемент який находиться в тому псевдомасиві hearts
// });


// const oneHeart = document.querySelector('.heart');                     // querySelector тут буде виводитись лише перший елемент
// console.log(oneHeart);

                    // // Дії з елементами на сторінці 

// // З попереднього уроку
// const  box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     wrapper = document.querySelector('.wrapper'),                     // створили для того щоб викорисстовувати безліч раз
//    // // замінили на wrapper замість document щоб було понятно в середині чого ми шукаєм
//     hearts = wrapper.querySelectorAll('.heart'),                     // querySelectorAll виводими всі почергово елементи які будуть находитись в масиві
//     oneHeart = wrapper.querySelector('.heart');                      // querySelector тут буде виводитись лише перший елемент
    

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';                                       // а тут записуєм так) одне і теж що на рядок нище   

// box.style.cssText = `background-color: blue; width: 500px`;         // cssText тут записуєм як у css

// btns[1].style.borderRadius = '100%';
// circle[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {                             // тут ми вибираєм всі елементи hearts
//     hearts[i].style.backgroundColor = 'blue';                         // спеціальні перебираючі методи
// }

// hearts.forEach(item => {                                                 // тут ми вибираєм всі елементи hearts за допомогою forEach
//     item.style.backgroundColor = 'blue';
// });

// const test = document.createTextNode('бла бла бла');               // цей метод використовується дуже рідко

// const div = document.createElement('div');                              // document.createElement Створили новий елемент але він існує лише в середині JS на сторінці він не появиться
// div.classList.add('black');                              // добавили в створений клас колір

// document.body.append(div);                            // добавили створений елемент в кінець сторінки
// document.querySelector('.wrapper').append(div);       // добавили створений елемент в клас wrapper ОСТАННІМ
// wrapper.prepend(div);                                 // добавили створений елемент в клас wrapper ПЕРШИМ

// hearts[1].before(div);                                   // тут добавили створений елемент ПЕРЕД hearts[1]
// hearts[1].after(div);                                    // тут добавили створений елемент ПІСЛЯ hearts[1]

// circle[0].remove();                                      // видаляєм circle[0]

// hearts[0].replaceWith(circle[0]);                           // замінили hearts[0] на circle[0]

                // // Тепре розбиремо конструкції які трохи устаріли але можуть попадатись

// wrapper.appendChild(div);                    // теж саме як і вище вказано добавили створений елемент в кінець сторінки

// wrapper.insertBefore(div, hearts[1]);           // теж саме як і вище вказано  

// wrapper.removeChild(hearts[1]);                  // видаляєм hearts[1]

// wrapper.replaceChild(circle[0], hearts[0]);       // замінили hearts[0] на circle[0]




// div.innerHTML = '<h1>Hello World</h1>';             // Вписуєм текст в наш створений елемент, можна і без <h1> а можна з HTML структурою               

// div.textContent = 'hello';                          // тут працюєм лише з текстом HTML структура тут не підійде як вище

// // Вставляєм кусочок html кода перед або після певних тегів
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');     // В душках 2 аргумента 2гий той html який ми хочемо вставити, а 1ший де вставляти дані, відкриваючи '' показує 4 варіанти 


                    // // Урок 31. События и их обработчики
// // Чомусь не паше))) але це і так застарілий метод і якщо створиться ще один то попередній зчезне
// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('Click');
// };

// // Це юзабельний метод. І створюючи декілька таких попередні будуть праацювати
// btn.addEventListener('click', () => {               // addEventListener - слідкує за цим елементом і якщо пройде собитие яке ми назначим то він запустить обробку. Першим аргументом ми передаєм назву собитие click, Другим аргументом передаєм call back функцію яка і буде нашим оброботчиком
//     alert('Click');
// });

// btn.addEventListener('mouseenter', (e) => {           // mouseenter при наведені працює     // e = event  як хочемо так і пишемо
//     console.log(e.target);                            // тут ми можем з ним взаємодіяти
//     e.target.remove();                                // і наприклад видаляється, при наведені тому що mouseenter 
//     // console.log('Hover');
// });

// // Всплитие собитий це коли оброботчик собитій спочатку спрацьовує на вложеном елементі event.target
// // потім на родителей event.currentTarget якщо вони є і так вище і вище 

// let i = 0;
// const deleteElement = (event) => {
//     console.log(event.currentTarget);                   
//     console.log(event.type);

//     i++
//     if (i == 1) {
// btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);



// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {               // event - об'єкт собитея 
//     event.preventDefault();                               // для того щоб відмінити стандартну поведінку

//     console.log(event.target);
// });


// // Щоб навішати один і той же функионал на багато одинакових або не одинакових елемента

// const btns = document.querySelectorAll('button');

// btns.forEach(btn =>  {
//     btn.addEventListener('click', deleteElement, {once: true});             // {once: true} - працюватиме лише один клик
// });

                // // Урок 32. Навигация по DOM  - элементам, data-атрибуты, преимущество for/of

// console.log(document.head);
// console.log(document.documentElement);                // получаєм html зі всім содержимим що в ньому є
// console.log(document.body.childNodes);                // получаєм NodeList
// console.log(document.body.firstChild);                   // перший родитель       
// console.log(document.body.lastElementChild);
// console.log(document.body.lastChild);                    // останній родитель

// console.log(document.querySelector('#current').parentNode);                  // получить родителя ноду
// console.log(document.querySelector('#current').parentNode.parentNode);       // получаєм обгортку 2х попередніх блоків

// console.log(document.querySelector('[data-current="3"]').nextSibling);      // nextSibling - получаєм наступний за ним елемент. Получили text ноду просто перенос строки
// console.log(document.querySelector('[data-current="3"]').previousSibling);     // previousSibling - получаєм попередню ноду

// // Щоб получати не ноду а елемент

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);     // получаєм наступний елемент
// console.log(document.querySelector('#current').parentElement);                    // получить родителя елемент

// // Деколи нам потрібно перебрати елементи в псевдомасиві за допомогою
// // for of для того щоб мати можливість зупиняти цикл або повністю приривати
// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {                 // при переборі всіх childNodes наткнемось на текстову ноду
//         continue;                                   // то ця етерація, повторбвання цикла просто зупиниться
//     }

//     console.log(node);
// }


                        // // События на мобильных устройствах

// // є 6 Событий
// // Коли спрацьовує
// touchstart - коли палець торкаємось елемента
// touchmove - при дотику до елемента рухаєм пальцем 
// touchend - коли палець відірвався від елемента 
// touchenter - коли ведем по екрану і при цьому наскакуємо на елемент на який повішана це события
// touchleave - коли продовжив скользити і пішов за межі елемента
// touchcancel - коли точка вззаємодії більше не реєструється на поверхності

// window.addEventListener('DOMContentLoaded', () => {       // буде чекати поки DOM структура повністю не построїться  // DOMContentLoaded - для того щоб ми точно знали що всі наші DOM узли готові, можна вішати на window i document 
//     const box = document.querySelector('.box1');

//     box.addEventListener('touchstart', (e) => {              // при натискані
//         e.preventDefault();                                  // для того щаб відміняти стандартну поведінку браузера щоб не було траблів

//         console.log('Start');
//         console.log(e.targetTouches);
//     });

//     box.addEventListener('touchmove', (e) => {              // при натисканні і русі
//         e.preventDefault();

//         console.log('Move');
//         // console.log(e.targetTouches[0].pageX);           // вказали 1ий палець і координати руху по елементу
//     });

    // box.addEventListener('touchend', (e) => {                // при віджиманні 
    //     e.preventDefault();

    //     console.log('End');
    // });

// });

// // Є 3 Основних Свойства для роботи з сенсорними устройствами

// touches - скільки пальів на екрані
// targetTouches - пальці які взаємодіють іменно з елементом конкретним 
// changedTouches - список пальців які беруть участь в данному Событии, наприклад
// якщо це touchend то список буде содержать палець який був забраний навіть якщо остальні 4 пальця в нас на екрані
// тоїсть це пальці які зробили відповідне назначене дійство

                // // Async,defer динамічні скріпти

// const p = document.querySelectorAll('p');
// console.log(p);

// //  <script defer src="script.js"></script> 
// // defer - загружає скріпт в фоновому режимі, ніколи не блокує сторінку, виконується тоді коли наше дом дерево готове, якщо є декідька defer то загружається по черзі 

// // <script async src="script.js"></script> 
// // async - як тільки до нього доходить черга загружається у фоновому режимі но при цьому запускається тоді коли був загружен
// // він взагалі нікого не чекає, якщо є декілька async то загрузиться перший той хто скоріше оброботається
// // async - коли ми використовуєм скріпти з атрибутом async ми повинні бути точно впевнені що 
// // цей скріпт абсолютно не залежить від DOM структури, йому вссерівно сформувалась вона чи ні 
// // і крім цього він не повинен залежати від друних скріптів, загрузився і зразу виконався. БУТИ АКУРАТНИМИ З ЦИМ.

// const script = document.createElement('script');        // створюєм тег скрііпт // динамічні загружаємі скріпти ведуть себе як async
// script.src = 'script.js';                               // встановлюєм шлях до скріпта
// script.async = false                    //  для того щоб скріпт вів себе як обичний, той що поміщений на сторінку
// document.body.append(script);                           //цей елемент існує лише в скріпті і шоб добавити його   // поміщаєм елемент в кінецць себе

// function loadScript(src) {
//     const script = document.createElement('script'); 
//     script.src = src;
//     script.async = false                  // встановили асинхронность false і тепер вони будуть виконуватись строго один за одним
//     document.body.append(script);
// }

// loadScript('script.js');                      // визиваєм функію
// loadScript('ше якийсь скріпт');
// loadScript('і ще якийсь');

                                                                      // //  ДРУГИЙ МОДУЛЬ    // // |   |   |   |   |   |   |  |  |  | 

// // Урок 37. ClassList и делегирование событий

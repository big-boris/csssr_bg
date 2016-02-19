# csssr_template

После клонирования репозитория необходимо сделать
```sh
$ bower i
$ npm i
```
Потом останется только запустить команду
```sh
$ gulp
```
Для открытия проекта в браузере - ввести в адресной строке
```sh
http://localhost:8080/
```


---
# Используемые модули

 - gulp
 - gulp-autoprefixer
 - gulp-concat
 - gulp-csso
 - gulp-jade
 - gulp-stylus
 - gulp-uglify
 - gulp-webserver


 # Структура папок и файлов
```
├── bower_components/
│   ├── jquery/
│   ├── normalize-css/
├── builds/                 # Разработка
│   ├── development/        # Папка создания проекта
|   |   ├── fonts           # Папка со шрифтами
|   |   ├── img             # Папка с изображениями
|   |   ├── jade            # Файлы jade, если создаются
|   |   ├── js              # Папка со скриптами
|   |   ├── libs            # Сторонние библиотеки
|   |   ├── styl            # Файлы стилей
|   |   └── index.jade      # Файл главной страницы
│   └── dist/               # Папка сборки проекта
|       ├── css             # Папка стилей
|       ├── fonts           # Папка со шрифтами
|       ├── img             # Папка с изображениями
|       ├── js              # Папка со скриптами
|       ├── libs            # Сторонние библиотеки
|       └── index.html      # Файл главной страницы
├── node_modules/           # Подключаемые модули Gulp
├── .gitignore              # Список исключённых файлов из Git
├── bower.json              # Файл bower-а
├── gulpfile.js             # Файл для работы Gulp
├── package.json            # Список модулей
└── readme.md               # Документация
```
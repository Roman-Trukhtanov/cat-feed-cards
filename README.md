# Ветки проекта
* `static-blocks` — вариант реализации проекта на основе генерации статичных (PUG) блоков
* `dynamic-blocks` — вариант реализации проекта на основе данных полученных со стороннего ресурса (имитация загрузки с сервера).

# Основные возможности и используемые технологии

* Система сборки [Gulp](https://gulpjs.com/)
* Оптимизация изображений.
* Генерация PNG- и SVG-спрайтов.
* Шаблонизация с помощью [Pug](https://pugjs.org/).
* CSS-препроцессор [SCSS](http://sass-lang.com/) и [Autoprefixer](https://autoprefixer.github.io/ru/).
* ES6 и [jQuery](https://jquery.com/).
* Встроенное определение устройства, браузера и операционной системы пользователя.
* Проверка кода линтерами ([pug-lint](https://www.npmjs.com/package/pug-lint), [stylelint](https://stylelint.io/), [ESLint](http://eslint.org/)).
* [Browsersync](https://www.browsersync.io/), автоматическое обновление страницы при разработке.
* Возможность быстро создать архив проекта.
* Множество дополнительных параметров сборки.

# Минимальные требования

* node >= 9.5.0
* npm >= 5.6.0
* gulp >= 4.0.0
* gulp-cli >= 2.0.1

# Gulp-задачи

* `default` — основная задача, запускает `build`, `watch` и `serve`.
* `build` — сборка всех файлов, запускает задачи `copy`, `images`, `sprites:png`, `sprites:svg`, `pug`, `scss`, `js`.
* `watch` — запускает слежение за файлами, так что при изменении они автоматически пересобираются.
* `serve` — запускает сервер Browsersync.
* `pug` — запускает сборку Pug-шаблонов.
* `images` — запускает сборку изображений.
* `sprites:png` — запускает генерацию PNG-спрайтов.
* `sprites:svg` — запускает генерацию SVG-спрайтов.
* `scss` — запускает сборку стилей.
* `js` — запускает сборку скриптов.
* `copy` — запускает сборку дополнительных ресурсов.
* `lint` — последовательно запускает линтеры `lint:js`, `lint:pug`, `lint:scss`.
* `lint:js` — проверяет JavaScript-файлы линтером [ESLint](http://eslint.org/).
* `lint:pug` — проверяет Pug-файлы линтером [pug-lint](https://github.com/pugjs/pug-lint).
* `lint:scss` — проверяет SCSS-файлы линтером [stylelint](https://stylelint.io/).
* `optimize:svg` — оптимизирует и форматирует код SVG-файлов в папке `src/images`.
* `optimize:images` — оптимизирует изображения в папке `src/images`.
* `zip` — создает архив проекта.

## Дополнительные параметры:

* `--ci` — включает режим CI (`--no-cache --no-notify --no-open --throw-errors`).
* `--fix` — автоматически исправляет ошибки при проверке кода линтером (только для `lint:js`).
* `--minify` — включает минификацию файлов (только для `sprites:svg`, `pug`, `scss` и `js`).
* `--minify-html` — включает минификацию HTML-файлов (имеет приоритет перед `--minify`).
* `--minify-css` — включает минификацию CSS-файлов (имеет приоритет перед `--minify`).
* `--minify-js` — включает минификацию JS-файлов (имеет приоритет перед `--minify`).
* `--minify-svg` — включает минификацию SVG-файлов (имеет приоритет перед `--minify`).
* `--no-cache` — отключает кэширование (только для `copy`, `images` и `pug`).
* `--no-debug` — отключает отладочный вывод списка обрабатываемых файлов.
* `--no-notify` — отключает уведомления об ошибках.
* `--no-open` — отключает автоматический запуск браузера (только для `serve`).
* `--port` — задает порт сервера (только для `serve`).
* `--spa` — включает режим одностраничного приложения (только для `serve`).
* `--throw-errors` — прерывает сборку при возникновении ошибки.
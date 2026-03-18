# Kidswedding — копия стилей и шаблона save-thedate.ru/kidswedding

Скопированы стили, шаблон и анимации со страницы https://save-thedate.ru/kidswedding (Tilda).

## Структура

- **index.html** — страница с локальными CSS (открывать через локальный сервер или браузер; формы/скрипты по-прежнему тянут ресурсы с Tilda CDN).
- **page.html** — полная сохранённая копия оригинальной страницы (все стили были встроены в `<style>` в HTML).

### Папка `css/`

| Файл | Описание |
|------|----------|
| **tilda-grid-3.0.min.css** | Сетка Tilda (контейнеры, колонки, медиа-запросы). |
| **tilda-blocks-page83277506.min.css** | Стили блоков страницы: шрифты (Montserrat, shablon3), блоки t396, t1003, t1148, формы. |
| **tilda-animation-2.0.min.css** | Анимации появления: fadein, fadeinup, fadeindown, fadeinleft, fadeinright, zoomin, zoomout. |
| **tilda-zoom-2.0.min.css** | Стили зума/лайтбокса изображений. |
| **tilda-forms-1.0.min.css** | Стили форм (инпуты, чекбоксы, радио, кнопки). |
| **kidswedding-inline.css** | Все 13 блоков стилей, вынесенные из `<style>` в HTML (блоки rec..., артборды, типографика, цвета #fdf9e2, #c2255b, #631b25 и т.д.). |

## Анимации

- **Плавное появление страницы**: в head есть скрипт, добавляющий классы `t-records_animated` и `t-records_visible` (opacity 0 → 1, transition 0.2s).
- **Блоки**: в **tilda-animation-2.0.min.css** — переходы по `opacity` и `transform` (translateY/translateX/scale), длительность 0.5–1.2s, cubic-bezier(.19,1,.22,1).
- **Карусель/слайдер** (t1003): бегущая строка с текстом (animation-duration: 2s, linear, infinite).
- **Слайдер изображений** (t1148): горизонтальный скролл, snap, кнопки.

## Цвета и шрифты

- Фон: `#fdf9e2`, акцент: `#c2255b`, текст: `#332c2f`, `#631b25`, белый `#ffffff`, `#fdf9e2`.
- Шрифты: **shablon3** (Montserrat, Playfair, Pushkin, Caveat и др. с Tilda), **Montserrat** (Cormorant, OpenSans, Bebas, Great Vibes и др.). Подключены через `@font-face` в `tilda-blocks-page83277506.min.css`.

## Запуск

1. Открыть **index.html** в браузере (файлом или через локальный сервер).
2. Часть функционала (формы, слайдеры) зависит от скриптов Tilda (jQuery, tilda-scripts, tilda-slider и т.д.) — они по-прежнему загружаются с CDN. Для полной работы без интернета нужно сохранить и подключить соответствующие JS.


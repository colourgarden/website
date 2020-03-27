# Personal website of Tom Hare
This is the uncompiled Jekyll source code of colourgarden.net - my personal website.

It utilises the `jekyll-assets` plugin and Liquid `capture` and `scssify` functions to take source SCSS files and inline compiled CSS into the `<head>`.

## Development
- Run `bundle exec jekyll serve` to run watcher and webserver

## Font subsetting
- Run `glyphhanger http://127.0.0.1:4000 --spider --subset=*.woff2`

let mix = require('laravel-mix');

mix.sass('public/sass/app.scss','public/css');

mix.options({
    processCssUrls: false,
    manifest: false
});

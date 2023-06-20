const gulp = require("gulp");
const concat = require("gulp-concat");
const minifyCSS = require("gulp-clean-css");
const connect = require("gulp-connect");

const SOURCE_FOLDER = "examples/e-commerce";

const bundleHTML = () =>
  gulp
    .src(`${SOURCE_FOLDER}/*.html`)
    .pipe(gulp.dest("build/"))
    .pipe(connect.reload());

const watchHTML = () => gulp.watch(`${SOURCE_FOLDER}/*.html"`, bundleHTML);

const bundleCSS = () =>
  gulp
    .src("src/*.css") // Source files to bundle
    .pipe(concat("custom-library.min.css")) // Concatenate files into one
    .pipe(minifyCSS()) // Minified the bundled CSS
    .pipe(gulp.dest("build/")) // Output directory for the bundled
    .pipe(connect.reload());

const watchCSS = () => gulp.watch("src/*.css", bundleCSS);

// Module CSS: ${SOURCE_FOLDER}/*.css
const bundleModuleCSS = () =>
  gulp
    .src("${SOURCE_FOLDER}/*.css")
    .pipe(minifyCSS())
    .pipe(gulp.dest("build/"))
    .pipe(connect.reload());

const watchModuleCSS = () =>
  gulp.watch(`${SOURCE_FOLDER}/*.css`, bundleModuleCSS);

const bundleImages = () =>
  gulp.src(`${SOURCE_FOLDER}/images/*.png`).pipe(gulp.dest("build/images/"));

const connectServer = () =>
  connect.server({
    root: "build/",
    livereload: true,
  });

exports.default = gulp.parallel(
  watchHTML,
  watchCSS,
  watchModuleCSS,
  bundleImages,
  connectServer
);

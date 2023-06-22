import gulp from "gulp";
import connect from "gulp-connect";

import concat from "gulp-concat";
import htmlMinifier from "gulp-htmlmin";
import cssMinifier from "gulp-clean-css";
import imageMinifier from "gulp-imagemin";

const minifyHTML = () =>
  gulp
    .src("examples/e-commerce/*.html")
    .pipe(htmlMinifier({ collapseWhitespace: true }))
    .pipe(gulp.dest("build/"))
    .pipe(connect.reload());

const watchHTML = () =>
  gulp.watch(
    "examples/e-commerce/*.html",
    { ignoreInitial: false },
    minifyHTML
  );

const bundleCSS = () =>
  gulp
    .src("src/*.css")
    .pipe(concat("custom-library.min.css"))
    .pipe(cssMinifier())
    .pipe(gulp.dest("build/"))
    .pipe(connect.reload());

const watchCSS = () =>
  gulp.watch("src/*.css", { ignoreInitial: false }, bundleCSS);

// Module CSS: examples/e-commerce/*.css
const bundleModuleCSS = () =>
  gulp
    .src("examples/e-commerce/*.css")
    .pipe(cssMinifier())
    .pipe(gulp.dest("build/"))
    .pipe(connect.reload());

const watchModuleCSS = () =>
  gulp.watch(
    "examples/e-commerce/*.css",
    { ignoreInitial: false },
    bundleModuleCSS
  );

const bundleImages = () =>
  gulp
    .src("examples/e-commerce/images/*.png")
    .pipe(imageMinifier())
    .pipe(gulp.dest("build/images/"));

const connectServer = () =>
  connect.server({
    root: "build/",
    livereload: true,
  });

export const compressDemoImages = () =>
  gulp.src("demo/*.png").pipe(imageMinifier()).pipe(gulp.dest("demo/"));

export default gulp.parallel(
  watchHTML,
  watchCSS,
  watchModuleCSS,
  bundleImages,
  connectServer
);

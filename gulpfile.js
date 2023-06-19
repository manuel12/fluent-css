const gulp = require("gulp");
const concat = require("gulp-concat");
const minifyCSS = require("gulp-clean-css");

gulp.task("bundle-css", () => {
  return gulp
    .src("src/*.css") // Source files to bundle
    .pipe(concat("custom-library.min.css")) // Concatenate files into one
    .pipe(minifyCSS()) // Minified the bundled CSS
    .pipe(gulp.dest("build/")); // Output directory for the bundled
});

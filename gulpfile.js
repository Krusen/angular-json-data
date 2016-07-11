var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var pump = require('pump');

gulp.task("minify", function(cb) {
    pump([
        gulp.src("src/json-data.js"),
        gulp.dest("./dist"),
        uglify(),
        rename("json-data.min.js"),
        gulp.dest("./dist")
    ],
    cb
  );
});

gulp.task("default", ["minify"], function() {
    return gulp.watch("src/json-data.js", ["minify"]);
});
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var pump = require('pump');

gulp.task("minify", function(cb) {
    pump([
        gulp.src("json-data.js"),
        uglify(),
        rename("json-data.min.js"),
        gulp.dest("./")
    ],
    cb
  );
});

gulp.task("default", ["minify"], function() {
    return gulp.watch("json-data.js", ["minify"]);
});
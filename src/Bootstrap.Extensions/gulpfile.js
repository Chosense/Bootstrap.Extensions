/// <binding BeforeBuild='beforeBuild' AfterBuild='afterBuild' Clean='clean' ProjectOpened='default' />
"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cssmin = require("gulp-cssmin");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var del = require("del");

gulp.task("default", function () {
    gulp.watch("./Sass/**/*.scss", ["compile:sass"]);
});

gulp.task("clean:css", function () {
    return del("./wwwroot/css/**/*");
});
gulp.task("clean:js", function () {
    return del("./wwwroot/js/**/*");
});
gulp.task("clean:dist", function () {
    return del([
        "../../dist/**/*"
    ], { force: true });
});


gulp.task("compile:sass", function () {
    gulp.src("./Sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./wwwroot/css/"))
        .pipe(cssmin())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest("./wwwroot/css/"));
});

gulp.task("min:js", function () {
    gulp.src([
        "./wwwroot/js/*.js",
        "!./wwwroot/js/*.min.js"
    ])
        .pipe(gulp.dest("../../dist/js/"))
        .pipe(uglify())
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(gulp.dest("./wwwroot/js/"))
        .pipe(gulp.dest("../../dist/js/"));
});

gulp.task("copy:css", function () {
    gulp.src("./wwwroot/css/**/develore-*.css")
        .pipe(gulp.dest("../../dist/css/"));
});





gulp.task("clean", ["clean:css", "clean:dist"]);
gulp.task("beforeBuild", ["compile:sass", "min:js"]);
gulp.task("afterBuild", ["copy:css"]);

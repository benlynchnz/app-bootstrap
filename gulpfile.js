var gulp = require("gulp");
var webpack = require("gulp-webpack");
var watch = require("gulp-watch");
var http = require("http");
var st = require("st");
var path = require("path");
var fs = require("fs");
var config = require("./package.json");

gulp.task("html", function() {
  return gulp.src(["./*.html", "./src/**/*.html"])
  .pipe(gulp.dest("dist"));
  //.pipe(livereload());
});

gulp.task("webpack", function() {
  return gulp.src("src/entry.js")
  .pipe(webpack(require("./webpack.config.js")))
  .pipe(gulp.dest("dist/"));
  //.pipe(livereload());
});

gulp.task("server", function(done) {
  http.createServer(
    st({ path: path.join(__dirname, "/dist"), index: "index.html", cache: false })
  ).listen(3001, done);
});

gulp.task("build", ["html", "webpack"]);

gulp.task("watch", [ "server" ], function() {
  //livereload.listen({ basePath: "dist" });
  gulp.watch("./src/**/*.jsx", [ "webpack" ]);
  gulp.watch("./src/**/*.js", [ "webpack" ]);
  gulp.watch("./src/**/*.css", [ "webpack" ]);
  gulp.watch("./src/**/*.html", [ "html" ]);
});

gulp.task("default", function() {
  gulp.start("watch");
});

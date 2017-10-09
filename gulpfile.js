var gulp = require('gulp');
// 压缩js2文件
// var uglify = require('gulp-uglify');//压缩js文件
// gulp.task('uglify',function(){
// 	gulp.src('js/js2.js')
// 		.pipe(uglify())
// 		.pipe(gulp.dest('./js'));
// });
//      gulp.task('default',['uglify']);

//压缩css到mincss文件夹中
// var minify = require('gulp-clean-css');
// gulp.task('clean',function(){
//  gulp.src('css/*.css')
//         .pipe(minify())
//         .pipe(gulp.dest('./mincss'));
// });
//  gulp.task('default',['clean']);

// 启动服务(gulp-connect)
 var connect = require('gulp-connect');
    gulp.task('httpServer',function(){
        connect.server({
            port:8080,
            livereload:true
        })
    })

gulp.task('default',['httpServer']);
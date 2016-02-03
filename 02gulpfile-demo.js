var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	del = require('del'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

//js语法检查
gulp.task('jshint',function(){
	return gulp.src('./src/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
});


//压缩js
gulp.task('minifyjs',function(){
	return gulp.src('./src/*.js')
		   .pipe(concat('main.js'))
		   .pipe(gulp.dest('./dest/js'))
		   .pipe(rename({suffix:'.min'}))
		   .pipe(uglify())
		   .pipe(gulp.dest('./dest/js'));
});
//压缩css
gulp.task('minifycss',function(){
	return gulp.src('./src/*.css')     //操作的文件目录
		.pipe(concat('all.css'))  //连接并重命名文件
		.pipe(gulp.dest('./dest/css'))  //将重命名的文件输入到对应目录
		.pipe(rename({suffix:'.min'}))  //给文件重命名
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('./dest/css'));   //输出文件夹
});	
//清除文件夹里面的文件
gulp.task('clean',function(cb){
	del(['./dest/js/*','./dest/css/*'],cb)
});
//表示有点疑惑，为毛用gulp.start()不行['clean','minifyjs','minifycss'],
gulp.task('default',function(){
	gulp.run('jshint','clean','minifyjs','minifycss');
	//监听变化,貌似没有起作用
	gulp.watch('./src/*.js',function(){
		gulp.run('jshint','clean','minifyjs','minifycss');
	});
});
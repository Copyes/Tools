 //合并雪碧图
 fis.match('::packager', {
   spriter: fis.plugin('csssprites')
 });
//js压缩，内置
 fis.match('*.js', {
   optimizer: fis.plugin('uglify-js')
 });
 //合并文件，并且替换页面中的文件路径，简直棒棒棒！！！最喜欢这个
 fis.match('*.js', {
  packTo: '/static/aio.js',
  release: '/static/aio.js'
});
//css压缩，内置
 fis.match('*.css', {
   useSprite: true,
   optimizer: fis.plugin('clean-css')
 });
//图片压缩，内置
 fis.match('*.png', {
   optimizer: fis.plugin('png-compressor')
 });
 //将静态资源构建到static文件夹下面，并使用hash
 fis.match('*.{png,css}', {
  useHash: true,
  release: '/static/$0'
});
 //调试专用的
 fis.media('debug').match('*.{js,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
});
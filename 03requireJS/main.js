requirejs.config({
	paths: {
		jquery : 'jquery-1.11.3.min'
	}
});

requirejs(['jquery','validate'],function($,validate){
	console.log(validate.isEqual(1,1));
})
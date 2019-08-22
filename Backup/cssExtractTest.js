describe('use css get method ',function(){
	it('get the height of the video',function(){
		browser.url('/');
		browser.pause(5000);
		var videoHeight=browser.getCssProperty('#udemy-promo-thumbnail','height');
		console.log('Height='+height);
	});
	
});
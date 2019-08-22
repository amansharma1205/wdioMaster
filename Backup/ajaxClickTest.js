
describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
	it("check that the contact us button opens the contact us page", function(done) {
        browser.url("/Ajax-Loader/index.html")
        //browser.debug();
		browser.click('#button155')
      });

	it("Attampt to click button after 7 sec",function(){
		browser.url("/Ajax-Loader/index.html")
		//browser.debug();
		this.timeout(20000);
		browser.pause(7000);
		browser.click('#button1')
		browser.pause(7000);

	});

 });




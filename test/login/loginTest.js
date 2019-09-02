	var Login_Page = require("../../pageObjects/login/Login_Page.js");
	const data = require('../../resources/login/login_Resource.js')
	//const helpers = require("../../../resources/helpers.js");

     

	// beforeEach(async()  => {
	// 	await browser.url('/login');
	// });

	describe('Test Signform with valid and invalid data', () =>{

		before(function (){
	    browser.url('/login')
	  })
		 it('Test1: Admin should not be able to login with invalid data', () => {
		 	 Login_Page.submitSignInForm('abc@gmail.com', 'Pass12345');
		 	 Login_Page.unsuccessfulLogin.waitForDisplayed(10000);
			try {
				expect(Login_Page.unsuccessfulLogin.getText()).to.equal("We could not find a match for your email or password.\nPlease confirm your information and try again.");
			} catch(err) {
				console.log("Exception: " + err);
				assert.fail();
				}
		 });

		it('Test2: Admin should  be able to login with valid data', () => {
			                   
			 if(process.env.SERVER=='prod'){
		       Login_Page.setUserName(data.stagingServer_credentials.email);
	           Login_Page.setPassword(data.stagingServer_credentials.password);	
		       }else {
			   Login_Page.setUserName(data.devServer_credencials.email);
			   Login_Page.setPassword(data.devServer_credencials.password);
			   }
			 Login_Page.clickSubmitButton();
			try {
				expect(Login_Page.successfulLogin.getText()).to.have.string("Dashboard");
				expect(browser.getUrl()).to.have.string("secure/hiring")
			} catch(err) {
				console.log("Exception: " + err);
				assert.fail();
			}
		});
	});
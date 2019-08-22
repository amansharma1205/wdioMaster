var Login_Page = require("../pageObjects/Login_Page.js");

beforeEach(async(done)  => {
	await browser.url('/login');
	var abc =browser.getUrl();
	console.log("URL********="+abc);
	//expect(browser.getUrl()).to.equal("https://benefitsdev.gethired.com/");
});

describe('Test Valid User login', () =>{
	//it('Test1: Verify admin Should be able to login with valid user name and password', () => {
	//	 login_Page.submitUserNamePassword('joe', 'Blogs');
		// login_Page.successfulSubmissionHeader.waitForDisplayed(3000);
		// try {
		// 	expect(login_Page.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
		// } catch(err) {
		// 	console.log("Exception: " + err);
		// 	assert.fail();
		// }
		//login_Page.setLastName("man");
		//console.log("****************=test");
	//});

	it('Test2: Should not be able to submit a successful submission via contact us form as all fields are required', () => {
		Login_Page.setUserName("abc");
		Login_Page.setPassword("abc");

// 		ContactUs_Page.clickSubmitButton();
// 		try {
// 			expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fields are required");
// 		} catch(err) {
// 			console.log("Exception: " + err);
// 			assert.fail();
// 		}
	});
 });
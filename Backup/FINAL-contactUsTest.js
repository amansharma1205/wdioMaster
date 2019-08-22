var request = require('sync-request');
var ContactUs_Page=require("../pageObjects/ContactUs_Page.js")

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
	var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
	var contactusDetails = JSON.parse(res.getBody().toString('utf8'));
	// var firstNameSelector = "[name='first_name']";
	// var lastNameSelector = "[name='last_name']";
	// var emailAddressSelector = "[name='email']";
	// var commentsSelector = "textarea";
	// var successfulSubmissionSelector = "#contact_reply h1";
	// var unsuccessfulSubmissionSelector = "body";
	// var submitButtonSelector = "[type='submit']";
// contactusDetails.forEach(function (contactDetail) {
//   it('Should be able to submit a successful submission via contact us form', function(done) {
//   	setFirstName('joe');
//   	setLastName('Blogs');
//   	setEmailAddress(contactDetail.email);
//   	setComments(contactDetail.body);
//   	clickSubmitButton();
//   	confirmSuccessfulSubmission();
//    	});
//    }); 


  it('Should be able to submit a successful submission via contact us form', function(done) {
  	ContactUs_Page.submitAllInformationViaContactUsForm('joe','Blogs','joe_blogs123@outlook.com','How are you?')
   	});


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setFirstName('Mike');
  	ContactUs_Page.setLastName('Woods');
  	ContactUs_Page.setEmailAddress('mike_woods@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
    });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setFirstName('Sarah');
  	ContactUs_Page.setEmailAddress('sarah_woods@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setLastName('Jomes');
  	ContactUs_Page.setEmailAddress('sarah_Jomes@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
    });
});
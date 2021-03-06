  var request = require('sync-request');

  beforeEach(function() {
    browser.url('/Contact-Us/contactus.html');
  })

  describe('Test Contact Us form WebdriverUni', function() {
    var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
    var contactusDetails = JSON.parse(res.getBody().toString('utf8'));

    var firstNameSelector = "[name='first_name']";
    var lastNameSelector = "[name='last_name']";
    var emailAddressSelector = "[name='email']";
    var commentsSelector = "textarea";
    var successfulSubmissionSelector = "#contact_reply h1";
    var unsuccessfulSubmissionSelector = "body";
    var submitButtonSelector = "[type='submit']";

    function setFirstName(firstName) {
      return browser.setValue(firstNameSelector, firstName);
    }

    function setLastName(lastName) {
      return browser.setValue(lastNameSelector, lastName);
    }

    function setEmailAddress(emailAddress) {
      return browser.setValue(emailAddressSelector, emailAddress);
    }

    function setComments(comments) {
      return browser.setValue(commentsSelector, comments);
    }

    function clickSubmitButton() {
      return browser.click(submitButtonSelector);
    }

    function confirmSuccessfulSubmission() {
      var validateSubmissionHeader = browser.waitUntil(function() {
        return browser.getText(successfulSubmissionSelector) == 'Thank You for your Message!'
      }, 3000)
      expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
    }

    function confirmUnsuccessfulSubmission() {
      var validateSubmissionHeader = browser.waitUntil(function() {
        return browser.getText(unsuccessfulSubmissionSelector) == 'Error: all fields are required'
      }, 3000)
      expect(browser.getText(unsuccessfulSubmissionSelector)).to.include('Error: all fields are required');
    }



  contactusDetails.forEach(function (contactDetail) {
    it.only('Should be able to submit a successful submission via contact us form', function(done) {
      setFirstName('joe');
      setLastName('Blogs');
      setEmailAddress(contactDetail.email);
      setComments(contactDetail.body);
      clickSubmitButton();
      confirmSuccessfulSubmission();
      });

    it.only('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
      setFirstName('Mike');
      setLastName('Woods');
      setEmailAddress('mike_woods@mail.com');
      clickSubmitButton();
      confirmUnsuccessfulSubmission();
      });

    
    it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
      browser.setValue("[name='first_name']",'Sarah');
      browser.setValue("[name='email']", 'sarah_woods@mail.com');
      browser.click("[type='submit']");

    var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
      expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.false;
      });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
      browser.setValue("[name='first_name']",'Jim');
      browser.setValue("[name='last_name']",'Jomes');
      browser.click("[type='submit']");

      var errorText = browser.getText('body');
      expect(errorText).to.include('Error: all fields are required');

      var errorText = browser.isVisible('body');
      expect(errorText, 'Error message is not visible').to.be.true;
      });
  });
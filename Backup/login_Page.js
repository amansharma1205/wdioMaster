  class Login_Page {
  get userName() { return $("[id='username']");}
  get password() { return $("[id='password']");}
  get signIn() { return $("[id='signinButton']");}
 // get signInLink() {return $("//a[@class='btn btn-primary']");}
  get successfulSubmissionHeader() {return $("#dashboard");}
  get unsuccessfulSubmissionHeader() {return $("#signin-error");}
  get successfulSubmissionHeaderText() {
   return this.successfulSubmissionHeader.getText(); //Thank You for your Message!
  }
  get unsuccessfulSubmissionHeaderText() {
   return this.unsuccessfulSubmissionHeader.getText(); //Error: all fields are required Error: Invalid email address
  }

  setUserName(userName) {
   return this.userName.setValue("userName");
  }
  setPassword(password) {
   return this.password.setValue(password);
  }

  clickSubmitButton() {
   return this.submitButton.click();
  }

  submitUserNamePassword(userName, password) {
   if(userName) {
    this.userName.setValue(userName);
   }
   if(password) {
    this.password.setValue(password);
   }
  this.submitButton.click();
  }
}

 module.exports = new Login_Page();
class Employee_Page {
	get searchByNameEmail() { return $("[class='form-control pl-5']");}
	get addEmployeesButton() { return $("#addEmployeesButton");}
	get showFilterLink() { return $("[id='searchQueryContainerExpandButton']");}
	get addEmployeeScreen() {return $("//div[@id='createEmployeeModal']");}
	get firstName() {return $("[name='fname']");}
	get middleName() {return $("[name='mname']");}
	get lastName() {return $("[name='lname']");}
	get suffix() {return $("[name='suffix']");}
	get legalGenderMale() {return $("[//label[@class='d-inline-block mr-4']/input]");}
	get legalGenderFemale() {return $("[//label[@class='d-inline-block']/input]");}
	get dob() {return $("[name='dob']");}
	get ssn() {return $("[name='ssn']");}
	get language() {return $("[name='language']");}
	get saveButton(){return $("[data-type='create']");}

    ///Conatct Information
    get contactInfoScreen() {return $("//div[@id='employeeContactPage']");}
	get contactInfoLink() {return $("//ul/li[@class='bg-white'][2]/a[@class='pl-3']");}
	get contactInfoTitle() {return $("//h5[@class='font-weight-bold' and text()='Contact Information']");} 
	get homeCountry(){ return $("//div[@class='col-md-3']/div[@class='gh-ba-select']/select[@class='form-control deluxe-disable-field']");}
    get homeAddress() {return $("#gh_EP_Contact_HomeAddress");}
    get city() {return $("#employeeContactPage [class='col-md-3']:nth-of-type(2) [type]");}
    get state() {return $("//div/input[@class='form-control deluxe-disable-field']");}
    get zip() {return $("#employeeContactPage [maxlength='10']");}
    get email() {return $("//input[@placeholder='test@personalemail.com']");}
    get contactPagecontinueButton() {return $("#employeeContactPage .btn-primary");}

    //Employment Information
    get employmentInformationTitle() {return $("//h5[@class='font-weight-bold' and text()='Employment Information']");}
    get employmentInfoLink() {return $("//div[@class='col-md-3 col-xs-4']/div/ul/li[3]/a[@href='#']");}
    get startDate() {return $("[name='startdate']");}
    get employmentType() {return $("//div[@class='row form-group mb-0']/div[@class='col-md-4']/div[@class='gh-ba-select']/select[@class='form-control form-control-sm deluxe-ignore-field deluxe-disable-field']");}
    get timeZone() {return $("[id='select2-employeeTimezoneSelect-container']");}
    get employmentInfoSaveButton() {return $("#employeeEmploymentPage .btn-primary");}

    //Compensation Information
    get payGroup() {return $("//select[@id='payGroupSelect']");}
    get payType() {return $("//select[@id='payTypeSelect']");}
    get payRate() {return $("#employeeCompensationPage .form-group:nth-of-type(1) [type]");}
    get estimatedHour() {return $("#employeeCompensationPage .form-group:nth-of-type(2) .form-control-sm");}
    get compensationInformationSaveButton() {return $("#employeeCompensationPage .btn-primary");}
    get compensationInfoLink() {return $("#employeeCompensationPage .font-weight-bold");}

    //Account Information
    get accountInformationTitle() {return $("//h5[@class='font-weight-bold' and text()='Account Information']");}
    get accountInformationLink() {return $("[class] li:nth-of-type(5) [class='pl-3']");}
    get sendRegistrationEmailButton() {return $("[class='p-3 min-height-400 gh-ba-bs-light bg-white'] .btn-primary");}
    get sendEmailSucessMessage() { return $("//div[@class='toast-item-wrapper']/div[@class='toast-item toast-type-success']");}
    

    

	fillAddEmployeeFrom(firstName, middleName,lastName,suffix,dob,ssn,language) {
		//var visibile=browser.isVisible(this.addEmployeesButton);
		//console.log(visibile);
		this.addEmployeesButton.click();
		browser.waitUntil(()=>{
    	  return this.addEmployeeScreen.isDisplayed()===true
    	 },10000,'Wait till addEmployeeScreen displayed');

		
		if(firstName) {
			this.firstName.waitForExist(5000);
			this.firstName.setValue(firstName);
		}
		if(middleName) {
			this.middleName.waitForExist(5000);
			this.middleName.setValue(middleName);
		}
		if(lastName) {
			this.lastName.waitForExist(5000);
			this.lastName.setValue(lastName);
		}
		if(suffix) {
			 this.suffix.waitForExist(5000);
			 this.suffix.click();
			 this.suffix.selectByAttribute("value", suffix);
		}
		if(dob) {
			this.dob.click();
			this.dob.waitForExist(5000);
			this.dob.setValue(dob);
		}
		if(ssn) {
			this.ssn.waitForExist(5000);
			this.ssn.setValue(ssn);
		}
		if(language) {
			this.language.waitForExist(5000);
			this.language.click();
			this.language.selectByAttribute("value", language);
		}

    	this.saveButton.click();
    	this.contactInfoTitle.waitForExist();
    	this.contactInfoTitle.waitForDisplayed();
        
  

	}

	 fillNewEmployeeContactInformation(email)
	 {
	 	
	 	browser.waitUntil(()=>{
    	  return this.contactInfoScreen.isDisplayed()===true
    	 },10000,'Wait till contactInfoScreen displayed');
	 	 this.homeCountry.waitForExist();
	  	 this.homeAddress.waitForExist();
	     this.city.waitForExist();
         this.state.waitForExist();
         this.zip.waitForExist();
          
       if(email){
       	this.email.waitForExist();
       	this.email.waitForDisplayed();
       	browser.pause(1000);
       	this.email.setValue("Test@gmail.com");

       	}
       this.contactPagecontinueButton.scrollIntoView();
       this.contactPagecontinueButton.click();
      // browser.pause(2000); // wait for ajax
       this.sendEmailSucessMessage.waitForExist();
       this.sendEmailSucessMessage.waitForExist(false);
       this.employmentInformationTitle.waitForExist();
       this.employmentInformationTitle.waitForDisplayed();
       
       
       
	}

	fillEmploymentInformation(startDate,employmentType,timeZone){
		this.employmentInformationTitle.waitForExist();
	  	//this.employmentInfoLink.waitForExist();

		if(startDate){
			
			this.startDate.waitForExist();
			this.startDate.waitForDisplayed();
			this.startDate.click();
			browser.pause(1000);
			this.startDate.setValue(startDate);
			browser.pause(2000);
			if(this.startDate.getText()===""){
			this.startDate.setValue(startDate);
		    browser.pause(2000);}//wait for change event to be complted//
			
		}
		if(employmentType){
			browser.pause(1000);
			this.employmentType.waitForExist();
			this.employmentType.waitForDisplayed();
			this.employmentType.click();
			this.employmentType.selectByIndex(employmentType);
		}
		if(timeZone){
			this.timeZone.waitForExist();
			//this.timeZone.selectByAttribute("value",)
		}
		this.timeZone.scrollIntoView();
        this.employmentInfoSaveButton.waitForExist();
		this.employmentInfoSaveButton.click();
		this.compensationInfoLink.waitForExist();
		this.compensationInfoLink.waitForDisplayed();
	}


	 fillCompensationInformationForm(payGroup,payType,payRate,estimatedHour){
		
		this.compensationInfoLink.waitForExist();
		this.compensationInfoLink.waitForDisplayed();
		this.compensationInfoLink.click();
		//wait for dropdown to load..
		//browser.pause(1000);
		if(payGroup){
          this.payGroup.waitForExist();
          this.payGroup.waitForDisplayed();
          this.payGroup.click();
          browser.pause(2000);
          this.payGroup.selectByIndex(payGroup);
          browser.pause(1000);
		}

		if(payType){
		this.payType.waitForExist();
		this.payType.click();
		this.payType.selectByIndex(payType);
		browser.pause(1000);
	    }

	    if(payRate){
	    	this.payRate.waitForExist();
	    	this.payRate.setValue(payRate);
	    	browser.pause(1000);
	    }
	    if(estimatedHour){
	    	this.estimatedHour.waitForExist();
	    	this.estimatedHour.setValue(estimatedHour);
	    	browser.pause(1000);
	    }
	    this.compensationInformationSaveButton.waitForExist();
	    this.compensationInformationSaveButton.click();
	    this.sendEmailSucessMessage.waitForExist();
	 	this.sendEmailSucessMessage.waitForDisplayed();
	 	// to wait for message to be appear ..
	    browser.pause(2000);
	    this.accountInformationLink.waitForExist();
	    this.accountInformationLink.waitForDisplayed();
        

	 }

	 accountInformation(){
	 	this.accountInformationLink.waitForExist();
	 	this.accountInformationLink.click();
	 	this.accountInformationTitle.waitForExist();
	 	this.sendRegistrationEmailButton.waitForExist();
	 	this.sendRegistrationEmailButton.click();
	 	this.sendEmailSucessMessage.waitForExist();
	 	this.sendEmailSucessMessage.waitForDisplayed();
        


	 }
}


module.exports = new Employee_Page();
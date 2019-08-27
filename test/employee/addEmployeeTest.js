	var Employee_Page = require("../../pageObjects/employee/Employee_Page.js");
	var Login_Page = require("../../pageObjects/login/Login_Page.js");
	const data = require("../../resources/employee/addEmployee_Resource.js");
	//const helpers = require("../../../resources/helpers.js");

			        before(function (){
			            Login_Page.loginToBenAdmin();
			            browser.url('secure/company/employees');  
			        })

				describe('Test add employee form', async function() {

					 it('Test 1: Add new employee into system with Personal Information', (done) => {
					 	 console.log("*******Calling Test 1");
						try {

						 expect(browser.getUrl()).to.have.string("/company/employees");
					 	 Employee_Page.fillAddEmployeeFrom(data.personalInformation.fName,data.personalInformation.mName,
					 	 	                               data.personalInformation.lName,
					 	 	                               data.personalInformation.Suffix,data.personalInformation.dateOfBirth,
					 	 	                               data.personalInformation.ssn,data.personalInformation.language);	
					 	 //expect(browser.getUrl()).to.have.string("employee/setting/");	 	
						    
						} catch(err) {
							console.log("Exception: " + err);
							assert.fail();
						}
					 });

					 it('Test 2:Contact Information', ()=>{
					 	console.log("*******Calling Test 2");
		             try{
		               
		               Employee_Page.fillNewEmployeeContactInformation(data.contactInformation.email);
		              
		               }catch(err) {
							console.log("Exception: " + err);
							assert.fail();
						}

					 });

					 it('Test 3: Employment Information',(done)=>{
		              console.log("*******Calling Test 3");
		              try{
		              
		              Employee_Page.fillEmploymentInformation(data.employmentInformation.startDate,
		              	                                      data.employmentInformation.employeeType);
		                
		                }catch(err) {
							console.log("Exception: " + err);
							assert.fail();
						}


					 });

					 it('Test 4:Compensation Information',(done)=>{
		              console.log("*******Calling Test 4");
		              try{
		              
		              Employee_Page.fillCompensationInformationForm(data.compensationInformation.payGroup,
		              	                                            data.compensationInformation.payType,
		              	                                            data.compensationInformation.payRate,
		              	                                            data.compensationInformation.estimatedHoursWorkedWeek);
		              expect(Employee_Page.sendEmailSucessMessage.getText()).to.equal("Success! Employee has been added.");
		              Employee_Page.sendEmailSucessMessage.waitForExist(null,true);
		               }
		               catch(err) {
							console.log("Exception: " + err);
							assert.fail();
						}

					 });

					 

					 it('Test 5:Account Information',(done)=>{
		              console.log("*******Calling Test 5");
		              try{
		              
		              Employee_Page.accountInformation();
		              expect(Employee_Page.sendEmailSucessMessage.getText()).to.equal("Registration email has been sent successfully!");
		                 
		                 }catch(err) {
							console.log("Exception: " + err);
							assert.fail();
						}

					 });

					
				});
	var Employee_Page = require("../../pageObjects/employee/Employee_Page.js");
	var Login_Page = require("../../pageObjects/login/Login_Page.js");
	//const data = require('../../resources/login/login_Resource.js')
	//const helpers = require("../../../resources/helpers.js");

	        before(function (){
	            Login_Page.loginToBenAdmin();
	           browser.url('secure/company/employees');  
	        })

		describe('Test add employee form', async function() {

			
		  
			 it('Test 1: Add new employee into system with Personal Information', (done) => {
			 	 
				try {

				 expect(browser.getUrl()).to.have.string("/company/employees");
			 	 Employee_Page.fillAddEmployeeFrom("Aman","Kumar","Sharma","Sr.","08/12/1980","000-00-0000","spanish");	
			 	 expect(browser.getUrl()).to.have.string("employee/setting/");	 	
				    
				} catch(err) {
					console.log("Exception: " + err);
					assert.fail();
				}
			 });

			 it('Contact Information', ()=>{
             try{
               console.log("inside 2nd it block");
               Employee_Page.fillNewEmployeeContactInformation("automation@gmail.com");
              
               }catch(err) {
					console.log("Exception: " + err);
					assert.fail();
				}

			 });

			 it('Employment Information',(done)=>{
              
              try{
              console.log("inside 2nd it block");
              Employee_Page.fillEmploymentInformation("08/12/1980","fulltime");
                
                }catch(err) {
					console.log("Exception: " + err);
					assert.fail();
				}


			 });

			 it('Compensation Information',(done)=>{
              
              try{
              console.log("inside 2nd it block");
              Employee_Page.fillCompensationInformationForm("1","2","25","40");
               }
               catch(err) {
					console.log("Exception: " + err);
					assert.fail();
				}

			 });

			 

			 it('Account Information',(done)=>{
              
              try{
              console.log("inside 2nd it block");
              Employee_Page.accountInformation();
                 
                 }catch(err) {
					console.log("Exception: " + err);
					assert.fail();
				}

			 });

			
		});
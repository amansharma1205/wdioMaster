 var SmokeTest_Page = require("../../pageObjects/smoke/SmokeTest_Page.js");
 var Login_Page = require("../../pageObjects/login/Login_Page.js");
 //const data = require("../../resources/employee/addEmployee_Resource.js");

 before(function (){
	Login_Page.loginToBenAdmin();
	  
		        })

 describe("Verify all the smoke test cases for BEN",async function(){

 	it("Test 1 :- Verify all the links on dashboard with Text",(done)=>{
 	  try{
 	  	browser.url('/secure/benefits');
 	    SmokeTest_Page.verifyDashboardLinks();
 	  }catch(err){
 		   console.log("Exception: " + err);
		   assert.fail();	
 		}
 	});
 	it("Test 2 :- Verify Company and submenu",(done)=>{
 	  try{
 	  	console.log("Executing :- Test 2 :-  ")
 	  //	browser.url('/secure/benefits');
 	    SmokeTest_Page.verfiyCompanyMenu();
 	  }catch(err){
 		   console.log("Exception: " + err);
		   assert.fail();	
 		}
 	});
 	it("Test 3 :- Verify Plan Menu",(done)=>{
 	  try{
 	  	console.log("Executing :- Test 3 :-  ")
 	    browser.url('/secure/benefits');
 	    SmokeTest_Page.verfiyPlansMenu();
 	  }catch(err){
 		   console.log("Exception: " + err);
		   assert.fail();	
 		}
 	});

 	it("Test 4 :- Verify Enrollment Menu",(done)=>{
 	  try{
 	  	console.log("Executing :- Test  4 :-  ")
 	    browser.url('/secure/benefits');
 	    SmokeTest_Page.verifyEnrollmentMenu();
 	  }catch(err){
 		   console.log("Exception: " + err);
		   assert.fail();	
 		}
 	});

 	it("Test 5 :- Verify TOOLS Menu",(done)=>{
 	  try{
 	  	console.log("Executing :- Test 5 :-  ")
 	    browser.url('/secure/benefits');
 	    SmokeTest_Page.verifyToolsMenu();
 	  }catch(err){
 		   console.log("Exception: " + err);
		   assert.fail();	
 		}
 	});

 	it("Test 6 :- Verify Reports Menu",(done)=>{
 	  try{
 	  	console.log("Executing :- Test 6 :-  ")
 	    browser.url('/secure/benefits');
 	    SmokeTest_Page.verifyReportsMenu();
 	  }catch(err){
 		   console.log("Exception: " + err);
		   assert.fail();	
 		}
 	});
 })
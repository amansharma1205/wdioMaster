 var Employee_Page = require("../../pageObjects/smoke/smokeTestCases_Page.js");
 var Login_Page = require("../../pageObjects/login/Login_Page.js");
 //const data = require("../../resources/employee/addEmployee_Resource.js");

 before(function (){
	Login_Page.loginToBenAdmin();
	browser.url('secure/company/employees');  
		        })

 describe("Verify all the smoke test cases for BEN",async function(){

 	it("Test 1 :- Verify all the links on dashboard with Text"(done)=>{
 		
 	})
 })
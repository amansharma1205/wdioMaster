var Login_Page = require("../../../pageObjects/login/Login_Page.js");
var MedicalDentalVision_Page = require("../../../pageObjects/medicalDentalVisionPlan/MedicalDentalVision_Page.js");

before (function(){
	Login_Page.loginToBenAdmin();
})
console.log("&************************************")

 describe("Test  - Verify adding a new Medical plan under a compnay",async function (){
	it("Test 1 - Verify adding basic detail of Medical Plan",(done)=>{
		MedicalDentalVision_Page.verifyAddingBasicDetailOfPlan();


	});
 })
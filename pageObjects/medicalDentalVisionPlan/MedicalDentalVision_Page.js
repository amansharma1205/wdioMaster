class MedicalDentalVision_Page {

	get planLink() {return $("//a[@href='/secure/benefits/plans']/span");}
	get planTitle() {return $("//div[@id='plansComponent']//h3[@class='font-weight-bold header-title w-50 float-left font-24']");}
    get planSearchBar() {return $("[placeholder='Search plans']");}
    get showEndedPlans() {return $("//input[@class='switch ml-3 plan-ended-filter']");}
    get addPlanButton() {return $("//button[@data-target='#addPlanComponent']");}
    get addPlanModel() {return $("//form[@id='gh_AddPlan_Form']");}
    get planModelCloseButton() {return $("//div[@id='addPlanComponent']//button[@class='close']");}
    get planGridHeader() {return $("//table[@id='plansTable']/thead");}
 //    //Add Plan OR
    get createNewPlanButton() {return $("//form[@id='gh_AddPlan_Form']//button[1]");}
    get copyPlanButton() {return $("//form[@id='gh_AddPlan_Form']//button[2]");}
    get addPlanModelTitle() {return $("//div[@id='addPlanComponent']//h4[@class='modal-title']");}
    get productTypeDropdown () {return $("//select[@data-field-name='product_type']");}
    get addPlanModelTitle() {return $("//div[@id='addPlanComponent']//h4[@class='modal-title']");}
    get planCarrierDropdown() {return $("//select[@name='carriers']");}
    get planNameTxtBox() {return $("//input[@class='form-control']");}
    get planEffectiveStartDate() {return $("//input[@name='effective_date_new']");}

    get planEffectiveEndDate() {return $("//input[@name='end_date_new']");}
    get planCancelBTN() {return $("//button[@class='btn btn-sm gh-non-primary-btn w-140p float-left']");}
    get planSaveNextBTN () {return $("//button[@class='btn btn-sm btn-primary w-140p float-right']");}
    get planRequestNewCarrier() {return $("//div[@class='col-md-3 text-left align-self-start']/a[@class='text-primary']");}
    get planCarrierName () {return $("//div[@class='row form-group'][1]/div[@class='col-md-8']/input[@class='form-control']");}
    get planCarrierWebsite () {return $("//div[@class='row form-group'][2]/div[@id='gh_RS_url']/div[@class='input-group']/input[@class='form-control']");}
    get planCarrierSubmitBTN () {return $("//div[@class='modal-footer d-block text-center']/button[@id='btn-submit-new-carrier-request']");}
    get planCarrierCrossBTN () {return $("//div[@class='modal-header alert_pop bg-success']/button[@class='close text-white']");}

    verifyAddingBasicDetailOfPlan(){
      this.planLink.waitForExist();
      this.planLink.click();
      this.planLink.waitForExist();
      this.planLink.click();
      this.planTitle.waitForExist();
      this.addPlanButton.click();
      browser.waitUntil(() => {
      return this.addPlanModel.isDisplayed() === true
      }, 10000, 'Wait till addPlanModel displayed');
      this.createNewPlanButton.click();
      this.productTypeDropdown.waitForExist();
      //this.productTypeDropdown.click();
      this.productTypeDropdown.selectByAttribute("value", "medical");
      browser.pause(5000);

  
  }
 
}

module.exports = new MedicalDentalVision_Page();
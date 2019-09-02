class SmokeTest_Page {
    get dashboardLink() {return $("//a[@href='/secure/benefits/']");}
    get compnayLink() {return $("//span[@class='sidenav-text' and text()='Company']");}
    get locationLink() {return $("//a[@href='/secure/org/location']");}
    get organizationalStructureLink() {return $("//a[@href='/secure/org/group']");}
    get payGroupsLink() {return $("//a[@href='/secure/org/paygroup']");}
    get administratorsLink() {return $("//a[@href='/secure/ghaccount']");}
    get planLink() {return $("//a[@href='/secure/benefits/plans']/span");}
    get enrollmentLink() {return $("//span[@class='sidenav-text' and text()='Enrollment']");}
    get openEnrollmentLink() {return $("//a[@href='/secure/benefits/open-enrollments']");}
    get manageEOILink() {return $("//a[@href='/secure/benefits/eoi']");}
    get enrollmentSettingsLink() {return $("//a[@href='/secure/benefits/enrollment-settings']");}
    get toolsLink() {return $("//span[@class='sidenav-text' and text()='Tools']");}
    get importsLink() {return $("//a[@href='/secure/benefits/import/index']");}
    get reportsLink() {return $("//a[@href='/secure/benefits/reports']");}
    get loadingSpinner() {return $("//img[@src='/v4/img/employee-loader.gif']");}

    //Dashboard
    get planViewDetails() {return $("//a[@href='/secure/benefits/plans' and text()='View Details']");} // plan View Detail
    get EnrollmentChangesDetail(){return $("//a[@href='/secure/benefits/reports/benefit-election-changes' and text()='View Details']");} 
    get monthlyCostDetail() {return $("//a[@href='/secure/benefits/reports/monthly-cost' and text()='View Details']");} 
    get unlockNewHireEnrollment() {return $("//h6[@class='text-capitalize font-weight-bold gh-text-ellipsis' and text()='unlock new hire enrollment']");}
    get incompleteEmployeeEnrollments(){return $("//h6[@class='text-capitalize font-weight-bold gh-text-ellipsis' and text()='incomplete employee enrollments']");}
    get employerMonthlyCostBenefit() {return $("//h6[@class='text-capitalize font-weight-bold gh-text-ellipsis' and text()='employer monthly cost by benefit']");}
    get employeeParticipationRateBenefit() {return $("//h6[@class='text-capitalize font-weight-bold gh-text-ellipsis' and text()='employee participation rate by benefit']");}
    
    //company Menu --Location
    get loactionTitle() {return $("//div[@class='col-md-12 pb-2 org-component-title']");}
    get loactionSearchBar() {return $("//input[@id='inputSearch']");}
    get addLocationButton() {return $("//button[@class='btn btn-info btn-block add_new_location gh-list-top-lhs-button-standalone']");}
    get loactionGridHeader() {return $("//table[@class='m-0 table table-hover gh-table']/thead");}
    get addLocationForm() {return $("//form[@id='new_location_form']");}
    get loactionCloseButton() {return $("//button[@class='btn gh-non-primary-btn float-right mr-2']");}
   
    //Organizational Structure //div[@id='addGroupButton']
    get organizationalStructureTitle() {return $("//div[@class='col-md-12 pb-2 org-component-title']");}
    get addOrganizationalStructureButton() {return $("//div[@id='addGroupButton']");}
    
    get addOrganizationalStructureModel() {return $("//div[@id='groupModalContent']");}
    get addOrganizationalStructureCloseButton() {return $("//button[@id='form-close-button']");}
    get addOrganizationalStructureSaveButton() {return $("//button[@id='form-submit-button']");}
    

    //Pay group
    get payGroupsTitle() {return $("//div[@class='col-md-12 pb-2 org-component-title']");} 
    get payGroupsSearch() {return $("//div[@id='tatimeoffpaygroup-component']//input[@id='inputSearch']");}
    get addPayGroupsButton() {return $("//div[@id='tatimeoffpaygroup-component']//button[@id='add-new-tatimeoffpaygroup']");}
    get payGroupsGridHeader() {return $("//div[@id='tatimeoffpaygroup-component']//thead");} 
    get payGroupsModel() {return $("//div[@id='timeOffPayGroupModal']");}
    get payGroupsSaveButton() {return $("//div[@id='timeOffPayGroupModal']//button[@id='form-submit-btn']");}
    get payGroupsCloseButton() {return $("//div[@id='timeOffPayGroupModal']//button[@id='form-close-button']");}

    
    
    //Administrators
    get administratorsTitle() {return $("//div[@class='col-md-12 pb-2 org-component-title']");}
    get administratorsSearch() {return $("//div[@id='gh-account-list-component']//input[@id='ghAccountInputSearch']");}
    get adminAddAccountButton() {return $("//div[@data-target='#ghAccountEditModal']");}
    get adminGridHeader() {return $("//div[@id='gh-account-list-component']//thead");}
    get adminModel() {return $("//div[@id='ghAccountEditModal']");}
    get adminModelSaveButton() {return $("//div[@id='ghAccountEditModal']//button[@class='btn btn-primary float-right width_110']");}
    get adminModelCloseButton() {return $("//div[@id='ghAccountEditModal']//button[@class='btn gh-non-primary-btn float-right mr-2']");}
    
    //Plan Menu
    get planTitle() {return $("//div[@id='plansComponent']//h3[@class='font-weight-bold header-title w-50 float-left font-24']");}
    get planSearchBar() {return $("[placeholder='Search plans']");}
    get showEndedPlans() {return $("//input[@class='switch ml-3 plan-ended-filter']");}
    get addPlanButton() {return $("//button[@data-target='#addPlanComponent']");}
    get addPlanModel() {return $("//form[@id='gh_AddPlan_Form']");}
    get planModelCloseButton() {return $("//div[@id='addPlanComponent']//button[@class='close']");}
    get planGridHeader() {return $("//table[@id='plansTable']/thead");}

    //ENROLLMENT
    
    get openEnrollmentScreen() {return $("//div[@id='openEnrollmentsComponent']");}
    get addOpenEnrollment() {return $("//a[@class='d-inline-block ml-4 header-link']");}
    get priorEnrollments() {return $("//div[@id='openEnrollmentsComponent']/h3[@class='font-weight-normal header-title mb-4 mt-2']");}
    get addNewEnrollmentModel() {return $("//div[@id='add-new-open-enrollment']");}
    get addNewEnrollmentCloseButton() {return $("//div[@id='add-new-open-enrollment']//button[@class='close']");}
    
    //Manage EOI
    
    get eoiScreen() {return $("//div[@id='eoiComponent']");}
    get eoiTitle() {return $("//div[@id='eoiComponent']//h5[@class='font-weight-bold header-title float-left m-0']");}
    get eoiSearchBar() {return $("//div[@id='eoiComponent']//input[@placeholder='Search']");}
    get eoiGridHeader() {return $("//div[@id='eoiComponent']//table[@class='table table-main mb-0 fixed-table-columns w-100 smaller-text border-top']/thead");}
    
    //Enrollment Settings
     get enrollmentSettingTitle() {return $("//div[@id='enrollmentSettingsComponent']//h5[@class='font-weight-bold mt-2 mb-0']");}
     get contributionScheduleText() {return $("//div[@id='enrollmentSettingsComponent']//div[@class='mt-3']//label[@class='font-weight-bold']");}
     get contributionScheduleDropDown() {return $("//div[@class='mt-3']/div[@class='gh-ba-select']/select[@class='form-control']");}
     get eligibilityWaitingPeriodText() {return $("[class] [class='mt-5']:nth-of-type(2) .font-weight-bold");}
     get eligibilityWaitingPeriodDropDown() {return $("//div[@class='mt-5'][1]/div[@class='gh-ba-select']/select[@class='form-control']");}
     get assignBenefitGroupText() {return $("[class] [class='mt-5']:nth-of-type(3) .font-weight-bold");}
     get assignBenefitGroupDropDown() {return $("//div[@class='mt-5'][2]/div[@class='gh-ba-select']/select[@class='form-control']");}
     get enrollmentSaveButton() {return $("//div[@id='enrollmentSettingsComponent']//button[@class='btn btn-sm btn-primary w-180p py-2']");}
    
   

    //Imports
     get importTitle() {return $("//div[@class='pb-2 col-md-12 org-component-title']");}
     get newEmployeeCensus() {return $("//div[@id='import_action_card_container']/div[@class='import-action-card mb-3 gh-ba-bs-lighter bg-white p-3 gh-report-section d-flex flex-column'][1]");}
     get newEmployeeDependentCensus() {return $("//div[@id='import_action_card_container']/div[@class='import-action-card mb-3 gh-ba-bs-lighter bg-white p-3 gh-report-section d-flex flex-column'][2]");}
     get employeeProfileUpdates() {return $("//div[@id='import_action_card_container']/div[@class='import-action-card mb-3 gh-ba-bs-lighter bg-white p-3 gh-report-section d-flex flex-column'][3]");}
     get importHistoryLog() {return $("//div[@class='col-md-12 mt-3 mb-3']/div[@class='text-lg font-weight-bold']");}
     get importHistoryGrid() {return $("//table[@id='import_history_log_table']/thead");}
    
    
    

    //Reports
    get reportTitle() {return $("//div[@id='reportsComponent']//h3[@class='font-weight-normal header-title float-left m-0']");}
    get demographicCensusReport() {return $("//div['reportsComponent']//a[@href='/secure/benefits/reports/demographic-census']");}
    get enrollmentsReport() {return $("//div['reportsComponent']//a[@href='/secure/benefits/reports/benefit-elections']");}
    get payrollDeductionsReport() {return $("//div['reportsComponent']//a[@href='/secure/benefits/reports/payroll-deductions']");}
    get demographicChangesReport() {return $("//div['reportsComponent']//a[@href='/secure/benefits/reports/demographic-changes']");}
    get enrollmentChangesReport() {return $("//div['reportsComponent']//a[@href='/secure/benefits/reports/benefit-election-changes']");}
    get payrollDeductionChangesReport() {return $("//div['reportsComponent']//a[@href='/secure/benefits/reports/payroll-deduction-changes']");}
    get employeeEnrollmentParticipationRates() {return $("//div['reportsComponent']//a[@href='/secure/benefits/reports/participation-rates']");}
    get employerTotalMonthlyCost() {return $("//div['reportsComponent']//a[@href='/secure/benefits/reports/monthly-cost']");}

   

    
    /////Dashboard Menu TC////////
    verifyDashboardLinks(){
      
      this.dashboardLink.waitForExist();
      expect(this.dashboardLink.getText()).to.equal("DASHBOARD");
      //
      expect(this.dashboardLink.isDisplayed(), '*****nooo why fail??').to.be.true;
      //
      expect(this.compnayLink.getText()).to.equal("COMPANY");
      expect(this.locationLink.getText()).to.equal("Locations");
      expect(this.organizationalStructureLink.getText()).to.equal("Organizational Structure");
      expect(this.payGroupsLink.getText()).to.equal("Pay Groups");
      expect(this.administratorsLink.getText()).to.equal("Administrators");
      expect(this.planLink.getText()).to.equal("PLANS");
      expect(this.enrollmentLink.getText()).to.equal("ENROLLMENT");
      expect(this.openEnrollmentLink.getText()).to.equal("Open Enrollment");
      expect(this.manageEOILink.getText()).to.equal("Manage EOI");
      expect(this.enrollmentSettingsLink.getText()).to.equal("Enrollment Settings");
      expect(this.toolsLink.getText()).to.equal("TOOLS");
      expect(this.importsLink.getText()).to.equal("Imports");
      expect(this.reportsLink.getText()).to.equal("REPORTS");
      this.loadingSpinner.waitForExist();
      browser.waitUntil(() => {
      return this.loadingSpinner.isDisplayed() === false
      }, 10000, 'Wait till loading spinner Close');
      this.planViewDetails.waitForExist();
      expect(this.planViewDetails.isDisplayed()).to.equal(true);
      expect(this.EnrollmentChangesDetail.isDisplayed()).to.equal(true);
      expect(this.monthlyCostDetail.isDisplayed()).to.equal(true);
      expect(this.unlockNewHireEnrollment.isDisplayed()).to.equal(true);
      expect(this.incompleteEmployeeEnrollments.isDisplayed()).to.equal(true);
      expect(this.employerMonthlyCostBenefit.isDisplayed()).to.equal(true);
      expect(this.employeeParticipationRateBenefit.isDisplayed()).to.equal(true);
      
  }

    /////Compnay Menu TC////////
    verfiyCompanyMenu(){

      //location
      this.compnayLink.waitForExist();
      this.compnayLink.click();
      expect(this.locationLink.getText(), 'locationLink Text if Diff').to.equal("Locations");
      expect(this.organizationalStructureLink.getText(), 'organizationalStructureLink Text if Diff').to.equal("Organizational Structure");
      expect(this.payGroupsLink.getText(), 'payGroupsLink Text if Diff').to.equal("Pay Groups");
      expect(this.administratorsLink.getText(), 'administratorsLink Text if Diff').to.equal("Administrators")
      this.locationLink.click();
      this.loactionTitle.waitForExist();
      expect(this.loactionTitle.getText(), 'loactionTitle Text if Diff').to.equal("Locations");
      expect(this.loactionSearchBar.isDisplayed(), 'loactionSearchBar Not Displayed').to.equal(true);
      expect(this.addLocationButton.getText(), 'addLocationButton Text if Diff').to.equal("Add Location");
      expect(this.loactionGridHeader.getText(), 'loactionGridHeader Text if Diff').to
      .equal("TITLE PRIMARY LOCATION TYPE ADDRESS CITY STATE / PROVINCE ZIP / POSTAL CODE COUNTRY ACTION");
      this.addLocationButton.click();
     // console.log("****addLocationForm visible value ="+this.addLocationForm.isDisplayed());
      browser.waitUntil(() => {
      return this.addLocationForm.isDisplayed() === true
      }, 10000, 'Wait till addLocationForm displayed');

      //console.log("****addLocationForm visible value ="+this.addLocationForm.isDisplayed());
      expect(this.addLocationForm.isDisplayed(), 'addLocationForm Not Displayed').to.equal(true);
    //  console.log("****addLocationForm visible value ="+this.addLocationForm.isDisplayed());
      this.loactionCloseButton.waitForExist();
      this.loactionCloseButton.click();
      this.addLocationForm.waitForExist(true);
      browser.pause(1000);

      //Organizational Structure
      this.organizationalStructureLink.waitForExist();
      this.organizationalStructureLink.click();
      this.organizationalStructureTitle.waitForExist();
      expect(this.organizationalStructureTitle.getText(), 'organizationalStructureTitle Text if Diff').to
      .equal("Organizational Structure");
      this.addOrganizationalStructureButton.waitForExist();
      expect(this.addOrganizationalStructureButton.getText(), 'addOrganizationalStructureButton Text if Diff').to
      .equal("Add Organizational Structure");
      
      this.addOrganizationalStructureButton.click();
      browser.waitUntil(() => {
      return this.addOrganizationalStructureModel.isDisplayed() === true
      }, 10000, 'Wait till addOrganizationalStructureModel displayed');

      this.addOrganizationalStructureModel.waitForExist();
      this.addOrganizationalStructureSaveButton.waitForExist();
      this.addOrganizationalStructureSaveButton.isDisplayed();
      this.addOrganizationalStructureCloseButton.waitForExist();
      this.addOrganizationalStructureCloseButton.click();
      browser.pause(1000);

      //Pay Group
      this.payGroupsLink.click();
      this.payGroupsTitle.waitForExist();
      expect(this.payGroupsTitle.getText(), 'payGroupsTitle Text if Diff').to.equal("Pay Groups");
      expect(this.payGroupsSearch.isDisplayed(), 'payGroupsSearch Not Displayed').to.equal(true);
      expect(this.addPayGroupsButton.isDisplayed(), 'addPayGroupsButton Not Displayed').to.equal(true);
      expect(this.payGroupsGridHeader.getText(), 'payGroupsGridHeader Text if Diff').to.equal("Name\nDescription\nPeriod Type\nAction");
      this.addPayGroupsButton.click();
       browser.waitUntil(() => {
      return this.payGroupsModel.isDisplayed() === true
      }, 10000, 'Wait till payGroupsModel displayed');
      this.payGroupsSaveButton.isDisplayed();
      this.payGroupsCloseButton.isDisplayed();
      this.payGroupsCloseButton.click();
      browser.pause(1000);

      //Administrators
      this.administratorsLink.waitForExist();
      this.administratorsLink.click();
      this.administratorsTitle.waitForExist();
      expect(this.administratorsTitle.getText(), 'administratorsTitle Text if Diff').to.equal("Administrators");
      expect(this.administratorsSearch.isDisplayed(), 'administratorsSearch Not Displayed').to.equal(true);
      expect(this.adminAddAccountButton.isDisplayed(), 'adminAddAccountButton Not Displayed').to.equal(true);
      expect(this.adminGridHeader.getText(), 'adminGridHeader Text if Diff').to.equal("Name\nEmail\nAccess Level\nRoles\nStatus\nActions");
      this.adminAddAccountButton.click();
      browser.waitUntil(() => {
      return this.adminModel.isDisplayed() === true
      }, 10000, 'Wait till adminModel displayed');
      expect(this.adminModel.isDisplayed(), 'adminModel Not Displayed').to.equal(true);
      expect(this.adminModelSaveButton.isDisplayed(), 'adminModelSaveButton Not Displayed').to.equal(true);
      expect(this.adminModelCloseButton.isDisplayed(), 'adminModelCloseButton Not Displayed').to.equal(true);
      this.adminModelCloseButton.click();
      browser.pause(1000);
  }
  
  /////Plan Menu TC////////
  verfiyPlansMenu(){
      this.planLink.waitForExist();
      this.planLink.click();
      this.planTitle.waitForExist();
      expect(this.planTitle.getText(), 'planTitle Text if Diff').to.equal("Plans");
      expect(this.planSearchBar.isDisplayed(), 'planSearchBar Not Displayed').to.equal(true);
      expect(this.showEndedPlans.isDisplayed(), 'showEndedPlans Not Displayed').to.equal(true);
      expect(this.addPlanButton.getText(), 'addPlanButton Text if Diff').to.equal("Add a Plan");
      expect(this.planGridHeader.getText(), 'planGridHeader Text if Diff').to
      .equal("Plan Name Carrier Effective Date Eligible / Enrolled\nStatus");
      this.addPlanButton.click();
      browser.waitUntil(() => {
      return this.addPlanModel.isDisplayed() === true
      }, 10000, 'Wait till addPlanModel displayed');
      this.planModelCloseButton.waitForExist();
      this.planModelCloseButton.click();
      browser.pause(1000);
    
  }

  /////Enrollment Menu TC////////
  verifyEnrollmentMenu(){
     this.enrollmentLink.waitForExist();
     this.openEnrollmentLink.waitForExist();
     this.openEnrollmentLink.click();
     browser.waitUntil(()=>{
      return this.openEnrollmentScreen.isDisplayed()===true
     },10000,'Wait till openEnrollmentScreen displayed');
     this.addOpenEnrollment.waitForExist();
     expect(this.addOpenEnrollment.getText(), 'addOpenEnrollment Text if Diff').to.equal("+ Add Open Enrollment");
     expect(this.priorEnrollments.getText(), 'priorEnrollments Text if Diff').to.equal("Prior Enrollments");
     this.addOpenEnrollment.click();
     browser.waitUntil(()=>{
      return this.addNewEnrollmentModel.isDisplayed()===true
     },10000,'Wait till addNewEnrollmentModel displayed');
     this.addNewEnrollmentCloseButton.waitForExist();
     this.addNewEnrollmentCloseButton.click();
     browser.pause(1000);

     this.manageEOILink.waitForExist();
     this.manageEOILink.click();
     browser.waitUntil(()=>{
      return this.eoiScreen.isDisplayed()===true
     },10000,'Wait till eoiScreen displayed');
     this.eoiTitle.waitForExist();
     expect(this.eoiTitle.getText(), 'eoiTitle Text if Diff').to.equal("Manage Evidence of Insurability");
     expect(this.eoiSearchBar.isDisplayed(), 'eoiSearchBar Text is not displayed').to.equal(true);
     expect(this.eoiGridHeader.getText(), 'eoiTitle Text if Diff').to.equal("Enrolled Member Employee Name Product\nRequested\nAmount Guaranteed Issue\nAmount Pending\nAmount Status");

     this.enrollmentSettingsLink.waitForExist();
     this.enrollmentSettingsLink.click();
     this.enrollmentSettingTitle.waitForExist();
     expect(this.enrollmentSettingTitle.isDisplayed(), 'enrollmentSettingTitle Text if Diff').to.equal(true);
     expect(this.contributionScheduleText.isDisplayed(), 'contributionScheduleText Text if Diff').to.equal(true);
     expect(this.contributionScheduleDropDown.isDisplayed(), 'contributionScheduleDropDown Text if Diff').to.equal(true);
     expect(this.eligibilityWaitingPeriodText.isDisplayed(), 'eligibilityWaitingPeriodText Text if Diff').to.equal(true);
     expect(this.eligibilityWaitingPeriodDropDown.isDisplayed(), 'eligibilityWaitingPeriodDropDown Text if Diff').to.equal(true);
     expect(this.assignBenefitGroupText.isDisplayed(), 'assignBenefitGroupText Text if Diff').to.equal(true);
     expect(this.assignBenefitGroupDropDown.isDisplayed(), 'assignBenefitGroupDropDown Text if Diff').to.equal(true);
     expect(this.enrollmentSaveButton.getText(), 'enrollmentSaveButton Text if Diff').to.equal("Save");
  }

  /////Tool Menu TC////////
  verifyToolsMenu(){
   this.toolsLink.waitForExist();
   this.importsLink.click();
   this.importTitle.waitForExist();
   expect(this.importTitle.getText(), 'importTitle Text if Diff').to.equal("Imports");
   expect(this.newEmployeeCensus.getText(), 'newEmployeeCensus Text if Diff').to.equal("New Employee Census\nUpload new employee records.\nUpload");
   expect(this.newEmployeeDependentCensus.getText(), 'newEmployeeDependentCensus Text if Diff').to.equal("New Employee and Dependent Census\nUpload new employee and dependent records.\nUpload");
   expect(this.employeeProfileUpdates.getText(), 'employeeProfileUpdates Text if Diff').to.equal("Employee Profile Updates\nUpload employee profile updates such as home address, department, salaries, etc.\nUpload");
   expect(this.importHistoryLog.getText(), 'importHistoryLog Text if Diff').to.equal("Import History Log");
   expect(this.importHistoryGrid.getText(), 'importHistoryGrid Text if Diff').to.equal("Import Name\nImport Type\nUploaded on Uploaded by\nStatus");
   }

   /////Report Menu TC////////
  verifyReportsMenu(){
    this.reportsLink.waitForExist();
    this.reportsLink.click();
    this.reportTitle.waitForExist();
    expect(this.reportTitle.getText(), 'reportTitle Text if Diff').to.equal("Reports");
    expect(this.demographicCensusReport.isDisplayed(), 'demographicCensusReport no displayed').to.equal(true);
    expect(this.enrollmentsReport.isDisplayed(), 'enrollmentsReport no displayed').to.equal(true);
    expect(this.payrollDeductionsReport.isDisplayed(), 'payrollDeductionsReport no displayed').to.equal(true);
    expect(this.demographicChangesReport.isDisplayed(), 'demographicChangesReport no displayed').to.equal(true);
    expect(this.enrollmentChangesReport.isDisplayed(), 'enrollmentChangesReport no displayed').to.equal(true);
    expect(this.payrollDeductionChangesReport.isDisplayed(), 'payrollDeductionChangesReport no displayed').to.equal(true);
    expect(this.employeeEnrollmentParticipationRates.isDisplayed(), 'employeeEnrollmentParticipationRates no displayed').to.equal(true);
    expect(this.employerTotalMonthlyCost.isDisplayed(), 'employerTotalMonthlyCost no displayed').to.equal(true);

   }

}
module.exports = new SmokeTest_Page();


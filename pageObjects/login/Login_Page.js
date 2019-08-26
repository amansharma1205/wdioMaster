	const data = require('../../resources/login/login_Resource.js')
	class Login_Page {
		get userName() { return $("[name='username']");}
		get password() { return $("[name='password']");}
		get submitButton() { return $("[type='submit']");}
		get successfulLogin() {return $("[title='Dashboard']");}
		get unsuccessfulLogin() {return $("//div[@id='gh-body-secondary']//p");}
		get benefitLink() {return $("[title='Benefits']");}
		get benefitsTitle() {return $("//div[@class='menu-title']");}

		setUserName(userName) {
			return this.userName.setValue(userName);
		}

		setPassword(password) {
			return this.password.setValue(password);
		}

		clickSubmitButton() {
			return this.submitButton.click();
		}

		submitSignInForm(userName, password) {
			if(userName) {
				this.userName.setValue(userName);
			}
			if(password) {
				this.password.setValue(password);
			}
		this.submitButton.click();
		}

	 loginToBenAdmin()
		{
		   browser.url('/login')
		   this.userName.waitForExist();
		   this.password.waitForExist();
	       this.userName.setValue(data.devServer_credencials.email);
	       this.password.setValue(data.devServer_credencials.password);
	       this.password.waitForExist();
	       this.submitButton.click();

	     try {
					
					expect(browser.getUrl()).to.have.string("secure/hiring")
					this.benefitLink.click();
					this.benefitsTitle.waitForExist();
					expect(browser.getUrl()).to.have.string("/secure/benefits");
					//browser.url('/secure/employee/setting/5d6106454e2f2e742f8b48d6?fresh_fetch=true');

				} catch(err) {
					console.log("Exception: " + err);
					assert.fail();
				}

		}
	}

	module.exports = new Login_Page();
	const data = require('../../resources/login/login_Resource.js')
	class Login_Page {
		get userName() { return $("[name='username']");}
		get password() { return $("[name='password']");}
		get submitButton() { return $("[type='submit']");}
		get successfulLogin() {return $("[title='Dashboard']");}
		get unsuccessfulLogin() {return $("//div[@id='gh-body-secondary']//p");}
		get benefitLink() {return $("[title='Benefits']");}

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
	       this.userName.setValue(data.devServer_credencials.email);
	       this.password.setValue(data.devServer_credencials.password);
	       this.submitButton.click();

	     try {
					
					expect(browser.getUrl()).to.have.string("secure/hiring")
					this.benefitLink.click();
					expect(browser.getUrl()).to.have.string("/secure/benefits");
					//browser.url('/secure/employee/setting/5d5e5c1c4e2f2e6c468b46b9?fresh_fetch=true');

				} catch(err) {
					console.log("Exception: " + err);
					assert.fail();
				}

		}
	}

	module.exports = new Login_Page();
export class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = '//input[@id="user-name"]';
      this.passwordInput = '//input[@id="password"]';
      this.loginButton = '#login-button';
      this.errorMessage = '//h3[@data-test="error"]';
    }
  
    async goto() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    }
  
    async getError() {
      return this.page.textContent(this.errorMessage);
    }
  }
  

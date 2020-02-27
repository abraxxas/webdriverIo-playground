import BasePage from "src/pages/BasePage";

class LoginPage extends BasePage {
  get username() {
    return $("#username");
  }

  get password() {
    return $("#password");
  }

  get submit() {
    return $('[data-testid="loginButton"]');
  }

  get flash() {
    return $('[data-testid="alert-error"] > div > span').getText();
  }

  get didomi() {
    return $("#didomi-popup");
  }

  get open() {
    return browser.url("/iad/myprofile/login");
  }

  acceptCookies() {
    $("#didomi-notice-agree-button").click();
  }

  loginWithCredentials(username, password) {
    this.username.setValue(username);
    this.password.setValue(password);
    this.submit.click();
  }
}

export default new LoginPage();

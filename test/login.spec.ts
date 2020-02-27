import jestMatchers from "expect-webdriverio";
import { config } from "src/config";
import LoginPage from "src/pages/LogInPage";

describe("Login page", () => {
  before(() => {
    LoginPage.open;
    LoginPage.acceptCookies();
  });

  it("displays message with invalid credentials", () => {
    LoginPage.open;
    LoginPage.loginWithCredentials("foo@bazz.net", "bar");

    browser.waitUntil(
      () => {
        return LoginPage.flash === "Login fehlgeschlagen";
      },
      5000,
      "expected to see error message"
    );

    // expect(LoginPage.flash).toHaveTextContaining("Login fehlgeschlagen");
  });

  it("using config values specified in src/config", () => {
    LoginPage.open;
    LoginPage.loginWithCredentials(config.username, config.password);

    browser.waitUntil(
      () => {
        return browser.getUrl() === "https://www-st.willhaben.at/iad/";
      },
      5000,
      "expected url to change"
    );
  });
});

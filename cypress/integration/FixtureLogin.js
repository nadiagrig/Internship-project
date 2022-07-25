import Login from "./Classes/POMlogin";
const loginpage = new Login();

let loginData;

describe("Fixture", function () {
  before(function () {
    loginpage.navigate();
    cy.fixture("integration/classes/loginFiles.json").then(function (logdata) {
      loginData = logdata;
    });
  });
});

it("Login with valid data", function () {
  cy.log(loginData);
  loginpage.Email.type(loginData.email);
  loginpage.Password.type(loginData.password);

  // cy.get(Email).type(loginData.email)
  // cy.get(Password).type(loginData.password)

  cy.get(".sc-iqAclL").click();
  cy.url().should(
    "eq",
    "https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard"
  );
});

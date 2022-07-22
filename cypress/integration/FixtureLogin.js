import Login from "./Classes/POMlogin";
const loginpage = new Login();

let example;
describe("Fixture", function () {
  before(function () {
    loginpage.navigate();
    cy.fixture("loginFile.json").then(function (logdata) {
      example = logdata;
    });
  });
});

it("Login with valid data", function () {
 
loginpage.Email.type(example.email)
loginpage.Password.type(example.password)
cy.log(example);

  cy.get(".sc-iqAclL").click();
  cy.url().should(
    "eq",
    "https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard"
  );
});



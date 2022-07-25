import Register from "./Classes/POMregister";

const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const testname = `email${id}@yahoo.com`;
const pswd = `pswd${id}`;

const registerpage = new Register();
var text = "";

function randomUser() {
  let textRandom = "";

  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 6; i++)
    textRandom += possible.charAt(Math.floor(Math.random() * 52));
  return textRandom;
}

describe("Register POM", function () {
  it("Register with valid email and password", function () {
    registerpage.navigate();

    let text1 = randomUser();
    let text2 = randomUser();

    registerpage.firstname(text1);
    registerpage.lastname(text2);
    registerpage.email(testname);
    registerpage.password(pswd);
    registerpage.confirmpassword(pswd);
    registerpage.personalnumber("2911216464279");

    registerpage.submit();

    cy.url().should(
      "be.equal",
      "https://victorious-wave-093b83610.1.azurestaticapps.net/#/login"
    );
  });
});

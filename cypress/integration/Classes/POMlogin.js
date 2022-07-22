class Login {
  navigate() {
    cy.visit("https://victorious-wave-093b83610.1.azurestaticapps.net/#/login");
  }

  get Email() {
    return cy.get("#email-address");
  }

  get Password() {
    return cy.get("#password");
  }

  submit() {
    cy.get(".sc-iqAclL").click();
  }
}
export default Login;

import Login from "./Classes/POMlogin";

const loginpage = new Login ();


describe ("Login POM", function () {
    it("Login with valid email and password", function () {
       
        loginpage.navigate();
        loginpage.email('grigoras.nadia146@gmail.com');
      
        loginpage.password ('BCXNQ932');
        loginpage.submit();
        cy.url().should('be.equal', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')
    })
})
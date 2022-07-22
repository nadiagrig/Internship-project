/// <reference types="cypress" />

describe("API", () => {
  it("API for Welcome", () => {
    cy.request("GET" ,'https://assist-august-2021-be1.azurewebsites.net/Welcome').then((res) => {
            

        expect(res.status).to.eq(200);
        expect(res.body).to.eq("Welcome to Assist Internship 2021");
        cy.log(res);
       
      }
    );
  });
});

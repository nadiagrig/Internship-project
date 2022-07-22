/// <reference types="cypress" />

describe("API", () => {
    it("API for Zone", () => {
      cy.request("GET" ,'https://assist-august-2021-be1.azurewebsites.net/api/Zone').then((res) => {
              
  
          expect(res.status).to.eq(200);
          expect("id").to.eq('7f5eb7df-faaa-46e0-cfa9-08da61af937c')
          cy.log(res);
         
        }
      );
    });
  });
  
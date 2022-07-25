/// <reference types="cypress" />

describe("API", () => {
  it("API for Welcome", () => {
    cy.request(
      "GET",
      "https://assist-august-2021-be1.azurewebsites.net/Welcome"
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.eq("Welcome to Assist Internship 2021");
      cy.log(res);
    });
  });

  it("API for Zone", () => {
    cy.request(
      "GET",
      "https://assist-august-2021-be1.azurewebsites.net/api/Zone"
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.contain("id", "7f5eb7df-faaa-46e0-cfa9-08da61af937c");
      cy.log(res);
    });

    cy.request(
      "DELETE",
      "https://assist-august-2021-be1.azurewebsites.net/api/Zone/7f5eb7df-faaa-46e0-cfa9-08da61af937c"
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.eq("Zone deleted");
      cy.log(res);
    });




    

    //   cy.request('POST' ,'https://assist-august-2021-be1.azurewebsites.net/api/Zone', { response: "Agent doesn't exist in the database"}).then((res) => {

    //     expect(res.status).to.eq(200);
    //     expect(res.body).to.have.property('response', "Agent doesn't exist in the database")
    //     cy.log(res);

    //   }
    // );


   
   
   
   
    // cy.request({
    //  method : "PUT",
    //   url: "https://assist-august-2021-be1.azurewebsites.net/api/Zone",
    //   body:{
    //     "name": "string",
    //     "neighborhood": "string",
    //     "color": "string",
    //     "agentIds": [
    //       {
    //         "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    //       }
    //     ]
    //   }
    //  }).then((res) => {
    //   expect(res.status).to.eq(200);
    //   expect(res.body).to.contain("id", "3fa85f64-5717-4562-b3fc-2c963f66afa6");
    //   cy.log(res);
    // });





  });
});

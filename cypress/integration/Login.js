/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
  })

 








  it('Admin login', function(){
    cy.get('#email-address').clear().type("grigoras.nadia146@gmail.com").wait(500)
    cy.get('#password').clear().type("BCXNQ932").wait(500)
    cy.get('.sc-iqAclL').click().wait(500)
    cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')

    cy.get('.sc-gtsrHT > svg').click()
    
      cy.get('.sc-gKAaRy') //click menu
      .should('contain', 'Dashboard') //check the elements
      .and('contain','Issues')
      .and('contain', 'Users')
      .and('contain', 'Zones')
      .and('contain', 'Map')
  })





      
  it('Validator login', function(){
    cy.get('#email-address').type("validator@assist.ro").wait(500)
     cy.get('#password').type("assist12345.").wait(500)
     cy.get('.sc-iqAclL').click().wait(500)
     cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/issues')

     cy.get('.sc-gtsrHT > svg').click()
    
     cy.get('.sc-gKAaRy') //click menu
     .should('contain', 'Issues') //check elements
     .and('contain', 'Users')
     .and('contain', 'Map')
 
   })


   




  it('Agent login', function(){
    cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')     
           cy.get('#email-address').clear().type("agent@assist.ro").wait(500)
        cy.get('#password').clear().type("assist12345.").wait(500)
        cy.get('.sc-iqAclL').click().wait(500)
        cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/issues')

        cy.get('.sc-gtsrHT > svg').click()
    
        cy.get('.sc-gKAaRy')
        .should('contain', 'Issues')
        .and('contain', 'Map')
    
    
      })
 








  it('Citizen login', function(){
      cy.get('#email-address').type("nadiagrigoras02@yahoo.com").wait(500)
        cy.get('#password').type("STPW82DK").wait(500)
        cy.get('.sc-iqAclL').click().wait(500)
        cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/issues')

        cy.get('.sc-gtsrHT > svg').click()
    
        cy.get('.sc-gKAaRy')
        .should('contain', 'Issues')
        .and('contain', 'Map')
    
    
      })






})









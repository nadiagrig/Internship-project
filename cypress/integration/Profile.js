/// <reference types="cypress" />

describe('Profile', () => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')


    })



    it('Admin login', function(){ //login
        cy.get('#email-address').clear().type("grigoras.nadia146@gmail.com").wait(500)
        cy.get('#password').clear().type("BCXNQ932").wait(500)
        cy.get('.sc-iqAclL').click().wait(500)
        cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')
    


        cy.get('.sc-iCoGMd').click() //profile click

        cy.get('[for="firstName"]:visible') //check if field title is displayed
      cy.get('[name="firstName"]:visible').should('have.value', 'Nadia') // check if field is displayed + should have 'Nadia' written in it

      cy.get('[for="lastName"]:visible') //field title
      cy.get('[name="lastName"]').should('have.value', 'Grigoras')//field

      cy.get('[for="address"]:visible')
      cy.get('[name="address"]:visible').should('have.value', 'test address')

      cy.get('[for="email"]:visible')
      cy.get('[name="email"]:visible').should('have.value', 'grigoras.nadia146@gmail.com')

      cy.get('[for="password"]:visible')
      cy.get('#password:visible')

      cy.get('[for="personalNumber"]:visible')
      cy.get('[name="personalNumber"]:visible').should('have.value', '6000305133016')


      cy.get('.sc-dlMDgC').click()  // cancel click
      cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/dashboard')
    
      })
    




})  
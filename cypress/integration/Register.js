/// <reference types="cypress" />



const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}@yahoo.com`













/*Cypress.Commands.add('register', (firstname, email, password) => {
cy.get('.register').click()
cy.get('#first-name').type(firstname)
cy.get('#email-address').type(email)
cy.get('#password').type(password)

cy.get('.sc-iqAclL').click()
cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')

})







describe ('general data', () => {
it ('should register', () => {
cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
cy.register('Nadia', testname, 'assist12345.')



})

})

*/












//functionality of register form
describe('Register', () => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
    })
   




    it.only('Admin register', function(){   
               cy.get('#first-name').type("Nadia")
            cy.get('#last-name').type("Admin")
            cy.get('#email-address').type(testname) 
            cy.get('#password').type("assist12345.")
           // eye functionality
            cy.get('[data-for="password"] > #Capa_1').click() 
            cy.get('#confirm-password').type("assist12345.")
            cy.get('[data-for="confirmPassword"] > #Capa_1').click()
            cy.get('[data-for="password"] > #Capa_1').click()
            cy.get('[data-for="confirmPassword"] > #Capa_1').click()
            cy.get('#Capa_1').click()
            cy.get('#personal-number').type("2911216464279")
            cy.get('.sc-iqAclL').click()
            //validation
            cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
            
        
          })




          it('Validator register', function(){   
            cy.get('#first-name').clear().type("Nadia")
         cy.get('#last-name').clear().type("Validator")
         cy.get('#email-address').clear().type(testname)
         cy.get('#password').clear().type("assist12345.")
          // eye functionality
         cy.get('[data-for="password"] > #Capa_1').click()
         cy.get('#confirm-password').clear().type("assist12345.")
         cy.get('[data-for="confirmPassword"] > #Capa_1').click()
         cy.get('[data-for="password"] > #Capa_1').click()
         cy.get('[data-for="confirmPassword"] > #Capa_1').click()
         cy.get('#personal-number').clear().type("1951217083170")
         cy.get('.sc-iqAclL').click()
          //validation
         cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
     
       })





       it('Agent register', function(){   
        cy.get('#first-name').clear().type("Nadia")
     cy.get('#last-name').clear().type("Agent")
     cy.get('#email-address').clear().type("agent@yahoo.com")
     cy.get('#password').clear().type("assist12345.")
      // eye functionality
     cy.get('[data-for="password"] > #Capa_1').click()
     cy.get('#confirm-password').clear().type("assist12345.")
     cy.get('[data-for="confirmPassword"] > #Capa_1').click()
     cy.get('[data-for="password"] > #Capa_1').click()
     cy.get('[data-for="confirmPassword"] > #Capa_1').click()
     cy.get('#personal-number').clear().type("1890512454585")
     cy.get('.sc-iqAclL').click()
      //validation
     cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')
 
   })





   it('Citizen register', function(){   
    cy.get('#first-name').clear().type("Nadia")
 cy.get('#last-name').clear().type("Citizen")
 cy.get('#email-address').clear().type("citizen@yahoo.com")
 cy.get('#password').clear().type("assist12345.")
  // eye functionality
 cy.get('[data-for="password"] > #Capa_1').click()
 cy.get('#confirm-password').clear().type("assist12345.")
 cy.get('[data-for="confirmPassword"] > #Capa_1').click()
 cy.get('[data-for="password"] > #Capa_1').click()
 cy.get('[data-for="confirmPassword"] > #Capa_1').click()
 cy.get('#personal-number').clear().type("1970818118544")
 cy.get('.sc-iqAclL').click()
  //validation
 cy.url().should('eq', 'https://victorious-wave-093b83610.1.azurestaticapps.net/#/login')

})

})  











//css of register form
describe('CSS', () => {
    beforeEach(() => {
      
      cy.visit('https://victorious-wave-093b83610.1.azurestaticapps.net/#/register')
    })


//for


})


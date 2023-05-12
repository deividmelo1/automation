import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

/* Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("acessar Homepage", () => {
    cy.visit("https://automationexercise.com/");
}) */

When("acessar página Login", () => {
    cy.get('[href="/login"]').click() 
})

And ("Digitar usuario e senha invalidos e clicar em Login",()=>{
    cy.get('[data-qa="login-email"]').type('deivid.melo@teste.com')
    cy.get('[data-qa="login-password"]').type('123')
    cy.get('[data-qa="login-button"]').click()
})

Then("mensagem de erro deve aparecer", ()=>{
cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
})

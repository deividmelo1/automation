import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import SignupPage from '../Pages/signup'

/* Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("acessar Homepage", () => {
    cy.visit("https://automationexercise.com/");
}) */

/*When("acessar página Login", () => {
    cy.get('[href="/login"]').click() 
})

And ("Digitar usuario e senha invalidos e clicar em Login",()=>{
    cy.get('[data-qa="login-email"]').type('deivid.melo@teste.com')
    cy.get('[data-qa="login-password"]').type('123')
    cy.get('[data-qa="login-button"]').click()
})

Then("mensagem de erro deve aparecer", ()=>{
cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
}) */

Given("acessar Homepage", () => {
    SignupPage.acessPage();
}) 

When("acessar página Login", () => {
    SignupPage.clickLoginPage();
})

And ("Digitar Nome e Email e clicar no botao Signup",()=>{
    SignupPage.typeNome();
    SignupPage.typeEmail();
    SignupPage.clickSignupPage();

})
Then ("Preencho os campos restantes na nova pagina",()=>{
    SignupPage.typePassword();
    SignupPage.typeFistName();
    SignupPage.typeLastName();
    SignupPage.typeCompany();
    SignupPage.typeAddress();
    SignupPage.typeAddress2();
    SignupPage.typeState();
    SignupPage.typeCity();
    SignupPage.typeZipCode();
    SignupPage.typeMobileNumber();

})


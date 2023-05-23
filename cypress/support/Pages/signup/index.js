/// <reference types="Cypress" />

    const elSignupPage = require('./elements').elements

    class SignupPage{
        acessPage(){
            cy.visit("https://automationexercise.com/")
        }

        clickLoginPage(){
            cy.get(elSignupPage.btnLogin).click()
        }

        typeNome(){
            cy.get(elSignupPage.inputNome).type("Deivid de Melo")
        }

        typeEmail(){
            cy.get(elSignupPage.inputEmail).type("deivid@teste.com")
        }

        clickSignupPage(){
            cy.get(elSignupPage.btnSignup).click()
        }

        typePassword(){
            cy.get(elSignupPage.inputPassword).type("123456l")
        }

        typeFistName(){
            cy.get(elSignupPage.inputFistName).type("Deivid")   
        }
        
        typeLastName(){
            cy.get(elSignupPage.inputLastName).type("Melo")  
        }

        typeCompany(){
            cy.get(elSignupPage.inputCompany).type("Quality")   
        }
        
        typeAddress(){
            cy.get(elSignupPage.inputAddress).type("Rua dos sonhos")
        }

        typeAddress2(){
            cy.get(elSignupPage.inputAddress2).type("Rua dos pesadelos")    
        }

        typeState(){
            cy.get(elSignupPage.inputState).type("Minas Gerais")
        }

        typeCity(){
            cy.get(elSignupPage.inputCity).type("Belo Horizonte")
        }

        typeZipCode(){
            cy.get(elSignupPage.inputZipcode).type("000000-000")

        }
        typeMobileNumber(){
            cy.get(elSignupPage.inputMobileNumber).type("00000000000")

        }
}
    export default new SignupPage()


Feature: Login incorreto

    Scenario: Login 
        Given acessar Homepage
        When acessar página Login
        And  Digitar usuario e senha invalidos e clicar em Login
        Then mensagem de erro deve aparecer
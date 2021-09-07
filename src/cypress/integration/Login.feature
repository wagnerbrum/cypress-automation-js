Feature: Login site CWI

  Scenario: Visualizar opção de recuperar senha esquecida
    Given acesso ao site CWI
    When acesso a página de login
    Then devo visualisar o botão de recuperar senha esquecida

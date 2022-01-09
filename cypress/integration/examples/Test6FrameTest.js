/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />


import 'cypress-iframe'

describe('Frame test suite', () => {


    it('Demo to handling frame', () => {
        cy.visit((Cypress.env("url"))+"/AutomationPractice/")

        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*=mentorship]").eq(2).click()

        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)



    })

})

describe('My Third second suite', () => {
    it('Automation UI ', () => {
        cy.visit((Cypress.env("url"))+"/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])


        //static dropdown

        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic dropdown

        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            $e1.click()
        })

        cy.get('#autocomplete').should('have.value', 'India')

        //autocomplete
        cy.get('#autocomplete').should('have.value', 'India')
        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        //radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')

        //remove attribute on DOM
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.go('back')
    })
})
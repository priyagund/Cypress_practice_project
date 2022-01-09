describe('My forth test suite', () => {
    it('Automation UI ', () => {
        cy.visit((Cypress.env("url"))+"/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        })

        //window alert
    cy.on('window:alert',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })



    })

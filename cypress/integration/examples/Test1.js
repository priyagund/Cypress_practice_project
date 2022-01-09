describe('My First Test suite', () => {
    it('Select product and add to cart!', () => {
        cy.visit((Cypress.env("url"))+"/seleniumPractise/#/")
        //cy.get('.search-keyword').type('cucu')
        cy.get('.product:visible').should('have.length',30)

        //parent child chaining
        cy.get('.products').as('productLocataor')
        cy.get('@productLocataor').find('.product').should('have.length', 30)

        //cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()

        cy.get('@productLocataor').find('.product').each(($el, index, $list) => {

            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click()
            }
        })

        //assert test in cypress
        cy.get('.brand').should('have.text',"GREENKART")

        //print text in cypress

        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })


    })
})
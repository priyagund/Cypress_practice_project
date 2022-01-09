describe('My second second suite', () => {
    it('place oder for selcted product', () => {
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
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(2000)
        cy.contains('Place Order').click()



    })
})
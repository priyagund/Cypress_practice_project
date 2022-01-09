/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />


import 'cypress-iframe'

describe('Intercept Test', () => {


    it('My First Test', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept({
                method : 'GET',
                url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },

            {
                statusCode : 200,
                body : [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"    },
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "RSU",
                        "aisle": "2301"    }]

            }).as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals').should(({request,response})=>
        {
            cy.get('tr').should('have.length',response.body.length+1)

        })
        //cy.get('p').should('have.text','Sorry we have only one book available')




    })

})

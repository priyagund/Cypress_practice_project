/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import HomePage from '../../Pageobject/Homepage.js'
import ProductPage from "../../Pageobject/Productpage";
describe('Frame test suite', () => {

    beforeEach(function() {
        // runs once before all tests in the block
        cy.visit(Cypress.env("url")+"/angularpractice/")
        cy.fixture('example').then(function(data)
        {
            this.data=data

        })
    })

    it('Demo to handling frame', () => {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        //cy.log(JSON.stringify(this.data.name))
        homePage.getEditBox().type("priya")
        homePage.getGender().select("Female")
        homePage.getTwoWayDataBinding().should('have.value', "priya")
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()
        // this.data.productName.forEach(function (element) {
        //
        //     cy.selectProduct(element)
        // })
        cy.selectProduct("Blackberry")
        cy.selectProduct("Nokia Edge")
        productPage.checkOutButton().click()
        productPage.sumOfProduct()
        cy.contains("Checkout").click()
        cy.get('#country').type("India")
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.ng-untouched > .btn').click()
        //cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})

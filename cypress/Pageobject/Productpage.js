class ProductPage
{

    checkOutButton()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    sumOfProduct(){
        let sum=0
        cy.get('tr td:nth-child(4) strong').each(($e1,index,$length)=>{
            const actualText=$e1.text()
            let res= actualText.split(" ")
            res= res[1].trim()
            sum= Number(sum)+Number(res)
        }).then(function () {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element)
        {
            const amount=element.text()
            var res= amount.split(" ")
            var total= res[1].trim()
            expect(Number(total)).to.equal(sum)

        })
    }
}
export default ProductPage;

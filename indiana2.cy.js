describe('Покупка зоотоваров', function () {

    it('Напиши один длинный автотест для [HuntingPony]', function () {
           cy.visit('https://huntingpony.com/product/pony-avtokreslo-1');
           cy.get('.add-cart-counter__btn').click()
           cy.get('[data-add-cart-counter-plus=""]').click();
           cy.get('.header__cart > .icon > .header__control-bage').click();
           cy.get('.cart-controls > .button').click();
           cy.contains('Оформление заказа')
        })
})
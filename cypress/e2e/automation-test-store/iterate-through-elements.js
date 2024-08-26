/// <reference types="cypress" />

describe('Iterate throw elements', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    });

    it('Iterate over elements', () => {
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click();
        cy.get('.fixed > .prdocutname').each(($el, index, $list) => {
            cy.log($el.text())
        })
    });

    it.only('Add one product to basket', () => {
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click();
        cy.selectProduct('Seaweed Conditioner')
        // cy.get('.fixed > .prdocutname').each(($el, index, $list) => {
        //     if ($el.text().includes('Seaweed Conditioner')) {
        //         cy.wrap($el).click();
        //         cy.get('.productpagecart').click();
        //     }
        // })
    });

    it('Select all products in category', () => {
        cy.get('a[href*="product/category&path=43"]').contains('Skincare').click();
        cy.get('.prdocutname').each(($el, index, $list) => {
            cy.log($el.text());
        })
    });
})
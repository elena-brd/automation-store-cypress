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

    it('Add one product to basket', () => {
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click();
        cy.get('.fixed > .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Seaweed Conditioner')) {
                cy.wrap($el).click();
                cy.get('.productpagecart').click();
            }
        })
    });
})
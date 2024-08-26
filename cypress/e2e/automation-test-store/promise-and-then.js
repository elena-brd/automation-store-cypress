/// <reference types="cypress" />

describe('Then command', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    });

    it('Find the current product by header', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
            .then((headerText) => {
                cy.log('Selected the following item ' + headerText.text())
            })
    });
})
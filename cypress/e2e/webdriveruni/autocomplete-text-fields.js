/// <reference types="cypress" />

describe('Testing the autocomplete text field', () => {
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();
    })

    it('Choose an item and submit', () => {
        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            let productName = 'Almond';
            let products = $el.text();
            if (products === productName) {
                $el.trigger('click');
                cy.get('#submit-button').click();
                cy.url().should('include', productName)
            }

        })
    })
})
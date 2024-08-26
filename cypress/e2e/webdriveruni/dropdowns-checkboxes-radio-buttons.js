/// <reference types="cypress" />

describe('Testing Dropdown, Checkboxe(s) & Radio Button(s)', () => {
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
    });

    it('Check / uncheck the first option', () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check();
        cy.get('@option-1').should('be.checked');
        cy.get('@option-1').uncheck();
        cy.get('@option-1').should('not.be.checked');
    });

    it('Check every checkbox', () => {
        cy.get('[value="option-1"]').as('option-1');
        cy.get('@option-1').check();
        cy.get('@option-1').should('be.checked');
        cy.get('[value="option-2"]').as('option-2');
        cy.get('@option-2').check();
        cy.get('@option-2').should('be.checked');
        cy.get('[value="option-3"]').as('option-3');
        cy.get('@option-3').check();
        cy.get('@option-3').should('be.checked');
        cy.get('[value="option-4"]').as('option-4');
        cy.get('@option-4').check();
        cy.get('@option-4').should('be.checked');
    });

    it('Check the radio buttons', () => {
        cy.get('#radio-buttons').find('[value="green"]').as('green-button');
        cy.get('@green-button').check();
        cy.get('@green-button').should('be.checked');
    });

    it('Selected and disabled radio buttons', () => {
        cy.get('#radio-buttons-selected-disabled').find('[value="lettuce"]').as('button-1');
        cy.get('@button-1').should('not.be.checked');
        cy.get('#radio-buttons-selected-disabled').find('[value="cabbage"]').as('button-2');
        cy.get('@button-2').should('be.disabled');
        cy.get('#radio-buttons-selected-disabled').find('[value="pumpkin"]').as('button-3');
        cy.get('@button-3').should('be.checked');

        cy.get('#fruit-selects').select('Apple').contains('Apple')

    });

    it('Select the dropdown menus', () => {
        cy.get('#dropdowm-menu-1').select('SQL').contains('SQL');
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');
        cy.get('#dropdowm-menu-3').select('JavaScript').contains('JavaScript');
    })
})
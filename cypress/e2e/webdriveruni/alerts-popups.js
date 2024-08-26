/// <reference types="cypress" />

describe('Button Clicks page of the Webdriver Uni', () => {
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
    })

    it('Has only 1 buton to close the winfow alert', () => {
        cy.get('#button1').click();
        cy.on('window:alert', (str) => {
            expect(str).to.contain('I am an alert box!')
        })
    });

    it('Has 2 buttons to confirm and to cancel', () => {
        cy.get('#button4').click();
        cy.on('window:confirm', () => true)
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
})
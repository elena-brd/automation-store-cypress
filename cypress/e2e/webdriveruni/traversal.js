/// <reference types="cypress" />

describe('Traversal throw elements', () => {
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.get('#data-table').invoke('removeAttr', 'target').click();
    })

    it('children() get the children of the DOM elements', () => {
        cy.get('.thumbnail').children('.traversal-drinks-list').should('contain', 'Coffee')
    });

    it('eq() to retrieve a specific index element based on index', () => {
        cy.get('.traversal-food-list > *').eq(3).should('contain', 'Blackberries')
    });

    it('filter() get the DOM element matched by selector', () => {
        cy.get('.btn-group > *').filter('.active').should('contain', 'Button-1')
    });

    it('find() get a specific selector', () => {
        cy.get('.traversal-button-states > *').filter('.disabled').should('contain', 'Warning')
    });

    it('first() get the first element', () => {
        cy.get('.traversal-drinks-list > *').first().should('contain', 'Coffee')
    });

    it('last() get the last element', () => {
        cy.get('.traversal-drinks-list > *').last().should('contain', 'Sugar')
    });

    it('nextUntil() get the elements but not the selected element', () => {
        cy.get('#coffee').nextUntil('#milk')
    });


})
describe('Suíte para fazer checkboxes', () => {
    it('Deve marcaar os top 5 filmees da marvel', () => {
        cy.visit('/checkboxes')

        const movies = [
            'avengers',
            'cap2',
            'guardians',
            'blackpanther',
            'thor3'
        ]
        
        movies.forEach(function(m) {
            cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked')
        })
    });
});
describe('Timeout', () => {
    it('Deve respeitar o timeout', () => {
        cy.visit('/timeout')

        cy.contains('button', 'Habilita').click()

        // cy.wait(7000)


        cy.get('#firstname')
            .should('be.visible')
            .type('Andrey', {timeout: 7000})
    });
});
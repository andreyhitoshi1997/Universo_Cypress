describe('Select 2', () => {
    it('Deve selecionar multiplos selects', () => {
        cy.visit('/apps/select2/index.html')

        cy.get('.select2-selection--single').click()
        cy.contains('.select2-results__option', 'Cypress').click()
    });

    it('Deve fazer seleção multipla', () => {

        const frameworks = [
            'Cypress',
            'Robot Framework',
            'Protractor'
        ]
        
        frameworks.forEach((framework) => {
            cy.get('.select2-selection--multiple').click()
            cy.contains('.select2-results__option', framework).click()
        })
    });
});
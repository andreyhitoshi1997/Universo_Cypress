describe('Select ', () => {
    it('Deve selecionar corretamente', () => {
        cy.visit('/select')

        cy.get('#avengerList')
            .select('Bucky')
    });
});
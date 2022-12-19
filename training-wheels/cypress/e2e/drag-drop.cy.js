describe('Drag and Drop', () => {
    it('Deve realizar drag em drop para a caixinha do node', () => {
        cy.visit('/drag_and_drop')

        const dataTransfer = new DataTransfer();

        cy.get('img[alt=Cypress]').trigger('dragstart', {dataTransfer})

        cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})
    });

    it('Deve realizar drag em drop para a caixinha do python', () => {
        cy.visit('/drag_and_drop')

        const dataTransfer = new DataTransfer();

        cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})

        cy.get('.python figure[draggable=true]').trigger('drop', {dataTransfer})
    });
});
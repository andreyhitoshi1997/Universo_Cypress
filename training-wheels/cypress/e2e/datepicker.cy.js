describe('Datepicker', () => {
    it('Selecionar Data de nascimento', () => {
        cy.visit('/datepicker')

        const date = {
            month: 'Aug',
            year: '1997',
            day: 8
        }

        

        cy.get('.datetimepicker-dummy-input').click()

        cy.get('.datepicker-nav-month').click()
        cy.contains('.datepicker-month', date.month).click()

        cy.get('.datepicker-nav-year').click()
        cy.contains('.datepicker-year span', date.year).click()

        cy.contains('button[class="date-item"]' , new RegExp('^' + date.day + '$')).click()
    });
});
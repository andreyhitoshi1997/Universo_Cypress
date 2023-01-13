import dashPage from '../support/pages/dash';

import { customer, provider, appointment } from '../support/factories/dash';

describe('Dashboard', () =>  {
    context('Quando o cliente faz um agendamento no app mobile', () => {
        

        before(() =>  {
            cy.postUser(customer)
            cy.postUser(provider)

            cy.apiLogin(customer).then(function(){
                Cypress.env('apiToken')
            })

            cy.setProviderId(provider.email).then(function(){
                Cypress.env('providerId')
            })                       

            cy.createAppointment(appointment.hour)
        });
        

        it('Então deve ser exibido no Dashboard', () =>  {
            const day = Cypress.env('appointmentDay')

            cy.uiLogin(provider)

            dashPage.calendarShouldBeVisible()
            dashPage.selectDay(day)
            dashPage.appointmentShouldBe(customer, appointment.hour)
        });
    });
});
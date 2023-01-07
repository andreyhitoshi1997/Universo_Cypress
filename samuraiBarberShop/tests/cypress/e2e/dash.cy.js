import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash';

describe('Dashboard', () =>  {
    context('Quando o cliente faz um agendamento no app mobile', () => {
        const data = {
            customer: {
                name: "Nikki Sixx",
                email: "sixx@motleycrue.com",
                password: "pwd123",
                is_provider: false
            },
            provider: {
                name: "Ramon Valdez",
                email: "ramon@televisa.com",
                password: "pwd123",
                is_provider: true
            },
            appointmentHour: '14:00'
        }

        before(() =>  {
            cy.postUser(data.customer)
            cy.postUser(data.provider)

            cy.apiLogin(data.customer).then(function(){
                Cypress.env('apiToken')
            })

            cy.setProviderId(data.provider.email).then(function(){
                Cypress.env('providerId')
            })           

            cy.createAppointment(data.appointmentHour)
        });
        

        it('Então deve ser exibido no Dashboard', () =>  {
            loginPage.go()
            loginPage.form(data.provider)
            loginPage.submit()


            dashPage.calendarShouldBeVisible()

            const day = Cypress.env('appointmentDay')
            dashPage.selectDay(day)
            dashPage.appointmentShouldBe(data.customer, data.appointmentHour)
        });
    });
});
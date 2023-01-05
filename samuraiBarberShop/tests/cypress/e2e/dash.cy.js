describe('Dashbord', () => {
    context('Quando o cliente faz um agendamento no app mobile', () => {

        let token;

        const data = {
            customer: {
                name: "Nikki Sixx",
                email: "sixx@motleycrue.com",
                password: "pwd123",
                is_provider: false
            },
            samurai: {
                name: "Ramon Valdez",
                email: "ramon@televisa.com",
                password: "pwd123",
                is_provider: true
            }
        }

        before(() => {
            cy.postUser(data.customer)
            cy.postUser(data.samurai)

            token = cy.apiLogin(data.customer).then(function(){
                cy.log('Conseguimos o token: ' + Cypress.env('apiToken'))
            })
            
        });
        

        it('Então deve ser exibido no Dashboard', () => {
            cy.log(Cypress.env('apiToken'))
        });
    });
});
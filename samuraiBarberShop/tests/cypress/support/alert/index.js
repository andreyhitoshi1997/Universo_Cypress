import { el } from "./element"

class Alert{
    haveText(expectText){
        cy.contains(el.alertError, expectText)
            .should('be.visible')
    }
}

export default new Alert()
import header from "../../component/header"
import { el } from "./elements"

class DashPage{
    constructor(){
        this.header = header
    }

    calendarShouldBeVisible(){
        cy.get(el.dayPicker, {timeout: 7000})
            .should('be.visible')
    }

    selectDay(day){
        const target = new RegExp('^' + day + '$', 'g')
        cy.contains(el.dayPickerAvailable, target)
            .click({force:true})
    }

    appointmentShouldBe(customer, hour){
        cy.contains('div', customer.name)
            .should('be.visible')
            .parent()
            .contains('span[class=appointment]', hour)
            .should('be.visible')
    }
}

export default new DashPage()
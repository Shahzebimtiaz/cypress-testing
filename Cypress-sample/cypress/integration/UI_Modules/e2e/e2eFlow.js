const commonFunctions = require("../commonFuntions/commonFunctions.js");
const elements = require("../../../fixtures/elements.json");
const testdata = require("../../../fixtures/testdata.json");

context('Actions', () => {
    beforeEach(() => {
        commonFunctions.LoadingHomepage();
    })
    it("Signing-up with new user", () => {
        cy.get(elements.signMenu).click();
        cy.get(elements.inputUsername).type(testdata.username);
        cy.get(elements.inputPassword).type(testdata.password);
        cy.get(elements.signButton).click();
    })
    it("Logging into application with registered user and verifying it", () => {
        cy.get(elements.loginMenu).click();
        cy.get(elements.loginUsername).type(testdata.username);
        cy.get(elements.loginPassword).type(testdata.password);
        cy.get(elements.loginButton).click();
        cy.get(elements.loggedUser).should("have.text", elements.text);
    })
    it("Placing an order", () =>{
        cy.get(elements.bodyHeader).click();
        cy.get(elements.addCart).click();
        cy.get(elements.cartMenu).click();
        cy.get(elements.placeOrder).click();
        cy.get(elements.nameInput).type(testdata.username);
        cy.get(elements.country).type(testdata.country);
        cy.get(elements.city).type(testdata.city);
        cy.get(elements.creditCard).type(testdata.creditCard);
        cy.get(elements.month).type(testdata.month);
        cy.get(elements.year).type(testdata.year);
        cy.get(elements.purchaseButton).click();
        cy.get(elements.confirmButton).click();
    })
})
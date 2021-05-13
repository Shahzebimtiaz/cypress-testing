import { equal } from "assert";

const commonFunctions = require("../commonFuntions/commonFunctions.js");
const elements = require("../../../fixtures/elements.json");
const hrefValues = require("../../../fixtures/href.json");

context('Actions', () => {
    beforeEach(() => {
        commonFunctions.LoadingHomepage();
    })
    it("Verifying Logo in Header", () => {
        cy.get(elements.headerLogo).find("img").should('be.visible');
    })
    it("Verifying Header bar/Menu", () => {
        cy.get(elements.homeMenu).should('have.attr','href').and('equal', hrefValues.homeHref);
        cy.get(elements.contactMenu).should('have.attr','href').and('equal', hrefValues.dialogHref);
        cy.get(elements.aboutMenu).should('have.attr','href').and('equal', hrefValues.dialogHref);
        cy.get(elements.cartMenu).should('have.attr','href').and('equal', hrefValues.cartHref);
        cy.get(elements.loginMenu).should('have.attr','href').and('equal', hrefValues.dialogHref);
        cy.get(elements.signMenu).should('have.attr','href').and('equal', hrefValues.dialogHref);
    })
    it("Verifying slider is visible or not", () => {
        cy.get(elements.slider).should('be.visible');
    })
    it("Verifying Side Sub Menu", () => {
        cy.get(elements.sideMenu).should('be.visible');
        cy.get(elements.categoriesMenu).contains(elements.categories);
    })
    it("Verifying the first post from the body", ()=>{
        cy.get(elements.bodyHeader).should('have.attr', 'href').and('equal',hrefValues.postHref);
        cy.get(elements.price).should("have.text", '$360'); //in this case value is static you can also veirfy dynamic values
    })
    it("Veirfying the footer and copyright of the landing page", () => {
        cy.get(elements.footer).should('be.visible');
        cy.get(elements.copyright).should("have.text", elements.copyrightText);
    })
})
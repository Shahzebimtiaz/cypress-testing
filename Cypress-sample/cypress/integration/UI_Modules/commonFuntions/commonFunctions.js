const constants = require("../../lib/constants.js");

exports.LoadingHomepage = function(){
    cy.visit(constants.appUrl);
}

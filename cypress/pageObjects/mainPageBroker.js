class BrokersMainPage {

    visit() {
      cy.visit('https://www.yavlena.com/broker');
    }
  
    clickLoadMoreBrokers() {
        cy.get('.load-more-brokers').click();
    }

    menuButton() {
      return cy.get('.c-hamburger.c-hamburger--rot.toggle-filter');
    }

    getBrokers() {
      return cy.get('h3').get('.name');
    }

    clearButton() {
      return cy.get('.clear-all-dropdowns.clear-btn');
    }
      
    searchBox() {
      return cy.get('.input-search');
    }

  }
  export default BrokersMainPage;
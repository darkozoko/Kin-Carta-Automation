class SearchResultPage {

    getName() {
      return cy.get('h3').get('.name');
    }
  
    getAddress() {
      return cy.get('h3').get('.name').get('.office');
    }
  
    getLandlineElement() {
      return cy.get('.landline-phone'); 
    }
  
    getPhones() {
      return cy.get('.tel');
    }
  
    getPropertiesAssigned() {
      return cy.get('.position >a');
    }
  }
  export default SearchResultPage;
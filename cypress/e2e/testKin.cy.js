import mainPageBroker from '../pageObjects/mainPageBroker.js';
import SearchResultPage from '../pageObjects/searchResultPage.js';

describe('Broker Test', () => {
  const mainPage = new mainPageBroker();
  const searchResultPage = new SearchResultPage();

  it('search brokers and verify details', () => {
    mainPage.visit();              // navigate to url
    mainPage.clickLoadMoreBrokers();    // load more brokers
    
    mainPage.menuButton().then($button => {             //get all brokers names
        if ($button.is(':visible')){
            cy.get('.c-hamburger.c-hamburger--rot.toggle-filter').click();
        }
      })            // for small screen runner, check if visible then click it(in order to see search box)
    
    mainPage.getBrokers().each(($broker) => {           
        
    const brokerName = $broker.text().trim()
    cy.log(brokerName)
    cy.wait(2000)                           //for beter visibility when run on browser
    mainPage.searchBox().type(brokerName)
    cy.wait(2000)                           //for beter visibility when run on browser
    mainPage.clearButton().click()
    searchResultPage.getName().should('have.length', 1);           // check that there is one broker olny
    searchResultPage.getAddress().should('be.visible');            // check that broker has adress 
    searchResultPage.getPropertiesAssigned().should('be.visible'); // check that broker have prperties assigned 
    searchResultPage.getPhones().should('be.visible').should('have.length', 2); // check that there are two phones
       
     
    });
  });
});
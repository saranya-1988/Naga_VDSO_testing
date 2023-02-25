
describe('template spec', () => {
  it('Login_Test', () => {
    cy.visit('https://vdso-staging.prodapt.io/login')
    cy.title().should('eq', 'VDSO');
    cy.wait(4000);
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[1]/input').type('odan');
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[2]/input').type('admin@123');
    cy.get('[class="rounded-0 btn btn-danger btn-lg"]').click();
    cy.url().should('include', '/dashboard'); 
    cy.wait(3000);
               
  })
  it('Firewall_Request', () => {
    cy.visit('https://vdso-staging.prodapt.io/login')
    cy.title().should('eq', 'VDSO');
    cy.wait(4000);
     cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[1]/input').type('odan');
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[2]/input').type('admin@123');
    cy.get('[class="rounded-0 btn btn-danger btn-lg"]').click();
    cy.url().should('include', '/dashboard'); 
    cy.wait(3000);
    cy.get('[class="dropdown-toggle sub-nav nav-link"]').first().click();
    cy.wait(3000);
    cy.get('[class="sub-nav-item nav-link"]').first().click();
    cy.url().should('include', '/firewall-requests');
    cy.get('[class="btn btn-outline-primary"]').first().click();
    cy.wait(3000);
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/div/div/div/div/div[2]/fieldset/div/form/div[2]/button[2]').click(); 
  })
  after(() => {
    // Close the browser window
    cy.window().then((win) => win.close())
  })
})


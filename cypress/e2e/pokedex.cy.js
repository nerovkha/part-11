describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('/')
    cy.title().should('include', 'Pokemon')
  })

  it('lists pokemon from the api', () => {
    cy.visit('/')
    cy.get('.list-item', { timeout: 15000 }).should('have.length.at.least', 50)
    cy.get('.list-item-name').first().should('have.text', 'bulbasaur')
  })
})

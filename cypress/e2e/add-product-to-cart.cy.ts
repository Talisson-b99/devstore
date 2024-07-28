describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('Should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('Should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('camiseta')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })
})

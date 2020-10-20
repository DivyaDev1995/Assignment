describe(' User Login', () => 
{
    it('Login Page', () => 
    {
      cy.visit('https://demo.nopcommerce.com/login?returnurl=%2F')
    })

    it('Enter Email and Password', () => 
    {
        cy.get('[name=Email').should('be.visible').should('be.enabled').type("test@gmail.com")
        cy.get('[name=Password]').should('be.visible').should('be.enabled').type("123456")
    })


    it('Click Login Button', () => 
    {   
        cy.get('form > .buttons > .button-1').click() 
    })
  })

describe('Register User', () => {

  before(() => {
      cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F')
  })
    it ('User Register Details', () => {
      const user = {
        Gender:'M',
        FirstName: 'Dev',
        LastName: 'Bhattarai',
        Email: 'test1@gmail.com',
        Company: 'Seva Development',
        Password: '123456',
        ConfirmPassword:'123456'
      }
      cy.get('[id=gender-male]').type(user.Gender)
      cy.get('[name=FirstName]').type(user.FirstName)
      cy.get('[name=LastName]').type(user.LastName)
      cy.get('[name=Email]').type(user.Email)
      cy.get('[name=Company]').type(user.Company)
      cy.get('[name=Password]').type(user.Password)
      cy.get('[name=ConfirmPassword]').type(user.ConfirmPassword)
      cy.get('#register-button').click() 
    })
  }) 
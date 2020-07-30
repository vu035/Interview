/// <reference types="Cypress" />
import HerokuLoginPageCommonSteps from '../Common Steps/HerokuLoginPageCommonSteps'
import SecureAreaPageCommonSteps from '../Common Steps/SecureAreaPageCommonSteps'

describe('Heroku App Login Smoke Tests', function()
{  
    beforeEach(function()
    {
        this.herokuLoginPageCommonSteps = new HerokuLoginPageCommonSteps()
        this.secureAreaPageCommonSteps = new SecureAreaPageCommonSteps()

        cy.fixture('TomSmithLoginInfo').then(function(tomSmithData)
        {
            this.data = tomSmithData
        })
        
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('User with valid username and incorrect password cannot log in', function()
    {   
        var validUsername = this.data.username
        var incorrectPassword = this.data.password + '56245209345'

        this.herokuLoginPageCommonSteps.LoginToHeroku(validUsername, incorrectPassword)
        this.herokuLoginPageCommonSteps.VerifyIsOnLoginPage()
    })

    it('User  with invalid username and correct password cannot log in', function()
    {
        var invalidUsername = this.data.username + 'asedfawef'
        var correctPassword = this.data.password

        this.herokuLoginPageCommonSteps.LoginToHeroku(invalidUsername, correctPassword)
        this.herokuLoginPageCommonSteps.VerifyIsOnLoginPage()
    })

    it('User with valid username and password is able to log in', function()
    {
        var validUsername = this.data.username
        var validPassword = this.data.password

        this.herokuLoginPageCommonSteps.LoginToHeroku(validUsername, validPassword)
        this.secureAreaPageCommonSteps.VerifyIsOnSecureAreaPage()
        this.secureAreaPageCommonSteps.Logout()
        this.herokuLoginPageCommonSteps.VerifyIsOnLoginPage()
    })
})
/*
    Description: A class for the  common set(s) of actions that would occur for the login page
*/

import HerokuLoginPage from '../Page Objects/HerokuLoginPage'

class HerokuLoginPageCommonSteps 
{
    constructor() 
    {
        this.herokuLoginPage = new HerokuLoginPage()
    }

    LoginToHeroku(username, password)
    {
        this.herokuLoginPage.GetUsernameTextBox().type(username)
        this.herokuLoginPage.GetPasswordTextBox().type(password)
        this.herokuLoginPage.GetLoginButton().click()
    }

    VerifyIsOnLoginPage()
    {
        this.herokuLoginPage.VerifyIsOnLoginPage()
    }
}

export default HerokuLoginPageCommonSteps
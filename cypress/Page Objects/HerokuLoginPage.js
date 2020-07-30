/*
    Description: Page object for the Login Page
*/

class HerokuLoginPage 
{
    GetUsernameTextBox() 
    {
        return cy.get('input[id=username]')
    }

    GetPasswordTextBox() 
    {
        return cy.get('input[id=password]')
    }

    GetLoginButton() 
    {
        return cy.get('button[type=submit]')
    }

    VerifyIsOnLoginPage()
    {
        //There is probably a better way to write this selector but I couldnt figure it out in a timely manner but in
        //A workplace scenario I probably would have quickly consulted with my peers or asked a DEV for a better 
        //selector than the one I had actually used here, this comment would also not exist in something I would check in
        cy.get('h2').should('have.text', 'Login Page')
    }
}
export default HerokuLoginPage
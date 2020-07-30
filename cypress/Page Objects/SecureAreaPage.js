class SecureAreaPage
{
    GetLogoutButton()
    {
        return cy.get('a[class="button secondary radius"]')
    }

    VerifyIsOnSecureAreaPage()
    {
        cy.get('h2').should('have', 'Secure Area')
    }
}
export default SecureAreaPage
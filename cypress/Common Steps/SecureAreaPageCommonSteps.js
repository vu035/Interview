import SecureAreaPage from '../Page Objects/SecureAreaPage'

class SecureAreaPageCommonSteps
{
    constructor()
    {
        this.secureAreaPage = new SecureAreaPage()
    }

    LogOut()
    {
        this.secureAreaPage.GetLogoutButton().click()
    }

    VerifyIsOnSecureAreaPage()
    {
        this.secureAreaPage.VerifyIsOnSecureAreaPage()
    }
}
export default SecureAreaPageCommonSteps
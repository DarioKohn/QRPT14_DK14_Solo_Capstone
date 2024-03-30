import { theCriterionChannel } from "../objects/theCriterionChannelObjects";
import { until } from "selenium-webdriver";
const page = new theCriterionChannel();
const fs = require("fs");

describe("Testing main features of The Criterion Channel website", () => {

    beforeEach(async () => {
        await page.navigate();
        await page.driver.manage().window().maximize()
    });

    afterAll(async () => {
        await page.driver.quit();
    });

    test("Testing sign in with valid email and password,validation of login, log out", async () => {
        await page.driver.findElement(page.theWholeHomePage).isDisplayed();
        await page.driver.sleep(300);
        await page.click(page.signInLnk);
        await page.driver.sleep(300);
        await page.driver.findElement(page.signInEmailWholePage).isDisplayed();
        await page.click(page.signInEmailInput);
        await page.setInput(page.signInEmailInput, "augusmarcel@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.signInEmailSubmitBtn);
        await page.driver.sleep(300);
        await page.click(page.signInPasswordInput);
        await page.setInput(page.signInPasswordInput, "Testqrpt14");
        await page.driver.sleep(300);
        await page.click(page.signInPasswordSubmitBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.accountDropMenuLnk).isDisplayed();
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll1();
        await page.driver.sleep(3000);
        await page.scroll2();
        await page.driver.sleep(2000);
        await page.click(page.accountDropMenuLnk);
        await page.click(page.logOutLnk);
        await page.driver.sleep(300);
    });

    test("Testing sign in with invalid email, blank email, blank password, short password, validation", async () => {
        await page.click(page.signInLnk);
        await page.click(page.signInEmailInput);
        await page.setInput(page.signInEmailInput, "");
        await page.driver.sleep(300);
        await page.click(page.signInEmailSubmitBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.errorEnterValidEmailMsg).isDisplayed();
        await fs.writeFile(`${__dirname}/enter_valid_email_msg.png`,
            await page.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log('Save Succesful')
            });
        await page.click(page.signInEmailInput);
        await page.setInput(page.signInEmailInput, "qrpt14InvalidEmail@testInvalidAddress.c");
        await page.driver.sleep(300);
        await page.click(page.signInEmailSubmitBtn);
        await fs.writeFile(`${__dirname}/invalid_email_passed_through.png`,
            await page.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log('Save Succesful')
            });
        await page.driver.sleep(300);
        await page.driver.findElement(page.errorEnterValidEmailMsg).isDisplayed();
        await page.click(page.signInEmailInput);
        await page.setInput(page.signInEmailInput, "qrpt14InvalidEmail@testInvalidAddress.com");
        await page.driver.sleep(300);
        await page.click(page.signInEmailSubmitBtn);
        await page.driver.sleep(300);
        await page.click(page.signInPasswordInput);
        await page.setInput(page.signInPasswordInput, "");
        await page.driver.sleep(300);
        await page.click(page.signInPasswordSubmitBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.errorPleaseEnterPasswordMsg).isDisplayed();
        await page.click(page.signInPasswordInput);
        await page.setInput(page.signInPasswordInput, "~1234");
        await page.driver.sleep(300);
        await page.click(page.signInPasswordSubmitBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.errorEnterPasswordLongerThan5Msg).isDisplayed();
        await page.click(page.signInPasswordInput);
        await page.setInput(page.signInPasswordInput, "~12345");
        await page.driver.sleep(300);
        await page.click(page.signInPasswordSubmitBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.errorWrongEmailOrPasswordResetMsg).isDisplayed();
    });

    test("Testing reset password feature after entered invalid email and password, navigate to Help Page", async () => {
        await page.click(page.signInLnk);
        await page.click(page.signInEmailInput);
        await page.setInput(page.signInEmailInput, "qrpt14InvalidEmail@testInvalidAddress.com");
        await page.driver.sleep(300);
        await page.click(page.signInEmailSubmitBtn);
        await page.driver.sleep(300);
        await page.click(page.signInPasswordInput);
        await page.setInput(page.signInPasswordInput, "~12345");
        await page.driver.sleep(300);
        await page.click(page.signInPasswordSubmitBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.errorWrongEmailOrPasswordResetMsg).isDisplayed();
        await page.click(page.resetYourPasswordLnk);
        await page.driver.sleep(300);
        await page.driver.findElement(page.resetPasswordWholePage).isDisplayed();
        await page.click(page.resetPasswordEmailInput);
        await page.setInput(page.resetPasswordEmailInput, "");
        await page.driver.sleep(600);
        await page.click(page.resetPasswordBtn);
        await page.driver.sleep(600);
        await page.click(page.resetPasswordEmailInput);
        await page.setInput(page.resetPasswordEmailInput, "qrpt14InvalidEmail@");
        await page.driver.sleep(600);
        await page.click(page.resetPasswordBtn);
        await page.driver.sleep(600);
        await page.click(page.resetPasswordEmailInput);
        await page.setInput(page.resetPasswordEmailInput, "qrpt14InvalidEmail@testInvalidAddress.com");
        await page.driver.sleep(300);
        await page.click(page.resetPasswordBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.checkYourEmailConfirmationPage).isDisplayed();
        await fs.writeFile(`${__dirname}/sent_reset_link_to_invalid_email.png`,
            await page.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log('Save Succesful')
            });
        await page.click(page.needHelpLnk);
        await page.navigate("https://www.criterionchannel.com/help/articles/trouble-logging-in-computer");
        await page.driver.findElement(page.needSignInHelpWholePage).isDisplayed();
        await page.driver.sleep(6000);
        await fs.writeFile(`${__dirname}/help_sign_in_page.png`,
            await page.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log('Save Succesful')
            });
        await page.navigate("https://www.criterionchannel.com");
    });

    test("Testing account drop down menu, account settings => name, email, password", async () => {
        await page.click(page.signInLnk);
        await page.click(page.signInEmailInput);
        await page.setInput(page.signInEmailInput, "augusmarcel@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.signInEmailSubmitBtn);
        await page.driver.sleep(300);
        await page.click(page.signInPasswordInput);
        await page.setInput(page.signInPasswordInput, "Testqrpt14");
        await page.driver.sleep(300);
        await page.click(page.signInPasswordSubmitBtn);
        await page.click(page.accountDropMenuLnk);
        await page.driver.sleep(300);
        await page.click(page.accountSettingsLnk);
        await page.driver.sleep(600);
        await page.driver.findElement(page.accountSettingsWholePage).isDisplayed();
        await page.click(page.accountBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.accountSettingsFormWhole).isDisplayed();
        await page.click(page.nameBtn);
        await page.click(page.editNameBarInput);
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.setInput(page.editNameBarInput, "\ue003");
        await page.driver.findElement(page.errorNameMsg).isDisplayed();
        await page.driver.sleep(600);
        await page.click(page.backToAccountBtn);
        await page.driver.sleep(600);
        await page.click(page.nameBtn);
        await page.driver.sleep(300);
        await page.click(page.editNameBarInput);
        await page.setInput(page.editNameBarInput, "~@#$*&^() 23456");
        await page.driver.sleep(600);
        await page.click(page.editSaveBtn);
        await page.driver.sleep(600);
        await page.click(page.emailBtn);
        await page.driver.sleep(600);
        await page.click(page.emailBarInput);
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.setInput(page.emailBarInput, "\ue003");
        await page.driver.findElement(page.errorEmailMsg).isDisplayed();
        await page.driver.sleep(300);
        await page.click(page.backToAccountBtn);
        await page.driver.sleep(600);
        await page.click(page.emailBtn);
        await page.driver.sleep(300);
        await page.click(page.emailBarInput);
        await page.setInput(page.emailBarInput, "1234567fgQefgh");
        await page.driver.sleep(600);
        await page.click(page.editSaveBtn);
        await page.driver.sleep(2000);
        await fs.writeFile(`${__dirname}/error_cannot_save_email.png`,
            await page.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log('Save Succesful')
            });
        await page.click(page.passwordBtn);
        await page.driver.sleep(300);
        await page.click(page.passwordBarInput);
        await page.setInput(page.passwordBarInput, "@");
        await page.driver.sleep(300);
        await page.driver.findElement(page.errorPasswordMsg1).isDisplayed();
        await page.click(page.passwordConfirmBarInput);
        await page.setInput(page.passwordConfirmBarInput, "~");
        await page.driver.sleep(300);
        await page.driver.findElement(page.errorPasswordMsg2).isDisplayed();
        await page.click(page.passwordBarInput);
        await page.setInput(page.passwordBarInput, "\ue003");
        await page.driver.sleep(300);
        await page.click(page.passwordConfirmBarInput);
        await page.setInput(page.passwordConfirmBarInput, "\ue003");
        await page.click(page.passwordBarInput);
        await page.setInput(page.passwordBarInput, "Testqrpt14");
        await page.driver.sleep(300);
        await page.click(page.passwordConfirmBarInput);
        await page.setInput(page.passwordConfirmBarInput, "Testqrpt14");
        await page.driver.sleep(300);
        await page.click(page.editSaveBtn)
        await page.driver.sleep(2000);
        await fs.writeFile(`${__dirname}/confirm_save_password.png`,
            await page.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log('Save Succesful')
            });
        await page.click(page.manageDevicesBtn);
        await page.driver.sleep(900);
        await page.click(page.logOutOtherDevicesCancelBtn)
        await page.driver.sleep(300);
        await page.click(page.manageDevicesBtn)
        await page.driver.sleep(900);
        await page.click(page.logOutOtherDevicesConfirmBtn)
        await page.driver.sleep(2000);
        await fs.writeFile(`${__dirname}/logout_from_all_other_devices.png`,
            await page.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log('Save Succesful')
            });
        await page.click(page.backToHomePageBtn)
        await page.driver.sleep(300);
    });

    test("Testing account drop down menu, manage subscription => billing & subscription => payment, promotion, subscription", async () => {
        await page.click(page.accountDropMenuLnk);
        await page.driver.sleep(300);
        await page.click(page.manageSubscriptionLnk);
        await page.driver.sleep(600);
        await page.click(page.paymentMethodBtn);
        await page.driver.sleep(4000);
        await page.driver.findElement(page.paymentMethodWholeForm).isDisplayed();
        await page.click(page.backToAccountBtn);
        await page.driver.sleep(300);
        await page.click(page.promotionOrGiftBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.promotionOrGiftWholeForm).isDisplayed();
        await page.click(page.promotionCodeInput);
        await page.setInput(page.promotionCodeInput, "~!@#$%^&*()_+");
        await page.driver.sleep(300);
        await page.click(page.applyBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.errorPromotionNotFoundMsg).isDisplayed();
        await page.click(page.backToAccountBtn);
        await page.driver.sleep(300);
        await page.click(page.manageSubscriptionBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.manageSubscriptionWholeForm).isDisplayed();
        await page.click(page.manageAvailablePlansBtn);
        await page.driver.sleep(900);
        await page.click(page.manageAvailablePlanCancelBtn);
        await page.driver.sleep(300);
        await page.click(page.cancelSubscriptionBtn);
        await page.driver.sleep(900);
        await page.click(page.cancelSubscriptionBackBtn);
        await page.driver.sleep(900);
        await page.click(page.cancelSubscriptionCancelBtn);
        await page.driver.sleep(300);
        await page.click(page.backToAccountBtn);
        await page.driver.sleep(300);
        await page.click(page.notificationsBtn);
        await page.driver.sleep(300);
        await page.driver.findElement(page.notificationWholeForm).isDisplayed();
        await page.click(page.notificationNewVideoCheckBox);
        await page.driver.sleep(300);
        await page.click(page.notificationNewsletterCheckBox);
        await page.driver.sleep(300);
        await page.click(page.notificationsSaveBtn);
        await page.driver.sleep(300);
        await page.click(page.notificationUnsubscribeCheckBox);
        await page.driver.sleep(300);
        await page.click(page.notificationsSaveBtn);
        await page.driver.sleep(300);
        await page.click(page.notificationNewVideoCheckBox);
        await page.driver.sleep(300);
        await page.click(page.notificationsCancelBtn);
        await page.driver.sleep(300);
        await page.click(page.backToHomePageBtn);
    });

    test("Testing search feature with results and video start playing", async () => {
        await page.click(page.mainSearchLnk);
        await page.driver.sleep(900);
        await page.click(page.mainSearchBarInput);
        await page.setInput(page.mainSearchBarInput, "Tarkovsky");
        await page.driver.sleep(2000);
        await page.driver.findElement(page.resultsCards).isDisplayed();
        await page.click(page.collectionsResultsTab);
        await page.driver.sleep(2000);
        await page.click(page.videoResultsTab);
        await page.driver.sleep(2000);
        await page.click(page.allResultsTab);
        await page.driver.sleep(2000);
        await page.scroll3();
        await page.click(page.loadMoreResults);
        await page.driver.sleep(1000);
        await page.canHover();
        await page.driver.findElement(page.hoverPopUpValidation).isDisplayed();
        await page.click(page.cardContainerSolaris);
        await page.driver.sleep(1000);
        await page.driver.findElement(page.cardPlayWindowWholePage).isDisplayed();
        await page.canHover2();
        await page.click(page.cardPlayFilm);
        await page.driver.sleep(20000);
        await page.driver.close();
    });
});
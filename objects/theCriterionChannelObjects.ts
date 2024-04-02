import { By, } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class theCriterionChannel extends BasePage {

    //home page:
    theWholeHomePage: By = By.css('[class="no-js is-loaded"]');
    headerOfPage: By = By.css('[class="nav-background-color border-bottom site-border-color site-header has-logo "]');
    accountLoggedInDisplay: By = By.css('[class="user-actions has-image padding-right-medium flex-container"]');
    homePageLnk: By = By.css('.logo');
    nowPlayingLnk: By = By.css('[class="browse-link site-font-primary-family head site-link-header-color"]');
    allFilmsLnk: By = By.css('[class="custom-nav-all-films site-font-primary-family head site-link-header-color"]');
    criterionComLnk: By = By.css('[class="custom-nav-criterion-com site-font-primary-family head site-link-header-color"]');
    signUpLnk: By = By.css('[class = "flex-item site-link-header-color site-font-primary-family head subscribe-link user-action-link"]');
    signInLnk: By = By.css('[class="flex-item user-action-link head site-link-header-color  site-font-primary-family"]');
    curatedCollectionsLnk: By = By.xpath('(//div[@class="icon--container margin-bottom-medium flex--container"])[1]');
    exclusivePremieresLnk: By = By.xpath('(//div[@class="icon--container margin-bottom-medium flex--container"])[2]');
    criterionExtrasLnk: By = By.xpath('(//div[@class="icon--container margin-bottom-medium flex--container"])[3]');
    mainSearchLnk: By = By.id('search-nav-toggle');
    //main search bar window:
    mainSearchBarInput: By = By.css('[class="SearchForm-module__search-input custom-css-search-input site-font-secondary-color"]');

    //bottom of the home page:
    bottomPageLogOutLnk: By = By.css('[class="site-font-secondary-color btn-logout"]');
    bottomPageSignInLnk: By = By.css('[class="site-font-secondary-color signin-link"]');
    footerOfTheHomePage: By = By.css('[class="small-16 medium-6 large-10 columns helper-links small-only-text-center"]');

    //logged in account drop down menu:
    accountDropMenuLnk: By = By.css('[class="right margin-left-medium avatar-container"]');
    accountSettingsLnk: By = By.xpath('(//a[@class="is-block text dark block padding-medium"])[1]');
    purchaseGiftLnk: By = By.xpath('(//a[@class="is-block text dark block padding-medium"])[3]');
    manageSubscriptionLnk: By = By.xpath('(//a[@class="is-block text dark block padding-medium"])[2]')
    logOutLnk: By = By.css('[class="is-block text dark block padding-medium text-left border-none border-radius-0 fill-width cursor-pointer-important"]');
    helpLnk: By = By.css('[class="flex-item user-action-link head site-link-header-color  site-font-primary-family"]');
    //account settings: Account| Billing & subscription | Notification | Manage devices
    accountSettingsWholePage: By = By.css('.Layout-module__main-content-wrapper');
    settingsFormWHole: By = By.css('.SettingsNav-module__nav-list');
    accountBtn: By = By.css('[class="SettingsNav-module__nav-link SettingsNav-module__nav-link-active"]');
    accountSettingsFormWhole: By = By.css('.SettingsNav-module__main-content');
    nameBtn: By = By.xpath('(//button[@class="SettingsListItem-module__item-button"])[1]');
    editNameBarInput: By = By.css('[class="sc-ikkxIA jGbCSI"]');
    editSaveBtn: By = By.css('[class="sc-fPXMVe dgCnYr AccountSettingsForm-module__save-button"]');
    errorNameMsg: By = By.css('[class="sc-aXZVg kVwa-Df sc-imWYAI eCJvYA"]');
    backToAccountBtn: By = By.css('[class="sc-fPXMVe kPRTFM SettingsFormHeader-module__back-button"]');
    emailBtn: By = By.xpath('(//button[@class="SettingsListItem-module__item-button"])[2]');
    emailBarInput: By = By.xpath('//input[@name="email"]');
    passwordBtn: By = By.xpath('(//button[@class="SettingsListItem-module__item-button"])[3]');
    errorEmailMsg: By = By.xpath('//span[text()="Valid email is required"]');
    passwordBarInput: By = By.xpath('//input[@name="password"]');
    passwordConfirmBarInput: By = By.xpath('//input[@name="confirmPassword"]');
    errorPasswordMsg1: By = By.xpath('//span[text()="Password of at least 8 characters is required"]');
    errorPasswordMsg2: By = By.xpath('//span[text()="Passwords must match"]');
    backToHomePageBtn: By = By.css('.Header-module__arrow-left-icon');

    billingSubscriptionBtn: By = By.xpath('(//a[@class="SettingsNav-module__nav-link"])[2]');
    paymentMethodBtn: By = By.xpath('(//button[@class="SettingsListItem-module__item-button"])[1]');
    paymentMethodWholeForm: By = By.css('[class="PaymentMethodForm-module__payment-method-form"]');
    promotionOrGiftBtn: By = By.xpath('(//button[@class="SettingsListItem-module__item-button"])[2]');
    promotionOrGiftWholeForm: By = By.css('[class="PromotionsOrGiftForm-module__promo-code-container"]');
    promotionCodeInput: By = By.css('[class="sc-ikkxIA dpYwoZ"]');
    applyBtn: By = By.css('[class="sc-fPXMVe jThJav PromoCodeInput-module__apply-button"]');
    errorPromotionNotFoundMsg: By = By.css('[class="sc-aXZVg kVwa-Df sc-imWYAI eCJvYA"]');
    buyAGiftBtn: By = By.css('[class="sc-fPXMVe gSKHKp PromotionsOrGiftForm-module__gift-button"]');
    buyAGiftWholePage: By = By.css('[class="sc-gfoqjT jXjjyI custom-css-checkout-right-panel-container"]');
    giftYourEmailInput: By = By.css('[id="Your email"]');
    giftRecipientEmailInput: By = By.xpath('(//input[@class="sc-kOHTFB bQBvSv"])[2]');
    giftMessageInput: By = By.css('[id="Gift message"]');
    giftDeliveryDateBtn: By = By.css('.DayPickerInput');
    nameOnTheCardInput: By = By.css('[id="Name on card"]');
    manageSubscriptionBtn: By = By.xpath('(//button[@class="SettingsListItem-module__item-button"])[3]');
    manageSubscriptionWholeForm: By = By.css('[class="SettingsNav-module__main-content"]');
    subscribeBtn: By = By.css('[class="sc-fPXMVe dgCnYr"]');
    alreadySubscribedWholePage: By = By.id('#customer-app');
    backToHomePage: By = By.css('[class="sc-esYiGF ftMAqQ custom-css-checkout-logo-image"]');
    manageAvailablePlansBtn: By = By.css('[class="AvailablePlansList-module__available-plan-button"]');
    manageAvailablePlanCancelBtn: By = By.css('[class="sc-fPXMVe gSKHKp"]');
    cancelSubscriptionBtn: By = By.css('[class="sc-fPXMVe dmHWTM"]');
    cancelSubscriptionBackBtn: By = By.css('[class="sc-fPXMVe gSKHKp"]');
    cancelSubscriptionCancelBtn: By = By.css('[class="sc-fPXMVe gSKHKp"]');
    escapeCancelSubscriptionWindowBtn: By = By.css('[class="sc-fPXMVe kPRTFM"]');

    notificationsBtn: By = By.xpath('(//a[@class="SettingsNav-module__nav-link"])[2]');
    notificationWholeForm: By = By.css('[class="NotificationsSettingsForm-module__settings-form"]');
    notificationNewVideoCheckBox: By = By.xpath('(//label[@class="sc-jXbUNg kxQowY"])[1]');
    notificationNewsletterCheckBox: By = By.xpath('(//label[@class="sc-jXbUNg kxQowY"])[2]');
    notificationUnsubscribeCheckBox: By = By.xpath('(//label[@class="sc-jXbUNg kxQowY"])[3]');
    notificationsSaveBtn: By = By.css('[class="sc-fPXMVe dgCnYr"]');
    notificationsCancelBtn: By = By.css('[class="sc-fPXMVe gGXiqQ"]');

    manageDevicesBtn: By = By.css('[class="sc-fPXMVe jThJav Account-module__manage-devices-button"]');
    logOutOtherDevicesConfirmBtn: By = By.css('[class="sc-fPXMVe gXDFjK"]');
    logOutOtherDevicesCancelBtn: By = By.css('[class="sc-fPXMVe gSKHKp"]');

    //sign up window:
    signUpEmailBarInput: By = By.xpath('(//input[@class="sc-fjvvzt bTFfyr"])[1]');
    signUpErrorEmailMsg: By = By.xpath('(//div[@class="sc-fBWQRz ifsgYY"])[1]');
    signUpConfirmEmailBarInput: By = By.xpath('(//input[@class="sc-fjvvzt bTFfyr"])[2]');
    signUpErrorConfirmEmailMsg: By = By.xpath('(//div[@class="sc-fBWQRz ifsgYY"])[2]');
    signUpPasswordBarInput: By = By.xpath('(//input[@class="sc-fjvvzt bTFfyr"])[3]');
    signUpErrorPasswordMsg: By = By.xpath('(//div[@class="sc-fBWQRz ifsgYY"])[3]');
    agreeToNewsletterCheck: By = By.id('newsletter');
    //payment:
    cardTab: By = By.id('card-tab');
    googlePayTab: By = By.id('google_pay-tab');
    cardNumberInput: By = By.id('Field-numberInput');
    expirationDateInput: By = By.id('Field-expiryInput');
    cvcInput: By = By.id('Field-cvcInput');
    countryInput: By = By.id('Field-countryInput');
    zipCodeInput: By = By.id('Field-postalCodeInput');
    promoCodeInput: By = By.css('[id="Promo code"]');
    startSubscriptionBtn: By = By.css('[class="sc-hknOHE cmVYzD"]');
    //sign in window:
    signInEmailWholePage: By = By.id('login--box-container');
    signInEmailInput: By = By.id('signin-email-input');
    signInEmailSubmitBtn: By = By.id('signin-email-submit');
    errorEnterValidEmailMsg: By = By.xpath('//div[text()="Please enter a valid email."]');
    signInPasswordInput: By = By.id('signin-password-input');
    signInPasswordSubmitBtn: By = By.id('signin-password-submit');
    errorPleaseEnterPasswordMsg: By = By.xpath('//div[text()="Please enter a password."]');
    errorEnterPasswordLongerThan5Msg: By = By.xpath('//div[text()="Please enter a password longer than 5 characters."]');
    errorWrongEmailOrPasswordResetMsg: By = By.css('[class="flash-error-container"]');
    resetYourPasswordLnk: By = By.xpath('(//a[@class="signin-flow__reset-password"])[1]');
    //reset password window:
    resetPasswordWholePage: By = By.id('forgot-password-form');
    resetPasswordEmailInput: By = By.id('email');
    resetPasswordBtn: By = By.xpath('//input[@class="btn btn-teal btn--fill btn--brandon signin-flow__reset-password-btn"]');
    checkYourEmailConfirmationPage: By = By.xpath('(//p[@class="text text-center login-black"])[1]');
    needHelpLnk: By = By.css('.login-branded-link');
    needSignInHelpWholePage: By = By.css('.l-help');

    //in help window search bar:
    helpSearchBarInput: By = By.css('[class = "help-input border-tw"]');

    //all films window
    allFilmsResults: By = By.css('.gridview__contain');
    allFilmsFilterBtn: By = By.css('[class=" criterion-channel__filters-button criterion-channel__filters-button--left"]');
    allFilmsSortBtn: By = By.css('[class=" criterion-channel__filters-button criterion-channel__filters-button--right"]');
    //search window
    closeSearchBtn: By = By.css('[class="sc-cwHptR bxPfCg Search-module__close-button"]');
    allResultsTab: By = By.xpath('(//span[@class="sc-eqUAAy goeJXN"])[1]');
    videoResultsTab: By = By.xpath('(//span[@class="sc-eqUAAy goeJXN"])[2]');
    collectionsResultsTab: By = By.xpath('(//span[@class="sc-eqUAAy goeJXN"])[3]');
    resultsCards: By = By.css('[class="SearchResults-module__search-results"]');
    cardContainerSolaris: By = By.xpath('(//div[@class="browse-image-container aspect_ratio_16_9"])[19]');
    hoverPopUpValidation: By = By.xpath('(//div[@class="transparent tooltip-description site-font-primary-family"])[19]');
    loadMoreResults: By = By.xpath('(//span[@class="sc-eqUAAy goeJXN"])[4]');
    //click on card
    cardPlayWindowWholePage: By = By.css('[class="site-background-color site-font-primary-color margin-bottom-large collection-movie top-container"]');
    cardPlayFilm: By = By.xpath('(//div[@class="browse-image-container aspect_ratio_16_9"])[1]');
    watchBtn: By = By.css('[class="btn btn-black custom-btn-action-primary margin-right-medium"]');
    clickTrailerBtn: By = By.css('[class="btn btn-black custom-btn-action-trailer margin-bottom-small margin-right-medium"]');
    shareBtn: By = By.css('[class="btn btn-black custom-btn-action-share margin-bottom-small margin-right-medium "]');

    //playing film window
    filmPlayer: By = By.id('vp-preview');
    chapterLine: By = By.css('[class="ChapterSegment_module_chapter__d4d891b5"]');
    pauseAndPlayBtn: By = By.css('[class="Button_module_button__0563da21 shared_module_focusable__63d26f6d Button_module_customColor__0563da21 Button_module_md__0563da21 Button_module_icon__0563da21 Tooltip_module_tooltipContainer__29db0cdb exclude-global-button-styles PlayButton_module_playButton__fc6bec57 shared_module_focusable__63d26f6d"]');
    volumeControlBtn: By = By.css('[class="VolumeControl_module_volumeControlContainer__05432d27"]');

    settingsBtn: By = By.css('[class="Button_module_button__0563da21 shared_module_focusable__63d26f6d Button_module_customColor__0563da21 Button_module_xs__0563da21 Button_module_icon__0563da21 Tooltip_module_tooltipContainer__29db0cdb exclude-global-button-styles ControlBarButton_module_controlBarButton__88a67ab4 shared_module_focusable__63d26f6d vp-prefs PrefsButton_module_prefsButton__61ec289e"]');
    qualityBtn: By = By.xpath('(//span[@class="Text_module_text__dcc7d59a Text_module_md__dcc7d59a Text_module_normal__dcc7d59a Text_module_white__dcc7d59a MenuOptionButton_module_label__20852ebc"])[1]');
    speedBtn: By = By.xpath('(//span[@class="Text_module_text__dcc7d59a Text_module_md__dcc7d59a Text_module_normal__dcc7d59a Text_module_white__dcc7d59a MenuOptionButton_module_label__20852ebc"])[2]');

    pictureInPictureBtn: By = By.css('[class="Button_module_button__0563da21 shared_module_focusable__63d26f6d Button_module_customColor__0563da21 Button_module_xs__0563da21 Button_module_icon__0563da21 Tooltip_module_tooltipContainer__29db0cdb exclude-global-button-styles ControlBarButton_module_controlBarButton__88a67ab4 shared_module_focusable__63d26f6d pip"]');

    fullScreenBtn: By = By.css('[class="Button_module_button__0563da21 shared_module_focusable__63d26f6d Button_module_customColor__0563da21 Button_module_xs__0563da21 Button_module_icon__0563da21 Tooltip_module_tooltipContainer__29db0cdb exclude-global-button-styles ControlBarButton_module_controlBarButton__88a67ab4 shared_module_focusable__63d26f6d fullscreen FullscreenButton_module_fullscreen__e0e92a4f"]');

    myListAddBtn: By = By.css('[class="my-list btn btn-transparent custom-btn-action-my-list icon margin-bottom-small margin-right-small icon-watchlist-add"]');
    myListRemoveBtn: By = By.css('[class="my-list btn btn-transparent custom-btn-action-my-list icon margin-bottom-small margin-right-small icon-watchlist-remove"]');

    constructor() {
        super({ url: 'https://www.criterionchannel.com/' });
    };

    async scroll1() {
        const frame = await this.driver.findElement(this.footerOfTheHomePage);
        await this.driver.actions()
            .move({ origin: frame })
            .perform();
    };

    async scroll2() {
        const frame = await this.driver.findElement(this.headerOfPage);
        await this.driver.actions()
            .move({ origin: frame })
            .perform();
    };

    async scroll3() {
        const frame = await this.driver.findElement(this.loadMoreResults);
        await this.driver.actions()
            .move({ origin: frame })
            .perform();
    };

    async canHover() {
        const hover = this.driver.actions();
        const startElement = await this.getElement(this.cardContainerSolaris);
        await this.actionWiggle(hover, startElement, 100);
        await hover.perform();
    };

    async canHover2() {
        const hover = this.driver.actions();
        const startElement = await this.getElement(this.cardPlayFilm);
        await this.actionWiggle(hover, startElement, 100);
        await hover.perform();
    };
};
import { By, } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class theCriterionChannel extends BasePage {

    //home page links
    homePageLnk: By = By.css('.logo');
    nowPlayingLnk: By = By.css('[class="browse-link site-font-primary-family head site-link-header-color"]');
    allFilmsLnk: By = By.css('[class="custom-nav-all-films site-font-primary-family head site-link-header-color"]');
    criterionComLnk: By = By.css('[class="custom-nav-criterion-com site-font-primary-family head site-link-header-color"]');
    signUpLnk: By = By.css('[class = "flex-item site-link-header-color site-font-primary-family head subscribe-link user-action-link"]');
    signInLnk: By = By.css('[class="flex-item user-action-link head site-link-header-color  site-font-primary-family"]');
    curatedCollectionsLnk: By = By.xpath('(//div[@class="icon--container margin-bottom-medium flex--container"])[1]');
    exclusivePremieresLnk: By = By.xpath('(//div[@class="icon--container margin-bottom-medium flex--container"])[2]');
    criterionExtrasLnk: By = By.xpath('(//div[@class="icon--container margin-bottom-medium flex--container"])[3]');
    searchLnk: By = By.id('search-nav-toggle');
    //main search bar window:
    mainSearchBarInput: By = By.css('[class = "SearchForm-module__search-input custom-css-search-input site-font-secondary-color"]');
    mainSearchBarBtn: By = By.css('[class = "SearchForm-module__search-icon"]');
    closeSearchBtn: By = By.css('[class = "sc-cwHptR bxPfCg Search-module__close-button"]');
    resultsAllFilmsLnk: By = By.xpath('(//span[@class="sc-eqUAAy goeJXN"])[1]');
    resultsVideosLnk: By = By.xpath('(//span[@class="sc-eqUAAy goeJXN"])[2]');
    resultsCollectionsLnk: By = By.xpath('(//span[@class="sc-eqUAAy goeJXN"])[3]');
    loadMoreResults: By = By.xpath('(//span[@class="sc-eqUAAy goeJXN"])[4]');


    //logged in account drop down menu:
    accountDropMenuLnk: By = By.css('.add-hover');
    accountSettingsLnk: By = By.xpath('(//a[@class="is-block text dark block padding-medium"])[1]');
    purchaseGiftLnk: By = By.xpath('(//a[@class="is-block text dark block padding-medium"])[2]');
    logOutLnk: By = By.css('[class="is-block text dark block padding-medium text-left border-none border-radius-0 fill-width cursor-pointer-important"]');
    helpLnk: By = By.css('[class = "flex-item user-action-link head site-link-header-color  site-font-primary-family"]');
    //account settings: Account| Billing & subscription | Notification
    accountBtn: By = By.css('[class="SettingsNav-module__nav-link SettingsNav-module__nav-link-active"]');
    nameBtn: By = By.xpath('(//button[@class="SettingsListItem-module__item-button"])[1]');
    editNmeBarInput: By = By.id('35xtip');
    editSaveBtn: By = By.css('[class="sc-fPXMVe dgCnYr AccountSettingsForm-module__save-button"]');
    errorNameMsg: By = By.xpath('//span[text()="Name is required"]');
    backToAccountBtn: By = By.css('[class="sc-fPXMVe kPRTFM SettingsFormHeader-module__back-button"]');
    emailBtn: By = By.xpath('(//button[@class="SettingsListItem-module__item-button"])[2]');
    emailBarInput: By = By.id('vis900');
    passwordBtn: By = By.xpath('(//button[@class="SettingsListItem-module__item-button"])[3]');
    passwordBarInput: By = By.css('[id="96hp77"]');
    passwordConfirmBarInput: By = By.css('[id="7ucpk5"]');
    errorPasswordMsg1: By = By.xpath('//span[text()="Password of at least 8 characters is required"]');
    errorPasswordMsg2: By = By.xpath('//span[text()="Passwords must match"]');

    //in help window search bar:
    helpSearchBarInput: By = By.css('[class = "help-input border-tw"]');

    constructor() {
        super({ url: 'https://www.criterionchannel.com/' });
    };
};
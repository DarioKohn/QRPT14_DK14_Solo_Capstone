import { By, } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class theCriterionChannel extends BasePage {

    homePageLnk: By = By.css('.logo');
    signUpLnk: By = By.css('[class = "flex-item site-link-header-color site-font-primary-family head subscribe-link user-action-link"]');
    searchLnk: By = By.id('search-nav-toggle');
    mainSearchBarInput: By = By.css('[class = "SearchForm-module__search-input custom-css-search-input site-font-secondary-color"]');
    mainSearchBarBtn: By = By.css('[class = "SearchForm-module__search-icon"]');
    closeSearchBtn: By = By.css('[class = "sc-cwHptR bxPfCg Search-module__close-button"]');
    helpLnk: By = By.css('[class = "flex-item user-action-link head site-link-header-color  site-font-primary-family"]');
    helpSearchBar: By = By.css('[class = "help-input border-tw"]');

    constructor () {
        super({url: 'https://www.criterionchannel.com/'});
    };
};
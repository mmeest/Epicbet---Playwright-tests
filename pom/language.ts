import { Page, test, expect } from '@playwright/test';

export class Language{
    private page: Page;

    private selectors = {
        languageSelectorDropdown: '[data-testid="language-button"]',
        languageSelectionEnglish: '[data-testkey="en"]',
        languageSelectionEesti: '[data-testkey="et"]',
        languageSelectionSuomi: '[data-testkey="fi"]',
        languageSelectionEspanol: '[data-testkey="es"]',
        languageSelectionIslenska: '[data-testkey="is"]'
    }

    constructor(page: Page){
        this.page = page;    
    }

    async selectLanguageToEnglish(): Promise<void> {
        console.log('Setting page language to: English...');
        await this.page.getByTestId('language-button').click();
        await this.page.locator(this.selectors.languageSelectionEnglish).click();
        await expect(this.page).toHaveURL("https://epicbet.com/en/sports/");
        //await expect(this.page).toHaveTitle("Epicbet - Your favorite sportsbook.");
        console.log('Page trasnlation: English selected')
    }

    async selectLanguageToEstonia(): Promise<void> {
        console.log('Setting page language to: Eesti...');
        await this.page.getByTestId('language-button').click();
        await this.page.locator(this.selectors.languageSelectionEesti).click();
        await expect(this.page).toHaveURL("https://epicbet.com/et/sport/");  
        //await expect(this.page).toHaveTitle("Epicbet - Sinu lemmik kihlveokontor.");
        console.log('Page translation: Eesti selected')
    }

    async selectLanguageToFinnish(): Promise<void> {
        console.log('Setting page language to: Suomi...');
        await this.page.getByTestId('language-button').click();
        await this.page.locator(this.selectors.languageSelectionSuomi).click();
        await expect(this.page).toHaveURL("https://epicbet.com/fi/vedonlyonti/");  
        //await expect(this.page).toHaveTitle("Epicbet - Vedonlyönti");
        console.log('Page translation: Suomi selected')
    }

    async selectLanguageToEspanol(): Promise<void> {
        console.log('Setting page language to: Español...');
        await this.page.getByTestId('language-button').click();
        await this.page.locator(this.selectors.languageSelectionEspanol).click();
        await expect(this.page).toHaveURL("https://epicbet.com/es/deportes/");  
        //await expect(this.page).toHaveTitle("Epicbet - Casa de Apuestas");
        console.log('Page translation: Español selected')
    }

    async selectLanguageToIslandic(): Promise<void> {
        console.log('Setting page language to: Icelandic...');
        await this.page.getByTestId('language-button').click();
        await this.page.locator(this.selectors.languageSelectionIslenska).click();
        await expect(this.page).toHaveURL("https://epicbet.com/is/ithrottir/");  
        //await expect(this.page).toHaveTitle("Epicbet - Sportsbook");
        console.log('Page translation: Icelandic selected')
    }
}
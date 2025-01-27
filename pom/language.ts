import { Page, expect } from '@playwright/test';

export class Language {
    private page: Page;

    private selectors = {
        en: '[data-testkey="en"]',
        et: '[data-testkey="et"]',
        fi: '[data-testkey="fi"]',
        es: '[data-testkey="es"]',
        is: '[data-testkey="is"]'
    };

    private urlsAndTitles = {
        en: {
            language: "English",
            url: "https://epicbet.com/en/sports/",
            title: "Epicbet - Your favorite sportsbook."
        },
        et: {
            language: "Eesti",
            url: "https://epicbet.com/et/sport/",
            title: "Epicbet - Sinu lemmik kihlveokontor."
        },
        fi: {
            language: "Suomi",
            url: "https://epicbet.com/fi/vedonlyonti/",
            title: "Epicbet - Vedonlyönti"
        },
        es: {
            language: "Espanol",
            url: "https://epicbet.com/es/deportes/",
            title: "Epicbet - Casa de Apuestas"
        },
        is: {
            language: "Islenska",
            url: "https://epicbet.com/is/ithrottir/",
            title: "Epicbet - Sportsbook"
        }
    };

    constructor(page: Page) {
        this.page = page;
    }

    private async selectLanguage(languageKey: keyof typeof this.urlsAndTitles): Promise<void> {
        const { language, url, title } = this.urlsAndTitles[languageKey];

        console.log(`Setting page language to: ${language}...`);
        await this.page.getByTestId('language-button').click();
        await this.page.locator(this.selectors[languageKey]).click();

        await expect(this.page).toHaveURL(url);
        await expect(this.page).toHaveTitle(title);

        console.log(`Page translation: ${language} selected`);
    }

    async selectLanguageToEnglish(): Promise<void> {
        await this.selectLanguage('en');
    }

    async selectLanguageToEstonia(): Promise<void> {
        await this.selectLanguage('et');
    }

    async selectLanguageToFinnish(): Promise<void> {
        await this.selectLanguage('fi');
    }

    async selectLanguageToEspanol(): Promise<void> {
        await this.selectLanguage('es');
    }

    async selectLanguageToIslandic(): Promise<void> {
        await this.selectLanguage('is');
    }
}

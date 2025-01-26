import { test, expect, webkit, Browser, Page } from '@playwright/test';
import { NavigationMenu } from '../pom/navigation';
import { FooterMenu } from '../pom/footer';
import { Language } from '../pom/language';

test.describe('Epicbet Navigation Tests', () => {
  let browser: Browser;
  let page: Page;
  let footerMenu: FooterMenu;
  let language: Language;
  // test.setTimeout(60000);  // To set longer time limit

  test.beforeAll(async () => {
    browser = await webkit.launch(); // starting webkit browser
    page = await browser.newPage(); // creating new page
    footerMenu = new FooterMenu(page); 
    language = new Language(page);
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://epicbet.com/en/sports/');
    await page.waitForLoadState('load');
  });

  test('User can navigate between pages', async ({ page }) => {
    const navigationMenu = new NavigationMenu(page);

    // Navigate to different sections
    await navigationMenu.navigateToCasino();
    await navigationMenu.navigateToSports();
    await navigationMenu.navigateToLiveCasino();
    await navigationMenu.navigateToRoadmap();
    await navigationMenu.navigateToPromotions();

    // Return to main page
    await navigationMenu.navigateToMainPage();
  });

  test('User can navigate links on page footer', async ({ page }) => {
    const footerMenu = new FooterMenu(page);  
    await footerMenu.scrollToBottom();

    // PLATFORM  
    await footerMenu.navigateToAboutUs();
    await footerMenu.navigateToPartners();
    await footerMenu.navigateToRoadmap();
    //await page.goBack();

    // SPORTS
    await footerMenu.navigateToSportsbook();
    await footerMenu.navigateToLiveBet();
    await footerMenu.navigateToSportsRules();
    await footerMenu.navigateToSportsBonusRules();

    // CASINO
    await footerMenu.navigateToCasinoLobby();
    await footerMenu.navigateToLiveCasinoLobby();
    await footerMenu.navigateToCasinoBonusRules();

    // PROMOTIONS
    await footerMenu.navigateToSportsWelcomeBonus();
    await footerMenu.navigateToCasinoWelcomeBonus();
    await footerMenu.navigateToCasinoCashback();
    await footerMenu.navigateToCasinoRakeback();

    // HELP
    await footerMenu.navigateToContactUs();
    //await footerMenu.navigateToFAQ();
    await footerMenu.navigateToTermsAndConditions();
    await footerMenu.navigateToPrivacyPolicy();
  });

  test('User can change language', async ({ page }) => {
    const language = new Language(page);

    await language.selectLanguageToEstonia();
    await language.selectLanguageToFinnish();
    await language.selectLanguageToEspanol();
    await language.selectLanguageToIslandic();
    await language.selectLanguageToEnglish();
  });
});
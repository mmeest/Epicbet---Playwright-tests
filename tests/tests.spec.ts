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

    // Navigate to links on main menu
    await navigationMenu.navigateTo('casino');
    await navigationMenu.navigateTo('sports');
    await navigationMenu.navigateTo('liveCasino');
    await navigationMenu.navigateTo('roadmap');
    await navigationMenu.navigateTo('promotions');

    // Return to main page
    await navigationMenu.navigateTo('home');
  });

  test('User can navigate links on page footer', async ({ page }) => {
    const footerMenu = new FooterMenu(page);  
    await footerMenu.scrollToBottom();
  
    // PLATFORM  
    await footerMenu.navigateTo('aboutUs');
    await footerMenu.navigateTo('partners');
    await footerMenu.navigateTo('roadmap');
    // await page.goBack();
  
    // SPORTS
    await footerMenu.navigateTo('sportsbook');
    await footerMenu.navigateTo('liveBet');
    await footerMenu.navigateTo('sportsRules');
    await footerMenu.navigateTo('sportsBonusRules');
  
    // CASINO
    await footerMenu.navigateTo('casinoLobby');
    await footerMenu.navigateTo('liveCasinoLobby');
    await footerMenu.navigateTo('casinoBonusRules');
  
    // PROMOTIONS
    await footerMenu.navigateTo('sportsWelcomeBonus');
    await footerMenu.navigateTo('casinoWelcomeBonus');
    await footerMenu.navigateTo('casinoCashback');
    await footerMenu.navigateTo('casinoRakeback');
  
    // HELP
    await footerMenu.navigateTo('contactUs');
    // await footerMenu.navigateTo('faq');
    await footerMenu.navigateTo('termsAndConditions');
    await footerMenu.navigateTo('privacyPolicy');
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
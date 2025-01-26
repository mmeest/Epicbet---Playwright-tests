import { Page, expect } from '@playwright/test';

export class NavigationMenu {
  private page: Page;

  private selectors = {
    menuButton: '._1hmm2mz5',
    sportButton: '[data-testid="sport-button"]',
    casinoButton: '[data-testid="casino-button"]',
    liveCasinoButton: '[data-testid="live-casino-button"]',
    roadmapButton: '[data-testid="roadmap-button"]',
    offersLink: 'role=link[name="Promotions"]',
    languageButton: '[data-testid="language-button"]',
    loginButton: '[data-testid="login-button"]',
    closeModalButton: '[data-testid="close-modal"]',
    signupButton: '[data-testid="signup-button"]',
  }
  
  constructor(page: Page){
    this.page = page;    
  }

  // Navigation Methods
  async navigateToSports(): Promise<void> {
    console.log('Navigating to Sports page...');
    await this.page.locator(this.selectors.sportButton).click();
    await expect(this.page).toHaveURL(/.*sports/);
    await expect(this.page).toHaveTitle("Epicbet - Your favorite sportsbook.");
    console.log('Navigated to Sports page');
  }

  async navigateToCasino(): Promise<void> {
    console.log('Navigating to Casino...');
    await this.page.waitForSelector(this.selectors.casinoButton, { state: 'visible' });
    await this.page.locator(this.selectors.casinoButton).click();
    await expect(this.page).toHaveURL(/.*casino/);
    await expect(this.page).toHaveTitle("Epicbet - Casino");
    console.log('Navigated to Casino');
  }

  async navigateToLiveCasino(): Promise<void> {
    console.log('Navigating to Live Casino...');
    await this.page.locator(this.selectors.liveCasinoButton).click();
    await expect(this.page).toHaveURL(/.*live-lobby/);
    await expect(this.page).toHaveTitle("Epicbet - Live Casino");
    console.log('Navigated to Live Casino');
  }

  async navigateToRoadmap(): Promise<void> {
    console.log('Navigating to Roadmap...');
    await this.page.locator(this.selectors.roadmapButton).click();
    await expect(this.page).toHaveURL(/.*roadmap/);
    await expect(this.page).toHaveTitle(
      "Epicbet - Epicbet - Check our roadmap of the new features coming."
      )
    console.log('Navigated to Live Casino');
  }

  async navigateToPromotions(): Promise<void> {
    console.log('Navigating to Promotions...');
    await this.page.locator(this.selectors.offersLink).click();
    await expect(this.page).toHaveURL(/.*user\/account\/promotions\//);
    await expect(this.page).toHaveTitle("Epicbet - My account");
    console.log('Navigated to Promotions');
  }

  async navigateToMainPage(): Promise<void> {
    console.log('Navigating to Home page...');
    await this.page.locator(this.selectors.menuButton).click();
    await expect(this.page).toHaveURL(/.*sports/);
    await expect(this.page).toHaveTitle("Epicbet - Your favorite sportsbook.");
    console.log('Navigated to Home page');
  }

  async openPromotions(): Promise<void> {
    await this.page.locator(this.selectors.offersLink).click();
    await expect(this.page).toHaveURL(/.*promotions/);
  }

  async openLanguageSelector(): Promise<void> {
    await this.page.locator(this.selectors.languageButton).click();
    // Add further assertions or interactions for language selection if needed
  }

  async login(): Promise<void> {
    await this.page.locator(this.selectors.loginButton).click();
    // Add assertions to check if login modal or page is visible
  }

  async closeModal(): Promise<void> {
    await this.page.locator(this.selectors.closeModalButton).click();
    // Add validation to confirm the modal is closed
  }
}

  
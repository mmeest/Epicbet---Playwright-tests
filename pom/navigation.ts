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
  };

  private destinations: Record<string, { selector: string; url: RegExp; title: string }> = {
    sports: {
      selector: this.selectors.sportButton,
      url: /.*sports/,
      title: "Epicbet - Your favorite sportsbook.",
    },
    casino: {
      selector: this.selectors.casinoButton,
      url: /.*casino/,
      title: "Epicbet - Casino",
    },
    liveCasino: {
      selector: this.selectors.liveCasinoButton,
      url: /.*live-lobby/,
      title: "Epicbet - Live Casino",
    },
    roadmap: {
      selector: this.selectors.roadmapButton,
      url: /.*roadmap/,
      title: "Epicbet - Epicbet - Check our roadmap of the new features coming.",
    },
    promotions: {
      selector: this.selectors.offersLink,
      url: /.*user\/account\/promotions\//,
      title: "Epicbet - My account",
    },
    home: {
      selector: this.selectors.menuButton,
      url: /.*sports/,
      title: "Epicbet - Your favorite sportsbook.",
    },
  };

  constructor(page: Page) {
    this.page = page;
  }


  async navigateTo(key: keyof typeof this.destinations): Promise<void> {
    const destination = this.destinations[key];
    if (!destination) {
      throw new Error(`Destination '${key}' not found in destinations map.`);
    }

    console.log(`Navigating to ${key}...`);
    await this.page.locator(destination.selector).click();
    await expect(this.page).toHaveURL(destination.url);
    // await expect(this.page).toHaveTitle(destination.title);
    console.log(`Navigated to ${key}`);
  }
}

import { Page, expect } from '@playwright/test';

export class FooterMenu {
  private page: Page;

  private selectors = {
    //cookies: 'role=button[name="Allow all"]',
    cookies: '[id="CybotCookiebotDialogBodyButtonsWrapper"]',

    // PLATFORM
    aboutUsLink: 'role=link[name="About Us"]',
    partnersLink: 'role=link[name="Partners"]',
    roadmapLink: '[data-testid="roadmap-button"]',

    // SPORTS
    sportsbookLink: 'role=link[name="Sportsbook"]',
    liveBetLink: 'role=link[name="Live bet"]',
    sporsRulesLink: 'role=link[name="Sports Rules"]',
    sportsBonusRulesLink: 'role=link[name="Sports Bonus Rules"]',

    // CASINO
    casinoLobbyLink: 'role=link[name="Casino Lobby"]',
    liveCasinoLobbyLink: 'role=link[name="Live Casino Lobby"]',
    casinoBonusRulesLink: 'role=link[name="Casino Bonus Rules"]',

    // PROMOTIONS
    sportsWelcomeBonusLink: 'role=link[name="Sports Welcome Bonus"]',
    casinoWelcomeBonusLink: 'role=link[name="Casino Welcome Bonus"]',
    casinoCashbackLink: 'role=link[name="Casino Cashback"]',
    casinoRakebackLink: 'role=link[name="Casino Rakeback"]',

    // HELP
    contactUsLink: 'role=link[name="Contact Us"]',
    faqLink: 'role=link[name="FAQ"]',
    termsAndConditionsLink: 'role=link[name="Terms And Conditions"]',
    privacyPolicyLink: 'role=link[name="Privacy Policy"]',
    cookiePolicyLink: 'role=link[name="Cookie Policy"]',
    sustainableGaming: 'role=link[name="Sustainable Gaming"]'
  }

  
  constructor(page: Page){
    this.page = page;    
  }

  // Getter for cookies button selector
  public getCookiesButton() {
    return this.page.locator(this.selectors.cookies);
  }

  async closeCookies(): Promise<void> {
    await this.page.locator(this.selectors.cookies).click();
  }

  // Navigation Methods
  async scrollToBottom(): Promise<void> {
    await this.page.locator('body').press('End');
  }

  async navigateToAboutUs(): Promise<void> {
    console.log('Navigating to: About Us...');    
    await this.page.locator(this.selectors.aboutUsLink).click();
    await expect(this.page).toHaveURL(/.*about-us/);
    await expect(this.page).toHaveTitle(
      "Epicbet - Epicbet - Read about your favorite sportsbook’s background."
    );
    console.log('Navigated to: About Us');
  }

  async navigateToPartners(): Promise<void> {
    console.log('Navigating to: Partners...');
    
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.locator(this.selectors.partnersLink).click(), 
    ]);

    await newPage.waitForLoadState(); // Wait for page to load
    await expect(newPage).toHaveURL(/.*partners/);
    await expect(newPage).toHaveTitle("Home - SISU Partners");
    console.log('Navigated to: Partners');

    await newPage.close(); // Close new window
    await this.page.bringToFront(); // Bring original page back to front
  }

  async navigateToRoadmap(): Promise<void> {
    console.log('Navigating to: Roadmap...');
    await this.page.locator(this.selectors.roadmapLink).click();
    await expect(this.page).toHaveURL(/.*roadmap/);
    await expect(this.page).toHaveTitle(
      "Epicbet - Epicbet - Check our roadmap of the new features coming."
    );
    console.log('Navigated to: Roadmap');
  }

  async navigateToSportsbook(): Promise<void> {
    console.log('Navigating to: Sportsbook...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.sportsbookLink).click();
    await expect(this.page).toHaveURL(/.*sports/);
    await expect(this.page).toHaveTitle("Epicbet - Your favorite sportsbook.");
    console.log('Navigated to: Sportsbook');
  }

  async navigateToLiveBet(): Promise<void> {
    console.log('Navigating to: Live bet...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.liveBetLink).click();
    await expect(this.page).toHaveURL(/.*live/);
    await expect(this.page).toHaveTitle("Epicbet - Your favorite sportsbook.");
    console.log('Navigated to: Live bet')
  }

  async navigateToSportsRules(): Promise<void> {
    console.log('Navigating to: Sports Rules...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.sporsRulesLink).click();
    await expect(this.page).toHaveURL(/.*sport-rules/);
    await expect(this.page).toHaveTitle("Epicbet - Epicbet - Sportsbook Rules");
    console.log('Navigated to: Sports Rules');
  }

  async navigateToSportsBonusRules(): Promise<void> {
    console.log('Navigating to: Sports Bonus Rules...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.sportsBonusRulesLink).click();
    await expect(this.page).toHaveURL(/.*sports-bonus-rules/);
    await expect(this.page).toHaveTitle("Epicbet - Epicbet - Sport Bonus Rules");
    console.log('Navigated to: Sports Bonus Rules');
  }

  async navigateToCasinoLobby(): Promise<void> {
    console.log('Navigating to: Casino Lobby...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.casinoLobbyLink).click();
    await expect(this.page).toHaveURL(/.*casino/);
    await expect(this.page).toHaveTitle("Epicbet - Casino");
    console.log('Navigated to: Casino Lobby');
  }

  async navigateToLiveCasinoLobby(): Promise<void> {
    console.log('Navigating to: Live Casino Lobby...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.liveCasinoLobbyLink).click();
    await expect(this.page).toHaveURL(/.*live-lobby/);
    await expect(this.page).toHaveTitle("Epicbet - Live Casino");
    console.log('Navigated to: Live Casino Lobby');
  }

  async navigateToCasinoBonusRules(): Promise<void> {
    console.log('Navigating to: Casino Bonus Rules...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.casinoBonusRulesLink).click();
    await expect(this.page).toHaveURL(/.*casino-bonus-rules/);
    await expect(this.page).toHaveTitle("Epicbet - Epicbet - Our Online Casino Bonus Rules");
    console.log('Navigated to: Casino Bonus Rules');
  }

  async navigateToSportsWelcomeBonus(): Promise<void> {
    console.log('Navigating to: Sports Welcome Bonus...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.sportsWelcomeBonusLink).click();
    await expect(this.page).toHaveURL(/.*welcome-bonus/);
    await expect(this.page).toHaveTitle("Epicbet - Join Epicbet team, get 100% Welcome Bonus today. Your favorite sportsbook.");
    console.log('Navigated to: Sports Welcome Bonus');
  }

  async navigateToCasinoWelcomeBonus(): Promise<void> {
    console.log('Navigating to: Casino Welcome Bonus...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.casinoWelcomeBonusLink).click();
    await expect(this.page).toHaveURL(/.*casino-welcome-page/);
    await expect(this.page).toHaveTitle(
      "Epicbet - Epicbet - €300 Welcome Bonus: Deposit Today and Get €300 in Bonus Funds"
    );
    console.log('Navigated to: Casino Welcome Bonus');
  }

  async navigateToCasinoCashback(): Promise<void> {
    console.log('Navigating to: Casino Cashback...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.casinoCashbackLink).click();
    await expect(this.page).toHaveURL(/.*casino-cashback/);
    await expect(this.page).toHaveTitle("Epicbet - Epicbet - Casino Cashback");
    console.log('Navigated to: Casino Cashback');
  }

  async navigateToCasinoRakeback(): Promise<void> {
    console.log('Navigating to: Casino Rakeback...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.casinoRakebackLink).click();
    await expect(this.page).toHaveURL(/.*casino-rakeback/);
    await expect(this.page).toHaveTitle("Epicbet - Epicbet - Casino Rakeback");
    console.log('Navigated to: Casino Rakeback');
  }

  async navigateToContactUs(): Promise<void> {
    console.log('Navigating to Contact Us...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.contactUsLink).click();
    await expect(this.page).toHaveURL(/.*contact-us/);
    //await expect(this.page).toToHaveTitle("Epicbet - Contact Us");
    console.log('Navigated to: Contact Us');
  }

  async navigateToFAQ(): Promise<void> {
    console.log('Navigating to: FAQ...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.faqLink).click();
    //await expect(this.page).toHaveURL(/.*faq/);
    await expect(this.page).toHaveTitle("Epicbet");
    console.log('Navigated to: FAQ');
  }

  async navigateToTermsAndConditions(): Promise<void> {
    console.log('Navigating to: Terms And Conditions...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.termsAndConditionsLink).click();
    await expect(this.page).toHaveURL(/.*terms/);
    await expect(this.page).toHaveTitle("Epicbet - Epicbet - Terms and Conditions");
    console.log('Navigated to: Terms And Conditions');
  }

  async navigateToPrivacyPolicy(): Promise<void> {
    console.log('Navigating to: Privacy Policy...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.privacyPolicyLink).click();
    await expect(this.page).toHaveURL(/.*privacy-policy/);
    await expect(this.page).toHaveTitle("Epicbet - Epicbet - Privacy Policy");
    console.log('Navigated to: Privacy Policy');
  }

  async navigateToCookiePolicy(): Promise<void> {
    console.log('Navigating to: Cookie Policy...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.cookiePolicyLink).click();
    await expect(this.page).toHaveURL(/.*cookie-policy/);
    await expect(this.page).toHaveTitle("Epicbet - Epicbet - Cookie Policy");
    console.log('Navigated to: Cookie Policy');
  }

  async navigateToSusteinableGaming(): Promise<void> {
    console.log('Navigating to: Susteinable Gaming...');
    await this.page.locator('body').press('End');
    await this.page.locator(this.selectors.sustainableGaming).click();
    await expect(this.page).toHaveURL(/.*susteinable-gaming/);
    await expect(this.page).toHaveTitle("Epicbet - Epicbet - Susteinable Gaming");
    console.log('Navigated to: Susteinable Gaming');
  }
}
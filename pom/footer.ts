import { Page, expect } from '@playwright/test';

export class FooterMenu {
  private page: Page;

  private selectors = {
    cookies: '[id="CybotCookiebotDialogBodyButtonsWrapper"]',
    aboutUsLink: 'role=link[name="About Us"]',
    partnersLink: 'role=link[name="Partners"]',
    roadmapLink: '[data-testid="roadmap-button"]',
    sportsbookLink: 'role=link[name="Sportsbook"]',
    liveBetLink: 'role=link[name="Live bet"]',
    sportsRulesLink: 'role=link[name="Sports Rules"]',
    sportsBonusRulesLink: 'role=link[name="Sports Bonus Rules"]',
    casinoLobbyLink: 'role=link[name="Casino Lobby"]',
    liveCasinoLobbyLink: 'role=link[name="Live Casino Lobby"]',
    casinoBonusRulesLink: 'role=link[name="Casino Bonus Rules"]',
    sportsWelcomeBonusLink: 'role=link[name="Sports Welcome Bonus"]',
    casinoWelcomeBonusLink: 'role=link[name="Casino Welcome Bonus"]',
    casinoCashbackLink: 'role=link[name="Casino Cashback"]',
    casinoRakebackLink: 'role=link[name="Casino Rakeback"]',
    contactUsLink: 'role=link[name="Contact Us"]',
    faqLink: 'role=link[name="FAQ"]',
    termsAndConditionsLink: 'role=link[name="Terms And Conditions"]',
    privacyPolicyLink: 'role=link[name="Privacy Policy"]',
    cookiePolicyLink: 'role=link[name="Cookie Policy"]',
    sustainableGamingLink: 'role=link[name="Sustainable Gaming"]'
  };

  private urlsAndTitles: Record<string, { selector: string; url: RegExp; title: string; newPage?: boolean }> = {
    aboutUs: {
      selector: this.selectors.aboutUsLink,
      url: /.*about-us/,
      title: "Epicbet - Epicbet - Read about your favorite sportsbook’s background."
    },
    partners: {
      selector: this.selectors.partnersLink,
      url: /.*partners/,
      title: "Home - SISU Partners",
      newPage: true       // opens in new page
    },
    roadmap: {
      selector: this.selectors.roadmapLink,
      url: /.*roadmap/,
      title: "Epicbet - Epicbet - Check our roadmap of the new features coming."
    },
    sportsbook: {
      selector: this.selectors.sportsbookLink,
      url: /.*sports/,
      title: "Epicbet - Your favorite sportsbook."
    },
	  liveBet: { 
      selector: this.selectors.liveBetLink,
      url: /.*live/, 
      title: "Epicbet - Your favorite sportsbook." 
    },
    sportsRules: { 
      selector: this.selectors.sportsRulesLink,
      url: /.*sport-rules/, 
      title: "Epicbet - Epicbet - Sportsbook Rules" 
    },
    sportsBonusRules: { 
      selector: this.selectors.sportsBonusRulesLink,
      url: /.*sports-bonus-rules/, 
      title: "Epicbet - Epicbet - Sport Bonus Rules" 
    },
    casinoLobby: { 
      selector: this.selectors.casinoLobbyLink,
      url: /.*casino/, 
      title: "Epicbet - Casino" 
    },
    liveCasinoLobby: { 
      selector: this.selectors.liveCasinoLobbyLink,
      url: /.*live-lobby/, 
      title: "Epicbet - Live Casino" 
    },
    casinoBonusRules: { 
      selector: this.selectors.casinoBonusRulesLink,
      url: /.*casino-bonus-rules/, 
      title: "Epicbet - Epicbet - Our Online Casino Bonus Rules" 
    },
    sportsWelcomeBonus: { 
      selector: this.selectors.sportsWelcomeBonusLink,
      url: /.*welcome-bonus/, 
      title: "Epicbet - Join Epicbet team, get 100% Welcome Bonus today. Your favorite sportsbook." 
    },
    casinoWelcomeBonus: { 
      selector: this.selectors.casinoWelcomeBonusLink,
      url: /.*casino-welcome-page/, 
      title: "Epicbet - Epicbet - €300 Welcome Bonus: Deposit Today and Get €300 in Bonus Funds" 
    },
    casinoCashback: { 
      selector: this.selectors.casinoCashbackLink,
      url: /.*casino-cashback/, 
      title: "Epicbet - Epicbet - Casino Cashback" 
    },
    casinoRakeback: { 
      selector: this.selectors.casinoRakebackLink,
      url: /.*casino-rakeback/, 
      title: "Epicbet - Epicbet - Casino Rakeback" 
    },
    contactUs: { 
      selector: this.selectors.contactUsLink,
      url: /.*contact-us/, 
      title: "Epicbet - Contact Us" 
    },
    faq: { 
      selector: this.selectors.faqLink,
      url: /.*faq/, 
      title: "Epicbet",
      newPage: true     // opens in new page
    },
    termsAndConditions: { 
      selector: this.selectors.termsAndConditionsLink,
      url: /.*terms/, 
      title: "Epicbet - Epicbet - Terms and Conditions" 
    },      
    privacyPolicy: { 
      selector: this.selectors.privacyPolicyLink,
      url: /.*privacy-policy/, 
      title: "Epicbet - Epicbet - Privacy Policy" 
    },
    cookiePolicy: { 
      selector: this.selectors.cookiePolicyLink,
      url: /.*cookie-policy/, 
      title: "Epicbet - Epicbet - Cookie Policy" 
    },
    sustainableGaming: { 
      selector: this.selectors.sustainableGamingLink,
      url: /.*susteinable-gaming/, 
      title: "Epicbet - Epicbet - Susteinable Gaming" 
    },
    
  }

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(linkKey: keyof typeof this.urlsAndTitles): Promise<void> {
    const { selector, url, title, newPage } = this.urlsAndTitles[linkKey];

    console.log(`Navigating to: ${linkKey}...`);
    if (newPage) {
      const [newPageContext] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.locator(selector).click()
      ]);
      await newPageContext.waitForLoadState();
      await expect(newPageContext).toHaveURL(url);
      await expect(newPageContext).toHaveTitle(title);
      console.log(`Navigated to new page: ${linkKey}`);
      await newPageContext.close();
      await this.page.bringToFront();
    } else {
      await this.page.locator(selector).click();
      await expect(this.page).toHaveURL(url);
      // await expect(this.page).toHaveTitle(title);
      console.log(`Navigated to: ${linkKey}`);
    }
  }

  async scrollToBottom(): Promise<void> {
    await this.page.locator('body').press('End');
  }
}

import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class RegisterElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getFirstNameField(): Locator {
    return this.page.locator('input[placeholder="First Name"]');
  }

  getLastNameField(): Locator {
    return this.page.locator('input[placeholder="Last Name"]');
  }

  getAdress(): Locator {
    return this.page.locator('textarea[class="form-control ng-pristine ng-untouched ng-valid"]');
  }

  getEmailField(): Locator {
    return this.page.locator('input[class="form-control ng-pristine ng-untouched ng-valid-email ng-invalid ng-invalid-required"]');
  }

  getPhoneField(): Locator {
    return this.page.locator('input[type="tel"]');
  }

  getGenderRadio(): Locator {
    return this.page.locator('input[type="radio"][value="Male"]');
  }

  getHobbiesCheckbox(): Locator {
    return this.page.locator('input[type="checkbox"][value="Movies"]');
  }

  getLanguageDropdown(): Locator {
    return this.page.locator('label[]');
  }

  getSelectCountry(): Locator {
    return this.page.locator('span[id="select2-country-container"][title="Netherlands"]')
  }

  getSkillsDropdown(): Locator {
    return this.page.locator('#Skills');
  }
  getYear(): Locator {
    return this.page.locator('select[placeholder="Year"]option[value="2010"]')
  }

  getFirstPassword(): Locator {
    return this.page.locator('input[class="form-control ng-pristine ng-invalid ng-invalid-required ng-valid-minlength ng-touched"]');
  }

  getSecondPassword(): Locator {
    return this.page.locator('input[id="secondpassword"]')
  }

  getSubmitButton(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  async selecionarSkill(skill: string): Promise<void> {
    const skillsDropdown = this.getSkillsDropdown();
    await skillsDropdown.selectOption({ label: skill });
  }
}

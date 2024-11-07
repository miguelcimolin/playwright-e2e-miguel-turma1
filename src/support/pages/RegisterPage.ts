import { Page, expect } from '@playwright/test';
import RegisterElements from '../elements/RegisterElements';
import BasePage from './BasePage';

export default class RegisterPage extends BasePage {
  readonly registerElements: RegisterElements;

  constructor(page: Page) {
    super(page);
    this.registerElements = new RegisterElements(page);
  }
  
  async preencherFormularioRegistro(
    firstName: string,
    lastName: string,
    adress: string,
    email: string,
    phone: string,
    password1: string,
    skill: string,
  ): Promise<void> {
    await this.registerElements.getFirstNameField().fill(firstName);
    await this.registerElements.getLastNameField().fill(lastName);
    await this.registerElements.getAdress().fill(adress);
    await this.registerElements.getEmailField().fill(email);
    await this.registerElements.getPhoneField().fill(phone);
    await this.registerElements.getGenderRadio().click();
    await this.registerElements.getHobbiesCheckbox().click();
    await this.registerElements.selecionarSkill(skill);
    //await this.registerElements.getLanguageDropdown().click();
    //await this.registerElements.getSelectCountry().click();
    //await this.registerElements.getYear().click();    
    await this.registerElements.getFirstPassword().fill(password1);
    await this.registerElements.getSecondPassword().fill(password1);
  }

  async submeterFormulario(): Promise<void> {
    await this.registerElements.getSubmitButton().click();
  }

  async validarMensagemSucesso(): Promise<void> {
    await expect(this.page).toHaveURL(/success/); 
  }
}
